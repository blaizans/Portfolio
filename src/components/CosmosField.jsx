import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/useReveal";

/**
 * A planet at first light.
 *
 * A very large dark planet fills the lower part of the hero. Its sunlit rim
 * glows white-hot, then gold, orange and red, with a lit crescent of
 * atmosphere just inside the edge and a faint violet far out. The light is
 * brightest at one point and dies away along the limb. Above it: a nebula, a
 * faint Milky Way and stars that thin out toward the horizon.
 *
 * No lines, rings or lattices: only light, falloff and points. The cursor
 * moves the bright point and drifts the planet slightly. Dependency-free, and
 * paused when off-screen or hidden.
 */

const CONFIG = {
  stars: 280,
  starParallax: 16, // px the nearest star layer shifts against the cursor
  hotAngle: 6, // degrees from the top of the limb; positive is to the right
  hotSway: 5, // degrees the cursor can move the bright point
  hotAmbient: 3, // degrees of slow sway with no pointer
  planetDrift: { x: 10, y: 6 }, // px the cursor can move the planet
  riseDistance: 90, // px the planet climbs on load
  riseDuration: 2600,
  glowScale: 0.5, // the soft halo renders at half resolution
};

// How bright the limb is at an angle (degrees) from the hot spot: [delta, alpha].
const LIMB_PROFILE = [
  [-60, 0],
  [-36, 0.12],
  [-18, 0.45],
  [-6, 0.85],
  [0, 1],
  [12, 0.8],
  [30, 0.2],
  [50, 0],
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const easeOut = (p) => 1 - (1 - p) ** 3;
const toRad = (deg) => (deg * Math.PI) / 180;

// Small seeded generator so the sky is the same on every load and resize.
const seededRandom = (seed) => {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const makeStars = () => {
  const random = seededRandom(20261022);
  return Array.from({ length: CONFIG.stars }, () => {
    const size = 0.4 + random() ** 3 * 1.5;
    return {
      x: random(),
      y: random(),
      size,
      isBright: size > 1.25,
      phase: random() * Math.PI * 2,
      speed: 0.0004 + random() * 0.0012,
      layer: Math.floor(random() * 3),
    };
  });
};

/** A conic gradient whose alpha follows LIMB_PROFILE around `hotAngle`. */
const limbGradient = (ctx, x, y, hotAngle, rgb, strength) => {
  const gradient = ctx.createConicGradient(toRad(hotAngle - 180), x, y);
  gradient.addColorStop(0, `rgba(${rgb}, 0)`);
  for (const [delta, alpha] of LIMB_PROFILE) {
    gradient.addColorStop((delta + 90) / 360, `rgba(${rgb}, ${alpha * strength})`);
  }
  gradient.addColorStop(1, `rgba(${rgb}, 0)`);
  return gradient;
};

/** One soft elliptical cloud of light, stretched and rotated. */
const cloud = (ctx, x, y, radius, squash, rotation, rgb, alpha) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(1, squash);
  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
  gradient.addColorStop(0, `rgba(${rgb}, ${alpha})`);
  gradient.addColorStop(0.5, `rgba(${rgb}, ${alpha * 0.35})`);
  gradient.addColorStop(1, `rgba(${rgb}, 0)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(-radius, -radius, radius * 2, radius * 2);
  ctx.restore();
};

const CosmosField = () => {
  const canvasRef = useRef(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    const glowCanvas = document.createElement("canvas");
    const glowCtx = glowCanvas.getContext("2d");
    const skyCanvas = document.createElement("canvas");
    const skyCtx = skyCanvas.getContext("2d");
    if (!glowCtx || !skyCtx || typeof ctx.createConicGradient !== "function") return undefined;

    const stars = makeStars();
    let width = 0;
    let height = 0;
    let intensity = 1;
    let radius = 0; // planet radius
    let baseX = 0; // planet centre
    let baseY = 0;
    let unit = 0; // 1% of the glow's reference size, in px
    let horizonY = 0; // top of the limb
    let isReady = false;
    let running = true;
    let rafId = 0;
    let start = performance.now();

    // Pointer and drift are eased toward their targets so nothing ever snaps.
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };
    const drift = { x: 0, y: 0 };

    // Nebula and Milky Way never move, so they are painted once per resize.
    const paintSky = (dpr) => {
      skyCanvas.width = Math.round(width * dpr);
      skyCanvas.height = Math.round(height * dpr);
      skyCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      skyCtx.clearRect(0, 0, width, height);
      skyCtx.globalCompositeOperation = "lighter";
      const reach = Math.max(width, height);
      cloud(skyCtx, width * 0.16, height * 0.2, reach * 0.5, 0.7, -0.4, "100, 70, 215", 0.16);
      cloud(skyCtx, width * 0.86, height * 0.08, reach * 0.45, 0.6, 0.3, "50, 100, 225", 0.12);
      cloud(skyCtx, width * 0.5, height * 0.3, reach * 0.8, 0.16, -0.38, "175, 175, 255", 0.13);
      cloud(skyCtx, width * 0.55, height * 0.34, reach * 0.55, 0.08, -0.38, "255, 220, 200", 0.07);
      skyCtx.globalCompositeOperation = "source-over";
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      // A collapsed or hidden canvas has nothing to draw, and zero sizes would
      // turn the geometry below into NaN.
      isReady = width > 0 && height > 0;
      if (!isReady) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      glowCanvas.width = Math.round(width * CONFIG.glowScale);
      glowCanvas.height = Math.round(height * CONFIG.glowScale);
      paintSky(dpr);

      const isNarrow = width < 768;
      // The limb is placed against the first screen, not the whole tall page.
      const firstScreen = Math.min(height, window.innerHeight);
      intensity = isNarrow ? 0.85 : 1;
      radius = isNarrow ? Math.max(width * 1.15, firstScreen * 0.7) : width * 0.95;
      baseX = width * (isNarrow ? 0.55 : 0.5);
      unit = Math.max(Math.min(width, firstScreen), Math.max(width, firstScreen) * 0.55) / 100;

      // Sit the limb just below the text: 28px under the bottom of each block
      // marked `data-hero-avoid`, so the rim never crosses it. That puts the
      // planet as high as the copy allows, and the rest is planet.
      let required = 0;
      canvas
        .closest("section")
        ?.querySelectorAll("[data-hero-avoid]")
        .forEach((el) => {
          const box = el.getBoundingClientRect();
          const nearestX = clamp(baseX, box.left - rect.left, box.right - rect.left);
          const sideways = Math.abs(nearestX - baseX);
          const drop = radius - Math.sqrt(Math.max(0, radius * radius - sideways * sideways));
          required = Math.max(required, box.bottom - rect.top + 28 - drop);
        });
      horizonY = clamp(required || firstScreen * 0.7, 0, firstScreen * 0.96);
      baseY = horizonY + radius;
    };

    const drawStars = (t, isStill) => {
      ctx.drawImage(skyCanvas, 0, 0, width, height);
      for (const star of stars) {
        const shift = -drift.x * CONFIG.starParallax * ((star.layer + 1) / 3);
        const lift = -drift.y * CONFIG.starParallax * ((star.layer + 1) / 3);
        const x = star.x * width + shift;
        const y = star.y * height + lift;
        // Night above, dawn below: stars thin out toward the horizon.
        const sky = clamp(1 - (y / Math.max(horizonY, 1)) * 0.8, 0, 1);
        if (sky === 0) continue;
        const twinkle = isStill ? 0.8 : 0.55 + 0.45 * Math.sin(t * star.speed + star.phase);
        const alpha = 0.85 * sky * twinkle * intensity;
        if (star.isBright) {
          const halo = ctx.createRadialGradient(x, y, 0, x, y, star.size * 6);
          halo.addColorStop(0, `rgba(200, 215, 255, ${alpha * 0.35})`);
          halo.addColorStop(1, "rgba(200, 215, 255, 0)");
          ctx.fillStyle = halo;
          ctx.fillRect(x - star.size * 6, y - star.size * 6, star.size * 12, star.size * 12);
        }
        ctx.fillStyle = `rgba(240, 244, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawPlanet = (cx, cy) => {
      // Near-black body, a shade lighter at the limb so it reads as a sphere.
      const body = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius);
      body.addColorStop(0, "#010102");
      body.addColorStop(0.97, "#040406");
      body.addColorStop(1, "#0d0b12");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    // Soft atmosphere: a radial falloff from the limb, masked to one side.
    const drawAtmosphere = (cx, cy, hot, rise, t, isStill) => {
      const scale = CONFIG.glowScale;
      const breathe = isStill ? 1 : 0.94 + 0.06 * Math.sin(t * 0.0007);
      const strength = rise * breathe * intensity;

      glowCtx.setTransform(scale, 0, 0, scale, 0, 0);
      glowCtx.globalCompositeOperation = "source-over";
      glowCtx.clearRect(0, 0, width, height);

      // The gradient starts well inside the planet: that inner band is the lit
      // crescent of atmosphere just under the edge.
      const inner = radius - 14 * unit;
      const reach = 69 * unit;
      const at = (offset) => clamp((offset + 14 * unit) / reach, 0, 1);
      const halo = glowCtx.createRadialGradient(cx, cy, inner, cx, cy, radius + 55 * unit);
      halo.addColorStop(0, "rgba(255, 110, 40, 0)");
      halo.addColorStop(at(-8 * unit), "rgba(255, 110, 40, 0.1)");
      halo.addColorStop(at(-3 * unit), "rgba(255, 120, 45, 0.3)");
      halo.addColorStop(at(-0.8 * unit), "rgba(255, 150, 70, 0.6)");
      halo.addColorStop(at(0), "rgba(255, 205, 130, 0.95)");
      halo.addColorStop(at(1.5 * unit), "rgba(255, 125, 45, 0.85)");
      halo.addColorStop(at(5 * unit), "rgba(255, 70, 25, 0.5)");
      halo.addColorStop(at(14 * unit), "rgba(210, 50, 70, 0.22)");
      halo.addColorStop(at(32 * unit), "rgba(110, 60, 200, 0.08)");
      halo.addColorStop(1, "rgba(110, 60, 200, 0)");
      glowCtx.fillStyle = halo;
      glowCtx.fillRect(0, 0, width, height);

      glowCtx.globalCompositeOperation = "destination-in";
      glowCtx.fillStyle = limbGradient(glowCtx, cx, cy, hot, "0, 0, 0", 1);
      glowCtx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = strength;
      ctx.drawImage(glowCanvas, 0, 0, width, height);
      ctx.globalAlpha = 1;

      // The thin white-hot edge of the limb, sharp at full resolution.
      ctx.strokeStyle = limbGradient(ctx, cx, cy, hot, "255, 246, 230", strength);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Bloom where the sun is about to clear the limb, with a soft streak of
      // light across it.
      const bx = cx + Math.sin(toRad(hot)) * radius;
      const by = cy - Math.cos(toRad(hot)) * radius;
      const bloom = ctx.createRadialGradient(bx, by, 0, bx, by, 42 * unit);
      bloom.addColorStop(0, `rgba(255, 240, 210, ${0.6 * strength})`);
      bloom.addColorStop(0.16, `rgba(255, 175, 95, ${0.3 * strength})`);
      bloom.addColorStop(1, "rgba(255, 110, 50, 0)");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, width, height);

      cloud(ctx, bx, by, 60 * unit, 0.05, 0, "255, 225, 185", 0.55 * strength);
      cloud(ctx, bx, by, 95 * unit, 0.1, 0, "255, 150, 80", 0.16 * strength);

      ctx.globalCompositeOperation = "source-over";
    };

    const draw = (t, isStill) => {
      if (!isReady) return;
      ctx.clearRect(0, 0, width, height);

      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;

      const targetX = pointer.active ? clamp((pointer.x - width / 2) / (width / 2), -1, 1) : 0;
      const targetY = pointer.active ? clamp((pointer.y - height / 2) / (height / 2), -1, 1) : 0;
      drift.x += (targetX - drift.x) * 0.05;
      drift.y += (targetY - drift.y) * 0.05;

      const rise = isStill ? 1 : easeOut(clamp(t / CONFIG.riseDuration, 0, 1));
      const cx = baseX - drift.x * CONFIG.planetDrift.x;
      const cy = baseY + (1 - rise) * CONFIG.riseDistance - drift.y * CONFIG.planetDrift.y;
      const ambient = isStill ? 0 : Math.sin(t * 0.00018) * CONFIG.hotAmbient;
      const hot = CONFIG.hotAngle + ambient + drift.x * CONFIG.hotSway;

      drawStars(t, isStill);
      drawPlanet(cx, cy);
      drawAtmosphere(cx, cy, hot, rise, t, isStill);
    };

    const tick = (now) => {
      if (!running) return;
      draw(now - start, false);
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
    // Web fonts and the entrance animation change the text's position after
    // mount, so measure again once they have settled.
    let isActive = true;
    document.fonts?.ready.then(() => isActive && resize());
    const settleTimer = window.setTimeout(() => isActive && resize(), 1400);

    if (prefersReduced) {
      // A still frame: no loop, no listeners beyond resize.
      const drawStatic = () => {
        resize();
        draw(0, true);
      };
      drawStatic();
      document.fonts?.ready.then(() => isActive && drawStatic());
      const stillTimer = window.setTimeout(() => isActive && drawStatic(), 1400);
      window.addEventListener("resize", drawStatic);
      return () => {
        isActive = false;
        window.clearTimeout(settleTimer);
        window.clearTimeout(stillTimer);
        window.removeEventListener("resize", drawStatic);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) {
          if (!running) {
            running = true;
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
      isActive = false;
      window.clearTimeout(settleTimer);
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

export default CosmosField;
