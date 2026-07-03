import { business } from "../config/business";
import "./FloatingWhatsApp.css";

/**
 * Filled WhatsApp glyph (not the generic stroke-based Icon set) — the
 * real mark is a solid silhouette and only reads correctly as one.
 */
function WhatsAppGlyph() {
  return (
    <svg
      className="floating-whatsapp__glyph"
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.23.6 4.34 1.75 6.2L4 29l7.98-1.71a11.9 11.9 0 0 0 4.03.71h.01c6.63 0 12-5.38 12-12.01C28.02 8.38 22.64 3 16.01 3zm0 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-4.73 1.01 1.03-4.6-.24-.38a9.76 9.76 0 0 1-1.5-5.24c0-5.41 4.4-9.8 9.82-9.8 2.62 0 5.08 1.02 6.94 2.88a9.72 9.72 0 0 1 2.87 6.93c0 5.41-4.41 9.78-9.82 9.78zm5.37-7.34c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.2.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17-.01-.36-.01-.56-.01s-.51.07-.78.36c-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.01c.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.25-.68.25-1.27.17-1.4-.07-.13-.27-.2-.56-.35z" />
    </svg>
  );
}

/**
 * FloatingWhatsApp — fixed bottom-right chat button with a pulsing ring
 * and hover tooltip. Renders nothing when business.whatsapp is empty.
 */
export default function FloatingWhatsApp() {
  if (!business.whatsapp) return null;

  const href = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="floating-whatsapp__ring" aria-hidden="true" />
      <WhatsAppGlyph />
      <span className="floating-whatsapp__tooltip" role="tooltip">
        Chat with us
      </span>
    </a>
  );
}
