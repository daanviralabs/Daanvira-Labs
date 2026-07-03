import Icon from "./Icon";
import "./Button.css";

/**
 * Button — the site's one CTA primitive.
 * Renders an <a> when `href` is given, otherwise a <button>.
 *
 * variants: "primary" (gold gradient) · "secondary" (deep gold outline)
 *           "ghost" (borderless) · "outline-dark" (near-black outline)
 * icon:     optional trailing Icon name (e.g. "arrow-right")
 */
export default function Button({
  href,
  variant = "primary",
  icon,
  children,
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant}${className ? ` ${className}` : ""}`;

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {icon && <Icon name={icon} size={18} className="btn__icon" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
