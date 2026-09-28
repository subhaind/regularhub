import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetail = () => {
  const introText = "Every booking, order, and reservation you route through a third-party aggregator is a customer relationship you don't own and a commission you didn't need to pay. We install the system that brings that customer — and the repeat business — back to you directly.";
  const sectionTitle = "The Food, Hospitality & Travel Growth Engine";
  const serviceItems = [
    {
      title: "High-Intent Acquisition Funnel",
      description: "Search, Maps, and travel-ad traffic routed into direct booking and ordering, not a third-party app.",
      image: require("../../../public/assets/imgs/service/2/8.png"),
      width: 102,
      height: 114,
      features: [
        "Search traffic routing",
        "Maps visibility",
        "Travel-ad traffic targeting",
        "Direct booking and ordering",
        "Eliminates third-party dependency"
      ]
    },
    {
      title: "AI Booking & Concierge Bots",
      description: "WhatsApp bots that confirm reservations, answer guest questions, and route custom requests instantly.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 107,
      height: 114,
      features: [
        "Instant reservation confirmation",
        "Guest question answering",
        "Custom request routing",
        "WhatsApp automation",
        "Real-time responses"
      ]
    },
    {
      title: "Social Media Optimization (SMO)",
      description: "Visual, appetite- and destination-driven content built for the platforms your guests actually browse.",
      image: require("../../../public/assets/imgs/service/2/11.png"),
      width: 103,
      height: 114,
      features: [
        "Visual content focus",
        "Appetite-driven imagery",
        "Destination-focused content",
        "Platform-specific optimization",
        "Guest browsing alignment"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Pre-arrival guides, order confirmations, and post-stay review requests running without staff follow-up.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 100,
      height: 114,
      features: [
        "Automated pre-arrival guides",
        "Order confirmation systems",
        "Post-stay review requests",
        "Zero staff follow-up",
        "Automated nurture sequences"
      ]
    },
    {
      title: "Brand Visibility Optimization",
      description: "Google Business Profile, travel listings, and aggregator ranking audits built out where guests compare before booking.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 106,
      height: 114,
      features: [
        "Google Business Profile optimization",
        "Travel listing management",
        "Aggregator ranking audits",
        "Guest comparison targeting",
        "Direct booking visibility"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>The Food Hospitality Travel Growth Engine | </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="/services/food-Hospitality-travel_details" />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetail;