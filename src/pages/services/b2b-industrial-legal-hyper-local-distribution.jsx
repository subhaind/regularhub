import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const B2bIndustrialLegalHyperLocalDistribution = () => {
  const introText = "A ₹2 crore manufacturing contract doesn't close in a chat. But it starts in a LinkedIn message that someone either follows up with a digital catalog or doesn't. A neighbourhood shop doesn't close a seasonal bulk order without answering a WhatsApp query in 20 minutes. The decision speed is different. The principle is identical: whoever has the better system wins the deal.";
  const sectionTitle = "AI-Powered Client Acquisition for Manufacturers, Legal Practices, Distributors & Local Trade Businesses";
  const serviceItems = [
    {
      title: "Acquisition Funnel",
      description: "LinkedIn outreach sequences, local Maps SEO, and inbound lead magnets tuned to the specific channel where your buyer starts their search.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 102,
      height: 114,
      features: [
        "LinkedIn Sales Navigator outreach targeting decision-makers",
        "Local Maps SEO for 'near me' queries",
        "Digital catalogs, RFQ portals, WhatsApp bots as lead magnets"
      ]
    },
    {
      title: "AI Qualification & Response Bots",
      description: "WhatsApp and website bots that answer availability questions, screen order requirements, collect RFQ data, and route to the right team member — 24/7.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 107,
      height: 114,
      features: [
        "Answer availability and pricing questions instantly",
        "Screen order requirements and budget brackets",
        "Auto-route qualified leads to appropriate team members"
      ]
    },
    {
      title: "Social Media Optimisation",
      description: "LinkedIn content for credibility and local-channel content for awareness to build trust before engagement.",
      image: require("../../../public/assets/imgs/service/2/19.png"),
      width: 112,
      height: 114,
      features: [
        "Case studies, capacity highlights, and certifications on LinkedIn",
        "Facebook groups, WhatsApp Channels, Instagram for local awareness",
        "Content hooks that address specific buyer concerns"
      ]
    },
    {
      title: "Marketing Automation Stack",
      description: "RFQ confirmations, delivery updates, seasonal order reminders, and B2B newsletters running without manual follow-up.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 102,
      height: 114,
      features: [
        "Automated RFQ acknowledgment via email and WhatsApp",
        "Delivery milestone updates and seasonal order reminders",
        "B2B industry newsletters and regulatory updates"
      ]
    },
    {
      title: "Brand Visibility & Directory Optimisation",
      description: "Manufacturer directories, Google Business Profile, local Maps listings, and B2B platform profiles built out where buyers compare before contacting.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 107,
      height: 114,
      features: [
        "Rapid catalog search and spec sheet downloads on website",
        "Listed on ThomasNet, IndiaMART, TradeIndia, and industry directories",
        "Google Business Profile with industrial categories and facility photos"
      ]
    },
    {
      title: "Digital Catalog & Lead Funnels",
      description: "Gated digital catalog PDF delivery and LinkedIn outreach sequences to start the sales pipeline.",
      image: require("../../../public/assets/imgs/service/2/3.png"),
      width: 112,
      height: 114,
      features: [
        "LinkedIn sequences with value messages and case studies",
        "Digital catalog gated behind lead form for instant PDF delivery",
        "Outreach: Connection → Value message → Case study → RFQ invitation"
      ]
    },
    {
      title: "RFQ Portal & Management",
      description: "Custom RFQ submission form with auto-acknowledgment and CRM pipeline entry for end-to-end quote management.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 102,
      height: 114,
      features: [
        "Collect material spec, quantity, tolerance, timeline, and budget",
        "Auto-acknowledgment email and WhatsApp within 60 seconds",
        "CRM pipeline: Received → Under Review → Quoted → Negotiating → Won/Lost"
      ]
    },
    {
      title: "Virtual 3D Showroom & Factory Tour",
      description: "Accessible 3D virtual showroom and factory walk-through via link, with sample request forms and bulk order tracking.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 107,
      height: 114,
      features: [
        "Virtual 3D showroom accessible via link — no app download",
        "Free Fabric Swatch Sample Request form with shipping address",
        "B2B Order Management: sample tracking → bulk order conversion"
      ]
    },
    {
      title: "AI Intake & Conflict-Check Bot",
      description: "Google Local Services Ads paired with AI bot that qualifies leads and screens for conflicts before attorney time is spent.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 112,
      height: 114,
      features: [
        "LSAs for high-intent litigation and advisory queries",
        "Bot screens for conflict of interest and collects case summary",
        "Auto-populates Case Management CRM and schedules intake consult"
      ]
    },
    {
      title: "Lead Qualification & Nurture",
      description: "Enterprise CRM pipeline for virtual tours, site visits, proposals, and LOIs with automated follow-up sequences.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 102,
      height: 114,
      features: [
        "Qualified Lead → Virtual Tour Completed → Site Visit Scheduled",
        "Post-virtual-tour: floor plan PDF → ROI case study → site visit",
        "Construction milestone updates and structural spec sheets"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>B2B, Industrial, Legal & Hyper-Local Distribution | </title>
        <meta name="description" content="AI-powered client acquisition system for manufacturers, legal practices, distributors and local trade businesses that combines long-cycle pipeline management with instant local response." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="/services/b2b-industrial-legal-hyperlocal_details" />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default B2bIndustrialLegalHyperLocalDistribution;