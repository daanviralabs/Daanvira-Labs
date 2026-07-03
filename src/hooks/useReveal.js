import { useEffect } from "react";

/**
 * useReveal — powers all scroll-reveal animations with ONE IntersectionObserver.
 *
 * Any element with the class `.reveal` (plus optional modifiers
 * `.reveal--left`, `.reveal--right`, `.reveal--scale`) starts hidden/offset;
 * when it scrolls into view we add `.is-visible` and stop observing it.
 *
 * Falls back to showing everything immediately when IntersectionObserver
 * is unavailable (very old browsers, some crawlers).
 */
export default function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));

    // Fallback: no observer support → reveal everything at once.
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // reveal once, then let go
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
