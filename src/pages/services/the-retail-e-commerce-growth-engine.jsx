import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetail = () => {
  const introText = "A checkout that loses buyers at the last click and a showroom that loses walk-ins to a faster-responding competitor cost the same thing: revenue you already paid to attract. We install the system that keeps that traffic converting.";
  const sectionTitle = "The Retail & E-Commerce Growth Engine";
  const serviceItems = [
    {
      title: "High-Intent Acquisition Funnel",
      description: "Paid and Shopping traffic routed into optimized checkout and booking flows, not generic product pages.",
      image: require("../../../public/assets/imgs/service/2/8.png"),
      width: 102,
      height: 114,
      features: [
        "Optimized checkout flows",
        "Shopping traffic integration",
        "Booking flow optimization",
        "Generic page avoidance"
      ]
    },
    {
      title: "AI Recovery & Booking Bots",
      description: "WhatsApp bots that recover abandoned carts, schedule test drives, and answer inventory questions instantly.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 107,
      height: 114,
      features: [
        "Abandoned cart recovery",
        "Test drive scheduling",
        "Instant inventory answers",
        "WhatsApp automation"
      ]
    },
    {
      title: "Social Media Optimization (SMO)",
      description: "Visual-first content built around product aesthetics, UGC, and creator reviews.",
      image: require("../../../public/assets/imgs/service/2/11.png"),
      width: 103,
      height: 114,
      features: [
        "Product aesthetic focus",
        "User-generated content",
        "Creator review integration",
        "Visual-first strategy"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Shipment updates, restock alerts, and post-purchase nurture running without manual effort.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 100,
      height: 114,
      features: [
        "Automated shipment updates",
        "Restock alert systems",
        "Post-purchase nurture",
        "Zero manual effort"
      ]
    },
    {
      title: "Brand Visibility Optimization",
      description: "Shopify performance, Maps inventory sync, and verified review systems built out where buyers compare before purchasing.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 106,
      height: 114,
      features: [
        "Shopify performance optimization",
        "Maps inventory synchronization",
        "Verified review systems",
        "Pre-purchase comparison visibility"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>The Retail E Commerce Growth Engine | </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="/services/retail-commerce_details" />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetail;