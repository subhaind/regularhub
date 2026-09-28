import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const RetailBillingSoftware = () => {
  const introText = "You didn't open a retail store to manage spreadsheets, hand-count stock, or reconcile mismatched daily sales reports. You opened it to serve customers fast, run a tight operation, and grow. Our Retail Billing Software puts the entire front-counter and back-office in one system — so you sell more, lose less, and close your accounts in minutes, not hours.";
  const sectionTitle = "The Complete Billing & Inventory Solution for Modern Retail Businesses";
  const serviceItems = [
    {
      title: "Blazing-Fast Billing Counter",
      description: "Process a sale in under 10 seconds with barcode scanner integration and touchscreen POS interface designed for peak-hour speed.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 102,
      height: 114,
      features: [
        "Barcode scanner integration for no manual SKU entry",
        "Touchscreen POS interface for minimal taps from scan to receipt",
        "Support for multiple payment modes in single transaction: cash + UPI + card split billing"
      ]
    },
    {
      title: "Real-Time Inventory Management",
      description: "Every sale automatically deducts from live stock and purchase entries credit inventory for accurate stock tracking at any moment.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 107,
      height: 114,
      features: [
        "Know exactly what's on shelf, in back room, and on order from any device",
        "Set reorder points per SKU for low-stock notifications",
        "Purchase order generation in one click when reorder point is hit"
      ]
    },
    {
      title: "GST-Ready Invoicing & Tax Management",
      description: "Auto-calculation of GST on every bill based on HSN code with instant GST-compliant tax invoice generation.",
      image: require("../../../public/assets/imgs/service/2/7.png"),
      width: 112,
      height: 114,
      features: [
        "Auto-calculation of CGST, SGST, IGST based on product HSN code",
        "GST-compliant tax invoices generated and printed/emailed instantly",
        "Monthly/quarterly GST summary reports ready for CA or portal upload"
      ]
    },
    {
      title: "Customer Loyalty & CRM",
      description: "Build customer database with purchase history, total spend, and last visit tracking for targeted loyalty programs.",
      image: require("../../../public/assets/imgs/service/2/3.png"),
      width: 102,
      height: 114,
      features: [
        "Track purchase history, total spend, and last visit date automatically",
        "Points-based loyalty program: award points per ₹100 spent",
        "Send targeted offers via WhatsApp/SMS to high-value customers"
      ]
    },
    {
      title: "Multi-Store & Franchise Management",
      description: "Manage multiple store locations from single dashboard with stock transfers and branch-wise performance comparison.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 107,
      height: 114,
      features: [
        "Transfer stock between branches in seconds",
        "Compare branch-wise sales, profitability, and inventory performance daily",
        "Role-based access: store managers see only their location"
      ]
    },
    {
      title: "Supplier & Purchase Management",
      description: "Maintain supplier database with pricing history and credit terms, with end-to-end purchase order tracking and GRN matching.",
      image: require("../../../public/assets/imgs/service/2/19.png"),
      width: 112,
      height: 114,
      features: [
        "Maintain supplier database with pricing history and credit terms",
        "Raise and track purchase orders end-to-end",
        "Match GRN against purchase orders automatically"
      ]
    },
    {
      title: "Accounts & Financial Reports",
      description: "Daily, weekly, and monthly P&L summary with cash flow, best-selling products, and slow-moving inventory reports.",
      image: require("../../../public/assets/imgs/service/2/1.png"),
      width: 102,
      height: 114,
      features: [
        "Daily, weekly, and monthly P&L summary reports",
        "Cash flow report: cash in vs. cash out by payment mode",
        "Best-selling and slow-moving inventory reports to identify dead stock"
      ]
    },
    {
      title: "Offline Billing Mode",
      description: "Bills keep printing during internet outages with automatic sync when connectivity is restored for uninterrupted service.",
      image: require("../../../public/assets/imgs/service/2/15.png"),
      width: 107,
      height: 114,
      features: [
        "Bills keep printing even when internet is down",
        "All transactions sync automatically when connectivity restored",
        "No data loss or interrupted service for inconsistent connectivity areas"
      ]
    },
    {
      title: "Integration & Compatibility",
      description: "Seamless integration with hardware, payments, accounting, and communication tools for flexible deployment.",
      image: require("../../../public/assets/imgs/service/2/3.png"),
      width: 112,
      height: 114,
      features: [
        "Compatible with thermal printers, barcode scanners, cash drawers, weighing scales",
        "Supports UPI, card swipe machines, net banking, store credit",
        "Tally export-ready data, Excel-compatible reports, WhatsApp integration"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>Retail Billing Software | </title>
        <meta name="description" content="Complete billing and inventory solution for modern retail businesses with real-time stock tracking, GST compliance, and multi-store management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="\services\retail-billing-software_details" />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default RetailBillingSoftware;