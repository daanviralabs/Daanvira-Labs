import { useEffect, useRef } from "react";
import { hero } from "../config/business";
import Button from "./ui/Button";
import "./Hero.css";

/**
 * Hero — full-viewport canvas with a looping background video (keycaps),
 * a radial gold glow and blurred corner blobs on top. Copy column only
 * (eyebrow, clamp headline with gold-gradient highlight, subtitle, CTAs) —
 * the glass crest card now lives in the About section instead.
 */
export default function Hero() {
  const videoRef = useRef(null);

  // Lightweight parallax: the video drifts slower than the page scrolls,
  // only while the hero itself is in view. rAF-throttled, no library.
  useEffect(() => {
    const reduceMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const el = videoRef.current;
    if (!el) return undefined;

    let rafId = null;

    const update = () => {
      rafId = null;
      const heroHeight = el.parentElement.offsetHeight;
      const scrolled = window.scrollY;
      if (scrolled > heroHeight) return; // hero scrolled out of view
      el.style.transform = `translateY(${scrolled * 0.25}px)`;
    };

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="top" className="hero" aria-label="Introduction">
      {/* Background video, muted/autoplay so it satisfies browser autoplay
          policies. Plays once and holds its last frame (no loop). Parallax
          drift is applied via the ref above. */}
      <video
        ref={videoRef}
        className="hero__video"
        src={`${import.meta.env.BASE_URL}Keycaps_orbiting_in_grid_202607051724.mp4`}
        autoPlay
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Decorative layers */}
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--tl" />
        <span className="hero__blob hero__blob--br" />
      </div>

      <div className="container hero__inner">
        {/* Copy column */}
        <div className="hero__copy">
          <span className="eyebrow reveal">{hero.eyebrow}</span>

          <h1 className="hero__title reveal">
            {hero.titleStart}{" "}
            <span className="text-gradient">
              {hero.titleHighlight}
              {hero.titleEnd}
            </span>
          </h1>

          <p className="hero__subtitle reveal">{hero.subtitle}</p>

          <div className="hero__ctas reveal">
            <Button href={hero.primaryCta.href} variant="primary" icon={hero.primaryCta.icon}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#services" className="hero__scroll-cue" aria-label={hero.scrollCueLabel}>
        <span className="hero__scroll-dot" aria-hidden="true" />
      </a>
    </section>
  );
}
