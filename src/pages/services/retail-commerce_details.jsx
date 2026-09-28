import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const RetailEcommerceAcquisitionServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Retail & E-Commerce";
  const pageSubtitle = "AI-Powered Client Acquisition for Online Brands, Showrooms & Luxury Retailers";
  const overview = "";
  const pillars = [{"title": "Acquisition Funnel", "desc": "Meta, Google Shopping, and organic social traffic routed into optimised landing pages, quiz funnels, and product pages built around the specific conversion trigger for your category: social proof, instant availability, pricing transparency, or personalised recommendation."}, {"title": "AI Recovery & Booking Bots", "desc": "WhatsApp bots that recover abandoned carts, confirm inventory for showroom visits, schedule test drives, and send pickup notifications \u2014 automatically."}, {"title": "Social Media Optimisation (SMO)", "desc": "Visual-first content strategy matched to the platform your buyer browses during discovery \u2014 product aesthetics, UGC, creator reviews, and transformation content."}, {"title": "Marketing Automation Stack (WhatsApp \u00b7 Email \u00b7 SMS)", "desc": "Post-purchase nurture, restock alerts, review requests, and subscription renewal sequences \u2014 running without manual effort."}, {"title": "Brand Visibility & Store Optimisation", "desc": "Shopify performance, Maps inventory sync, verified review widgets, and product listing quality \u2014 built to convert the buyer who's already decided to buy but not decided from whom."}];
  const subVerticals = [{"title": "3.1 General E-Commerce Brands", "who": "DTC lifestyle brands selling physical products \u2014 home goods, personal care, fashion accessories, gifting, and everyday essentials \u2014 through a Shopify or custom D2C storefront.", "leak": "You're paying \u20b9400\u2013\u20b91,200 per click from Meta. Buyers reach the product page, add to cart, and abandon at checkout \u2014 price, shipping friction, or payment anxiety. Nobody follows up. The next ad spend cycle starts.", "wedge": "", "outcome": "Checkout abandonment drops through WhatsApp recovery, and first-time buyers are sequenced into a second purchase before the ad spend cycle restarts.", "details": "Who this is for: DTC lifestyle brands selling physical products \u2014 home goods, personal care, fashion accessories, gifting, and everyday essentials \u2014 through a Shopify or custom D2C storefront. The Core Revenue Leak: You're paying \u20b9400\u2013\u20b91,200 per click from Meta. Buyers reach the product page, add to cart, and abandon at checkout \u2014 price, shipping friction, or payment anxiety. Nobody follows up. The next ad spend cycle starts. The Wedge: A Full CRO Audit identifying exactly where in your current checkout the drop-off occurs \u2014 before a single rupee of additional ad spend. What We Install: Acquisition Funnel \u2014 Meta Conversion Ads segmented by product category with UGC-led creative. \u2014 Landing pages optimised for specific product claims \u2014 ingredient transparency, social proof density, and fast checkout triggers. \u2014 Pixel and Conversions API server-side tracking for accurate attribution. WhatsApp Abandonment Recovery \u2014 Abandoned cart trigger fires 45 minutes after cart abandonment: \"Hey Name, you left something behind. Your Product is reserved for 24hrs \u2014 complete your order here: Link\" \u2014 Second trigger at 24 hours with an optional 5% discount. \u2014 Post-purchase: shipping confirmation, delivery ETA, and review request. Social Media Optimisation \u2014 Primary channels: Instagram, TikTok, Facebook. \u2014 Bio: \"Curating premium goods for your daily lifestyle. 10% off your first order \u2193\" \u2014 Content hooks: Product aesthetic showreels, packaging process behind-the-scenes, creator UGC reposts, and \"why we made this\" founder story content. Marketing Automation \u2014 WhatsApp: Abandoned cart recovery, dispatch confirmation, delivery ETA. \u2014 SMS: Shipment tracking updates. \u2014 Email: Post-purchase product education guide (Day 1), cross-sell recommendation (Day 7), review request (Day 14), replenishment reminder (Day 30\u201360 based on product). Brand Visibility \u2014 Shopify store audit: load time, mobile checkout friction, payment options, trust badges. \u2014 Review widget (Loox, Stamped.io) integrated with product pages and ad creative. \u2014 Google Shopping feed setup and optimisation. Outcome: Checkout abandonment drops through WhatsApp recovery, and first-time buyers are sequenced into a second purchase before the ad spend cycle restarts."}, {"title": "3.2 Online Package & Subscription Brands", "who": "Monthly subscription box brands delivering curated physical products \u2014 beauty, food, books, wellness, pet care, and lifestyle \u2014 on recurring billing.", "leak": "Subscribers cancel not because they dislike the product \u2014 but because the billing feels automatic and impersonal. Cancellation is one click. Staying feels passive. The box becomes \"a thing I forgot I subscribed to.\"", "wedge": "", "outcome": "Subscriber LTV increases because pause replaces cancel \u2014 and monthly personalisation moments make the box feel chosen, not automatic.", "details": "Who this is for: Monthly subscription box brands delivering curated physical products \u2014 beauty, food, books, wellness, pet care, and lifestyle \u2014 on recurring billing. The Core Revenue Leak: Subscribers cancel not because they dislike the product \u2014 but because the billing feels automatic and impersonal. Cancellation is one click. Staying feels passive. The box becomes \"a thing I forgot I subscribed to.\" The Wedge: A Subscription Portal Audit removing every friction point from the member experience \u2014 and replacing cancellation intent with a pause option and a personalisation moment. What We Install: Acquisition Funnel \u2014 Conversion ads to a custom box designer page \u2014 not a generic landing page. \u2014 Interactive box selection wizard: 5-question preference survey \u2192 personalised box preview \u2192 subscription checkout with first-month offer. \u2014 Checkout optimised for recurring billing with a clear \"cancel anytime\" trust signal. Retention System \u2014 3 days before monthly renewal: WhatsApp message prompting a product swap for next month's box. \u2014 Post-delivery check-in: photo of the box, a \"what did you love?\" quick reply prompt, and a \"share your unboxing\" UGC invite. \u2014 Cancellation-intent intercept: before cancellation completes, a pause-for-1-month option is offered. Social Media Optimisation \u2014 Primary channels: Instagram, TikTok, Pinterest. \u2014 Bio: \"Delivering monthly boxes of curated goods. Customise your first box here \u2193\" \u2014 Content hooks: Unboxing reaction videos, monthly theme reveal content, box customisation tutorial, and subscriber community features. Marketing Automation \u2014 WhatsApp: Pre-renewal swap trigger, box shipped notification, delivery confirmation. \u2014 SMS: Billing reminder and shipment tracking. \u2014 Email: Monthly theme preview (builds anticipation before billing), product spotlight education post-delivery, and referral reward offer at 3-month mark. Brand Visibility \u2014 Easy pause/resume subscription controls \u2014 visible and accessible in the member portal. \u2014 Review integration with Trustpilot and third-party consumer rating platforms. \u2014 Unboxing creator partnership program for organic reach amplification. Outcome: Subscriber LTV increases because pause replaces cancel \u2014 and monthly personalisation moments make the box feel chosen, not automatic."}, {"title": "3.3 Jewelry & Luxury Retailers", "who": "Jewellers selling gold, diamond, and gemstone pieces \u2014 both heritage craftsmen and modern luxury labels \u2014 targeting high-net-worth buyers for bridal, gifting, and personal investment purchases.", "leak": "A \u20b93\u2013\u20b915 lakh purchase is not made after seeing one Instagram post. It requires trust, access, and exclusivity. Most jewellers' digital presence communicates none of these \u2014 a basic website with a product grid and a contact number reads as a commodity competitor.", "wedge": "", "outcome": "The digital presence communicates exclusivity before the sale \u2014 so the buyer arrives at the showroom having already decided to trust you.", "details": "Who this is for: Jewellers selling gold, diamond, and gemstone pieces \u2014 both heritage craftsmen and modern luxury labels \u2014 targeting high-net-worth buyers for bridal, gifting, and personal investment purchases. The Core Revenue Leak: A \u20b93\u2013\u20b915 lakh purchase is not made after seeing one Instagram post. It requires trust, access, and exclusivity. Most jewellers' digital presence communicates none of these \u2014 a basic website with a product grid and a contact number reads as a commodity competitor. The Wedge: Brand Strategy & Visual Curation \u2014 establishing a premium digital identity before any ad spend, because the identity is what the ad sells. What We Install: Acquisition Funnel \u2014 Premium lifestyle ads on Pinterest and Instagram: jewellery in context \u2014 worn, gifted, and styled \u2014 not product-on-white-background. \u2014 VIP landing page for scheduling a private virtual consult or showroom viewing. \u2014 Clienteling CRM: new lead profile created on first touch, personalised outreach from a named relationship manager. High-Touch Sales Process \u2014 WhatsApp concierge: private advisor channel for each client, not a generic business number. \u2014 Virtual consult option via video call with jewellery stylist. \u2014 Design checkpoint notifications: \"Your custom diamond piece is at the setting stage \u2014 here's a photo.\" Social Media Optimisation \u2014 Primary channels: Instagram, Pinterest, YouTube. \u2014 Bio: \"Crafting fine diamond and gold jewellery since Year. Schedule a private viewing \u2193\" \u2014 Content hooks: Jewellery styling reels (bridal, festive, everyday wear), diamond purity and grading education, bridal collection lookbooks, and \"behind the craft\" goldsmith process videos. Marketing Automation \u2014 Email: Festive and wedding season gift-giving catalogs (Dhanteras, wedding season, Valentine's Day). \u2014 WhatsApp: Private advisor updates, design progress photos, delivery confirmation with care instructions. \u2014 SMS: Order design checkpoint notifications and delivery scheduling. Brand Visibility \u2014 Premium website with editorial photography, secure checkout, and certificate verification page. \u2014 Showroom listing on Google Maps with appointment-only booking option. \u2014 Listed on Caratlane, Bluestone aggregator style for discovery; own site for conversion. Outcome: The digital presence communicates exclusivity before the sale \u2014 so the buyer arrives at the showroom having already decided to trust you."}, {"title": "3.4 Electronics & Tech Retailers", "who": "Consumer electronics stores, smart home specialists, and multi-brand tech retailers selling premium smartphones, laptops, home automation systems, and audio equipment in-store and online.", "leak": "Buyers have already decided what they want. They're searching \"buy product near me\" or checking if you have it in stock before committing to the drive. A Maps listing without inventory integration loses the sale before you even know it was available.", "wedge": "", "outcome": "Buyers who've already decided come to you specifically because your inventory is visible and confirmed before the trip.", "details": "Who this is for: Consumer electronics stores, smart home specialists, and multi-brand tech retailers selling premium smartphones, laptops, home automation systems, and audio equipment in-store and online. The Core Revenue Leak: Buyers have already decided what they want. They're searching \"buy product near me\" or checking if you have it in stock before committing to the drive. A Maps listing without inventory integration loses the sale before you even know it was available. The Wedge: Multi-Channel Inventory Sync paired with Local Google Shopping Ads showing live stock \u2014 so the buyer already knows you have it before they leave home. What We Install: Acquisition Funnel \u2014 Local Google Shopping Ads displaying real-time inventory and pricing. \u2014 AI assistant on website: model name input \u2192 stock confirmation \u2192 in-store reservation \u2192 pickup notification sent to WhatsApp. \u2014 Meta retargeting for buyers who browsed but didn't reserve. In-Store Conversion \u2014 Reserved-item WhatsApp confirmation with collection window. \u2014 Post-purchase setup guide for complex products (smart home, audio systems) sent via WhatsApp. \u2014 Warranty registration facilitated in-store with automated reminder at 11-month mark. Social Media Optimisation \u2014 Primary channels: YouTube, Instagram. \u2014 Bio: \"Smart home technology. Check local stock and order online \u2193\" \u2014 Content hooks: Tech unboxing and hands-on reviews, smart home automation setup walk-throughs, comparison reels (Product A vs Product B), and \"this month's best value\" deal highlights. Marketing Automation \u2014 WhatsApp: Pickup confirmation, setup guide, firmware update alerts, and warranty renewal reminder. \u2014 SMS: Delivery tracking for online orders. \u2014 Email: Product setup guides and accessory recommendations tailored to purchase. Brand Visibility \u2014 Google Maps inventory integration (available for select platforms). \u2014 Verified review systems on product pages. \u2014 Listed on PriceDekho, Smartprix, and local electronics aggregators. Outcome: Buyers who've already decided come to you specifically because your inventory is visible and confirmed before the trip."}, {"title": "3.5 Car & Bike Dealerships", "who": "Authorised car dealerships, EV brand showrooms, and premium used-vehicle sales centres offering new, certified pre-owned, and EV models.", "leak": "A buyer watches your vehicle walkthrough reel. They're interested. They close Instagram and go back to work. No immediate next step exists. A competitor's \"Book a test drive\" WhatsApp message converts them 48 hours later.", "wedge": "", "outcome": "Video ad interest converts to a test drive booking in the same session \u2014 and the post-visit sequence closes the sale before the buyer visits a second dealership.", "details": "Who this is for: Authorised car dealerships, EV brand showrooms, and premium used-vehicle sales centres offering new, certified pre-owned, and EV models. The Core Revenue Leak: A buyer watches your vehicle walkthrough reel. They're interested. They close Instagram and go back to work. No immediate next step exists. A competitor's \"Book a test drive\" WhatsApp message converts them 48 hours later. The Wedge: An AI Test-Drive Scheduling Bot that converts interest \u2014 from a reel, an ad, or a Maps search \u2014 into a confirmed calendar slot in the same conversation. What We Install: Acquisition Funnel \u2014 Video ads showcasing vehicle interiors, performance specs, and delivery moments. \u2014 Maps optimisation for \"dealership near me,\" \"EV showroom City,\" and \"certified used cars.\" \u2014 WhatsApp bot: vehicle model interest \u2192 available test drive slots \u2192 booking confirmed \u2192 reminder 2hrs before. Showroom Experience \u2014 CRM entry created at booking: buyer profile, vehicle of interest, budget bracket, timeline. \u2014 Pre-visit WhatsApp: route to showroom, what to bring, who to ask for. \u2014 Post-test-drive follow-up: Day 1 \u2014 thank you + finance options PDF; Day 3 \u2014 EMI calculator link; Day 7 \u2014 inventory update if the model of interest has changed. Social Media Optimisation \u2014 Primary channels: YouTube, Instagram. \u2014 Bio: \"Find your next vehicle. Schedule a test drive on WhatsApp \u2193\" \u2014 Content hooks: Vehicle walkarounds (interior + exterior), customer delivery reaction videos, feature highlight reels, and ownership cost comparison posts. Marketing Automation \u2014 WhatsApp: Test drive reminder, service booking alerts, and annual maintenance reminders. \u2014 SMS: Appointment status alerts. \u2014 Email: Monthly vehicle maintenance newsletters and new model arrival notifications. Brand Visibility \u2014 GBP updated with showroom hours, available models (photos + specs), and finance options. \u2014 Review request triggered post-delivery. \u2014 Listed on CarDekho, CarWale, and BikeWale for discovery traffic. Outcome: Video ad interest converts to a test drive booking in the same session \u2014 and the post-visit sequence closes the sale before the buyer visits a second dealership."}, {"title": "3.6 General Appliance Showrooms", "who": "Home appliance retailers selling refrigerators, washing machines, air conditioners, ovens, and home theatre systems \u2014 standalone stores and brand-authorised showrooms.", "leak": "Buyers walk in knowing they want \"a fridge\" but leave without buying because the choice is overwhelming and no salesperson engaged quickly enough. Online, the same buyer closes the tab at the product comparison page.", "wedge": "", "outcome": "Buyers who were overwhelmed by options get a personalised shortlist and a confirmed delivery date \u2014 in the same 3-minute quiz session.", "details": "Who this is for: Home appliance retailers selling refrigerators, washing machines, air conditioners, ovens, and home theatre systems \u2014 standalone stores and brand-authorised showrooms. The Core Revenue Leak: Buyers walk in knowing they want \"a fridge\" but leave without buying because the choice is overwhelming and no salesperson engaged quickly enough. Online, the same buyer closes the tab at the product comparison page. The Wedge: An Appliance Selector Quiz Bot that narrows 200 options down to 3 relevant models in 30 seconds \u2014 and books the delivery before the buyer overthinks. What We Install: Acquisition Funnel \u2014 GBP optimised for category searches: \"washing machine store near me,\" \"AC showroom City,\" \"refrigerator with 5-star rating.\" \u2014 Appliance Selector Quiz: household size \u2192 usage pattern \u2192 budget \u2192 power preference \u2192 top 3 model recommendations with comparison. \u2014 Delivery and installation date booking embedded at the end of the quiz. Post-Sale Experience \u2014 Delivery tracking: WhatsApp message with delivery team name, vehicle number, and ETA. \u2014 Installation team details sent 30 minutes before arrival. \u2014 Warranty registration completed in-store, reminder at 11-month mark for AMC. Social Media Optimisation \u2014 Primary channels: Instagram, Facebook. \u2014 Bio: \"Upgrading your home appliances. Check store stock and deals below \u2193\" \u2014 Content hooks: Fridge organisation idea reels, kitchen makeover transformations, appliance comparison videos, and \"what size AC for your room\" educational posts. Marketing Automation \u2014 WhatsApp: Delivery ETA, installation team details, and warranty registration confirmation. \u2014 SMS: Installation confirmation and feedback request. \u2014 Email: Warranty expiry reminder and AMC (Annual Maintenance Contract) offer. Brand Visibility \u2014 Product catalog availability verified on Google Maps. \u2014 Review campaign post-installation: \"How was the delivery experience?\" \u2014 Listed on Flipkart and Amazon for discovery; own store for margin-protected conversion. Outcome: Buyers who were overwhelmed by options get a personalised shortlist and a confirmed delivery date \u2014 in the same 3-minute quiz session."}];
  const outcomes = [{"label": "| What Usually Happens | What This System Does |", "detail": ""}, {"label": "|---|---|", "detail": ""}, {"label": "| 70\u201380% cart abandonment with no recovery | WhatsApp recovery at 45min and 24hr converts 15\u201325% of abandoned sessions |", "detail": ""}, {"label": "| Subscription cancellations spike after Month 3 | Pause option and monthly personalisation moment reduces churn |", "detail": ""}, {"label": "| Showroom walk-ins happen without a buying signal | Test drive and tour bots confirm intent before the visit |", "detail": ""}, {"label": "| Reviews are collected inconsistently | Post-purchase review request fires automatically at the right moment |", "detail": ""}, {"label": "| First-time buyers never repurchase without another ad | Post-purchase email and WhatsApp sequence drives second order |", "detail": ""}];
  const faqs = [{"question": "Does the WhatsApp abandoned cart recovery work for all payment systems?", "answer": "Yes \u2014 the cart recovery link connects to your existing checkout, whether that's Shopify, WooCommerce, or a custom payment gateway."}, {"question": "Can subscription brands on non-Shopify platforms use the retention system?", "answer": "Yes. We work with WooCommerce Subscriptions, Chargebee, and custom subscription billing systems in addition to Shopify + Recharge."}, {"question": "How long before the appliance selector quiz or e-commerce funnel is live?", "answer": "Typically 10\u201318 working days from brief finalisation to go-live."}, {"question": "What makes this different from hiring a performance marketing agency?", "answer": "A performance agency manages ad spend. We build the system that converts that spend \u2014 the landing page, the bot, the follow-up sequence, and the review loop \u2014 and manage the ads as part of one integrated stack."}];

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

export default RetailEcommerceAcquisitionServicePage;
