import { useEffect, useState } from "react";
import { business, navLinks, hero } from "../config/business";
import Button from "./ui/Button";
import "./Navbar.css";

/**
 * Navbar — fixed; subtle bottom border over the light hero, gains a solid
 * white background + shadow once scrolled (scrollY > 24). Mobile: animated
 * hamburger → full-screen slide-in menu with body-scroll lock + backdrop.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solid background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock while the mobile menu is open + Escape to close
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        {/* Brand */}
        <a href="#top" className="navbar__brand" aria-label={`${business.name} — back to top`} onClick={close}>
          <img
            src={business.logo}
            alt={business.logoAlt}
            className="navbar__logo"
            width="40"
            height="40"
            loading="eager"
            fetchpriority="high"
          />
          <span className="navbar__wordmark">{business.name}</span>
        </a>

        {/* Desktop links */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="navbar__cta">
          <Button href={hero.primaryCta.href} variant="primary">
            {hero.primaryCta.label}
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__burger${open ? " navbar__burger--open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile backdrop + slide-in menu */}
      <div
        className={`navbar__backdrop${open ? " navbar__backdrop--visible" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <nav
        id="mobile-menu"
        className={`navbar__mobile${open ? " navbar__mobile--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            onClick={close}
            tabIndex={open ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <div
          className="navbar__mobile-cta"
          style={{ transitionDelay: open ? `${120 + navLinks.length * 60}ms` : "0ms" }}
        >
          <Button href={hero.primaryCta.href} variant="primary" icon="arrow-right" onClick={close} tabIndex={open ? 0 : -1}>
            {hero.primaryCta.label}
          </Button>
        </div>
      </nav>
    </header>
  );
}
