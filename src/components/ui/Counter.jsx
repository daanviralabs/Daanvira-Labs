import { useEffect, useRef, useState } from "react";

/**
 * Counter — animates 0 → value (easeOutCubic, ~1800ms) the first time it
 * scrolls into view. Respects prefers-reduced-motion by jumping straight
 * to the final value.
 *
 * <Counter value={95} suffix="%" />
 */
const DURATION = 1800;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function Counter({ value, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduceMotion) {
        setDisplay(value);
        return;
      }

      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / DURATION, 1);
        setDisplay(Math.round(easeOutCubic(progress) * value));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      setDisplay(value);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix && <span className="counter__suffix">{suffix}</span>}
    </span>
  );
}
