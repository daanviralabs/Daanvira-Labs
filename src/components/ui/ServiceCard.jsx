import Icon from "./Icon";
import "./ServiceCard.css";

/**
 * ServiceCard — photo header (icon chip overlaid) + title + description.
 * `image` is optional — cards fall back to the plain icon-chip layout
 * when it's omitted. `delay` staggers the reveal animation within a grid.
 */
export default function ServiceCard({ icon, title, description, image, delay = 0 }) {
  return (
    <article className="service-card reveal" style={{ transitionDelay: `${delay}ms` }}>
      {image && (
        <div className="service-card__media">
          <img src={image} alt="" loading="lazy" className="service-card__image" />
        </div>
      )}
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
