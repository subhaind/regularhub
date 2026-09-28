import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const CloudBillingSoftware = () => {
  const introText = "Your billing software should move as fast as your business does — not wait for you to be at the office desktop to raise an invoice, check outstanding payments, or send a GST report. Our Cloud Billing Software gives you a complete, GST-compliant billing and accounting platform accessible from any browser, on any device, from anywhere in the world.";
  const sectionTitle = "Bill Anywhere. Manage Everywhere. Grow Without Limits.";
  const serviceItems = [
    {
      title: "GST-Compliant Invoice Creation",
      description: "Create professional, branded invoices in under 60 seconds. Pre-set customer records, product/service catalogs, and GST rates — every field auto-filled on selection. Support for Tax Invoice, Bill of Supply, Credit Note, Debit Note, Proforma, and Delivery Challan. HSN/SAC code mapping per product. CGST/SGST/IGST auto-applied based on customer location (intrastate vs. interstate). Invoice numbering auto-incremented per financial year.",
      image: require("../../../public/assets/imgs/service/2/7.png"),
      width: 102,
      height: 114,
      features: [
        "Professional invoices in under 60 seconds with auto-filled fields",
        "Support for all invoice types: Tax Invoice, Bill of Supply, Credit Note, etc.",
        "HSN/SAC code mapping with automatic CGST/SGST/IGST application"
      ]
    },
    {
      title: "Recurring Invoice & Subscription Billing",
      description: "Set up recurring billing schedules for retainer clients: monthly, quarterly, or annual. Invoice auto-generated and emailed on the billing date — no manual trigger required. Payment reminder emails sent automatically at due date and 3 days overdue. Recurring billing dashboard shows next due dates, amounts, and payment status for all subscription clients.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 107,
      height: 114,
      features: [
        "Automated recurring billing schedules (monthly, quarterly, annual)",
        "Invoice auto-generation and email on billing date",
        "Payment reminders and recurring billing dashboard"
      ]
    },
    {
      title: "Payment Tracking & Receivables Management",
      description: "Real-time outstanding payment dashboard: who owes what, for how long. Ageing analysis: 0–30 days, 30–60 days, 60–90 days, 90+ days. One-click payment reminder email or WhatsApp message to overdue customers. Record partial payments, advance payments, and write-offs. Customer ledger: complete transaction history from first invoice to last payment.",
      image: require("../../../public/assets/imgs/service/2/16.png"),
      width: 112,
      height: 114,
      features: [
        "Real-time outstanding payment dashboard with ageing analysis",
        "One-click payment reminders via email or WhatsApp",
        "Complete customer ledger with transaction history"
      ]
    },
    {
      title: "Multi-User Access & Role Control",
      description: "Invite your accountant, billing team, or CA with specific role-based access. Admin sees everything. Billing staff can create invoices but not approve credits. Accountant has read-only report access. CA gets GST report access only. All actions logged with user and timestamp — complete audit trail.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 102,
      height: 114,
      features: [
        "Role-based access for accountant, billing team, and CA",
        "Admin sees everything, billing staff limited to invoice creation",
        "Complete audit trail with user and timestamp logging"
      ]
    },
    {
      title: "GST Returns & Reports",
      description: "GSTR-1 report: outward supply summary ready for portal upload. GSTR-3B data: auto-computed tax liability summary. GSTR-2A reconciliation: match your purchase records against supplier filings. HSN-wise sales summary. Input tax credit (ITC) tracker. One-click export in JSON and Excel formats compatible with the GST portal.",
      image: require("../../../public/assets/imgs/service/2/7.png"),
      width: 107,
      height: 114,
      features: [
        "GSTR-1 outward supply summary for portal upload",
        "GSTR-3B auto-computed tax liability and GSTR-2A reconciliation",
        "HSN-wise sales summary and ITC tracker with JSON/Excel export"
      ]
    },
    {
      title: "Expense & Purchase Management",
      description: "Record business expenses with vendor details, GST, and payment mode. Purchase invoice entry for input tax credit tracking. Vendor ledger and outstanding payment management. Expense categorisation for P&L reporting.",
      image: require("../../../public/assets/imgs/service/2/5.png"),
      width: 112,
      height: 114,
      features: [
        "Business expense recording with vendor details and GST",
        "Purchase invoice entry for input tax credit tracking",
        "Vendor ledger and expense categorization for P&L reporting"
      ]
    },
    {
      title: "Business Dashboard & Reports",
      description: "Sales summary: today, this week, this month, this financial year — at a glance. Top customers by revenue. Top products/services by billing volume. Profit & Loss statement. Balance sheet. Cash flow statement. All reports exportable to Excel, PDF, and shareable via link.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 102,
      height: 114,
      features: [
        "Sales summary at a glance (today, week, month, financial year)",
        "Profit & Loss, Balance sheet, and Cash flow statements",
        "All reports exportable to Excel, PDF, and shareable via link"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>Cloud Billing Software | </title>
        <meta name="description" content="Complete GST-compliant cloud billing and accounting platform with automated invoicing, payment tracking, multi-user access, and comprehensive reporting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="\services\cloude-billing-software_details" />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default CloudBillingSoftware;