import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const RestaurantManagementSoftwareServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Restaurant Management Software";
  const pageSubtitle = "The All-in-One Operations Platform for Restaurants, Cafes & Food Chains";
  const overview = "";
  const problems = ["One system. Every order type. Full visibility."];
  const audience = ["Standalone restaurants and multi-cuisine cafes", "Quick Service Restaurants (QSR) and fast food counters", "Fine dining and themed restaurants", "Cafe chains and franchise F&B brands", "Food courts and cloud/ghost kitchen brands", "Bar and lounge operations with beverage management", "Bakeries and dessert counters with dine-in service", "Hotels with in-house restaurant operations"];
  const features = [{"title": "Table Management & Floor Plan", "desc": "Visual, drag-and-drop floor plan matching your actual restaurant layout. See every table's status in real time: available, occupied, reserved, or pending billing \u2014 on one screen. Assign tables to servers. Merge or split tables with one tap. Track table occupancy time and average billing duration. Reservation management with guest name, contact, and special request logging.", "useCase": "A 60-cover restaurant with 8 staff eliminates the whiteboard table-status system. The floor manager sees every table, server, and order status on a tablet without walking the floor."}, {"title": "Digital Order Taking (Captain Order App)", "desc": "Waitstaff take orders on an Android tablet or phone \u2014 no paper order pads. Menu with photos, modifiers, add-ons, and chef notes is instantly available. Orders sent directly to the kitchen printer or KDS \u2014 no courier, no miscommunication. Order modification, item cancellation, and course sequencing managed digitally. Customer preference notes attached per order (allergy, spice level, preparation request).", "useCase": "A fine dining restaurant eliminates kitchen miscommunication errors \u2014 every modification is printed to the kitchen within 3 seconds of being entered by the waiter, with a clear timestamp and modification flag."}, {"title": "Kitchen Display System (KDS)", "desc": "Real-time order display on kitchen screens \u2014 replaces paper KOT (Kitchen Order Tickets). Orders arranged by table, by course, and by timestamp. Colour-coded urgency indicators: green (normal), yellow (delayed), red (critical). Chef marks items as prepared \u2014 serving staff notified instantly. Reduces food wait time, prevents missed items, and provides kitchen performance data.", "useCase": "A cafe with a kitchen 15 metres from the order counter eliminates lost paper KOTs entirely. Kitchen throughput time measured and visible \u2014 average preparation time reduced by 4 minutes per order."}, {"title": "Billing & POS", "desc": "One-click billing from any order \u2014 dine-in, takeaway, or delivery. GST-compliant tax invoices with auto-calculation by food/beverage category. Split billing across multiple guests on the same table. Multiple payment modes per bill: cash, UPI, card, loyalty points, or credit \u2014 any combination. Complimentary marking with manager authorisation. Digital receipt via WhatsApp or SMS. Daily shift-close cash reconciliation with payment-mode breakdown.", "useCase": ""}, {"title": "Menu Engineering & Recipe Costing", "desc": "Build your digital menu with item descriptions, photos, portion sizes, category organisation, and GST category tagging. Recipe cost card per menu item: list ingredients, quantities, and unit costs \u2014 the software calculates the food cost percentage per dish automatically. Identify your most profitable and least profitable menu items. Menu item availability toggle: mark an item as unavailable and it disappears from the captain app and aggregator menu simultaneously.", "useCase": "A restaurant owner discovers that their best-selling pasta dish has a 68% food cost \u2014 the pricing is adjusted, reducing the loss on that item by \u20b940 per plate across 80 daily servings."}, {"title": "Inventory & Raw Material Management", "desc": "Set opening stock for every raw material and ingredient. Every sale auto-deducts the ingredient quantities per recipe card. Real-time raw material stock levels \u2014 know what's running low before service starts. Wastage and spoilage entry with reason logging. Purchase entry updates stock instantly. Daily closing stock report auto-generated.", "useCase": "A cafe tracks milk consumption against coffee sales \u2014 and identifies 18% unexplained variance over 30 days, leading to a staff accountability system that reduced wastage by \u20b912,000/month."}, {"title": "Delivery & Aggregator Integration", "desc": "Native integration with Zomato and Swiggy \u2014 orders flow directly into the POS without a separate aggregator tablet. Direct delivery order channel via WhatsApp bot \u2014 0% commission orders from regular customers. Delivery partner assignment and order tracking within the system. Separate KOT routing for delivery orders to the packaging station.", "useCase": ""}, {"title": "Staff Management & Shift Operations", "desc": "Staff login and shift assignment. Server-wise order and billing report \u2014 track which staff member billed how much per shift. Shift opening and closing cash management. Daily sales summary by shift, by server, and by order type. Manager approval workflow for discounts, complimentaries, and bill cancellations with audit trail.", "useCase": ""}, {"title": "Reports & Business Intelligence", "desc": "Daily sales by order type (dine-in / takeaway / delivery). Menu item performance: top 10 sellers by quantity and revenue. Table turnover rate and average cover value. Hourly revenue heatmap \u2014 identify your peak and slow hours. Food cost percentage by category. Aggregator vs. direct order revenue comparison. Weekly and monthly P&L summary.", "useCase": ""}];
  const usecases = [{"type": "Standalone Restaurant", "pain": "Kitchen communication errors", "feature": "KDS + Captain Order App"}, {"type": "QSR / Fast Food", "pain": "Speed of billing during peak rush", "feature": "Fast POS + queue management"}, {"type": "Multi-brand Cloud Kitchen", "pain": "Aggregator order management", "feature": "Aggregator integration + KDS"}, {"type": "Fine Dining", "pain": "Table management + course sequencing", "feature": "Floor plan + digital order with courses"}, {"type": "Cafe", "pain": "Inventory variance tracking", "feature": "Recipe costing + raw material deduction"}, {"type": "Bar & Lounge", "pain": "Split billing + beverage tracking", "feature": "POS + inventory"}];
  const outcomes = [{"label": "Table turn time", "detail": "Faster billing and KDS communication reduces average dine-in cycle by 15\u201320 minutes"}, {"label": "Kitchen errors", "detail": "Digital KOT eliminates verbal and paper miscommunication errors by 95%+"}, {"label": "Food cost visibility", "detail": "Recipe costing reveals actual dish profitability \u2014 most operators find 3\u20135 dishes bleeding margin they didn't know about"}, {"label": "Inventory loss", "detail": "Raw material auto-deduction catches unexplained variance that manual tracking misses"}, {"label": "Aggregator dependency", "detail": "Direct WhatsApp ordering builds a commission-free revenue channel alongside Zomato/Swiggy"}, {"label": "Closing time", "detail": "Daily reconciliation and cash closing reduced from 45\u201360 minutes to under 10 minutes"}];
  const integrations = [{"label": "Aggregators", "detail": "Zomato, Swiggy, direct API integration"}, {"label": "Payment", "detail": "UPI (all apps), Razorpay, PayTM, card terminals, cash"}, {"label": "Hardware", "detail": "Kitchen printers, receipt printers, KDS screens, barcode scanners, cash drawers"}, {"label": "Accounting", "detail": "Tally export, GST-ready reports"}, {"label": "Communication", "detail": "WhatsApp digital receipts, direct order bot"}, {"label": "Platform", "detail": "Windows POS, Android tablet (captain app + KDS), web dashboard for management"}];
  const faqs = [{"question": "Can the software manage both a restaurant and a bar in the same outlet with different taxation?", "answer": "Yes. Food and beverage tax categories, including 5% GST on food and 18% on liquor, are handled separately within the same billing session."}, {"question": "How does the aggregator integration work \u2014 does it need a separate device?", "answer": "No. Aggregator orders appear directly in the POS queue with order details, customer name, and special instructions \u2014 no separate Zomato/Swiggy tablet required."}, {"question": "Can we set different menus for dine-in, takeaway, and delivery?", "answer": "Yes. Separate menu pricing and item availability can be configured per order type."}, {"question": "What happens to an order if the internet goes down mid-service?", "answer": "The system has an offline mode \u2014 active orders continue on the local network. All data syncs when connectivity is restored."}, {"question": "Can the owner monitor live sales from outside the restaurant?", "answer": "Yes. The management dashboard is accessible via any browser or mobile app \u2014 live sales, active orders, and kitchen status visible in real time."}];

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
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-bold mb-3 d-inline-block">
                      Enterprise Software Solution
                    </span>
                    <h1 className="sec-title animation__char_come text-dark fw-bold mb-3" ref={charAnim}>
                      {pageTitle}
                    </h1>
                    {pageSubtitle && <p className="lead fw-bold text-primary mb-4" style={{ color: "#1d4ed8" }}>{pageSubtitle}</p>}
                  </div>
                  {overview && <p className="text-secondary fs-5 mb-4" style={{ lineHeight: "1.7" }}>{overview}</p>}
                  {audience && audience.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mt-4 mb-4">
                      {audience.slice(0, 5).map((item, idx) => (
                        <span key={idx} className="badge bg-light text-dark border p-2 px-3 rounded-pill">
                          <i className="fa-solid fa-check text-success me-2"></i>{item}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="d-flex gap-3 mt-4">
                    <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                      <span></span>Book Live Demo <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                    <Link href="/contact" className="wc-btn-dark btn-hover btn-item">
                      <span></span>Start Free Trial <i className="fa-solid fa-arrow-right ms-2"></i>
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

          {/* Problems & Audience */}
          <section className="service__detail bg-light py-5">
            <div className="container g-0 line pt-100 pb-100">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div className="sec-title-wrapper mb-4">
                    <h2 className="sec-title title-anim text-dark">Operational Gaps We Eliminate</h2>
                  </div>
                  <div className="development__content">
                    <ul className="list-unstyled">
                      {problems.map((prob, index) => (
                        <li key={index} className="mb-3 p-3 bg-white rounded-3 border-start border-4 border-danger shadow-sm">
                          <i className="fa-solid fa-triangle-exclamation text-danger me-2"></i>{prob}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div className="sec-title-wrapper mb-4">
                    <h2 className="sec-title title-anim text-dark">Built Specifically For</h2>
                  </div>
                  <div className="development__wrapper">
                    <div className="row g-2">
                      {audience.map((aud, index) => (
                        <div key={index} className="col-12">
                          <div className="p-3 bg-white rounded-3 border shadow-sm d-flex align-items-center">
                            <i className="fa-solid fa-circle-check text-success me-3 fs-5"></i>
                            <span className="fw-semibold text-dark">{aud}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="workflow__area-6 pt-130 pb-130">
            <div className="container g-0 line pb-130">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5 text-center">
                <h2 className="sec-title title-anim">Core Features & Capabilities</h2>
                <p className="text-muted">Designed around how your business actually operates daily</p>
              </div>
              <div className="workflow__wrapper-6">
                <div className="row">
                  {features.map((feat, index) => (
                    <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                      <div className="workflow__slide-6 p-4 border rounded-4 shadow-sm bg-white h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="feature-icon mb-3 text-primary">
                            <i className="fa-solid fa-layer-group fs-2"></i>
                          </div>
                          <h3 className="workflow__title-6 fw-bold mb-3 fs-4 text-dark" style={{ fontSize: "1.25rem" }}>
                            {feat.title}
                          </h3>
                          <p className="text-muted">{feat.desc}</p>
                        </div>
                        {feat.useCase && (
                          <div className="bg-light border-start border-4 border-primary p-3 mt-3 rounded-3 shadow-sm" style={{ fontSize: "0.875rem" }}>
                            <span className="badge bg-primary text-white mb-2">Use Case Scenario</span>
                            <p className="mb-0 text-dark fw-medium">{feat.useCase}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Matrix Table */}
          {usecases && usecases.length > 0 && (
            <section className="service__detail pb-130">
              <div className="container g-0 line">
                <div className="line-3"></div>
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="sec-title-wrapper mb-5">
                      <h2 className="sec-title title-anim">Industry Application Matrix</h2>
                    </div>
                    <div className="table-responsive rounded-4 border shadow-sm">
                      <table className="table table-hover table-striped align-middle mb-0">
                        <thead className="table-dark">
                          <tr>
                            <th className="py-3 px-4">Business Niche</th>
                            <th className="py-3 px-4">Primary Pain Solved</th>
                            <th className="py-3 px-4">Feature / Solution Deployed</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usecases.map((uc, index) => (
                            <tr key={index}>
                              <td className="fw-bold px-4 py-3 text-dark">{uc.type}</td>
                              <td className="px-4 py-3 text-danger fw-medium">{uc.pain}</td>
                              <td className="px-4 py-3"><span className="badge bg-success-subtle text-success border border-success-subtle p-2 px-3 fs-6">{uc.feature}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Business Outcomes & Integrations */}
          <section className="development__area bg-light py-5">
            <div className="container g-0 line pt-100 pb-100">
              <div className="line-3"></div>
              <div className="row">
                {outcomes && outcomes.length > 0 && (
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                    <div className="sec-title-wrapper mb-4">
                      <h2 className="sec-title title-anim">Measurable Business Outcomes</h2>
                    </div>
                    <div className="development__wrapper">
                      <div className="d-flex flex-column gap-3">
                        {outcomes.map((out, idx) => (
                          <div key={idx} className="p-3 bg-white border rounded-3 shadow-sm border-start border-4 border-success">
                            <h4 className="fw-bold text-success mb-1" style={{ fontSize: "1.1rem" }}>
                              <i className="fa-solid fa-chart-line me-2"></i>{out.label}
                            </h4>
                            <p className="mb-0 text-muted">{out.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {integrations && integrations.length > 0 && (
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                    <div className="sec-title-wrapper mb-4">
                      <h2 className="sec-title title-anim">Integrations & Compatibility</h2>
                    </div>
                    <div className="development__wrapper">
                      <div className="d-flex flex-column gap-3">
                        {integrations.map((integ, idx) => (
                          <div key={idx} className="p-3 bg-white border rounded-3 shadow-sm border-start border-4 border-primary">
                            <h4 className="fw-bold text-primary mb-1" style={{ fontSize: "1.1rem" }}>
                              <i className="fa-solid fa-plug me-2"></i>{integ.label}
                            </h4>
                            <p className="mb-0 text-muted">{integ.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

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
                    <p className="cta__sub-title mb-2 text-primary fw-bold text-uppercase tracking-wider">Transform Your Operations Today</p>
                    <h2 className="cta__title title-anim mb-4 text-white">
                      Ready to upgrade your system with {pageTitle}?
                    </h2>
                    <div className="btn_wrapper d-flex gap-3 justify-content-center mt-4">
                      <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                        <span></span>Book Live Demo <i className="fa-solid fa-arrow-right ms-2"></i>
                      </Link>
                      <Link href="/contact" className="wc-btn-dark btn-hover btn-item">
                        <span></span>Start Free Trial <i className="fa-solid fa-arrow-right ms-2"></i>
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

export default RestaurantManagementSoftwareServicePage;
