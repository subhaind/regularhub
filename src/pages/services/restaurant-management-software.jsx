import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const RestaurantManagementSoftware = () => {
  const introText = "A table waiting 20 minutes for a bill. A kitchen that doesn't know the dine-in order was modified. A manager who can't tell which menu items are costing more than they earn. These aren't service problems — they're the operational gaps that separate a busy restaurant from a profitable one. Our Restaurant Management Software closes every one of them.";
  const sectionTitle = "The All-in-One Operations Platform for Restaurants, Cafes & Food Chains";
  const serviceItems = [
    {
      title: "Table Management & Floor Plan",
      description: "Visual, drag-and-drop floor plan matching your actual restaurant layout. See every table's status in real time: available, occupied, reserved, or pending billing — on one screen. Assign tables to servers. Merge or split tables with one tap. Track table occupancy time and average billing duration. Reservation management with guest name, contact, and special request logging.",
      image: require("../../../public/assets/imgs/service/4/1.png"),
      width: 102,
      height: 114,
      features: [
        "Drag-and-drop floor plan matching actual layout",
        "Real-time table status: available, occupied, reserved, pending billing",
        "Reservation management with guest details and special requests"
      ]
    },
    {
      title: "Digital Order Taking (Captain Order App)",
      description: "Waitstaff take orders on an Android tablet or phone — no paper order pads. Menu with photos, modifiers, add-ons, and chef notes is instantly available. Orders sent directly to the kitchen printer or KDS — no courier, no miscommunication. Order modification, item cancellation, and course sequencing managed digitally. Customer preference notes attached per order (allergy, spice level, preparation request).",
      image: require("../../../public/assets/imgs/service/4/2.png"),
      width: 107,
      height: 114,
      features: [
        "Order taking on Android tablet/phone with photo menu",
        "Orders sent directly to kitchen printer or KDS",
        "Customer preference notes attached per order"
      ]
    },
    {
      title: "Kitchen Display System (KDS)",
      description: "Real-time order display on kitchen screens — replaces paper KOT (Kitchen Order Tickets). Orders arranged by table, by course, and by timestamp. Colour-coded urgency indicators: green (normal), yellow (delayed), red (critical). Chef marks items as prepared — serving staff notified instantly. Reduces food wait time, prevents missed items, and provides kitchen performance data.",
      image: require("../../../public/assets/imgs/service/4/3.png"),
      width: 112,
      height: 114,
      features: [
        "Real-time order display on kitchen screens",
        "Colour-coded urgency indicators (green/yellow/red)",
        "Chef marks prepared items, serving staff notified instantly"
      ]
    },
    {
      title: "Billing & POS",
      description: "One-click billing from any order — dine-in, takeaway, or delivery. GST-compliant tax invoices with auto-calculation by food/beverage category. Split billing across multiple guests on the same table. Multiple payment modes per bill: cash, UPI, card, loyalty points, or credit — any combination. Complimentary marking with manager authorisation. Digital receipt via WhatsApp or SMS. Daily shift-close cash reconciliation with payment-mode breakdown.",
      image: require("../../../public/assets/imgs/service/2/2.png"),
      width: 102,
      height: 114,
      features: [
        "One-click billing for dine-in, takeaway, delivery",
        "GST-compliant tax invoices with auto-calculation",
        "Multiple payment modes and digital receipt via WhatsApp/SMS"
      ]
    },
    {
      title: "Menu Engineering & Recipe Costing",
      description: "Build your digital menu with item descriptions, photos, portion sizes, category organisation, and GST category tagging. Recipe cost card per menu item: list ingredients, quantities, and unit costs — the software calculates the food cost percentage per dish automatically. Identify your most profitable and least profitable menu items. Menu item availability toggle: mark an item as unavailable and it disappears from the captain app and aggregator menu simultaneously.",
      image: require("../../../public/assets/imgs/service/2/13.png"),
      width: 107,
      height: 114,
      features: [
        "Digital menu with photos, portions, categories, GST tagging",
        "Recipe cost card calculates food cost percentage per dish",
        "Menu item availability toggle for captain and aggregator menus"
      ]
    },
    {
      title: "Inventory & Raw Material Management",
      description: "Set opening stock for every raw material and ingredient. Every sale auto-deducts the ingredient quantities per recipe card. Real-time raw material stock levels — know what's running low before service starts. Wastage and spoilage entry with reason logging. Purchase entry updates stock instantly. Daily closing stock report auto-generated.",
      image: require("../../../public/assets/imgs/service/4/3.png"),
      width: 112,
      height: 114,
      features: [
        "Opening stock setup for all raw materials",
        "Sale auto-deducts ingredient quantities per recipe",
        "Real-time stock levels and auto-generated closing report"
      ]
    },
    {
      title: "Delivery & Aggregator Integration",
      description: "Native integration with Zomato and Swiggy — orders flow directly into the POS without a separate aggregator tablet. Direct delivery order channel via WhatsApp bot — 0% commission orders from regular customers. Delivery partner assignment and order tracking within the system. Separate KOT routing for delivery orders to the packaging station.",
      image: require("../../../public/assets/imgs/service/4/1.png"),
      width: 102,
      height: 114,
      features: [
        "Native Zomato/Swiggy integration into POS",
        "WhatsApp bot for 0% commission direct orders",
        "Delivery partner assignment and order tracking"
      ]
    },
    {
      title: "Staff Management & Shift Operations",
      description: "Staff login and shift assignment. Server-wise order and billing report — track which staff member billed how much per shift. Shift opening and closing cash management. Daily sales summary by shift, by server, and by order type. Manager approval workflow for discounts, complimentaries, and bill cancellations with audit trail.",
      image: require("../../../public/assets/imgs/service/2/19.png"),
      width: 107,
      height: 114,
      features: [
        "Staff login and shift assignment",
        "Server-wise order and billing reports",
        "Manager approval workflow with audit trail"
      ]
    },
    {
      title: "Reports & Business Intelligence",
      description: "Daily sales by order type (dine-in / takeaway / delivery). Menu item performance: top 10 sellers by quantity and revenue. Table turnover rate and average cover value. Hourly revenue heatmap — identify your peak and slow hours. Food cost percentage by category. Aggregator vs. direct order revenue comparison. Weekly and monthly P&L summary.",
      image: require("../../../public/assets/imgs/service/4/3.png"),
      width: 112,
      height: 114,
      features: [
        "Daily sales by order type",
        "Menu item performance and table turnover analytics",
        "Hourly revenue heatmap and food cost by category"
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>Restaurant Management Software | </title>
        <meta name="description" content="All-in-one restaurant management software that handles table management, digital ordering, kitchen display, billing, inventory, aggregator integration, staff management, and business intelligence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceElementV3 introText={introText} sectionTitle={sectionTitle} serviceItems={serviceItems} btnLink="/services/restaurant-management-software_details" />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default RestaurantManagementSoftware;