import "./SectionHeading.css";

/**
 * SectionHeading — eyebrow chip + title + optional subtitle.
 * align: "center" (default) | "left"
 * light: true renders white text (for use on the dark footer, etc.)
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const classes = [
    "section-heading",
    `section-heading--${align}`,
    light ? "section-heading--light" : "",
    "reveal",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </header>
  );
}
