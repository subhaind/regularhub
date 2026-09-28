import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const HrManagementSoftware = () => {
  const introText = "Your HR team shouldn't spend 60% of their week processing attendance sheets, chasing leave approval emails, and manually calculating payroll. They should be hiring the right people, building a culture that retains them, and keeping the organisation compliant. Our HR Management Software handles the operational load so your team can focus on the people work that actually matters.";
  const sectionTitle = "The Complete People Operations Platform for Growing Businesses";
  const serviceItems = [
    {
      title: "Employee Database & Onboarding",
      description: "A single, searchable employee profile for every team member: personal details, emergency contacts, education and work history, document uploads (Aadhaar, PAN, offer letter, agreements), and role and reporting structure. Digital onboarding flow: new joinee receives a link, completes their profile, uploads documents, and acknowledges company policies — before Day 1. Manager is notified when onboarding is complete.",
      image: require("../../../public/assets/imgs/service/2/5.png"),
      width: 102,
      height: 114,
      features: [
        "Single searchable employee profile with personal and professional details",
        "Document uploads for Aadhaar, PAN, offer letters, and agreements",
        "Digital onboarding flow with manager notifications upon completion"
      ]
    },
    {
      title: "Attendance & Time Tracking",
      description: "Biometric integration, mobile app GPS check-in, QR code-based attendance, or facial recognition — configure what fits your operation. Real-time attendance dashboard: who's in, who's absent, who's late — right now, across all locations. Auto-calculation of late arrivals, early departures, overtime, and half-days. Monthly attendance register generated automatically — no manual compilation.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 107,
      height: 114,
      features: [
        "Multiple attendance methods: biometric, GPS, QR code, facial recognition",
        "Real-time dashboard showing who's in, absent, or late across locations",
        "Automatic calculation of late arrivals, early departures, overtime, and half-days"
      ]
    },
    {
      title: "Leave Management",
      description: "Configurable leave policies: earned leave, casual leave, sick leave, comp-off, maternity/paternity — with carry-forward and encashment rules per employee grade. Self-service leave application: employee applies via app → manager approves or declines → HR informed → attendance updated automatically. Leave balance displayed in real time on every employee's dashboard. Holiday calendar configured once, applied company-wide.",
      image: require("../../../public/assets/imgs/service/2/12.png"),
      width: 112,
      height: 114,
      features: [
        "Configurable leave policies with carry-forward and encashment rules",
        "Self-service leave application with automatic attendance updates",
        "Real-time leave balance dashboard and company-wide holiday calendar"
      ]
    },
    {
      title: "Payroll Processing",
      description: "End-to-end automated payroll: attendance data feeds directly into salary calculation. Configurable salary structures: basic, HRA, conveyance, special allowance, performance bonus — per employee grade. Statutory deductions auto-calculated: PF, ESI, PT, TDS with Form 16 generation. Salary slip generated and distributed via email or WhatsApp — one click, entire company. Bank transfer file generated in bank-accepted format (NEFT/RTGS/IMPS bulk upload).",
      image: require("../../../public/assets/imgs/service/2/16.png"),
      width: 102,
      height: 114,
      features: [
        "End-to-end automated payroll from attendance data to bank transfer",
        "Configurable salary structures with automatic statutory deductions",
        "Salary slips via email/WhatsApp and bank transfer files in NEFT/RTGS/IMPS format"
      ]
    },
    {
      title: "Shift Rostering & Scheduling",
      description: "Build weekly and monthly shift rosters with a drag-and-drop visual scheduler. Auto-assign shifts based on department, skill set, and availability. Prevent scheduling conflicts: the system flags double-booking, insufficient rest periods, and overtime thresholds. Roster published to all employees via app with instant notification. Shift swap requests handled within the system — manager approves, attendance automatically updates.",
      image: require("../../../public/assets/imgs/service/2/11.png"),
      width: 107,
      height: 114,
      features: [
        "Drag-and-drop visual scheduler for weekly and monthly shift rosters",
        "Auto-assignment based on department, skill set, and availability",
        "Conflict detection for double-booking, insufficient rest, and overtime thresholds"
      ]
    },
    {
      title: "Performance Management",
      description: "Set quarterly and annual KPIs per employee. Manager submits structured performance review at appraisal cycle. 360° feedback collection: peer, subordinate, and self-assessment forms auto-distributed and collated. Appraisal history maintained per employee — visible during promotion and increment decisions. Performance rating linked to salary revision workflow.",
      image: require("../../../public/assets/imgs/service/2/16.png"),
      width: 112,
      height: 114,
      features: [
        "Quarterly and annual KPI setting per employee",
        "360° feedback collection from peers, subordinates, and self-assessment",
        "Performance rating linked to salary revision workflow"
      ]
    },
    {
      title: "Compliance & Statutory Management",
      description: "PF monthly challan report. ESI monthly contribution statement. PT calculation by state slab. TDS deduction and Form 24Q generation. Labour law compliance tracker: register maintenance alerts, inspection readiness checklist, and statutory filing calendar reminders. Gratuity calculation per the Payment of Gratuity Act.",
      image: require("../../../public/assets/imgs/service/2/3.png"),
      width: 102,
      height: 114,
      features: [
        "Automated PF monthly challan and ESI contribution statements",
        "PT calculation by state slab and TDS deduction with Form 24Q generation",
        "Labour law compliance tracker with alerts and statutory filing reminders"
      ]
    },
    {
      title: "HR Analytics & Reports",
      description: "Headcount by department, location, and grade. Attrition rate with month-wise trend. Absenteeism analysis: top absent employees, departments with highest absence rates. Overtime cost analysis. Payroll cost as a percentage of revenue. Hiring funnel performance (if recruitment module active). Customisable report builder for board-level HR summaries.",
      image: require("../../../public/assets/imgs/service/2/8.png"),
      width: 107,
      height: 114,
      features: [
        "Headcount analytics by department, location, and employee grade",
        "Attrition and absenteeism analysis with trend tracking",
        "Custom report builder for board-level HR summaries"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>HR Management Software | </title>
        <meta name="description" content="Complete HR management software that automates attendance, leave, payroll, and compliance so your team can focus on hiring, engagement, and retention." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="/services/hr-management-software_details" />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default HrManagementSoftware;