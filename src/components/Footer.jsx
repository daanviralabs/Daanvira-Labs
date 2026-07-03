import { business, navLinks, footer } from "../config/business";
import Icon from "./ui/Icon";
import "./Footer.css";

/**
 * Footer — the site's one deliberate dark section. Crest + blurb,
 * quick links, contact details and social buttons.
 */
export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="#top" className="footer__brand-link" aria-label={`${business.name} — back to top`}>
              <img
                src={business.logo}
                alt={business.logoAlt}
                className="footer__logo"
                width="48"
                height="48"
                loading="lazy"
              />
              <span className="footer__wordmark">{business.name}</span>
            </a>
            <p className="footer__blurb">{footer.blurb}</p>

            <ul className="footer__socials" aria-label="Social media">
              {footer.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="footer__social"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav className="footer__col" aria-label="Footer navigation">
            <h3 className="footer__col-title">{footer.quickLinksTitle}</h3>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">{footer.contactTitle}</h3>
            <ul className="footer__links">
              <li>
                <a href={`mailto:${business.email}`} className="footer__link footer__link--gold">
                  <Icon name="mail" size={16} /> {business.email}
                </a>
              </li>
              <li>
                <a href={business.phoneHref} className="footer__link">
                  <Icon name="phone" size={16} /> {business.phone}
                </a>
              </li>
              <li>
                <span className="footer__link footer__link--static">
                  <Icon name="pin" size={16} /> {business.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{footer.copyright}</p>
          <p className="footer__tagline">{business.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
