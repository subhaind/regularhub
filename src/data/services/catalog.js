// Single source of truth for the services messaging hierarchy:
// company positioning → category (line of business) → offering.
// The hub, header/mobile nav and every service page's CTAs and cross-sell read from here.

export const SITE_URL = "https://regularhub.in";

export const positioning = {
  eyebrow: "Regularhub Services",
  headline: "Revenue systems, engineered and operated.",
  subhead:
    "Industry growth engines that capture the demand you already pay for, operations software that runs the floor, and the security and reputation practice that protects both — built by one team, on one stack.",
};

export const categories = {
  growth: {
    key: "growth",
    label: "Growth Engines",
    eyebrow: "Growth Engine",
    tagline: "Done-for-you client acquisition systems, tuned to how your industry converts.",
    description:
      "Funnel, AI booking and qualification bots, social optimisation, marketing automation and brand visibility — installed and run as one stack. We diagnose the leak before you commit to anything.",
    primaryCta: { label: "Book a Free Growth Audit", intent: "growth-audit" },
    secondaryCta: { label: "See the system", anchor: "system" },
    assurance: "No hard sell. No generic deck. A specific diagnosis of your specific business.",
    midCta: {
      heading: "Find out exactly where your pipeline leaks.",
      body: "The growth audit maps acquisition, response, follow-up and retention — and shows you the complete fix before you commit to anything.",
      stat: {
        text: "Firms that replied to an online enquiry within an hour were nearly seven times as likely to qualify the lead as firms that waited longer.",
        source: "Harvard Business Review, “The Short Life of Online Sales Leads”, 2011",
      },
    },
    process: [
      { title: "Diagnose", body: "A growth audit maps exactly where your pipeline leaks — acquisition, response, follow-up and retention." },
      { title: "Architect", body: "You see the complete system for your sub-vertical, including the first fix we’d start with, before you commit." },
      { title: "Install", body: "Funnel, bots, automation and visibility built on your existing tools — Shopify, Practo, Sheets or a custom stack." },
      { title: "Operate & optimise", body: "Server-side attribution, live dashboards and continuous iteration on what converts." },
    ],
    // Pricing is quoted, not published: show what every engagement includes instead.
    includedLead: "Pricing depends on your sub-vertical, channels and lead volume. You get a written, itemised quote after the growth audit.",
    included: [
      "A growth audit of your business before you commit to anything",
      "Setup on the tools you already use — Shopify, Practo, Sheets or a custom stack",
      "Ongoing operation and optimisation, with live dashboards",
      "A written quote with the setup and monthly fees itemised — no lock-in",
    ],
    faqs: [
      {
        question: "What does a growth engine cost?",
        answer:
          "It depends on your sub-vertical, your channels and your lead volume, so we don’t publish one price. After the free growth audit you get a written quote with the one-time setup and the monthly operating fee itemised. There’s no lock-in.",
      },
      {
        question: "Is this compliant with India’s DPDP Act?",
        answer:
          "The system is built with the Digital Personal Data Protection Rules, 2025 in mind: every bot asks for consent in its first message, says what it collects and why, and explains how to withdraw. Your privacy notice and final legal review stay with you and your advisor.",
      },
    ],
  },
  software: {
    key: "software",
    label: "Operations Software",
    eyebrow: "Operations Software",
    tagline: "Billing, inventory, people and front-of-house — on one system per business.",
    description:
      "Purpose-built platforms for retail, F&B, hospitality, fitness, laundry and back-office teams. GST-ready, and works on the hardware you already own.",
    primaryCta: { label: "Book a Live Demo", intent: "demo" },
    secondaryCta: { label: "Start 14-Day Free Trial", intent: "trial" },
    assurance: "14-day free trial. No credit card. No lock-in.",
    midCta: {
      heading: "See it running on your own products and reports.",
      body: "A 30-minute live demo built around your workflow — then a 14-day free trial, no credit card.",
    },
    process: [
      { title: "Live demo", body: "A walkthrough on your workflow — your products, your counters, your reports — not a canned tour." },
      { title: "Migrate", body: "Bulk import of products, customers and opening balances from Excel. We handle the heavy lifting." },
      { title: "Go live", body: "Hardware connected, staff trained, and your first day run with support on hand." },
      { title: "Scale", body: "Add branches, users and modules as you grow — role-based access and a full audit trail from day one." },
    ],
    includedLead: "Pricing depends on your users, outlets or branches and the modules you need. You get a written, itemised quote after the live demo.",
    included: [
      "A live demo on your own products, counters and reports",
      "Setup, data import from Excel and staff training, priced up front",
      "A 14-day free trial — no credit card",
      "A written quote with every module itemised — no lock-in",
    ],
    faqs: [
      {
        question: "How much does it cost?",
        answer:
          "Pricing depends on your users, outlets or branches and the modules you need. After the live demo you get a written quote with every module itemised, along with any setup, data migration and staff training you need. The 14-day trial needs no credit card, and there’s no lock-in.",
      },
    ],
  },
  advisory: {
    key: "advisory",
    label: "Brand & Security",
    eyebrow: "Brand Reputation & Cybersecurity",
    tagline: "Reputation and security run as one practice, for individuals and organisations.",
    description:
      "Reputation management, cybersecurity and integrated incident response — because a breach becomes a reputation crisis within hours, and most reputation attacks start with a security gap.",
    primaryCta: { label: "Request a Confidential Assessment", intent: "assessment" },
    secondaryCta: { label: "Explore the catalog", anchor: "system" },
    assurance: "Confidential from the first conversation. Most clients start with an audit, not a retainer.",
    midCta: {
      heading: "Not sure where your exposure is?",
      body: "Start with a confidential audit of your reputation footprint, your security posture, or both.",
    },
    process: [
      { title: "Assess", body: "A confidential audit of your reputation footprint, security posture, or both." },
      { title: "Prioritise", body: "A remediation plan ranked by exposure and business impact — not a list of everything that could be better." },
      { title: "Execute", body: "Project-based fixes or an ongoing retainer, run by one coordinated team." },
      { title: "Monitor & respond", body: "Continuous monitoring, with an on-call incident response retainer when the stakes call for it." },
    ],
    includedLead: "Every engagement is scoped to your risk and exposure. You get a written scope and quote before any work starts.",
    included: [
      "A confidential first conversation",
      "An audit or assessment before any retainer",
      "A remediation plan ranked by exposure and business impact",
      "A written scope and quote for every engagement",
    ],
    faqs: [
      {
        question: "What does an assessment cost?",
        answer:
          "It depends on the scope — one person or a whole organisation, reputation, security or both. You get a written scope and quote before any work starts.",
      },
      {
        question: "Is the first conversation confidential?",
        answer: "Yes. Confidentiality applies from the first conversation, before any engagement is signed.",
      },
      {
        question: "Do we have to commit to a retainer?",
        answer:
          "No. Most clients start with a project-based audit or assessment, then decide whether ongoing monitoring is worth it.",
      },
    ],
  },
};

// One label per enquiry intent, shared by the on-page lead form and /contact.
export const intentLabels = {
  "growth-audit": "Free growth audit",
  demo: "Live demo",
  trial: "14-day free trial",
  assessment: "Confidential assessment",
  consultation: "Consultation",
  "review-teardown": "Free review-gap teardown",
  partner: "Partner programme",
};

// Shown on every service page. Each point restates something the site already commits to.
export const whyUs = {
  eyebrow: "Why Regularhub",
  title: "One team. One stack. No hand-offs.",
  items: [
    {
      title: "One team for all of it",
      body: "The growth engine, the operations software and the security behind them are built and run by the same team — nothing falls between two vendors.",
    },
    {
      title: "We run it, not just install it",
      body: "Funnels, bots and follow-ups are operated and optimised after launch — not handed over as a login and a manual.",
    },
    {
      title: "Built for how India buys",
      body: "WhatsApp-first, GST-ready, UPI-ready, and it runs on the hardware you already own.",
    },
    {
      title: "You see the fix before you pay",
      body: "Every engagement starts with an audit, a live demo or an assessment on your own business.",
    },
  ],
};

// DPDP Rules, 2025 (notified 14 Nov 2025): Consent Manager provisions from Nov 2026,
// remaining obligations from May 2027. Claims below are limited to what the system does.
export const dpdp = {
  eyebrow: "DPDP-ready by design",
  title: "Built for India’s data protection rules — before they’re enforced.",
  lead: "The Digital Personal Data Protection Rules, 2025 apply to every business that handles customer data, with no small-business exemption. Consent Manager rules start in November 2026; the remaining obligations apply from May 2027.",
  items: [
    {
      title: "Consent in the first message",
      body: "Every bot opens with a plain-language notice — what it collects, why, and how to withdraw — in English or the Indian language it speaks.",
    },
    {
      title: "Penalties up to ₹250 crore",
      body: "The DPDP Act, 2023 allows penalties of up to ₹250 crore for failing to protect personal data. A consent record from the first message is evidence you’ll want to have.",
    },
  ],
  // Extra point for pages where the stakes are specific.
  extras: {
    "the-education-creative-entertainment-growth-engine": {
      title: "Parents consent for minors",
      body: "Students under 18 are onboarded only through a parent or guardian’s verifiable consent.",
    },
    "healthcare-wellness-pet-care": {
      title: "AI that never diagnoses",
      body: "The bot answers questions, books slots and routes anything clinical to your doctors. It never diagnoses or recommends treatment.",
    },
  },
  note: "Consent capture is built in. Your privacy notice and final legal review stay with you and your advisor.",
};

// The three segments the business leads with, featured on the services hub.
export const beachheads = [
  {
    label: "Dental, ortho & aesthetic clinics",
    slug: "healthcare-wellness-pet-care",
    body: "Answer every enquiry first, close the review gap with the clinic down the road, and follow up on every consult.",
  },
  {
    label: "Coaching centres & institutes",
    slug: "the-education-creative-entertainment-growth-engine",
    body: "Fill batches before the admission window closes, with trial-class follow-up that never slips.",
  },
  {
    label: "Real estate agents & brokers",
    slug: "the-local-services-real-estate-growth-engine",
    body: "Qualify buyers and book viewings in under 60 seconds, straight from WhatsApp.",
  },
];

export const partnerProgram = {
  eyebrow: "Partner programme",
  title: "Resell Regularhub under your own brand.",
  lead: "For CA firms, payroll providers and marketing agencies whose clients already trust them with their business.",
  items: [
    { title: "Your brand, your client", body: "You keep the client relationship and the invoice. We stay behind the scenes." },
    { title: "We build and support it", body: "Our team handles the build, setup and technical support behind you." },
    { title: "Start with a demo", body: "See the white-label version before you commit to anything." },
  ],
  cta: { label: "Talk to us about partnering", slug: "partner-programme", intent: "partner" },
};

export const categoryOrder = ["growth", "software", "advisory"];

export const offerings = [
  { slug: "healthcare-wellness-pet-care", category: "growth", name: "Healthcare, Wellness & Pet Care", promise: "Answer first, 24/7 — AI triage and booking that wins the patient before a competitor replies." },
  { slug: "b2b-industrial-legal-hyper-local-distribution", category: "growth", name: "B2B, Industrial, Legal & Hyper-Local", promise: "A tracked pipeline from first LinkedIn touch or WhatsApp query to signed order." },
  { slug: "the-retail-e-commerce-growth-engine", category: "growth", name: "Retail & E-Commerce", promise: "Recover abandoned checkouts and convert showroom interest in the same session." },
  { slug: "the-food-hospitality-travel-growth-engine", category: "growth", name: "Food, Hospitality & Travel", promise: "Move repeat guests off aggregators and onto channels you own — at 0% commission." },
  { slug: "the-local-services-real-estate-growth-engine", category: "growth", name: "Local Services & Real Estate", promise: "Missed-call text-back in 90 seconds and AI qualification in under 60." },
  { slug: "the-education-creative-entertainment-growth-engine", category: "growth", name: "Education, Creative & Entertainment", promise: "Trial-to-enrollment, quote and sponsor pipelines that follow up on time, every time." },
  { slug: "the-events-entertainment-growth-engine", category: "growth", name: "Events, Entertainment & Media", promise: "Build ticket and sponsor revenue from Week 1, not the final weekend." },
  { slug: "retail-billing-software", category: "software", name: "Retail Billing Software", promise: "Barcode POS, live inventory and GST-ready invoicing for counters doing 50–5,000+ bills a day." },
  { slug: "restaurant-management-software", category: "software", name: "Restaurant Management Software", promise: "Floor, KDS, POS, recipe costing and inventory — know which dishes actually make money." },
  { slug: "order-kitchen-billing-management", category: "software", name: "Order, Kitchen & Billing Management", navName: "Order, Kitchen & Billing", promise: "Dine-in, takeaway and delivery into one kitchen and one bill — plus 0% commission ordering." },
  { slug: "hotel-room-management-software", category: "software", name: "Hotel Room Management Software", navName: "Hotel Room Management", promise: "Front desk, housekeeping, channel manager and revenue in one property system." },
  { slug: "cloud-billing-software", category: "software", name: "Cloud Billing Software", promise: "GST invoicing, receivables and reports from any browser, with role-based access for your CA." },
  { slug: "hr-management-software", category: "software", name: "HR Management Software", promise: "Attendance, leave, payroll and compliance on one platform for 15–5,000+ employees." },
  { slug: "gym-management-software", category: "software", name: "Gym Management Software", promise: "Automated renewals, billing, attendance and classes — retention without the chasing." },
  { slug: "laundry-management-software", category: "software", name: "Laundry Management Software", promise: "Garment-level tracking and proactive WhatsApp updates — no more “where’s my order?”" },
  { slug: "id-card-making-software", category: "software", name: "ID Card Making Software", promise: "Design, bulk-print and track ID cards for employees, students, members and visitors." },
  { slug: "barcode-label-design-software", category: "software", name: "Barcode Label Design Software", navName: "Barcode Label Design", promise: "Design compliant product, asset and shipping labels in-house — print 1 or 100,000." },
  { slug: "brand-reputation-cybersecurity", category: "advisory", name: "Brand Reputation & Cybersecurity", promise: "Reputation management, security and incident response — run as one practice." },
];

export const serviceHref = (slug) => `/services/${slug}`;

export const getOffering = (slug) => offerings.find((o) => o.slug === slug);

export const offeringsByCategory = (category) =>
  offerings.filter((o) => o.category === category);

// Every CTA lands on /contact with the offering and intent attached, so the enquiry
// arrives pre-labelled instead of as a blank "Subject *" field.
export const ctaHref = (slug, intent) =>
  `/contact?service=${encodeURIComponent(slug)}&intent=${encodeURIComponent(intent)}`;

// Desktop dropdown + mobile menu are both built from this, so they cannot drift.
export const serviceNavGroups = () =>
  categoryOrder.map((key) => ({
    title: categories[key].label,
    items: offeringsByCategory(key).map((o) => ({
      nav_name: o.navName || o.name,
      link: serviceHref(o.slug),
    })),
  }));

// Fills the "Services" entry of navData.json with the grouped catalog.
export const withServiceNav = (navData) => ({
  ...navData,
  nav: (navData.nav || []).map((item) =>
    item.nav_name === "Services"
      ? { ...item, link: "/services", groups: serviceNavGroups() }
      : item
  ),
});
