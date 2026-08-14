import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/useReveal";

/**
 * Interactive engineering grid.
 *
 * A strict lattice of points, each displaced by a smooth wave field and pulled
 * toward the cursor. Neighbouring points are connected by straight segments, so
 * the whole thing reads as a structural mesh flexing under pressure — geometric
 * and precise, never organic.
 *
 * Dependency-free (~3kb), redraws each frame with no trails, and pauses when
 * off-screen or hidden.
 */

const CONFIG = {
  spacing: 46, // lattice pitch in css px
  waveAmp: 7, // ambient displacement
  waveSpeed: 0.00055,
  cursorRadius: 230,
  cursorPull: 30, // px of displacement at the cursor centre
  lineAlpha: 0.2,
  dotAlpha: 0.5,
};

const GridField = () => {
  const canvasRef = useRef(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let originX = 0;
    let originY = 0;
    let intensity = 1;
    let running = true;
    let rafId = 0;
    let start = performance.now();

    // Pointer is eased toward the raw cursor so the mesh never snaps.
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const spacing = width < 768 ? CONFIG.spacing * 1.35 : CONFIG.spacing;
      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
      originX = (width - (cols - 1) * spacing) / 2;
      originY = (height - (rows - 1) * spacing) / 2;
      canvas.dataset.spacing = String(spacing);
      intensity = width < 768 ? 0.55 : 1;
    };

    // Displaced position of lattice node (i, j) at time t.
    const nodeAt = (i, j, t, spacing) => {
      const baseX = originX + i * spacing;
      const baseY = originY + j * spacing;

      // Two crossing sine waves — smooth, strictly periodic, no noise.
      const phase = (baseX + baseY) * 0.006;
      let x = baseX + Math.sin(t * CONFIG.waveSpeed + phase) * CONFIG.waveAmp;
      let y = baseY + Math.cos(t * CONFIG.waveSpeed * 0.85 + phase * 1.3) * CONFIG.waveAmp;

      if (pointer.active) {
        const dx = pointer.x - baseX;
        const dy = pointer.y - baseY;
        const dist = Math.hypot(dx, dy);
        if (dist < CONFIG.cursorRadius && dist > 0.001) {
          // Smooth falloff, attracting nodes toward the cursor.
          const f = (1 - dist / CONFIG.cursorRadius) ** 2;
          x += (dx / dist) * f * CONFIG.cursorPull;
          y += (dy / dist) * f * CONFIG.cursorPull;
        }
      }
      return { x, y, baseX, baseY };
    };

    const draw = (now) => {
      const t = now - start;
      const spacing = Number(canvas.dataset.spacing) || CONFIG.spacing;

      ctx.clearRect(0, 0, width, height);

      // Ease the pointer toward its target for inertial feel.
      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;

      // Cache one row at a time so each node is computed once per frame.
      let prevRow = null;
      for (let j = 0; j < rows; j += 1) {
        const row = new Array(cols);
        for (let i = 0; i < cols; i += 1) row[i] = nodeAt(i, j, t, spacing);

        for (let i = 0; i < cols; i += 1) {
          const node = row[i];
          const stretch = Math.hypot(node.x - node.baseX, node.y - node.baseY);
          // Segments brighten as the mesh deforms → the cursor leaves a glow.
          const heat = Math.min(stretch / CONFIG.cursorPull, 1);

          ctx.strokeStyle = `rgba(${110 + heat * 60}, ${130 + heat * 40}, 255, ${
            (CONFIG.lineAlpha + heat * 0.5) * intensity
          })`;
          ctx.lineWidth = 1;

          if (i > 0) {
            ctx.beginPath();
            ctx.moveTo(row[i - 1].x, row[i - 1].y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          }
          if (prevRow) {
            ctx.beginPath();
            ctx.moveTo(prevRow[i].x, prevRow[i].y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          }

          // Node dots pop only where the mesh is under tension.
          if (heat > 0.12) {
            ctx.fillStyle = `rgba(255, 255, 255, ${heat * CONFIG.dotAlpha * intensity})`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 1 + heat * 1.8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        prevRow = row;
      }
    };

    const tick = (now) => {
      if (!running) return;
      draw(now);
      rafId = requestAnimationFrame(tick);
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
      if (!pointer.active) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
      pointer.active = true;
    };
    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();

    if (prefersReduced) {
      // Static, undisturbed lattice — no loop, no listeners beyond resize.
      const drawStatic = () => {
        resize();
        draw(0);
      };
      drawStatic();
      window.addEventListener("resize", drawStatic);
      return () => window.removeEventListener("resize", drawStatic);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) {
          if (!running) {
            running = true;
            start = performance.now() - 1;
            rafId = requestAnimationFrame(tick);
          }
        } else {
          running = false;
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    rafId = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ display: "block" }}
    />
  );
};

export default GridField;
