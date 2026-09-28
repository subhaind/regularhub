import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetail = () => {
  const introText = "Ticket sales that spike in the last 48 hours and planners who repeat the same pricing conversation ten times a week aren't inevitable — they're a system problem. We install the fix.";
  const sectionTitle = "The Events & Entertainment Growth Engine";
  const serviceItems = [
    {
      title: "High-Intent Acquisition Funnel",
      description: "Meta and Google performance ads engineered to drive early ticket sales, not last-week panic buying.",
      image: require("../../../public/assets/imgs/service/2/8.png"),
      width: 102,
      height: 114,
      features: [
        "Meta performance ads",
        "Google performance ads",
        "Early ticket sales focus",
        "Anti-panic buying strategy"
      ]
    },
    {
      title: "AI Qualification & Calculator Bots",
      description: "WhatsApp bots that estimate budgets and guest counts instantly, removing the repetitive back-and-forth.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 107,
      height: 114,
      features: [
        "Budget estimation",
        "Guest count calculation",
        "Instant responses",
        "Eliminates repetitive questions",
        "WhatsApp automation"
      ]
    },
    {
      title: "Social Media Optimization (SMO)",
      description: "Visual portfolio and decor content built for Pinterest- and Instagram-driven discovery.",
      image: require("../../../public/assets/imgs/service/2/11.png"),
      width: 103,
      height: 114,
      features: [
        "Visual portfolio content",
        "Decor content focus",
        "Pinterest optimization",
        "Instagram-driven discovery",
        "Visual discovery strategy"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Proposal builders, vendor coordination, and day-of checklists running without manual tracking.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 100,
      height: 114,
      features: [
        "Automated proposal builders",
        "Vendor coordination systems",
        "Day-of checklists",
        "Zero manual tracking",
        "Automated workflow"
      ]
    },
    {
      title: "Brand Visibility Optimization",
      description: "Virtual tour production and B2B venue listings built out for the corporate and wedding planners searching for a space.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 106,
      height: 114,
      features: [
        "Virtual tour production",
        "B2B venue listings",
        "Corporate planner targeting",
        "Wedding planner targeting",
        "Space visibility optimization"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>The Events Entertainment Growth Engine | </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="/services/events-entertainment-media_details"/>
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetail;