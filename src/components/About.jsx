import { business, about } from "../config/business";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import Counter from "./ui/Counter";
import "./About.css";

/**
 * About — two columns: glass crest card (crest, capability rows, badge)
 * with a floating stat card, and the story copy with a gold checklist
 * and CTAs.
 */
export default function About() {
  return (
    <section id="about" className="section section--tint about" aria-label="About us">
      <div className="container about__inner">
        {/* Visual side */}
        <div className="about__visual reveal reveal--left">
          <div className="about__card-wrap">
            <div className="about__card">
              <img
                src={business.logo}
                alt={business.logoAlt}
                className="about__crest"
                width="150"
                height="150"
                loading="lazy"
              />
              <p className="about__card-heading">{about.card.heading}</p>

              <ul className="about__card-rows">
                {about.card.rows.map((row) => (
                  <li key={row.text} className="about__card-row">
                    <span className="about__card-chip" aria-hidden="true">
                      <Icon name={row.icon} size={16} />
                    </span>
                    {row.text}
                  </li>
                ))}
              </ul>

              <span className="about__badge">{about.badge}</span>
            </div>

            {/* Floating glass stat card */}
            <div className="about__stat-card">
              <strong className="about__stat-value">
                <Counter value={about.statCard.value} suffix={about.statCard.suffix} />
              </strong>
              <span className="about__stat-label">{about.statCard.label}</span>
            </div>
          </div>
        </div>

        {/* Copy side */}
        <div className="about__copy">
          <span className="eyebrow reveal">{about.eyebrow}</span>
          <h2 className="about__title reveal">{about.title}</h2>

          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="about__paragraph reveal">
              {text}
            </p>
          ))}

          <ul className="about__checklist">
            {about.checklist.map((item, i) => (
              <li key={item} className="about__check reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="about__check-circle" aria-hidden="true">
                  <Icon name="check" size={13} strokeWidth={2.4} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="about__ctas reveal">
            <Button href={about.primaryCta.href} variant="primary" icon={about.primaryCta.icon}>
              {about.primaryCta.label}
            </Button>
            <Button href={about.secondaryCta.href} variant="ghost">
              {about.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
