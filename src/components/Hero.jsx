import { business, hero } from "../config/business";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import "./Hero.css";

/**
 * Hero — full-viewport, light cream canvas with a radial gold glow and
 * blurred corner blobs. Left: eyebrow, clamp headline (gold-gradient
 * highlight), subtitle, CTAs. Right: floating glass crest card.
 */
export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
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

        {/* Glass crest card */}
        <div className="hero__visual reveal reveal--right">
          <div className="hero__card">
            <img
              src={business.logo}
              alt={business.logoAlt}
              className="hero__crest"
              width="150"
              height="150"
              loading="eager"
              fetchpriority="high"
            />
            <p className="hero__card-heading">{hero.card.heading}</p>

            <ul className="hero__card-rows">
              {hero.card.rows.map((row) => (
                <li key={row.text} className="hero__card-row">
                  <span className="hero__card-chip" aria-hidden="true">
                    <Icon name={row.icon} size={16} />
                  </span>
                  {row.text}
                </li>
              ))}
            </ul>

            <div className="hero__card-stat">
              <strong>{hero.card.stat.value}</strong> {hero.card.stat.label}
            </div>
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
