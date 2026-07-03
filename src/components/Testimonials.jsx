import { testimonials } from "../config/business";
import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import "./Testimonials.css";

/** Initials for the avatar chip: "Amara Perera" → "AP" */
const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/**
 * Testimonials — elevated cards with gold star row, quote and an
 * initials avatar chip. Section id is "work" so the "Work" nav link
 * and "View Our Work" CTA land here.
 */
export default function Testimonials() {
  return (
    <section id="work" className="section section--tint testimonials" aria-label="Client testimonials">
      <div className="container">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />

        <div className="testimonials__grid">
          {testimonials.items.map((item, i) => (
            <figure
              key={item.name}
              className="testimonials__card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="testimonials__stars"
                role="img"
                aria-label={`Rated ${item.rating} out of 5 stars`}
              >
                {Array.from({ length: item.rating }, (_, s) => (
                  <Icon key={s} name="star" size={17} strokeWidth={1.4} />
                ))}
              </div>

              <blockquote className="testimonials__quote">“{item.quote}”</blockquote>

              <figcaption className="testimonials__person">
                <span className="testimonials__avatar" aria-hidden="true">
                  {initials(item.name)}
                </span>
                <span className="testimonials__name">{item.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
