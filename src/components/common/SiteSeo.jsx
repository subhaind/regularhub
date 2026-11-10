import Head from "next/head";
import { useRouter } from "next/router";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  ORG_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  canonicalFor,
  isIndexable,
} from "@/data/site";

// Site-wide head defaults, mounted once in _app.js. Every tag carries a `key`, so a
// page that renders its own <Head> replaces the default instead of duplicating it:
// <title> and name= metas dedupe by type (last wins; they must NOT carry a key, or
// Next skips that check), property= metas and the canonical link dedupe by key.
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Regularhub Private Limited",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: ORG_DESCRIPTION,
      email: "hello@regularhub.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "65/1, Rabindrasarani",
        addressLocality: "Kolkata",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

const SiteSeo = () => {
  const { pathname } = useRouter();
  const canonical = canonicalFor(pathname);
  const image = absoluteUrl(OG_IMAGE.url);

  return (
    <Head>
      <title key="title">{DEFAULT_TITLE}</title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <link key="canonical" rel="canonical" href={canonical} />
      {!isIndexable(pathname) && <meta name="robots" content="noindex, follow" />}

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:locale" property="og:locale" content="en_US" />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:title" property="og:title" content={DEFAULT_TITLE} />
      <meta key="og:description" property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="og:image:width" property="og:image:width" content={String(OG_IMAGE.width)} />
      <meta key="og:image:height" property="og:image:height" content={String(OG_IMAGE.height)} />
      <meta key="og:image:alt" property="og:image:alt" content={OG_IMAGE.alt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={DEFAULT_TITLE} />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
      <meta name="twitter:image" content={image} />

      <script
        key="jsonld-site"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </Head>
  );
};

export default SiteSeo;
