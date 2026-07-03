/**
 * Icon — the site's single inline SVG icon set.
 * Stroke-based, inherits color via stroke="currentColor".
 *
 * <Icon name="rocket" size={24} strokeWidth={1.8} />
 */
const PATHS = {
  code: (
    <>
      <polyline points="8 6 3 12 8 18" />
      <polyline points="16 6 21 12 16 18" />
    </>
  ),
  app: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
    </>
  ),
  gears: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  chart: (
    <>
      <line x1="4" y1="20" x2="20" y2="20" />
      <polyline points="5 15 10 10 13.5 13 20 6" />
      <polyline points="15.5 6 20 6 20 10.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3.5 7 12 13 20.5 7" />
    </>
  ),
  pen: (
    <>
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18h.9a2.1 2.1 0 0 0 1.55-3.53c-.75-.84-.18-2.22.95-2.22H18a4 4 0 0 0 4-4.05C21.9 6.5 17.4 3 12 3z" />
      <circle cx="7.8" cy="10.2" r="0.6" />
      <circle cx="12" cy="7.5" r="0.6" />
      <circle cx="16.2" cy="10.2" r="0.6" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
      <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
    </>
  ),
  cursor: (
    <>
      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  star: (
    <>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.8 13.46L3 21l4.68-1.17A9 9 0 1 0 12 3z" />
      <path d="M8.6 8.8c.4 3.4 2.9 5.9 6.4 6.5l1.1-1.1 2 1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 20 5.5v6.2c0 4.9-3.4 8.3-8 9.8-4.6-1.5-8-4.9-8-9.8V5.5z" />
      <polyline points="8.5 11.8 11 14.3 15.5 9.3" />
    </>
  ),
  check: (
    <>
      <polyline points="4.5 12.5 9.5 17.5 19.5 6.5" />
    </>
  ),
  "arrow-right": (
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 2 22 8.5 12 15 2 8.5" />
      <polyline points="2 13.5 12 20 22 13.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.2" />
      <circle cx="12" cy="12" r="1.6" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="9" cy="9.5" r="1.8" />
      <path d="m3.5 17 5-4.5 4 3.5 4-4 4 4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="7.5" r="3.5" />
      <path d="M2.5 20.5v-1a6.5 6.5 0 0 1 13 0v1" />
      <path d="M16 4.3a3.5 3.5 0 0 1 0 6.4" />
      <path d="M18.5 13.6a6.5 6.5 0 0 1 3 5.4v1.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </>
  ),
  chat: (
    <>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a13.8 13.8 0 0 1 0 18M12 3a13.8 13.8 0 0 0 0 18" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4z" />
      <line x1="22" y1="2" x2="11" y2="13" />
    </>
  ),
  facebook: (
    <>
      <path d="M14 8.5h3v-4h-3A4.5 4.5 0 0 0 9.5 9v2.5H7V15h2.5v6.5h3.5V15h3l.5-3.5h-3.5V9a.5.5 0 0 1 .5-.5z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.2" y1="6.8" x2="17.2" y2="6.8" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="11" x2="8" y2="16.5" />
      <line x1="8" y1="7.6" x2="8" y2="7.7" />
      <path d="M12 16.5v-3.2a2.6 2.6 0 0 1 5.2 0v3.2" />
    </>
  ),
};

export default function Icon({ name, size = 24, strokeWidth = 1.8, className = "", ...rest }) {
  const paths = PATHS[name];
  if (!paths) return null;

  return (
    <svg
      className={`icon icon--${name}${className ? ` ${className}` : ""}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths}
    </svg>
  );
}
