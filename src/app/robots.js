import { SITE_URL } from "@/data/site";

// Required for `output: "export"` — emitted once at build time as /robots.txt.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
