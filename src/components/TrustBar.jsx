import { trustBar } from "../config/business";
import Icon from "./ui/Icon";
import "./TrustBar.css";

/** TrustBar — slim strip of value points separated by thin gold dividers. */
export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Why work with us — at a glance">
      <div className="container">
        <ul className="trust-bar__list reveal">
          {trustBar.map((item) => (
            <li key={item.text} className="trust-bar__item">
              <Icon name={item.icon} size={19} className="trust-bar__icon" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
