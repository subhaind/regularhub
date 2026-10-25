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
    },
    process: [
      { title: "Diagnose", body: "A growth audit maps exactly where your pipeline leaks — acquisition, response, follow-up and retention." },
      { title: "Architect", body: "You see the complete system for your sub-vertical, with the wedge we start with, before you commit." },
      { title: "Install", body: "Funnel, bots, automation and visibility built on your existing tools — Shopify, Practo, Sheets or a custom stack." },
      { title: "Operate & optimise", body: "Server-side attribution, live dashboards and continuous iteration on what converts." },
    ],
  },
  software: {
    key: "software",
    label: "Operations Software",
    eyebrow: "Operations Software",
    tagline: "Billing, inventory, people and front-of-house — on one system per business.",
    description:
      "Purpose-built platforms for retail, F&B, hospitality, fitness, laundry and back-office teams. GST-ready, works on the hardware you already own, with setup and data migration included.",
    primaryCta: { label: "Book a Live Demo", intent: "demo" },
    secondaryCta: { label: "Start 14-Day Free Trial", intent: "trial" },
    assurance: "14-day free trial. No credit card. Setup support included.",
    midCta: {
      heading: "See it running on your own products and reports.",
      body: "A 30-minute live demo built around your workflow — then a 14-day trial with setup and data migration support.",
    },
    process: [
      { title: "Live demo", body: "A walkthrough on your workflow — your products, your counters, your reports — not a canned tour." },
      { title: "Migrate", body: "Bulk import of products, customers and opening balances from Excel. We handle the heavy lifting." },
      { title: "Go live", body: "Hardware connected, staff trained, and your first day run with support on hand." },
      { title: "Scale", body: "Add branches, users and modules as you grow — role-based access and a full audit trail from day one." },
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
  },
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
