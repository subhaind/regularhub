import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Faq1 from "@/components/faq/Faq1";
import FaqCTA from "@/components/cta/FaqCTA";

const Faq = () => {
  return (
    <>
      <Head>
        <title>FAQs | Regularhub</title>
        <meta name="description" content="Answers to common questions about working with Regularhub: our services, how projects run, pricing and support." />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Faq1 />
          <FaqCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Faq;
