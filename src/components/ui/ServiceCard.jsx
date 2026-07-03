import Icon from "./Icon";
import "./ServiceCard.css";

/**
 * ServiceCard — icon chip on gold gradient + title + description.
 * `delay` staggers the reveal animation within a grid.
 */
export default function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <article className="service-card reveal" style={{ transitionDelay: `${delay}ms` }}>
      <span className="service-card__chip" aria-hidden="true">
        <Icon name={icon} size={24} />
      </span>
      <h4 className="service-card__title">{title}</h4>
      <p className="service-card__description">{description}</p>
    </article>
  );
}
