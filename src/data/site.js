// Single source of truth for site-wide SEO / AEO defaults.
// Read by <SiteSeo> (per-page head), app/robots.js and app/sitemap.js.

export const SITE_URL = "https://regularhub.in";
export const SITE_NAME = "Regularhub";

export const DEFAULT_TITLE = "Regularhub | Digital Product Engineering & Strategic Growth";
export const TITLE_TEMPLATE = "%s | Regularhub";

// Under 155 characters: search engines truncate beyond that.
export const DEFAULT_DESCRIPTION =
  "Regularhub engineers custom business software, SaaS platforms, enterprise systems and AI automation for growing companies.";

export const ORG_DESCRIPTION =
  "Regularhub is a product engineering company that builds custom business software, SaaS applications, cloud infrastructure and autonomous AI agents for growing businesses.";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Regularhub — Digital Product Engineering & Strategic Growth",
};

// Public, indexable pages. Everything else (the template's demo pages, dark-mode
// duplicates, retired redirect URLs) is served with `noindex, follow` and kept out
// of the sitemap, so search engines only see real, canonical content.
export const STATIC_INDEXABLE = ["/", "/about", "/contact", "/services", "/faq"];

const isRetired = (pathname) => pathname.endsWith("_details") || pathname === "/digital-marketing";

export const isIndexable = (pathname) =>
  STATIC_INDEXABLE.includes(pathname) ||
  (pathname.startsWith("/services/") && !isRetired(pathname));

// Absolute canonical URL for a route. Trailing slashes match next.config `trailingSlash`.
export const canonicalFor = (pathname) => {
  const path = pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
  return `${SITE_URL}${path}`;
};

export const absoluteUrl = (path) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);
