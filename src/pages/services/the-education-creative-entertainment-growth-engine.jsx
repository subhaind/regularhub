import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetail = () => {
  const introText = "Enrollment, sponsorship, and trial classes all share the same weakness: they depend on someone following up at the right moment. We install the system that never misses that moment.";
  const sectionTitle = "The Education, Creative & Entertainment Growth Engine";
  const serviceItems = [
    {
      title: "High-Intent Acquisition Funnel",
      description: "Search and social traffic routed into trial bookings, tours, and sponsor pipelines.",
      image: require("../../../public/assets/imgs/service/1/1.jpg"),
      width: 102,
      height: 114,
      features: [
        "Search traffic routing",
        "Social traffic routing",
        "Trial bookings",
        "Campus tours",
        "Sponsor pipelines"
      ]
    },
    {
      title: "AI Booking & Voice Agents",
      description: "WhatsApp and voice bots — some using cloned instructor voices — that personally follow up and schedule.",
      image: require("../../../public/assets/imgs/service/1/2.png"),
      width: 107,
      height: 114,
      features: [
        "WhatsApp bots",
        "Voice bots",
        "Cloned instructor voices",
        "Personal follow-up",
        "Automated scheduling"
      ]
    },
    {
      title: "Social Media Optimization (SMO)",
      description: "Content built around outcomes: student results, recital clips, creator reach, and behind-the-scenes trust.",
      image: require("../../../public/assets/imgs/service/2/11.png"),
      width: 103,
      height: 114,
      features: [
        "Student results focus",
        "Recital clip content",
        "Creator reach highlighting",
        "Behind-the-scenes trust",
        "Outcome-driven content"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Class reminders, exam-calendar alerts, and sponsor follow-ups running without manual chasing.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 100,
      height: 114,
      features: [
        "Class reminders",
        "Exam-calendar alerts",
        "Sponsor follow-ups",
        "Zero manual chasing",
        "Automated nurture sequences"
      ]
    },
    {
      title: "Brand Visibility Optimization",
      description: "Google Business Profile, LMS integrations, and media-kit pages built out where parents, students, and sponsors are searching.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 106,
      height: 114,
      features: [
        "Google Business Profile optimization",
        "LMS integrations",
        "Media-kit pages",
        "Parent search targeting",
        "Student search targeting",
        "Sponsor search targeting"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>The Education Creative Entertainment Growth Engine | </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="/services/education-creative_details"/>
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetail;