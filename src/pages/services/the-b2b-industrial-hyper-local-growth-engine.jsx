import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetail = () => {
  const introText = "Long sales cycles don't have to mean slow pipelines. We install the acquisition system that keeps procurement officers, corporate clients, and local buyers moving toward a signed deal — automatically.";
  const sectionTitle = "The B2B, Industrial & Hyper-Local Growth Engine";
  const serviceItems = [
    {
      title: "High-Intent Acquisition Funnel",
      description: "LinkedIn, local SEO, and Maps traffic routed into a tracked RFQ or booking pipeline.",
      image: require("../../../public/assets/imgs/service/2/8.png"),
      width: 102,
      height: 114,
      features: [
        "LinkedIn outreach and local SEO",
        "Maps visibility for nearby buyers",
        "Tracked RFQ or booking pipeline"
      ]
    },
    {
      title: "AI Qualification & Booking Bots",
      description: "WhatsApp bots that check availability, screen requirements, and route straight to the right pipeline.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 107,
      height: 114,
      features: [
        "Instant WhatsApp responses",
        "Requirement screening and qualification",
        "Automatic routing to appropriate pipeline"
      ]
    },
    {
      title: "Social Media Optimization (SMO)",
      description: "LinkedIn and local-channel content built around credibility: case studies, certifications, facility tours.",
      image: require("../../../public/assets/imgs/service/2/11.png"),
      width: 102,
      height: 114,
      features: [
        "Credibility-focused content",
        "Case studies and certifications highlight",
        "Facility tours and behind-the-scenes"
      ]
    },
    {
      title: "Marketing Automation",
      description: "RFQ confirmations, delivery updates, and seasonal order reminders running without manual follow-up.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 107,
      height: 114,
      features: [
        "Automated RFQ acknowledgments",
        "Delivery milestone notifications",
        "Seasonal order reminders"
      ]
    },
    {
      title: "Brand Visibility Optimization",
      description: "Directory listings, Maps presence, and B2B platform profiles built out where buyers are already searching.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 102,
      height: 114,
      features: [
        "Industry directory listings",
        "Google Business Profile optimization",
        "B2B platform profile enhancement"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>The B2b Industrial Hyper Local Growth Engine | </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetail;