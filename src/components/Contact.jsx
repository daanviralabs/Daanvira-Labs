import { business, contact } from "../config/business";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import "./Contact.css";

/** WhatsApp deep-link built from the config number + prefilled message. */
const whatsappHref = business.whatsapp
  ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`
  : "";

/**
 * Contact — contact cards (email prominent), Google Maps embed and a
 * closing CTA block.
 */
export default function Contact() {
  return (
    <section id="contact" className="section section--tint contact" aria-label="Contact us">
      <div className="container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className="contact__grid">
          {contact.cards.map((card, i) => {
            // WhatsApp card link comes from the business config
            const href = card.icon === "whatsapp" ? whatsappHref : card.href;
            if (card.icon === "whatsapp" && !business.whatsapp) return null;

            const inner = (
              <>
                <span className="contact__chip" aria-hidden="true">
                  <Icon name={card.icon} size={22} />
                </span>
                <span className="contact__card-label">{card.label}</span>
                <span className="contact__card-value">{card.value}</span>
              </>
            );

            const classes = `contact__card${card.primary ? " contact__card--primary" : ""} reveal`;
            const delay = { transitionDelay: `${i * 80}ms` };

            return href ? (
              <a
                key={card.label}
                href={href}
                className={classes}
                style={delay}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {inner}
              </a>
            ) : (
              <div key={card.label} className={classes} style={delay}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Map — shown only when an embed URL is configured */}
        {contact.mapEmbedUrl && (
          <div className="contact__map reveal">
            <iframe
              src={contact.mapEmbedUrl}
              title={contact.mapTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

        {/* Closing CTA */}
        <div className="contact__closing reveal">
          <h3 className="contact__closing-title">{contact.closing.title}</h3>
          <p className="contact__closing-text">{contact.closing.text}</p>
          <Button href={contact.closing.cta.href} variant="primary" icon={contact.closing.cta.icon}>
            {contact.closing.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
