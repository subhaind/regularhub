import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const B2bIndustrialLegalHyperlocalServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "B2B, Industrial, Legal & Hyper-Local Distribution";
  const pageSubtitle = "AI-Powered Client Acquisition for Manufacturers, Legal Practices, Distributors & Local Trade Businesses";
  const overview = "";
  const pillars = [{"title": "Acquisition Funnel", "desc": "LinkedIn outreach sequences, local Maps SEO, and inbound lead magnets (digital catalogs, RFQ portals, WhatsApp bots) tuned to the specific channel where your buyer starts their search."}, {"title": "AI Qualification & Response Bots", "desc": "WhatsApp and website bots that answer availability questions, screen order requirements, collect RFQ data, and route to the right team member \u2014 24/7."}, {"title": "Social Media Optimisation (SMO)", "desc": "LinkedIn content for credibility (case studies, capacity highlights, certifications) and local-channel content for awareness (Facebook groups, WhatsApp Channels, Instagram)."}, {"title": "Marketing Automation Stack (Email \u00b7 WhatsApp \u00b7 SMS)", "desc": "RFQ confirmations, delivery updates, seasonal order reminders, and B2B newsletters \u2014 running without manual follow-up."}, {"title": "Brand Visibility & Directory Optimisation", "desc": "Manufacturer directories, Google Business Profile, local Maps listings, and B2B platform profiles built out where your buyers compare before contacting."}];
  const subVerticals = [{"title": "2.1 Manufacturing & B2B Industrial Plants", "who": "Contract manufacturers, custom fabrication units, plastic injection moulding plants, metal processing facilities, and industrial component suppliers serving B2B procurement teams.", "leak": "You have the capacity. You have the capability. But procurement officers who search for you find a 2015 website with no catalog download, no RFQ system, and no way to quickly confirm whether you can handle their spec \u2014 so they move to the supplier who has all three.", "wedge": "", "outcome": "Procurement officers can discover, qualify, and submit an RFQ in one session \u2014 without needing a phone call to confirm whether you can handle their spec.", "details": "Who this is for: Contract manufacturers, custom fabrication units, plastic injection moulding plants, metal processing facilities, and industrial component suppliers serving B2B procurement teams. The Core Revenue Leak: You have the capacity. You have the capability. But procurement officers who search for you find a 2015 website with no catalog download, no RFQ system, and no way to quickly confirm whether you can handle their spec \u2014 so they move to the supplier who has all three. The Wedge: A Digital Catalog PDF download gated behind an email/name form \u2014 the lowest-friction first step that starts the pipeline. What We Install: Acquisition Funnel \u2014 LinkedIn Sales Navigator outreach targeting Procurement Officers, Supply Chain Managers, and Operations Directors at companies matching your ICP (industry, turnover, employee size). \u2014 Outreach sequence: Connection \u2192 Value message with catalog link \u2192 Follow-up with case study \u2192 RFQ invitation. \u2014 Digital Catalog gated behind a lead form: instant PDF delivery to email + WhatsApp. RFQ Portal \u2014 Custom RFQ submission form collecting: material spec, quantity, tolerance requirement, timeline, and budget bracket. \u2014 Auto-acknowledgment email and WhatsApp to the submitter within 60 seconds. \u2014 CRM pipeline entry with status tracking: Received \u2192 Under Review \u2192 Quoted \u2192 Negotiating \u2192 Won/Lost. Social Media Optimisation \u2014 Primary channels: LinkedIn, YouTube. \u2014 Bio: \"Company | Advanced industrial manufacturing. Streamlining custom production pipelines for Industries Served.\" \u2014 Content hooks: Factory production line videos, materials safety case studies, certifications showcase, engineering capabilities walk-throughs, and \"how we solved spec challenge for client type\" case study posts. Marketing Automation \u2014 Email: Monthly factory update (capacity availability, new machinery, lead time updates) and B2B industry newsletter. \u2014 WhatsApp: Real-time shipping and delivery milestone updates per order. \u2014 SMS: RFQ received confirmation and quote-ready notification. Brand Visibility \u2014 Website rebuilt or upgraded with rapid catalog search, spec sheet downloads, and certification verification. \u2014 Listed on ThomasNet, IndiaMART, TradeIndia, and relevant industry-specific B2B directories. \u2014 GBP updated with industrial categories, service area, and facility photos. Outcome: Procurement officers can discover, qualify, and submit an RFQ in one session \u2014 without needing a phone call to confirm whether you can handle their spec."}, {"title": "2.2 Textile & Garment Manufacturers", "who": "Garment factories, textile mills, and private-label manufacturing units supplying fashion brands, retail chains, and export buyers with bulk production runs.", "leak": "Fashion brand founders and buyers want to see the quality before committing to a 500-unit MOQ. Without a sample process that builds visual confidence fast, they default to the supplier they can physically visit \u2014 which usually means a competitor in a larger city.", "wedge": "", "outcome": "Brand founders trust enough to place a sample order without flying to your facility \u2014 and the sample-to-bulk conversion is tracked and followed up systematically.", "details": "Who this is for: Garment factories, textile mills, and private-label manufacturing units supplying fashion brands, retail chains, and export buyers with bulk production runs. The Core Revenue Leak: Fashion brand founders and buyers want to see the quality before committing to a 500-unit MOQ. Without a sample process that builds visual confidence fast, they default to the supplier they can physically visit \u2014 which usually means a competitor in a larger city. The Wedge: A 3D Virtual Showroom Factory Tour that lets an international or out-of-city buyer walk your facility, see your machinery, and review fabric quality \u2014 from their laptop. What We Install: Acquisition Funnel \u2014 Automated LinkedIn sequences targeting Fashion Brand Founders, Merchandisers, and Sourcing Managers at growing D2C and retail brands. \u2014 Virtual 3D showroom and factory walk-through accessible via link \u2014 no app download required. \u2014 Free Fabric Swatch Sample Request form collecting design specification and shipping address. B2B Order Management \u2014 Sample order tracking: request \u2192 dispatch \u2192 delivery \u2192 feedback \u2192 bulk order conversion. \u2014 WhatsApp notification at each stage of the sample journey. \u2014 Bulk order pipeline logged in B2B Order Management System with production milestone tracking. Social Media Optimisation \u2014 Primary channels: LinkedIn, Instagram. \u2014 Bio: \"Ethical garment manufacturing. Standardising bulk production for top fashion brands. Request a sample \u2193\" \u2014 Content hooks: Fabric tension and durability test reels, sustainability certification showcases, seasonal fashion catalog previews, and factory team culture content. Marketing Automation \u2014 Email: Product line development timelines, seasonal styling guides, and new fabric availability alerts. \u2014 WhatsApp: Sample dispatch notification with tracking link; bulk order production milestone updates. \u2014 SMS: Order status change alerts. Brand Visibility \u2014 High-quality portfolio page showcasing sample photography, fabric swatches, and production capacity stats. \u2014 Listed on Textile Exchange, FashionGo, and local/regional B2B garment directories. Outcome: Brand founders trust enough to place a sample order without flying to your facility \u2014 and the sample-to-bulk conversion is tracked and followed up systematically."}, {"title": "2.3 Lawyers & Legal Services", "who": "Corporate law firms, litigation boutiques, IP practices, family law practitioners, and legal advisory firms serving both individual and business clients.", "leak": "Your intake process is a generic contact form. Leads who submit wait 24\u201348 hours for a reply. In that window, half have already called another firm. The other half are unqualified and waste your team's consultation time.", "wedge": "", "outcome": "Qualified, conflict-cleared leads book their own intake consult \u2014 your team only sees cases that are worth their time.", "details": "Who this is for: Corporate law firms, litigation boutiques, IP practices, family law practitioners, and legal advisory firms serving both individual and business clients. The Core Revenue Leak: Your intake process is a generic contact form. Leads who submit wait 24\u201348 hours for a reply. In that window, half have already called another firm. The other half are unqualified and waste your team's consultation time. The Wedge: Google Local Services Ads paired with an AI Intake & Conflict-Check Bot that qualifies the lead and screens for conflicts before a single minute of fee-earner time is spent. What We Install: Acquisition Funnel \u2014 Google Local Services Ads (LSAs) for high-intent litigation and advisory queries in your practice areas. \u2014 LSA-to-bot handoff: inquiry arrives \u2192 bot screens for conflict of interest \u2192 collects case summary \u2192 schedules intake consult. \u2014 LinkedIn thought-leadership content targeting corporate decision-makers. AI Intake Bot \u2014 Conflict-of-interest screening: collects opposing party names against a configurable exclusion list. \u2014 Case summary collection: practice area, urgency, outcome sought, budget indication. \u2014 Auto-populates Case Management CRM (Clio, MyCase, or custom build) with intake record. \u2014 Consultation scheduling: books 30-minute paid intake directly into the lead attorney's calendar. Social Media Optimisation \u2014 Primary channels: LinkedIn, Twitter/X. \u2014 Bio: \"Firm | Protecting business interests. Corporate litigation & advisory. Practice City.\" \u2014 Content hooks: Legal updates in plain language, anonymised client case studies, myth-busting legal Q&A clips, and \"what to do when situation\" explainer posts. Marketing Automation \u2014 Email: Legal alert newsletters covering regulatory changes relevant to your client industries; corporate policy update bulletins. \u2014 WhatsApp: Intake appointment confirmation, document upload reminders, and court date scheduling alerts. \u2014 SMS: Court scheduling reminders and deadline alert messages. Brand Visibility \u2014 GBP optimised for \"attorney near me,\" \"corporate lawyer City,\" and specific practice area searches. \u2014 Consistent citations across Avvo, Justia, SuperLawyers, and local bar association directories. \u2014 Review request triggered post-matter-close via SMS. Outcome: Qualified, conflict-cleared leads book their own intake consult \u2014 your team only sees cases that are worth their time."}, {"title": "2.4 Coworking Spaces", "who": "Independent coworking spaces, managed office providers, business centres, and flexible workspace operators offering hot desks, dedicated desks, and private team cabins.", "leak": "A startup founder searching for an office walks past your building, Googles \"coworking space near me,\" lands on your website, and clicks \"Book a Tour.\" The form asks for 8 fields and promises a callback within 24 hours. She books a tour at the next result \u2014 which had a one-click calendar embed.", "wedge": "", "outcome": "Tour requests convert to booked visits within minutes \u2014 and the post-tour sequence fills desks without a dedicated sales hire.", "details": "Who this is for: Independent coworking spaces, managed office providers, business centres, and flexible workspace operators offering hot desks, dedicated desks, and private team cabins. The Core Revenue Leak: A startup founder searching for an office walks past your building, Googles \"coworking space near me,\" lands on your website, and clicks \"Book a Tour.\" The form asks for 8 fields and promises a callback within 24 hours. She books a tour at the next result \u2014 which had a one-click calendar embed. The Wedge: A Google Maps Local Pack position combined with an AI Tour-Scheduling Bot that gets from \"interested\" to \"tour confirmed\" in under 2 minutes. What We Install: Acquisition Funnel \u2014 Google Maps and Local SEO optimised for \"coworking space Area,\" \"office for rent City,\" and \"shared workspace near me.\" \u2014 Website AI booking assistant: workspace type preference \u2192 availability check \u2192 tour booked \u2192 calendar confirmation. \u2014 LinkedIn content strategy targeting founders, remote team managers, and operations leads. AI Tour Bot \u2014 WhatsApp: Sends digital check-in token before the tour, building and parking directions, and a \"what to expect\" briefing. \u2014 Post-tour follow-up sequence: same-day thank-you \u2192 Day 2 availability and pricing recap \u2192 Day 5 trial day offer. \u2014 Lead signed via CRM-integrated lease portal with e-signature. Social Media Optimisation \u2014 Primary channels: LinkedIn, Instagram. \u2014 Bio: \"Premium workspaces designed for productivity in City. Book a free day trial below \u2193\" \u2014 Content hooks: Space tour walk-throughs, member highlight stories, amenity showcases (phone booths, podcast rooms, barista), and community event previews. Marketing Automation \u2014 WhatsApp: Digital check-in token, tour reminder, and post-tour follow-up. \u2014 Email: Day-pass vouchers, community event invitations, and member renewal reminders. \u2014 SMS: Invoice receipt and payment confirmation notifications. Brand Visibility \u2014 GBP detailed with desk types (hot desk, dedicated, team cabin), parking, security system, operating hours, and amenities. \u2014 Review QR code placed at reception and in meeting rooms. \u2014 Listed on Coworker.com, NearDesk, and local startup community directories. Outcome: Tour requests convert to booked visits within minutes \u2014 and the post-tour sequence fills desks without a dedicated sales hire."}, {"title": "2.5 Commercial Real Estate Developers", "who": "Developers and promoters of commercial office parks, retail plazas, IT corridors, and mixed-use commercial complexes targeting corporate tenants, retail chain operators, and institutional investors.", "leak": "Your LinkedIn ads are reaching the right titles \u2014 but the landing experience is a brochure PDF and a \"contact us\" email. The prospect who was ready to explore has lost momentum before the site visit is scheduled.", "wedge": "", "outcome": "Corporate decision-makers explore and shortlist your development without a site visit dependency \u2014 which only happens once they're already committed.", "details": "Who this is for: Developers and promoters of commercial office parks, retail plazas, IT corridors, and mixed-use commercial complexes targeting corporate tenants, retail chain operators, and institutional investors. The Core Revenue Leak: Your LinkedIn ads are reaching the right titles \u2014 but the landing experience is a brochure PDF and a \"contact us\" email. The prospect who was ready to explore has lost momentum before the site visit is scheduled. The Wedge: A 3D Virtual Interior Tour of the development combined with LinkedIn/Meta Lead Ads \u2014 giving corporate decision-makers the confidence of a physical tour from their office. What We Install: Acquisition Funnel \u2014 LinkedIn target ads to Operations Directors, Real Estate Heads, and CFOs at corporations matching your ideal tenant profile. \u2014 Meta retargeting for warm leads who've seen the LinkedIn ad but haven't converted. \u2014 3D virtual interior tour accessible immediately post-click, no download required. \u2014 WhatsApp qualification bot: zone preference \u2192 floor plate requirement \u2192 timeline \u2192 routes to relationship manager. Lead Qualification & Nurture \u2014 Enterprise CRM pipeline: Qualified Lead \u2192 Virtual Tour Completed \u2192 Site Visit Scheduled \u2192 Proposal \u2192 LOI \u2192 Signed. \u2014 Post-virtual-tour follow-up: same-day floor plan PDF \u2192 Day 3 ROI case study email \u2192 Day 7 site visit invitation. Social Media Optimisation \u2014 Primary channels: LinkedIn, YouTube. \u2014 Bio: \"Constructing commercial landmarks in City. Browse our current development spaces.\" \u2014 Content hooks: Drone project progress updates, commercial zone growth analysis posts, structural walk-through videos, and \"why Location is the next business district\" thought-leadership content. Marketing Automation \u2014 Email: Real estate investment brochures, structural spec sheets, ROI projections, and regulatory compliance notes. \u2014 WhatsApp: Construction milestone updates shared with shortlisted prospects. \u2014 SMS: Site visit scheduling confirmations. Brand Visibility \u2014 Enterprise landing page with interactive floor-layout selector and zone pricing. \u2014 Listed on 99acres Commercial, MagicBricks Business, JLL, and global commercial property platforms. Outcome: Corporate decision-makers explore and shortlist your development without a site visit dependency \u2014 which only happens once they're already committed."}, {"title": "2.6 Rental Office Places & PGs (Paying Guests)", "who": "PG accommodation operators, managed rental properties, and residential-to-rental conversions serving students, young professionals, and working migrants in urban and semi-urban areas.", "leak": "A student searches \"PG near College\" at 10pm. Four operators have Maps listings. Three don't have their WhatsApp linked. One has an active bot that shows available rooms, sharing types, and rent rates instantly. That one gets the inquiry.", "wedge": "", "outcome": "Availability questions are answered instantly at any hour \u2014 and the tenant who replies first is your tenant.", "details": "Who this is for: PG accommodation operators, managed rental properties, and residential-to-rental conversions serving students, young professionals, and working migrants in urban and semi-urban areas. The Core Revenue Leak: A student searches \"PG near College\" at 10pm. Four operators have Maps listings. Three don't have their WhatsApp linked. One has an active bot that shows available rooms, sharing types, and rent rates instantly. That one gets the inquiry. The Wedge: GBP Optimisation paired with a WhatsApp Booking Bot showing live availability, sharing options, and rental rates \u2014 instantly. What We Install: Acquisition Funnel \u2014 Local Maps SEO targeting student zones, corporate campuses, and hospital areas. \u2014 WhatsApp bot: room type preference \u2192 sharing vs. single \u2192 budget bracket \u2192 available rooms displayed with photos \u2192 tour scheduled. \u2014 Instagram content targeting incoming students and relocating professionals. Tenant Management \u2014 Digital lease generation post-tour: e-sign via WhatsApp. \u2014 Monthly rent invoice sent automatically on the 1st of each month. \u2014 Tenant communication channel: maintenance requests, facility announcements, and renewal alerts. Social Media Optimisation \u2014 Primary channels: Instagram, Facebook. \u2014 Bio: \"Premium managed accommodations in City. Single & double occupancy. WhatsApp to book \u2193\" \u2014 Content hooks: Room tour reels, amenity showcases (gym, study room, WiFi speed), and resident life content. Marketing Automation \u2014 WhatsApp: Monthly rent billing invoices and payment reminders. \u2014 SMS: Payment confirmation alerts. \u2014 Email: Tenant agreement renewal notifications sent 45 days before expiry. Brand Visibility \u2014 GBP updated with room types, security features, laundry access, and food availability. \u2014 Listed on NoBroker, OYO Life, Nestaway, and local student Facebook groups. \u2014 Review QR codes in lobby and common areas. Outcome: Availability questions are answered instantly at any hour \u2014 and the tenant who replies first is your tenant."}, {"title": "2.7 Pesticide Shops & Agricultural Retailers", "who": "Authorised fertiliser and pesticide distributors, agri-input retailers, and agricultural supply shops serving farmers in semi-urban and rural markets.", "leak": "A farmer spots pest damage on his crop on a Wednesday evening. He needs a product recommendation before Thursday morning spray window. If he can't reach you, he buys from whoever he can reach \u2014 even if their product is less effective.", "wedge": "", "outcome": "Farmers get expert answers in minutes \u2014 with the sale attached to the recommendation.", "details": "Who this is for: Authorised fertiliser and pesticide distributors, agri-input retailers, and agricultural supply shops serving farmers in semi-urban and rural markets. The Core Revenue Leak: A farmer spots pest damage on his crop on a Wednesday evening. He needs a product recommendation before Thursday morning spray window. If he can't reach you, he buys from whoever he can reach \u2014 even if their product is less effective. The Wedge: A WhatsApp Crop Advisor Bot that identifies pest problems from a photo and recommends the right product \u2014 within minutes. What We Install: Acquisition Funnel \u2014 Local Maps SEO optimised for seasonal crop terms: \"pesticide shop near me,\" \"fertiliser dealer District,\" \"crop spray Season.\" \u2014 WhatsApp Advisor: farmer sends photo of affected crop \u2192 bot identifies pest/disease from image \u2192 recommends product \u2192 accepts payment \u2192 schedules shop pickup or delivery. Seasonal Demand Capture \u2014 Calendar-based WhatsApp broadcasts: Rabi season prep, Kharif season prep, and festival season discounts. \u2014 Pre-order system for high-demand seasonal products. Social Media Optimisation \u2014 Primary channels: WhatsApp Channels, Facebook Groups. \u2014 Bio: \"Authorised fertiliser & pesticide distributor. Expert crop advice 24/7 on WhatsApp \u2193\" \u2014 Content hooks: Crop pest identification visual charts, seasonal spraying schedules, soil health improvement tips, and yield improvement case studies. Marketing Automation \u2014 WhatsApp: Crop spray calendar reminders tied to regional crop cycle. \u2014 SMS: Soil test availability alerts and new product arrival notifications. \u2014 Email: Seasonal product order sheets and agri-advisory newsletters. Brand Visibility \u2014 GBP listing with products in stock, bulk ordering details, and delivery coverage area. \u2014 Active Facebook Group for local farming community updates and crop advisory. \u2014 Tie-up with agricultural extension offices for referral listings. Outcome: Farmers get expert answers in minutes \u2014 with the sale attached to the recommendation."}, {"title": "2.8 Water Bottle Local Distributors", "who": "Hyper-local purified water can delivery operators serving residential societies, office complexes, and commercial establishments with 20-litre subscription delivery.", "leak": "Subscription churn happens not because customers dislike the product \u2014 but because pausing and resuming is complicated. They pause once for a trip, the deliveries keep coming, and they switch to a competitor who makes it easier.", "wedge": "", "outcome": "Subscription churn drops because pause/resume is one message \u2014 and QR stickers turn every delivery into a reorder prompt.", "details": "Who this is for: Hyper-local purified water can delivery operators serving residential societies, office complexes, and commercial establishments with 20-litre subscription delivery. The Core Revenue Leak: Subscription churn happens not because customers dislike the product \u2014 but because pausing and resuming is complicated. They pause once for a trip, the deliveries keep coming, and they switch to a competitor who makes it easier. The Wedge: A WhatsApp Subscription Pause/Resume Bot that makes managing deliveries easier than buying from any competitor. What We Install: Acquisition Funnel \u2014 Hyper-local flyers with WhatsApp QR codes in target residential societies and office buildings. \u2014 WhatsApp bot onboarding: address \u2192 delivery frequency (daily/alternate day/weekly) \u2192 quantity \u2192 auto-pay link setup. Subscription Management Bot \u2014 One-tap pause: \"Going on vacation? Reply PAUSE + return date and deliveries stop automatically.\" \u2014 One-tap resume: \"Back home? Reply RESUME and deliveries restart tomorrow.\" \u2014 Auto-reorder QR sticker on each water can: scan to reorder the same quantity. \u2014 Monthly statement generated and sent to customer automatically. Social Media Optimisation \u2014 Primary channels: WhatsApp Business, Facebook local groups. \u2014 Bio: \"Pure drinking water delivered to your doorstep. Manage subscription on WhatsApp \u2193\" \u2014 Content hooks: Purification process overview, water quality certification showcase, and delivery team reliability content. Marketing Automation \u2014 WhatsApp: Weekly delivery confirmation, pause/resume controls, and monthly statement. \u2014 SMS: Delivery confirmation alerts. \u2014 Email: Monthly billing statement. Brand Visibility \u2014 Review campaign targeting residential society WhatsApp groups. \u2014 QR stickers on water cans for instant reorder. \u2014 GBP listing with coverage area, pricing, and delivery schedule. Outcome: Subscription churn drops because pause/resume is one message \u2014 and QR stickers turn every delivery into a reorder prompt."}, {"title": "2.9 Dasakarma Vandar (Ritual Item Shops)", "who": "Bengali and regional ritual item shops (Dasakarma Bhandar, puja samagri stores) selling festival kits, wedding puja boxes, and devotional items for Durga Puja, Diwali, Dussehra, and other religious occasions.", "leak": "Peak demand is predictable by the Hindu calendar \u2014 but most shops don't start capturing pre-orders until the week of the festival, when demand exceeds supply and buyers go to whoever pre-sold to them.", "wedge": "", "outcome": "Festival demand is captured and pre-sold 2\u20133 weeks ahead \u2014 not scrambled for in the final 48 hours.", "details": "Who this is for: Bengali and regional ritual item shops (Dasakarma Bhandar, puja samagri stores) selling festival kits, wedding puja boxes, and devotional items for Durga Puja, Diwali, Dussehra, and other religious occasions. The Core Revenue Leak: Peak demand is predictable by the Hindu calendar \u2014 but most shops don't start capturing pre-orders until the week of the festival, when demand exceeds supply and buyers go to whoever pre-sold to them. The Wedge: Calendar-Based GBP Search Optimisation that puts your shop at the top of local Maps results in the weeks before each major festival. What We Install: Acquisition Funnel \u2014 GBP content updated 3 weeks before each major festival: keywords, photos, offers, and \"what's in stock\" posts. \u2014 WhatsApp bot for custom puja kit pre-orders: festival type \u2192 household size \u2192 optional add-ons \u2192 total, payment link, collection date. \u2014 Instagram visual content calendar aligned to the Bengali and Hindu festival schedule. Pre-Order System \u2014 Custom kit configuration on WhatsApp: item-by-item checklist shared, customer confirms, invoice generated. \u2014 Pre-order collection at dedicated counters \u2014 no queue for advance customers. \u2014 Reminder sent 48 hours before collection date. Social Media Optimisation \u2014 Primary channels: WhatsApp Channels, Instagram. \u2014 Bio: \"All your ritual & puja essentials. Order custom festival kits on WhatsApp \u2193\" \u2014 Content hooks: Festival item checklist reels, puja material explanation videos, and product catalog showcase posts. Marketing Automation \u2014 WhatsApp: Religious holiday reminder alerts \u2014 \"Durga Puja kit reservations open this week. Secure yours now.\" \u2014 SMS: Order-ready notification for pickup. \u2014 Email: Annual Hindu/Bengali festival calendar card sent in January. Brand Visibility \u2014 Google Maps listing updated for local festival-specific keywords and extended seasonal hours. \u2014 Instagram aesthetic showcasing puja material arrangements and festival kit packaging. Outcome: Festival demand is captured and pre-sold 2\u20133 weeks ahead \u2014 not scrambled for in the final 48 hours."}];
  const outcomes = [{"label": "| What Usually Happens | What This System Does |", "detail": ""}, {"label": "|---|---|", "detail": ""}, {"label": "| RFQs sit in inboxes with no tracking | Every RFQ is logged, assigned, and followed up automatically |", "detail": ""}, {"label": "| Local WhatsApp inquiries answered hours late | Bot answers instantly with availability, pricing, and booking |", "detail": ""}, {"label": "| Seasonal demand spikes are scrambled for | Pre-order and pre-sell system captures demand weeks early |", "detail": ""}, {"label": "| LinkedIn outreach stalls after the first message | Multi-step automated sequence with value at each touch |", "detail": ""}, {"label": "| Reviews depend on someone remembering to ask | Post-transaction review request fires automatically |", "detail": ""}];
  const faqs = [{"question": "Does this work for very small local shops \u2014 not just factories and law firms?", "answer": "Yes. The hyper-local playbooks (pesticide shops, water distributors, ritual item shops) are built specifically for owner-operated businesses with 1\u20135 staff."}, {"question": "How does the LinkedIn outreach work without being spammy?", "answer": "Each sequence is built around a value touchpoint \u2014 a catalog download, a case study, a sample offer \u2014 not a cold pitch. Open and reply rates average significantly above industry standard because the first message gives before it asks."}, {"question": "Can the WhatsApp bots handle regional languages?", "answer": "Yes. Bengali, Hindi, Tamil, Telugu, Marathi, and other regional languages are supported through our bot-building framework."}, {"question": "Do you manage the CRM or just set it up?", "answer": "We build, configure, and train your team on the CRM. For clients on full-management engagements, we maintain and update the pipeline actively."}];

  return (
    <>
      <Head>
        <title>{pageTitle} | Regularhub Private Limited</title>
        <meta name="description" content={pageSubtitle || overview} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          
          {/* Hero Section */}
          <section className="development__area pt-130 pb-100">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <span className="badge bg-primary text-white p-2 px-3 rounded-pill fw-bold mb-3 d-inline-block">
                      AI-Powered Acquisition Engine
                    </span>
                    <h1 className="sec-title animation__char_come text-dark fw-bold mb-3" ref={charAnim}>
                      {pageTitle}
                    </h1>
                    {pageSubtitle && <p className="lead fw-bold text-primary mb-4" style={{ color: "#1d4ed8" }}>{pageSubtitle}</p>}
                  </div>
                  {overview && <p className="text-secondary fs-5 mb-4" style={{ lineHeight: "1.7" }}>{overview}</p>}
                  <div className="d-flex gap-3 mt-4">
                    <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                      <span></span>Book Strategy Call <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="development__img shadow-lg rounded-4 overflow-hidden border">
                        <Image
                          priority
                          width={800}
                          height={450}
                          style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                          src="/assets/imgs/thumb/dev-1.jpg"
                          alt={pageTitle}
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="development__img shadow-md rounded-4 overflow-hidden border">
                        <Image
                          priority
                          width={800}
                          height={300}
                          style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                          src="/assets/imgs/thumb/dev-2.jpg"
                          alt={pageTitle}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5 System Pillars */}
          {pillars && pillars.length > 0 && (
            <section className="workflow__area-6 pt-130 pb-130 bg-light">
              <div className="container g-0 line pb-130">
                <div className="line-3"></div>
                <div className="sec-title-wrapper mb-5 text-center">
                  <h2 className="sec-title title-anim">What We Install Across Every Business</h2>
                  <p className="text-muted">Complete 5-stage acquisition & retention infrastructure</p>
                </div>
                <div className="workflow__wrapper-6">
                  <div className="row">
                    {pillars.map((pil, index) => (
                      <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                        <div className="workflow__slide-6 p-4 border rounded-4 shadow-sm bg-white h-100 border-top border-4 border-primary">
                          <h3 className="workflow__title-6 fw-bold mb-3 fs-4 text-dark" style={{ fontSize: "1.25rem" }}>
                            <i className="fa-solid fa-cube text-primary me-2"></i>{pil.title}
                          </h3>
                          <p className="text-muted mb-0">{pil.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Sub-Vertical Deep Dives */}
          {subVerticals && subVerticals.length > 0 && (
            <section className="service__detail pt-130 pb-130">
              <div className="container g-0 line">
                <div className="line-3"></div>
                <div className="sec-title-wrapper mb-5 text-center">
                  <h2 className="sec-title title-anim">Sub-Vertical Systems & Solutions</h2>
                  <p className="text-muted">Tailored wedges and automated workflows built per industry niche</p>
                </div>
                <div className="row">
                  {subVerticals.map((sv, idx) => (
                    <div key={idx} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-4">
                      <div className="border rounded-4 p-4 bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="badge bg-primary text-white mb-3 p-2 px-3 rounded-pill fw-bold fs-6">
                            {sv.title}
                          </div>
                          {sv.who && (
                            <div className="p-3 mb-2 bg-light rounded-3 border">
                              <i className="fa-solid fa-users text-primary me-2"></i><strong>Who this is for:</strong> {sv.who}
                            </div>
                          )}
                          {sv.leak && (
                            <div className="p-3 mb-2 bg-danger-subtle text-danger-emphasis rounded-3 border border-danger-subtle">
                              <i className="fa-solid fa-triangle-exclamation text-danger me-2"></i><strong>Core Revenue Leak:</strong> {sv.leak}
                            </div>
                          )}
                          {sv.wedge && (
                            <div className="p-3 mb-2 bg-warning-subtle text-warning-emphasis rounded-3 border border-warning-subtle">
                              <i className="fa-solid fa-bolt text-warning me-2"></i><strong>Sales Wedge We Start With:</strong> {sv.wedge}
                            </div>
                          )}
                          {sv.details && (
                            <p className="text-muted mt-3" style={{ fontSize: "0.95rem" }}>{sv.details}</p>
                          )}
                        </div>
                        {sv.outcome && (
                          <div className="bg-success-subtle text-success-emphasis border-start border-4 border-success p-3 mt-3 rounded-3" style={{ fontSize: "0.9rem" }}>
                            <i className="fa-solid fa-circle-check text-success me-2"></i><strong>Measurable Outcome:</strong> {sv.outcome}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Business Outcomes */}
          {outcomes && outcomes.length > 0 && (
            <section className="development__area bg-light py-5">
              <div className="container g-0 line pt-100 pb-100">
                <div className="line-3"></div>
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="sec-title-wrapper mb-4 text-center">
                      <h2 className="sec-title title-anim">Why Businesses Choose This System</h2>
                    </div>
                    <div className="development__wrapper">
                      <div className="row g-3">
                        {outcomes.map((out, idx) => (
                          <div key={idx} className="col-md-6 mb-3">
                            <div className="p-4 bg-white border rounded-3 shadow-sm border-start border-4 border-success">
                              <strong className="text-dark fs-5 mb-2 d-block"><i className="fa-solid fa-check-double text-success me-2"></i>{out.label}</strong>
                              <span className="text-muted">{out.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {faqs && faqs.length > 0 && (
            <section className="faq__area pt-130 pb-140">
              <div className="container g-0 line pb-140">
                <div className="line-3"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="faq__img">
                      <Image
                        priority
                        width={600}
                        height={600}
                        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                        src="/assets/imgs/thumb/faq.jpg"
                        alt="FAQ Image"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="faq__content">
                      <h2 className="faq__title title-anim">
                        Frequently Asked Questions
                      </h2>
                      <div className="faq__list shadow-sm border rounded-3 p-3">
                        <Accordion defaultActiveKey="0" className="accordion" id="faqAccordion">
                          {faqs.map((faq, index) => (
                            <Accordion.Item eventKey={String(index)} className="accordion-item mb-2 border rounded" key={index}>
                              <Accordion.Header className="accordion-header">
                                {faq.question}
                              </Accordion.Header>
                              <Accordion.Body className="accordion-body">
                                <p className="mb-0 text-muted">{faq.answer}</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="cta__area py-5 bg-dark text-white">
            <div className="container line pb-110">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content text-center py-5">
                    <p className="cta__sub-title mb-2 text-primary fw-bold text-uppercase tracking-wider">Transform Your Client Acquisition</p>
                    <h2 className="cta__title title-anim mb-4 text-white">
                      Ready to deploy {pageTitle}?
                    </h2>
                    <div className="btn_wrapper d-flex gap-3 justify-content-center mt-4">
                      <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                        <span></span>Book Strategy Call <i className="fa-solid fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </RootLayout>
      </main>
    </>
  );
};

export default B2bIndustrialLegalHyperlocalServicePage;
