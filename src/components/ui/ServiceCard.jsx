import Icon from "./Icon";
import "./ServiceCard.css";

/**
 * ServiceCard — photo header (icon chip overlaid) + title + description.
 * Every card reserves the same header space so a grid of mixed
 * photographed/un-photographed services still lines up; cards without an
 * `image` yet show a gradient-tinted placeholder instead of a photo.
 * `delay` staggers the reveal animation within a grid.
 */
export default function ServiceCard({ icon, title, description, image, delay = 0 }) {
  return (
    <article className="service-card reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="service-card__media">
        {image ? (
          <img src={image} alt="" loading="lazy" className="service-card__image" />
        ) : (
          <span className="service-card__media-placeholder" aria-hidden="true">
            <Icon name={icon} size={40} strokeWidth={1.2} />
          </span>
        )}
      </div>
      <div className="service-card__body">
        <span className="service-card__chip" aria-hidden="true">
          <Icon name={icon} size={24} />
        </span>
        <h4 className="service-card__title">{title}</h4>
        <p className="service-card__description">{description}</p>
      </div>
    </article>
  );
}
