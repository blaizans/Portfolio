import { useEffect, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Single page-wide IntersectionObserver driving every `.reveal` element.
 * One observer for the whole document rather than one per component.
 * Elements are unobserved once revealed so nothing keeps firing on scroll.
 */
export function useReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(".reveal, .reveal-mask"));
    if (targets.length === 0) return undefined;

    const prefersReduced = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    // No IntersectionObserver, or user opted out of motion: show everything now.
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // `threshold: 0.1` alone never fires for elements taller than the
          // viewport, so also accept anything that has crossed the trigger line.
          const isTallAndEntered =
            entry.boundingClientRect.top < window.innerHeight * 0.88;
          if (!entry.isIntersecting && !isTallAndEntered) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: [0, 0.1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * True when the user has asked for reduced motion.
 * Starts false so server and first client render agree, then syncs on mount.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION_QUERY);
    setReduced(mq.matches);

    const handleChange = (event) => setReduced(event.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}
