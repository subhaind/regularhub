import { SITE_URL, canonicalFor } from "@/data/site";
import { offerings, serviceHref } from "@/data/services/catalog";

// Required for `output: "export"` — emitted once at build time as /sitemap.xml.
export const dynamic = "force-static";

// Only real, canonical pages. The template's demo pages, dark-mode duplicates and
// retired redirect URLs are noindex and deliberately left out (see src/data/site.js).
export default function sitemap() {
  const lastModified = new Date();
  const core = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
  ];
  const services = offerings.map((o) => ({
    path: serviceHref(o.slug),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...core, ...services].map(({ path, changeFrequency, priority }) => ({
    url: canonicalFor(path) || SITE_URL,
    lastModified,
    changeFrequency,
    priority,
  }));
}
