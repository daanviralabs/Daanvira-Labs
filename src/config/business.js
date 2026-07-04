/* ==========================================================================
   DAANVIRA LABS — SITE CONTENT (single source of truth)
   ==========================================================================
   ✏️  Edit EVERYTHING about the site from this one file — no code knowledge
   needed. Anything wrapped in [square brackets] is PLACEHOLDER content:
   replace it with your real details whenever you're ready.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CORE BUSINESS DETAILS
   -------------------------------------------------------------------------- */
export const business = {
  name: "Daanvira Labs",
  shortName: "Daanvira",
  category: "Software Development & Digital Marketing Agency",
  tagline: "Building software and brands that grow",
  city: "Colombo, Sri Lanka",

  // [PLACEHOLDER] — replace with your real street address (leave "" to hide the map)
  address: "[Street Address], Colombo, Sri Lanka",

  phone: "+94 76 926 176",
  phoneHref: "tel:+9476926176",

  // [PLACEHOLDER] — WhatsApp number in international format WITHOUT "+" or spaces.
  // Set to "" to hide the floating WhatsApp button entirely.
  whatsapp: "94771234567",
  whatsappMessage: "Hi Daanvira Labs! I'd like a free consultation.",

  email: "daanviralabs@gmail.com",

  // Crest logo. Drop your real artwork at /public/logo.png and change "logo.svg" to "logo.png".
  // BASE_URL (not a hardcoded "/") so this still resolves correctly when the
  // site is deployed under a sub-path, e.g. GitHub Pages' /Daanvira-Labs/.
  logo: `${import.meta.env.BASE_URL}logo.svg`,
  logoAlt: "Daanvira Labs crest — gold shield with sunburst and D monogram",
};

/* --------------------------------------------------------------------------
   2. NAVIGATION
   -------------------------------------------------------------------------- */
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* --------------------------------------------------------------------------
   3. HERO
   -------------------------------------------------------------------------- */
export const hero = {
  eyebrow: "Software · Marketing · Creative — one team",
  // The headline is split so the highlighted part gets the gold gradient.
  titleStart: "Building software and",
  titleHighlight: "brands that grow",
  titleEnd: ".",
  subtitle:
    "Daanvira Labs is a Colombo-based agency that engineers high-performance digital products — then markets them with the same rigor. One partner from first commit to first customer.",
  primaryCta: { label: "Get a Free Consultation", href: "#contact", icon: "arrow-right" },
  secondaryCta: { label: "View Our Work", href: "#work" },

  // The floating glass card on the right side of the hero.
  card: {
    heading: "One team. Full stack.",
    rows: [
      { icon: "code", text: "Web · Apps · Systems" },
      { icon: "chart", text: "SEO · Ads · Content" },
      { icon: "palette", text: "Brand · Video · Design" },
    ],
    // [PLACEHOLDER] mini stat shown at the bottom of the card
    stat: { value: "40+", label: "projects shipped & growing" },
  },
  scrollCueLabel: "Scroll to explore",
};

/* --------------------------------------------------------------------------
   4. TRUST BAR (slim strip under the hero)
   -------------------------------------------------------------------------- */
export const trustBar = [
  { icon: "shield", text: "End-to-end delivery" },
  { icon: "layers", text: "Modern tech stack" },
  { icon: "clock", text: "Fast turnaround" },
  { icon: "users", text: "Direct founder access" },
  { icon: "chart", text: "Data-driven growth" },
];

/* --------------------------------------------------------------------------
   5. SERVICES — two labeled groups rendered as separate grids
   -------------------------------------------------------------------------- */
export const services = {
  eyebrow: "What we do",
  title: "Everything your business needs to launch and grow",
  subtitle:
    "From the code that runs your product to the campaigns that fill your pipeline — designed, built and managed under one roof.",
  groups: [
    {
      label: "Software & Development",
      items: [
        {
          icon: "globe",
          title: "Website Development",
          description: "Custom, responsive, high-performance websites built to convert visitors into customers.",
        },
        {
          icon: "app",
          title: "Mobile App Development",
          description: "Native and cross-platform apps with polished UX, shipped to the App Store and Play Store.",
        },
        {
          icon: "code",
          title: "Custom Software Solutions",
          description: "Bespoke tools built around your workflow — dashboards, portals, internal systems.",
        },
        {
          icon: "gears",
          title: "System Development",
          description: "Backend systems, third-party integrations and infrastructure that scale with you.",
        },
        {
          icon: "rocket",
          title: "Full-Spectrum Development",
          description: "From MVP to scale — architecture, build, QA and long-term maintenance in one engagement.",
        },
      ],
    },
    {
      label: "Marketing & Creative",
      items: [
        {
          icon: "chart",
          title: "SEO",
          description: "Technical SEO, on-page optimization and local SEO that puts you in front of buyers.",
        },
        {
          icon: "megaphone",
          title: "Social Media Management",
          description: "Always-on social presence with a content strategy tuned to your audience.",
        },
        {
          icon: "target",
          title: "Paid Ads Management",
          description: "Meta and Google Ads campaigns managed for ROI, not vanity metrics.",
        },
        {
          icon: "pen",
          title: "Content Marketing",
          description: "Blogs, LinkedIn thought-leadership and short-form video that build authority.",
        },
        {
          icon: "mail",
          title: "Email Marketing & Automation",
          description: "Sequences, newsletters and lifecycle automation that nurture leads on autopilot.",
        },
        {
          icon: "palette",
          title: "Branding & Visual Identity",
          description: "Logos, palettes and brand systems that make you instantly recognizable.",
        },
        {
          icon: "video",
          title: "AI-Powered Video Production",
          description: "Scroll-stopping short-form video produced fast with an AI-assisted pipeline.",
        },
        {
          icon: "image",
          title: "AI Art & Graphic Design",
          description: "On-brand graphics, ad creative and illustrations at the speed of your campaigns.",
        },
        {
          icon: "cursor",
          title: "UI/UX Design",
          description: "Research-backed interfaces that feel effortless and drive measurable conversion.",
        },
        {
          icon: "link",
          title: "Automation & CRM Integration",
          description: "Connect your marketing stack and CRM so every lead is captured and followed up.",
        },
      ],
    },
  ],
};

/* --------------------------------------------------------------------------
   6. ABOUT
   -------------------------------------------------------------------------- */
export const about = {
  eyebrow: "Who we are",
  title: "Engineers and marketers, on the same team by design",
  paragraphs: [
    "Most agencies do one thing: they build, or they market. Daanvira Labs was founded on the belief that the two are inseparable — great software deserves great distribution, and great campaigns deserve a product that converts.",
    "Our team combines hands-on QA and software engineering experience with performance-marketing and creative backgrounds. That means the people writing your code and the people running your ads sit at the same table — and you talk to the founders directly.",
  ],
  checklist: [
    "Engineering-grade quality on every build",
    "Marketing decisions backed by real data",
    "Founders involved in every project",
    "Honest timelines and transparent pricing",
  ],
  primaryCta: { label: "Get a Free Consultation", href: "#contact", icon: "arrow-right" },
  secondaryCta: { label: "Explore services", href: "#services" },

  // The visual side of the section.
  badge: "Colombo, Sri Lanka 🇱🇰",
  // [PLACEHOLDER] floating stat card over the graphic
  statCard: { value: 12, suffix: "+", label: "years combined experience" },
};

/* --------------------------------------------------------------------------
   7. WHY CHOOSE US — exactly six cards
   -------------------------------------------------------------------------- */
export const whyChooseUs = {
  eyebrow: "Why Daanvira",
  title: "Why teams choose to build and grow with us",
  subtitle: "Six reasons clients stay after the first project.",
  items: [
    {
      icon: "shield",
      title: "End-to-end under one roof",
      description: "Strategy, design, development and marketing — one accountable team, zero hand-off friction.",
    },
    {
      icon: "chart",
      title: "Data-driven marketing, real engineering",
      description: "Campaigns instrumented like software: tracked, tested and iterated on evidence.",
    },
    {
      icon: "clock",
      title: "Fast without cutting corners",
      description: "Lean process and modern tooling get you live quickly — QA discipline keeps it solid.",
    },
    {
      icon: "chat",
      title: "Transparent communication",
      description: "Clear scopes, honest timelines and progress updates you never have to chase.",
    },
    {
      icon: "layers",
      title: "Modern tech stack",
      description: "React, cloud-native backends and automation-first tooling — never legacy lock-in.",
    },
    {
      icon: "users",
      title: "Founders in every project",
      description: "You work directly with the people whose names are on the door, start to finish.",
    },
  ],
};

/* --------------------------------------------------------------------------
   8. TESTIMONIALS — [PLACEHOLDERS] replace with real client quotes
   -------------------------------------------------------------------------- */
export const testimonials = {
  eyebrow: "Client stories",
  title: "Trusted by businesses that wanted both — build and growth",
  subtitle: "A few words from the people we work with. (Placeholder quotes — swap in real ones as they arrive.)",
  items: [
    {
      quote:
        "Daanvira rebuilt our website and ran the launch campaign. Traffic doubled in the first quarter and the site finally feels like our brand.",
      name: "Amara Perera",
      role: "Founder, Serendib Living",
      rating: 5,
    },
    {
      quote:
        "Having developers and marketers on one team saved us months of back-and-forth. They just handled it — end to end.",
      name: "Rohan Silva",
      role: "Director, Cinnamon Ventures",
      rating: 5,
    },
    {
      quote:
        "Clear communication, fast delivery, and they actually understood our numbers. Rare combination.",
      name: "Nadia Fernando",
      role: "Marketing Lead, Lotus & Co.",
      rating: 5,
    },
  ],
};

/* --------------------------------------------------------------------------
   9. SOCIAL PROOF — four animated count-up stats  [PLACEHOLDER numbers]
   -------------------------------------------------------------------------- */
export const socialProof = {
  stats: [
    { value: 40, suffix: "+", label: "Projects Delivered" },
    { value: 12, suffix: "+", label: "Years Combined Experience" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 8, suffix: "+", label: "Industries Served" },
  ],
};

/* --------------------------------------------------------------------------
   10. FAQ
   -------------------------------------------------------------------------- */
export const faq = {
  eyebrow: "FAQ",
  title: "Questions, answered",
  subtitle: "Everything you might want to know before we talk.",
  items: [
    {
      question: "Do you handle both the build and the marketing?",
      answer:
        "Yes — that's the whole point of Daanvira Labs. We design and develop your product, then run the SEO, ads, content and email that grow it. One team, one point of contact, no hand-offs.",
    },
    {
      question: "What's your typical project timeline?",
      answer:
        "A marketing website usually ships in 2–4 weeks; apps and custom software typically run 6–12 weeks depending on scope. Marketing engagements are ongoing monthly retainers. We agree on a concrete timeline before any work begins.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely. We're based in Colombo, Sri Lanka, and work with clients worldwide — async-friendly communication, overlap hours for your timezone, and everything managed remotely.",
    },
    {
      question: "Can you take over an existing codebase or campaign?",
      answer:
        "Yes. We start with a free audit of your current code or ad account, give you an honest assessment, and take over with a stabilization plan — no forced rebuilds unless they genuinely pay off.",
    },
    {
      question: "What does the process look like?",
      // Array of steps → rendered as a numbered list. Any other FAQ item
      // can stay a plain string for a single-paragraph answer.
      answer: [
        "Free consultation to understand your goals.",
        "A written proposal with scope, timeline and price.",
        "Design & build in weekly check-ins.",
        "Launch, measure and grow. You see progress at every step.",
      ],
    },
  ],
};

/* --------------------------------------------------------------------------
   11. CONTACT
   -------------------------------------------------------------------------- */
export const contact = {
  eyebrow: "Get in touch",
  title: "Let's build something that grows",
  subtitle: "Tell us about your project — we'll reply within one business day.",

  // Contact cards. Any card can be removed by deleting its line.
  cards: [
    {
      icon: "mail",
      label: "Email us",
      value: "daanviralabs@gmail.com",
      href: "mailto:daanviralabs@gmail.com",
      primary: true, // rendered more prominently
    },
    {
      icon: "phone",
      label: "Call us",
      value: "+94 76 926 176",
      href: "tel:+9476926176",
    },
    {
      icon: "whatsapp",
      label: "WhatsApp",
      value: "Chat with us", // link built from business.whatsapp
    },
  ],

  // Google Maps embed. Set to "" to hide the map.
  mapEmbedUrl: "",
  mapTitle: "Daanvira Labs location — Colombo, Sri Lanka",

  // Closing call-to-action block under the cards.
  closing: {
    title: "Ready to start? The consultation is free.",
    text: "Thirty minutes, no obligation — walk away with an honest assessment and a clear next step.",
    cta: { label: "Get a Free Consultation", href: "mailto:daanviralabs@gmail.com", icon: "arrow-right" },
  },
};

/* --------------------------------------------------------------------------
   12. FOOTER
   -------------------------------------------------------------------------- */
export const footer = {
  blurb:
    "Software development, digital marketing and creative — delivered end to end by one team in Colombo, Sri Lanka.",
  quickLinksTitle: "Explore",
  contactTitle: "Contact",
  // [PLACEHOLDER] social links — replace "#" with your real profile URLs, or delete lines to hide.
  socials: [
    { icon: "facebook", label: "Facebook", href: "#" },
    { icon: "instagram", label: "Instagram", href: "#" },
    { icon: "linkedin", label: "LinkedIn", href: "#" },
  ],
  copyright: `© ${new Date().getFullYear()} Daanvira Labs. All rights reserved.`,
};
