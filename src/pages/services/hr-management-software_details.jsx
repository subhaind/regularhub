import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const HrManagementSoftwareServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "HR Management Software";
  const pageSubtitle = "The Complete People Operations Platform for Growing Businesses";
  const overview = "";
  const problems = ["One platform. All of it. Always current."];
  const audience = ["Manufacturing and industrial businesses with shift-based workforces", "Retail chains and franchise networks managing multi-location teams", "IT and tech companies with remote and hybrid staff", "Hospitals, clinics, and healthcare facilities with complex shift rosters", "Schools, coaching centres, and educational institutions", "Logistics and fleet operations with field staff", "Hospitality businesses managing seasonal and contractual staff", "Any business with 15\u20135,000+ employees"];
  const features = [{"title": "Employee Database & Onboarding", "desc": "A single, searchable employee profile for every team member: personal details, emergency contacts, education and work history, document uploads (Aadhaar, PAN, offer letter, agreements), and role and reporting structure. Digital onboarding flow: new joinee receives a link, completes their profile, uploads documents, and acknowledges company policies \u2014 before Day 1. Manager is notified when onboarding is complete.", "useCase": "A retail chain with 180 employees onboards a new store cashier in 20 minutes \u2014 offer letter signed digitally, ID proof uploaded, and access credentials issued before the first shift."}, {"title": "Attendance & Time Tracking", "desc": "Biometric integration, mobile app GPS check-in, QR code-based attendance, or facial recognition \u2014 configure what fits your operation. Real-time attendance dashboard: who's in, who's absent, who's late \u2014 right now, across all locations. Auto-calculation of late arrivals, early departures, overtime, and half-days. Monthly attendance register generated automatically \u2014 no manual compilation.", "useCase": "A logistics company with 60 delivery riders uses GPS mobile check-in \u2014 field staff mark attendance from their first pickup location, and the system flags any check-in outside the defined service radius."}, {"title": "Leave Management", "desc": "Configurable leave policies: earned leave, casual leave, sick leave, comp-off, maternity/paternity \u2014 with carry-forward and encashment rules per employee grade. Self-service leave application: employee applies via app \u2192 manager approves or declines \u2192 HR informed \u2192 attendance updated automatically. Leave balance displayed in real time on every employee's dashboard. Holiday calendar configured once, applied company-wide.", "useCase": "A hospital HR team eliminates the 45-minute daily routine of checking leave request emails and manually updating the attendance register \u2014 every approval triggers an automatic update."}, {"title": "Payroll Processing", "desc": "End-to-end automated payroll: attendance data feeds directly into salary calculation. Configurable salary structures: basic, HRA, conveyance, special allowance, performance bonus \u2014 per employee grade. Statutory deductions auto-calculated: PF, ESI, PT, TDS with Form 16 generation. Salary slip generated and distributed via email or WhatsApp \u2014 one click, entire company. Bank transfer file generated in bank-accepted format (NEFT/RTGS/IMPS bulk upload).", "useCase": "A manufacturing plant with 400 workers completes the full monthly payroll cycle \u2014 attendance reconciliation, deduction calculation, salary slip generation, and bank file creation \u2014 in under 3 hours. Previously took 3 days."}, {"title": "Shift Rostering & Scheduling", "desc": "Build weekly and monthly shift rosters with a drag-and-drop visual scheduler. Auto-assign shifts based on department, skill set, and availability. Prevent scheduling conflicts: the system flags double-booking, insufficient rest periods, and overtime thresholds. Roster published to all employees via app with instant notification. Shift swap requests handled within the system \u2014 manager approves, attendance automatically updates.", "useCase": "A hotel F&B department builds a 4-week shift roster for 85 staff members in 2 hours \u2014 previously a full-day manual exercise done in Excel with frequent errors."}, {"title": "Performance Management", "desc": "Set quarterly and annual KPIs per employee. Manager submits structured performance review at appraisal cycle. 360\u00b0 feedback collection: peer, subordinate, and self-assessment forms auto-distributed and collated. Appraisal history maintained per employee \u2014 visible during promotion and increment decisions. Performance rating linked to salary revision workflow.", "useCase": ""}, {"title": "Compliance & Statutory Management", "desc": "PF monthly challan report. ESI monthly contribution statement. PT calculation by state slab. TDS deduction and Form 24Q generation. Labour law compliance tracker: register maintenance alerts, inspection readiness checklist, and statutory filing calendar reminders. Gratuity calculation per the Payment of Gratuity Act.", "useCase": ""}, {"title": "HR Analytics & Reports", "desc": "Headcount by department, location, and grade. Attrition rate with month-wise trend. Absenteeism analysis: top absent employees, departments with highest absence rates. Overtime cost analysis. Payroll cost as a percentage of revenue. Hiring funnel performance (if recruitment module active). Customisable report builder for board-level HR summaries.", "useCase": ""}];
  const usecases = [{"type": "Manufacturing", "pain": "Shift attendance for 3-shift operations", "feature": "Biometric integration + shift roster"}, {"type": "Retail Chain", "pain": "Multi-location attendance and payroll", "feature": "Centralised dashboard + branch payroll"}, {"type": "Healthcare", "pain": "Complex shift scheduling + compliance", "feature": "Shift rostering + PF/ESI automation"}, {"type": "IT/Tech", "pain": "Remote attendance + flexible leave", "feature": "GPS check-in + custom leave policies"}, {"type": "Education", "pain": "Academic calendar + faculty attendance", "feature": "Holiday calendar + leave management"}, {"type": "Hospitality", "pain": "Seasonal staffing + part-time payroll", "feature": "Contractual staff management"}];
  const outcomes = [{"label": "Payroll processing time", "detail": "Reduced from 3\u20135 days to under 4 hours for 100\u2013500 employee companies"}, {"label": "HR team bandwidth", "detail": "Administrative tasks reduced by 60%, freeing time for hiring and engagement work"}, {"label": "Payroll accuracy", "detail": "Statutory deduction errors eliminated through automated PF/ESI/TDS calculation"}, {"label": "Compliance risk", "detail": "Statutory filing deadlines tracked and alerted 7 days in advance"}, {"label": "Employee satisfaction", "detail": "Self-service leave and payslip access reduces HR query volume by 40\u201360%"}, {"label": "Manager productivity", "detail": "Leave and attendance approvals completed in under 60 seconds via mobile app"}];
  const integrations = [{"label": "Biometrics", "detail": "Compatible with ZKTeco, eSSL, Mantra, Suprema, and other major biometric devices"}, {"label": "Payroll banking", "detail": "HDFC, ICICI, SBI, Axis bulk salary upload file formats supported"}, {"label": "Accounting", "detail": "Tally-compatible payroll journal export"}, {"label": "Communication", "detail": "WhatsApp payslip delivery, email leave notifications"}, {"label": "Platform", "detail": "Web browser, Android, and iOS mobile app for managers and employees"}];
  const faqs = [{"question": "Can the payroll module handle different pay structures for different employee grades?", "answer": "Yes. Unlimited salary structure templates can be configured \u2014 contractual, permanent, trainee, and executive grades each have independent components."}, {"question": "Does the system handle PF and ESI for contract and daily-wage workers?", "answer": "Yes. Contract worker payroll with applicable statutory compliance is fully supported."}, {"question": "How does GPS attendance prevent buddy punching?", "answer": "GPS check-in captures the precise location at the moment of punch. The system flags check-ins beyond a configurable radius from the registered work location."}, {"question": "Can employees access their payslips and leave balance without contacting HR?", "answer": "Yes. The employee self-service app gives instant access to payslips, leave balance, attendance record, and applied leave status."}, {"question": "Is the software compliant with state-specific professional tax slabs?", "answer": "Yes. PT slabs for all Indian states are pre-configured and updated whenever slabs change."}];

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

export default HrManagementSoftwareServicePage;
