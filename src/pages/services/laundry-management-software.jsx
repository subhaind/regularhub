import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const LaundryGymDineinDeliveryServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Complete Laundry Management Software";
  const pageSubtitle = "End-to-End Operations Platform for Laundry Businesses, Dry Cleaners & Linen Service Providers";
  const overview = "";
  const problems = ["One system. Every order. Every garment. Full visibility."];
  const audience = ["Neighbourhood dry cleaners and laundry shops", "Hotel and hospital linen service departments", "Commercial laundry businesses serving restaurants and offices", "Self-service laundry and laundromat businesses", "Home laundry pickup and delivery services", "Franchise laundry chains and multi-branch operators", "Independent gyms and fitness studios", "Franchise gym chains and multi-location fitness centres", "CrossFit boxes and functional fitness studios", "Yoga, pilates, and dance fitness studios", "Corporate wellness centres", "Recreational clubs with gym facilities", "Personal training studios", "Restaurants managing dine-in and delivery simultaneously", "QSRs with dine-in seating and active takeaway counters", "Cloud and ghost kitchens handling multiple aggregator channels", "Cafes with in-store and WhatsApp delivery orders", "Bakeries and dessert shops with walk-in and pre-order flows", "Food courts with multiple brand counters sharing a kitchen"];
  const features = [{"title": "Order Intake & Garment Tagging", "desc": "New order created at counter: customer name, contact, and pickup/delivery preference. Each garment tagged with a unique barcode or QR code label printed in-store \u2014 linked to the order. Garment-level entry: type (shirt, trouser, saree, suit), service type (wash, dry clean, iron), and special instructions (stain location, fabric care note). Order summary printed and given to customer as receipt. Digital copy sent via WhatsApp instantly.", "useCase": "A laundry shop receiving 80 orders daily eliminates handwritten order cards entirely. Each garment gets a printed barcode tag at intake \u2014 the tag follows the garment through wash, dry, press, and packing. No garment is ever mixed up with another customer's order."}, {"title": "Order Tracking & Status Management", "desc": "Real-time order status board: Received \u2192 In Wash \u2192 Drying \u2192 Pressing \u2192 Quality Check \u2192 Ready \u2192 Delivered. Staff updates garment status on the system at each stage \u2014 via desktop or mobile. Order status visible to the counter staff without checking the floor. Customer query answered in 10 seconds: \"Your 3 shirts are in pressing \u2014 ready by 5pm.\"", "useCase": "A dry cleaner with 2 processing staff and a separate counter eliminates the \"go check in the back\" routine \u2014 counter staff see live status of every garment without leaving the desk."}, {"title": "Customer Communication & Notifications", "desc": "Automated WhatsApp message on order intake: itemised list of garments received, total estimated cost, and expected delivery date. Automated WhatsApp notification when order is ready: \"Hi Name, your laundry order # is ready for collection. 3 shirts, 2 trousers. Total: \u20b9240. Collect between 9am\u20138pm.\" Delivery scheduled: driver name, estimated arrival time, and tracking update. Missed collection alert: \"Your order from Date is still with us \u2014 please collect at your convenience.\"", "useCase": ""}, {"title": "Billing & Payments", "desc": "Itemised bill per order: garment type \u00d7 service type \u00d7 rate. Configurable rate card: wash rate per garment category, dry clean rate, ironing rate, express service surcharge. Advance payment and pending balance tracking. Multiple payment modes: cash, UPI, card, or credit account for corporate customers. GST-compliant invoices. Daily billing summary and payment mode reconciliation.", "useCase": "A laundry serving a corporate office building sets up monthly credit accounts for 6 companies \u2014 each company's monthly statement generated automatically, pending balance visible at any time."}, {"title": "Delivery Management", "desc": "Delivery schedule management: assign orders to delivery staff by area or route. Delivery app for field staff: view assigned orders, mark as delivered, and collect payment. Failed delivery flagging: customer unavailable \u2192 order returned to store \u2192 notification sent to customer. Delivery performance report: orders delivered on time vs. delayed.", "useCase": ""}, {"title": "Inventory & Consumables Tracking", "desc": "Track consumable inventory: detergent, fabric softener, poly bags, hangers, and packaging material. Consumption logged per wash cycle or per order batch. Low-stock alerts before consumables run out mid-operation. Purchase entry updates stock automatically.", "useCase": ""}, {"title": "Multi-Branch Management", "desc": "All branches visible from one admin dashboard. Branch-wise order volume, revenue, and pending orders. Inter-branch order transfer: customer drops at Branch A, picks up from Branch B. Centralised rate card: update pricing once, applies to all branches. Branch manager access restricted to their location; owner sees all.", "useCase": ""}, {"title": "Reports & Business Intelligence", "desc": "Daily order count and revenue. Revenue by service type: wash vs. dry clean vs. ironing. Garment processing time: average time from intake to ready. Delivery success rate. Top customers by monthly spend. Slow-moving orders: items uncollected for 7+ days. Staff performance: orders processed per staff member.", "useCase": ""}, {"title": "Member Enrollment & Profile Management", "desc": "Digital member enrollment: personal details, emergency contact, health declaration, fitness goals, and photo \u2014 captured at registration. Membership plan selection: monthly, quarterly, half-yearly, or annual \u2014 with applicable pricing and start/end dates. Add-on services linked to profile: personal training sessions, nutrition counselling, locker assignment. Member ID generated and barcode/QR member card printed at enrollment. Member profile searchable by name, phone, or member ID.", "useCase": "A gym with 600 active members moves from a register and Excel file to digital profiles \u2014 member lookup goes from 2 minutes of manual search to under 5 seconds."}, {"title": "Membership Billing & Renewal Management", "desc": "Automated billing: renewal invoice generated 7 days before membership expiry and sent via WhatsApp. Payment recorded against member profile \u2014 cash, UPI, card, or bank transfer. Membership automatically extended on payment confirmation. Overdue tracker: members who haven't renewed 3, 7, and 14 days after expiry \u2014 auto-follow-up message sent at each interval. Lapsed member win-back campaign: offer generation for members lapsed for 30+ days. Advance payment handling: member pays for 3 months \u2014 credit applied monthly.", "useCase": "A fitness studio with 250 members reduces monthly renewal follow-up from a 2-hour manual WhatsApp process to a fully automated sequence \u2014 renewal rate improved from 68% to 84% within 3 months."}, {"title": "Attendance Tracking", "desc": "Biometric device integration, QR code member card scan, or mobile app check-in. Real-time attendance dashboard: who checked in today, this week, and this month. Attendance frequency report per member: identify members who haven't visited in 7, 14, or 30 days. Auto-trigger engagement message to inactive members: \"We missed you this week, Name! Your membership is active \u2014 come train today.\" Class attendance: track attendance per class session separately from general gym entry.", "useCase": ""}, {"title": "Class & Session Scheduling", "desc": "Class schedule builder: create recurring weekly class timetables with instructor, capacity limit, and class type. Member class booking: members book via app or WhatsApp \u2014 capacity auto-managed. Waitlist management: class full \u2192 next member on waitlist auto-notified on cancellation. Class cancellation notification: instructor unavailable \u2192 all booked members notified instantly. Instructor performance tracking: classes conducted, average attendance, and revenue per class.", "useCase": "A yoga studio with 12 weekly classes eliminates the spreadsheet booking system \u2014 class booking, waitlisting, and cancellation notifications run automatically, and the instructor schedule is visible to all members via the app."}, {"title": "Personal Training & Package Management", "desc": "PT package creation: 10-session, 20-session, or monthly PT package with per-session cost. Session deduction per completed PT session. Session balance visible to member and trainer in real time. PT session scheduling: trainer-member calendar integrated with the main schedule. Trainer commission calculation: revenue per trainer tracked for commission payroll.", "useCase": ""}, {"title": "Locker & Amenity Management", "desc": "Locker assignment to member profile with locker number and key tracking. Locker fee billing integrated with membership renewal. Equipment asset register: treadmills, benches, weight sets \u2014 purchase date, warranty, and maintenance log. Equipment maintenance scheduling: service due alerts.", "useCase": ""}, {"title": "Reports & Analytics", "desc": "Active member count: today, this week, this month. New enrollments vs. renewals vs. lapsed \u2014 month-on-month trend. Revenue by membership plan type. Revenue by trainer. Class-wise attendance average. Member retention cohort analysis: which batch of members renews at the highest rate. Peak hour analysis: when your gym is busiest \u2014 optimise staffing and equipment maintenance around it.", "useCase": ""}];
  const usecases = [];
  const outcomes = [{"label": "Garment mix-up", "detail": "Near-zero with barcode tagging and linked garment-level tracking"}, {"label": "Customer query calls", "detail": "Reduced by 70% with proactive WhatsApp status notifications"}, {"label": "Billing disputes", "detail": "Eliminated with itemised digital receipts sent at order intake"}, {"label": "Counter efficiency", "detail": "Status queries answered in under 10 seconds \u2014 no floor checks required"}, {"label": "Revenue visibility", "detail": "Daily, weekly, and monthly summaries available in real time"}, {"label": "Collection rate", "detail": "Automated uncollected order alerts reduce abandoned garment incidents"}, {"label": "Renewal rate", "detail": "Automated renewal reminders with multi-touch follow-up sequences increase renewal rates by 15\u201325%"}, {"label": "Member retention", "detail": "Inactive member alerts reduce silent dropout rate"}, {"label": "Billing accuracy", "detail": "Automated billing eliminates manual invoice errors and missed billing cycles"}, {"label": "Staff efficiency", "detail": "Reception billing and renewal follow-up time reduced by 60%"}, {"label": "Class management", "detail": "Fully automated booking, cancellation, and waitlist handling without staff intervention"}, {"label": "Kitchen errors", "detail": "Unified KDS eliminates the fragmentation between dine-in, takeaway, and delivery order flows"}, {"label": "Service speed", "detail": "Digital ordering removes verbal relay time \u2014 kitchen receives order in 3 seconds, not 3 minutes"}, {"label": "Aggregator dependency", "detail": "Direct WhatsApp ordering builds a parallel 0% commission channel"}, {"label": "Revenue visibility", "detail": "Dine-in, takeaway, and delivery revenue visible separately and combined in real time"}, {"label": "Staff efficiency", "detail": "Counter, kitchen, and delivery teams work from one system with no duplicate data entry"}];
  const integrations = [];
  const faqs = [{"question": "Can the software handle both walk-in and pickup/delivery orders in the same system?", "answer": "Yes. Walk-in orders and pickup/delivery orders are managed in the same order queue with different workflow flags."}, {"question": "How are garment tags printed \u2014 does it need a special printer?", "answer": "Garment tags are printed on standard thermal label printers (Zebra, TSC, Brother) using sticky barcode labels or string tags \u2014 both formats supported."}, {"question": "Can customer notifications be sent in regional languages?", "answer": "Yes. WhatsApp message templates can be set in Hindi, Bengali, Tamil, or any other regional language."}, {"question": "Does the delivery tracking work for home pickup and delivery services?", "answer": "Yes. The delivery app supports both outbound delivery and inbound pickup assignment for laundry pickup services."}, {"question": "Can the software support multiple membership plan types simultaneously?", "answer": "Yes. Unlimited plan types \u2014 daily, weekly, monthly, quarterly, annual, student, corporate, and custom \u2014 can be active simultaneously."}, {"question": "Does the biometric attendance integrate with my existing device?", "answer": "Compatible with ZKTeco, eSSL, Mantra, and other major biometric brands via standard TCP/IP integration."}, {"question": "Can members book classes without downloading an app?", "answer": "Yes. Class booking is also available via WhatsApp bot \u2014 members send the class name and time, and the system confirms or adds them to the waitlist."}, {"question": "How does the software handle members who freeze their membership for travel or injury?", "answer": "Membership freeze is supported: freeze start and end dates entered, membership validity extended by the freeze duration automatically."}, {"question": "Can the system handle dine-in and delivery orders simultaneously during peak service?", "answer": "Yes. The unified KDS is designed specifically for simultaneous multi-channel operation \u2014 order type flags and urgency indicators prevent prioritisation errors."}, {"question": "Does the aggregator integration require a separate internet connection or tablet?", "answer": "No. Aggregator orders come through the same internet connection as the POS \u2014 no additional hardware required."}, {"question": "Can we set different menus and prices for dine-in vs. delivery?", "answer": "Yes. Menu visibility and pricing can be configured independently per order channel."}, {"question": "How does the WhatsApp ordering channel handle payment?", "answer": "Payment is collected via UPI link shared in the WhatsApp conversation \u2014 order is only confirmed after payment is received, with the receipt auto-sent on confirmation."}, {"question": "Can the kitchen see which orders are running late and prioritise accordingly?", "answer": "Yes. The KDS colour-urgency system (green \u2192 yellow \u2192 red) shows kitchen staff exactly which orders need immediate attention \u2014 no floor supervisor input required."}];

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

export default LaundryGymDineinDeliveryServicePage;
