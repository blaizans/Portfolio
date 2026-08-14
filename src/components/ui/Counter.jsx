import React, { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/useReveal";

const DURATION_MS = 1400;

/**
 * Counts up to `value` once, when scrolled into view.
 * Uses requestAnimationFrame with an eased curve; snaps straight to the
 * final value when the user prefers reduced motion.
 */
export function Counter({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(value);
      return undefined;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return undefined;
    }

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return;
          hasRun.current = true;
          observer.unobserve(entry.target);

          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / DURATION_MS, 1);
            // easeOutExpo — fast start, settled finish
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setDisplay(Math.round(eased * value));
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, prefersReduced]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
      {suffix}
    </span>
  );
}
