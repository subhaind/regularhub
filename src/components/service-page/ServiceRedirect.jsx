import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { SITE_URL } from "@/data/services/catalog";

// Static export cannot use next.config redirects, so retired URLs render this:
// meta refresh for full page loads, router.replace for in-app navigation, and a
// canonical + noindex so search engines consolidate onto the new URL.
const ServiceRedirect = ({ to }) => {
  const router = useRouter();
  const target = to.endsWith("/") ? to : `${to}/`;

  useEffect(() => {
    router.replace(target);
  }, [router, target]);

  return (
    <>
      <Head>
        <title key="title">Redirecting… | Regularhub</title>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <meta name="robots" content="noindex, follow" />
        <link key="canonical" rel="canonical" href={`${SITE_URL}${target}`} />
      </Head>
      <main style={{ padding: "160px 16px", textAlign: "center" }}>
        <p>
          This page has moved. <Link href={target}>Continue to the new page</Link>.
        </p>
      </main>
    </>
  );
};

export default ServiceRedirect;
