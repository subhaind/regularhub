import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const UltimateIndustryProductSolutionsMatrix = () => {
  const introText = "This matrix represents the absolute blueprint of our agency's operational offerings. It matches every single targeted sub-niche with its high-margin Core Product/Service, defines a low-friction Sales Wedge to capture the client, installs a Software/SaaS Engine to secure lifetime recurring value, configures the Marketing Automation, and integrates them into a Unified Solution.";
  const sectionTitle = "Ultimate Industry-Product-Solutions Matrix";
  const serviceItems = [
    {
      title: "1. Healthcare, Wellness & Pet Care",
      description: "AI-powered client acquisition system for clinics, practices, wellness studios & care brands that ensures 24/7 patient engagement and automated growth through acquisition funnels, AI triage bots, social media optimization, marketing automation, and brand visibility.",
      image: require("../../../public/assets/imgs/service/10/1.png"),
      width: 102,
      height: 114,
      features: [
        "High-margin elective surgical packages & health checkups",
        "24/7 AI Triage & Appointment Booking Bot on WhatsApp",
        "Custom Hospital Management System + Staff shift-rostering database"
      ]
    },
    {
      title: "2. B2B, Industrial, Legal & Hyper-Local Distribution",
      description: "AI-powered client acquisition system for manufacturers, legal practices, distributors & local trade businesses that combines long-cycle pipeline management with instant local response through digital cataloging, RFQ portals, AI bots, and marketing automation.",
      image: require("../../../public/assets/imgs/service/10/2.png"),
      width: 107,
      height: 114,
      features: [
        "Custom contract manufacturing agreements & parts fabrication",
        "Digital Cataloging & RFQ Portal Setup",
        "Customer Portal & RFQ Tracking Pipeline"
      ]
    },
    {
      title: "3. Retail & E-Commerce",
      description: "Complete billing & inventory solution for modern retail businesses with real-time stock tracking, GST compliance, multi-store management, and integrated CRM to increase sales and reduce operational losses.",
      image: require("../../../public/assets/imgs/service/10/3.png"),
      width: 112,
      height: 114,
      features: [
        "Blazing-Fast Billing Counter with barcode scanner integration",
        "Real-Time Inventory Management with auto-deduction",
        "GST-Ready Invoicing & Tax Management with auto-calculation"
      ]
    },
    {
      title: "4. Food, Hospitality & Travel",
      description: "All-in-one operations platform for restaurants, cafes & food chains that handles table management, digital ordering, kitchen display, billing, inventory, aggregator integration, staff management, and business intelligence to increase profitability.",
      image: require("../../../public/assets/imgs/service/10/4.png"),
      width: 102,
      height: 114,
      features: [
        "Table Management & Floor Plan with real-time status",
        "Digital Order Taking (Captain Order App) on Android",
        "Kitchen Display System (KDS) replacing paper KOTs"
      ]
    },
    {
      title: "5. Education & Creative Entertainment",
      description: "Specialized client acquisition system for educational institutions and creative entertainment businesses that leverages organic SEO, UGC ads, interactive landing pages, AI booking flows, and marketing automation to increase enrollments and ticket sales.",
      image: require("../../../public/assets/imgs/service/10/5.png"),
      width: 107,
      height: 114,
      features: [
        "Interactive landing page with high-fidelity Explainer Video",
        "AI booking flow on WhatsApp with personalized video messages",
        "Automated treatment plan follow-ups and referral systems"
      ]
    },
    {
      title: "6. Events & Entertainment",
      description: "Acquisition system for events and entertainment businesses that combines LinkedIn outreach, virtual showrooms, AI bots, and marketing automation to increase ticket sales, sponsorships, and attendee engagement.",
      image: require("../../../public/assets/imgs/service/10/6.png"),
      width: 112,
      height: 114,
      features: [
        "Automated LinkedIn sequences targeting event organizers",
        "Virtual 3D showroom and factory walk-through",
        "Free sample fabric swatches order form for conversion"
      ]
    },
    {
      title: "7. Local Services & Real Estate",
      description: "Client acquisition system for local service providers and real estate businesses that uses Google Maps optimization, WhatsApp bots, AI tour scheduling, and marketing automation to increase local leads and conversions.",
      image: require("../../../public/assets/imgs/service/10/7.png"),
      width: 102,
      height: 114,
      features: [
        "Google Maps Local pack optimization for office spaces",
        "AI booking assistant schedules physical space walkthrough",
        "Leads signed via CRM lease portal with digital check-in tokens"
      ]
    },
    {
      title: "8. Online Reputation Management",
      description: "Reputation management system that monitors, protects, and enhances online reviews through automated feedback requests, review generation loops, and proactive engagement to build trust and credibility.",
      image: require("../../../public/assets/imgs/service/10/8.png"),
      width: 107,
      height: 114,
      features: [
        "Automated review requests via WhatsApp/SMS post-service",
        "Incentivized review campaigns with discounts and loyalty points",
        "Professional response templates for negative feedback"
      ]
    },
    {
      title: "9. Industries We Serve",
      description: "Comprehensive overview of the diverse industries our solutions cater to, demonstrating cross-industry expertise and the ability to tailor our acquisition, SaaS, and marketing systems to specific vertical needs.",
      image: require("../../../public/assets/imgs/service/10/9.png"),
      width: 112,
      height: 114,
      features: [
        "Healthcare, Wellness & Pet Care",
        "B2B, Industrial, Legal & Hyper-Local Distribution",
        "Retail & E-Commerce"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>Ultimate Industry Product Solutions Matrix | </title>
        <meta name="description" content="Complete blueprint of our agency's operational offerings matching sub-niches with core products, sales wedges, SaaS engines, and marketing automation into unified solutions for lifetime recurring value." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default UltimateIndustryProductSolutionsMatrix;