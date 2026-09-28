import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const RetailBillingSoftwareServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Retail Billing Software";
  const pageSubtitle = "The Complete Billing & Inventory Solution for Modern Retail Businesses";
  const overview = "";
  const problems = ["Manual billing slows your counter during peak hours. Stock discrepancies show up weeks after the goods were lost. GST filing means hunting through receipts at month-end. Your best-selling SKU runs out because no one noticed the low-stock alert didn't exist. These aren't staff problems. They're system problems. And a system problem has a system solution."];
  const audience = ["Kirana stores and general merchandise retailers", "Grocery chains and supermarkets", "Clothing and apparel boutiques", "Electronics and mobile accessory shops", "Hardware and building material dealers", "Stationery and book stores", "Medical and optical retail outlets", "Any retail counter processing 50\u20135,000+ daily bills"];
  const features = [{"title": "Blazing-Fast Billing Counter", "desc": "Process a sale in under 10 seconds. Barcode scanner integration means no manual SKU entry. The touchscreen POS interface is designed for peak-hour speed \u2014 minimal taps from scan to receipt printed. Support for multiple payment modes in a single transaction: cash + UPI + card split billing handled automatically.", "useCase": "A grocery store with 200 daily customers processes every bill in under 20 seconds \u2014 cashier queue reduced by 40%, customer throughput doubled during morning and evening peaks."}, {"title": "Real-Time Inventory Management", "desc": "Every sale automatically deducts from live stock. Every purchase entry credits inventory. Know exactly what's on the shelf, in the back room, and on order \u2014 at any moment, from any device. Set reorder points per SKU: get notified the moment stock falls below your defined minimum.", "useCase": "A clothing boutique with 800+ SKUs tracks every size and colour variant in real time. When the reorder point for a fast-moving style is hit, the purchase order is generated in one click and sent to the supplier via WhatsApp."}, {"title": "GST-Ready Invoicing & Tax Management", "desc": "Auto-calculation of GST (CGST, SGST, IGST) on every bill based on the product HSN code. GST-compliant tax invoices generated and printed or emailed instantly. Monthly and quarterly GST summary reports ready for your CA or direct portal upload \u2014 no manual data entry.", "useCase": "A hardware dealer with 1,200+ products files GST returns using a single report export from the software \u2014 what took 3 hours now takes 15 minutes."}, {"title": "Customer Loyalty & CRM", "desc": "Build a customer database with every billing transaction. Track purchase history, total spend, and last visit date automatically. Run a points-based loyalty program: award points per \u20b9100 spent, auto-apply rewards at checkout. Send targeted offers via WhatsApp or SMS to high-value customers by purchase frequency or category preference.", "useCase": "A medical retail shop sends a personalised refill reminder to customers who purchased a 30-day medication supply 25 days ago \u2014 repeat purchase rate increased by 32%."}, {"title": "Multi-Store & Franchise Management", "desc": "Manage multiple store locations from a single dashboard. Transfer stock between branches in seconds. Compare branch-wise sales, profitability, and inventory performance daily. Role-based access: each store manager sees only their location; the owner sees all.", "useCase": "A supermarket chain with 4 branches tracks daily sales, stock levels, and cashier performance across all locations from a single admin panel \u2014 no need for end-of-day WhatsApp reports from each manager."}, {"title": "Supplier & Purchase Management", "desc": "Maintain a complete supplier database with pricing history, credit terms, and payment due dates. Raise and track purchase orders end-to-end. Match GRN (Goods Received Note) against purchase orders automatically. Track outstanding supplier payments and get alerts before credit periods expire.", "useCase": ""}, {"title": "Accounts & Financial Reports", "desc": "Daily, weekly, and monthly P&L summary. Cash flow report: cash in vs. cash out by payment mode. Best-selling products report by quantity and revenue. Slow-moving inventory report to identify dead stock. Cashier-wise sales reconciliation to catch discrepancies instantly.", "useCase": ""}, {"title": "Offline Billing Mode", "desc": "Bills keep printing even when the internet is down. All transactions sync automatically when connectivity is restored. No data loss, no interrupted service \u2014 critical for stores in areas with inconsistent connectivity.", "useCase": ""}];
  const usecases = [{"type": "Kirana / Grocery", "pain": "Peak-hour billing speed", "feature": "Barcode POS + UPI split billing"}, {"type": "Clothing Boutique", "pain": "Size/colour variant tracking", "feature": "Multi-attribute inventory"}, {"type": "Electronics Shop", "pain": "High-value item tracking & warranty", "feature": "Serial number billing"}, {"type": "Hardware Dealer", "pain": "Complex GST across categories", "feature": "HSN-based auto GST"}, {"type": "Medical Retail", "pain": "Refill reminders + expiry tracking", "feature": "Customer CRM + batch/expiry alerts"}, {"type": "Supermarket Chain", "pain": "Multi-branch visibility", "feature": "Centralised multi-store dashboard"}];
  const outcomes = [{"label": "Billing speed", "detail": "Average transaction time reduced from 45 seconds to under 10 seconds with barcode scanning"}, {"label": "Stock accuracy", "detail": "Inventory discrepancies reduced from weekly manual errors to near-zero with real-time deduction"}, {"label": "GST compliance", "detail": "Monthly return filing time cut by 70\u201385% with auto-calculated GST summaries"}, {"label": "Customer retention", "detail": "Loyalty programs and refill reminders increase repeat purchase rates by 25\u201340%"}, {"label": "Loss prevention", "detail": "Daily cashier reconciliation catches billing discrepancies before they compound"}];
  const integrations = [{"label": "Hardware", "detail": "Thermal receipt printers, barcode scanners (USB/Bluetooth), cash drawers, customer display units, weighing scales"}, {"label": "Payments", "detail": "UPI (all apps), card swipe machines, net banking, store credit"}, {"label": "Accounting", "detail": "Tally export-ready data, Excel-compatible reports"}, {"label": "Communication", "detail": "WhatsApp integration for digital receipts, loyalty alerts, and supplier orders"}, {"label": "Platform", "detail": "Windows desktop, Android tablet, and browser-based access"}];
  const faqs = [{"question": "Does the software work without an internet connection?", "answer": "Yes. The offline billing mode keeps your counter running during network outages. All data syncs when connectivity resumes."}, {"question": "How long does it take to import my existing product catalog?", "answer": "Existing products can be bulk-imported via Excel template \u2014 typically completed in under 2 hours for catalogs up to 5,000 SKUs."}, {"question": "Can I manage GST for both goods and services in the same bill?", "answer": "Yes. The software handles mixed GST scenarios \u2014 different HSN codes and GST rates within a single invoice."}, {"question": "Is there a limit on the number of products or transactions?", "answer": "No hard limits. The system is built to handle catalogs from 50 to 100,000+ SKUs and high-volume daily transaction counts."}, {"question": "Can multiple cashiers operate simultaneously on the same system?", "answer": "Yes. Multi-user concurrent billing is supported with individual cashier login and session-wise reconciliation."}];

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

export default RetailBillingSoftwareServicePage;
