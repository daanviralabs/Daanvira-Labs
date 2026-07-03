import { whyChooseUs } from "../config/business";
import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import "./WhyChooseUs.css";

/** WhyChooseUs — grid of six feature cards with staggered reveals. */
export default function WhyChooseUs() {
  return (
    <section className="section why" aria-label="Why choose us">
      <div className="container">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          subtitle={whyChooseUs.subtitle}
        />

        <div className="why__grid">
          {whyChooseUs.items.map((item, i) => (
            <article
              key={item.title}
              className="why__card reveal"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <span className="why__icon" aria-hidden="true">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="why__card-title">{item.title}</h3>
              <p className="why__card-text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
