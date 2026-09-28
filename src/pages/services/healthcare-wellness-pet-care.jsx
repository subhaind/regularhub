import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const HealthcareWellnessPetCare = () => {
  const introText = "The patient who searched for you at 11pm and got no reply booked with the clinic that sent a WhatsApp message in four minutes. That is the only difference. Not quality of care. Not price. Response time and system readiness.";
  const sectionTitle = "AI-Powered Client Acquisition Built for Clinics, Practices, Wellness Studios & Care Brands";
  const serviceItems = [
    {
      title: "Acquisition Funnel",
      description: "High-intent traffic routed into conversion-optimised landing pages built around specific triggers.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 102,
      height: 114,
      features: [
        "Google Search, Maps, Meta, Instagram targeting",
        "Symptom checkers, cost calculators, smile quizzes",
        "Pixel and Conversions API for full-funnel attribution"
      ]
    },
    {
      title: "AI Triage & Booking Bot",
      description: "24/7 intelligent assistant that qualifies inquiries, checks eligibility, answers objections, and books appointments.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 107,
      height: 114,
      features: [
        "WhatsApp / Instagram DM / Website integration",
        "Eligibility and availability checks",
        "Deposit collection and escalation to human coordinator"
      ]
    },
    {
      title: "Social Media Optimisation",
      description: "Platform selection, bio engineering, content hook strategy, and posting cadence matched to buyer trust-building.",
      image: require("../../../public/assets/imgs/service/2/19.png"),
      width: 112,
      height: 114,
      features: [
        "Patient testimonials and doctor reels",
        "Procedure walk-throughs and transformation visuals",
        "Trust-building content before booking"
      ]
    },
    {
      title: "Marketing Automation Stack",
      description: "Automated sequences for reminders, alerts, check-ins, and review requests without staff input.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 102,
      height: 114,
      features: [
        "Appointment reminders and pre-op alerts",
        "Post-visit check-ins and prescription refills",
        "Wellness newsletters and review-request triggers"
      ]
    },
    {
      title: "Brand Visibility & Reputation Engine",
      description: "Complete Google Business Profile build-out, local directories, and automated review generation.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 107,
      height: 114,
      features: [
        "Medical categories, procedure keywords, photos, booking integration",
        "Local directory listings with consistent NAP",
        "Automatic post-visit review generation loops"
      ]
    },
    {
      title: "AI Follow-Up Bot",
      description: "Automated WhatsApp follow-up at key intervals post-consultation to improve conversion.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 112,
      height: 114,
      features: [
        "Day 3, 7, 14 treatment-plan follow-up",
        "Re-engagement for unresponded leads",
        "Financing eligibility checking"
      ]
    },
    {
      title: "Empathetic AI Chatbot",
      description: "Sympathetic FAQ chatbot that answers family fears and pre-qualifies needs for physical tours.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 102,
      height: 114,
      features: [
        "Trained on facility-specific FAQs",
        "Empathetic tone calibration",
        "Escalation to human coordinator for urgent cases"
      ]
    },
    {
      title: "WhatsApp Prescription Bot",
      description: "Prescription upload → optical recognition → availability check → order → delivery scheduling.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 107,
      height: 114,
      features: [
        "Prescription photo upload and OCR",
        "Monthly automated refill alerts",
        "Out-of-stock alerts with alternatives"
      ]
    },
    {
      title: "Trust-Building Drip",
      description: "Multi-channel sequence building trust before international patients ever visit.",
      image: require("../../../public/assets/imgs/service/2/3.png"),
      width: 112,
      height: 114,
      features: [
        "10-part email sequence with surgeon credentials",
        "Personalised WhatsApp concierge per lead",
        "Destination recovery guides and visa processing"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>Healthcare, Wellness & Pet Care | </title>
        <meta name="description" content="AI-powered client acquisition system for clinics, practices, wellness studios and care brands that ensures 24/7 patient engagement and automated growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="/services/healthcare-wellness-petcare_details" />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default HealthcareWellnessPetCare;