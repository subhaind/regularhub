import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const LocalServicesRealestateServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Local Services & Real Estate";
  const pageSubtitle = "AI-Powered Client Acquisition for Trades, Remodelers, Agents & Dealers";
  const overview = "";
  const pillars = [{"title": "Acquisition Funnel", "desc": "Local Services Ads, Maps SEO, and visual social traffic routed into an immediate response or qualification flow \u2014 not a contact form with a 24-hour reply window."}, {"title": "AI Response & Qualification Bots", "desc": "Missed-call text-back, WhatsApp bots, and valuation assistants that respond in under 2 minutes and qualify budget, urgency, and fit before a human picks up the phone."}, {"title": "Social Media Optimisation (SMO)", "desc": "Before/after transformation content, project walk-throughs, and neighbourhood guides \u2014 the trust signals local buyers need before they commit."}, {"title": "Marketing Automation Stack (WhatsApp \u00b7 Email \u00b7 SMS)", "desc": "Job confirmations, project milestone updates, post-job review requests, and property listing alerts \u2014 running without manual follow-up."}, {"title": "Brand Visibility & Reputation Engine", "desc": "Google Business Profile, Houzz, MagicBricks, CarDekho, and local directories \u2014 built out with the completeness and review density that drives local ranking."}];
  const subVerticals = [{"title": "5.1 Standalone Local Services", "who": "Independent tradespeople, home service operators, and small local service companies offering emergency repairs, routine maintenance, deep cleaning, and pest control to residential and commercial clients.", "leak": "Your phone is busy on a job. Someone needing an emergency plumber calls and hits voicemail. They call the next number before you've even heard your voicemail alert.", "wedge": "", "outcome": "Every missed call becomes a WhatsApp conversation \u2014 and the dispatcher follows up within 5 minutes before the lead calls the next number.", "details": "### Plumbers, Electricians, Pest Control & Cleaning Who this is for: Independent tradespeople, home service operators, and small local service companies offering emergency repairs, routine maintenance, deep cleaning, and pest control to residential and commercial clients. The Core Revenue Leak: Your phone is busy on a job. Someone needing an emergency plumber calls and hits voicemail. They call the next number before you've even heard your voicemail alert. The Wedge: Missed-Call Text-Back AI \u2014 the moment a call is missed, an automated WhatsApp or SMS fires within 90 seconds: \"Hi, Business Name here. We missed your call. Book your slot online or reply here and we'll call you back shortly: Link\" What We Install: Acquisition Funnel \u2014 Google Local Services Ads targeting emergency and routine service queries: \"plumber near me,\" \"electrician urgent City,\" \"pest control Area.\" \u2014 Maps optimised with service categories, emergency hours, and service area radius. \u2014 Verified badge setup on Google LSA for trust and ranking. Missed-Call Text-Back System \u2014 WhatsApp auto-message fires within 90 seconds of any missed call. \u2014 Message includes: service options, booking link, and estimated response time. \u2014 Field dispatcher notified simultaneously to call back within 5 minutes. Job Scheduling Bot \u2014 WhatsApp bot: service type \u2192 location \u2192 urgency level \u2192 available slot \u2192 confirmed booking \u2192 dispatcher assigned. \u2014 Pre-job reminder sent 2 hours before the technician arrives. \u2014 Post-job: review request 1 hour after job completion. Social Media Optimisation \u2014 Primary channels: Facebook, Nextdoor. \u2014 Bio: \"Verified service in City. Text-back emergency support 24/7.\" \u2014 Content hooks: Deep cleaning transformation videos, DIY vs professional comparison posts, safety inspection walk-throughs, and \"how to know when to call a professional\" educational content. Marketing Automation \u2014 WhatsApp: Job confirmation, technician tracking link, and completion summary. \u2014 SMS: Missed-call text-back, appointment reminder, and post-job review request. \u2014 Email: Seasonal home maintenance checklists with booking links. Brand Visibility \u2014 GBP optimised for \"emergency service near me,\" service categories, and operating hours including after-hours availability. \u2014 Consistent review loops: SMS review request triggered 1 hour post-job. \u2014 Nextdoor Business Profile set up with verified location. Outcome: Every missed call becomes a WhatsApp conversation \u2014 and the dispatcher follows up within 5 minutes before the lead calls the next number."}, {"title": "5.2 Home Services & Construction", "who": "Home renovation contractors, interior designers, kitchen and bathroom remodelling specialists, and residential construction firms working on project-based remodelling packages.", "leak": "A homeowner sees your Instagram reel of a bathroom transformation. They're interested. They visit your profile, find a contact number, consider calling, decide not to bother \u2014 and move on. The inquiry never happens.", "wedge": "", "outcome": "A reel viewer becomes a lead in 2 minutes via the cost calculator \u2014 and the post-inquiry sequence gets them to a signed scope before they've spoken to a second contractor.", "details": "### Kitchen/Bath Remodeling, Interior Design & Renovation Who this is for: Home renovation contractors, interior designers, kitchen and bathroom remodelling specialists, and residential construction firms working on project-based remodelling packages. The Core Revenue Leak: A homeowner sees your Instagram reel of a bathroom transformation. They're interested. They visit your profile, find a contact number, consider calling, decide not to bother \u2014 and move on. The inquiry never happens. The Wedge: A Visual Quote Calculator Widget on your landing page that estimates a remodelling project cost based on room type, size, and scope \u2014 turning passive interest into an active inquiry in under 2 minutes. What We Install: Acquisition Funnel \u2014 Instagram and Pinterest visual ads showcasing bathroom refits, modular kitchens, and living room transformations. \u2014 Interactive cost calculator: room type \u2192 area in sqft \u2192 material grade \u2192 scope \u2192 estimated cost range displayed. \u2014 Lead form embedded at calculator result: name, WhatsApp, preferred visit date \u2192 routes to CRM. Lead Qualification & Conversion \u2014 WhatsApp follow-up within 15 minutes of form submission: \"Hi Name, thanks for your interest. Here's what similar projects looked like \u2014 portfolio link. When works for a quick visit?\" \u2014 Home visit scheduled, confirmed in CRM with project brief pre-filled. \u2014 Post-visit: detailed proposal sent within 48 hours with visual mood board. Social Media Optimisation \u2014 Primary channels: Instagram, Pinterest. \u2014 Bio: \"Transforming kitchens & bathrooms in City. Get a free quote online \u2193\" \u2014 Content hooks: Renovation time-lapses (before-during-after), modern design trend explainers, material choice guides, and client walkthrough videos post-completion. Marketing Automation \u2014 Email: Design portfolio and 3 relevant case studies sent post-inquiry. \u2014 WhatsApp: Construction phase progress photos (foundation, tiling, fitting, final reveal). \u2014 SMS: Phase completion notifications and payment milestone reminders. Brand Visibility \u2014 Houzz portfolio fully built out with project photos, materials listed, and client reviews. \u2014 GBP updated with project categories, service area, and completed project gallery. \u2014 Listed on Sulekha, UrbanClap/Urban Company, and local contractor directories. Outcome: A reel viewer becomes a lead in 2 minutes via the cost calculator \u2014 and the post-inquiry sequence gets them to a signed scope before they've spoken to a second contractor."}, {"title": "5.3 Independent Real Estate Agents & Brokerages", "who": "Individual real estate agents, boutique brokerages, and property consultants selling and renting residential properties \u2014 apartments, villas, and plotted developments \u2014 in urban and suburban markets.", "leak": "Your Meta ad reached the right buyer. They messaged you. You replied 6 hours later \u2014 after your other viewing was done. They'd already booked a viewing with the agent who replied in 15 minutes.", "wedge": "", "outcome": "Leads are qualified and viewings are booked in under 60 seconds from first inquiry \u2014 and the CRM pipeline means no opportunity goes cold between stages.", "details": "Who this is for: Individual real estate agents, boutique brokerages, and property consultants selling and renting residential properties \u2014 apartments, villas, and plotted developments \u2014 in urban and suburban markets. The Core Revenue Leak: Your Meta ad reached the right buyer. They messaged you. You replied 6 hours later \u2014 after your other viewing was done. They'd already booked a viewing with the agent who replied in 15 minutes. The Wedge: An AI WhatsApp Lead Qualification & Booking Bot that responds within 60 seconds, qualifies the buyer's budget and timeline, and books a viewing slot \u2014 without waiting for you. What We Install: Acquisition Funnel \u2014 Meta Lead Ads targeting prospective home buyers by income proxy, life stage, and location interest. \u2014 Instagram property walk-through reels and neighbourhood guide content for organic discovery. \u2014 Google Search Ads for high-intent queries: \"2BHK for sale Area,\" \"flat for rent City.\" AI Qualification Bot \u2014 WhatsApp bot triggered on lead form submission: property type preference \u2192 budget bracket \u2192 timeline \u2192 location preference \u2192 preferred viewing slot. \u2014 Qualified leads: viewing booked, logged in Property CRM, agent notified. \u2014 Unqualified leads: nurture sequence begins \u2014 relevant listings sent weekly until timeline shortens. Property CRM Pipeline \u2014 Stages: New Lead \u2192 Qualified \u2192 Viewing Scheduled \u2192 Viewed \u2192 Negotiating \u2192 Agreement \u2192 Closed. \u2014 Automated follow-up at each stage: same-day post-viewing summary, Day 3 competing listing alert, Day 7 price-drop notification. Social Media Optimisation \u2014 Primary channels: Instagram, YouTube, LinkedIn. \u2014 Bio: \"Realtor in City | Helping you find your dream home. View listings below \u2193\" \u2014 Content hooks: Property video walk-throughs, neighbourhood amenity guides, \"what \u20b9budget gets you in Area\" comparison reels, and market forecast educational content. Marketing Automation \u2014 WhatsApp: New property alert matching buyer profile, viewing confirmation, and negotiation update. \u2014 SMS: Viewing reminder 2 hours before. \u2014 Email: Weekly property newsletter with 3\u20135 curated listings matching CRM-stored buyer preferences. Brand Visibility \u2014 GBP optimised with listing brochures, neighbourhood specialisation, team photos, and review density. \u2014 Listed on 99acres, MagicBricks, Housing.com with optimised listing descriptions and photos. \u2014 Review generation post-transaction via SMS. Outcome: Leads are qualified and viewings are booked in under 60 seconds from first inquiry \u2014 and the CRM pipeline means no opportunity goes cold between stages."}, {"title": "5.4 Used & Premium Car/Bike Dealers", "who": "Certified pre-owned car dealerships, used bike shops, and multi-brand vehicle resellers serving buyers seeking trade-ins, value purchases, and certified used vehicles.", "leak": "A buyer searching \"sell my car\" or \"used Honda City City\" calls three dealerships. The one that answers first and gives a credible trade-in estimate on the first call gets the vehicle \u2014 and the opportunity to sell the buyer a replacement.", "wedge": "", "outcome": "Trade-in inquiries convert to inspections the same day \u2014 and buyers who came to sell often leave with a viewed replacement vehicle in the pipeline.", "details": "Who this is for: Certified pre-owned car dealerships, used bike shops, and multi-brand vehicle resellers serving buyers seeking trade-ins, value purchases, and certified used vehicles. The Core Revenue Leak: A buyer searching \"sell my car\" or \"used Honda City City\" calls three dealerships. The one that answers first and gives a credible trade-in estimate on the first call gets the vehicle \u2014 and the opportunity to sell the buyer a replacement. The Wedge: A WhatsApp Vehicle Evaluation Bot that collects vehicle details, provides an instant indicative trade-in value, and schedules an inspection visit \u2014 before the buyer calls anyone else. What We Install: Acquisition Funnel \u2014 Local Maps SEO for \"sell my car City,\" \"used car dealer near me,\" and specific model searches: \"second hand Swift Dzire Area.\" \u2014 WhatsApp bot triggered from Maps or website: vehicle make/model/year/km \u2192 instant indicative value range \u2192 inspection appointment booked. \u2014 Inventory CRM: buyer profile and vehicle evaluated logged at first touch. Post-Evaluation Conversion \u2014 Same-day inspection \u2192 CRM updated with final offer. \u2014 If buyer is selling: offer confirmation WhatsApp + transfer paperwork process explained. \u2014 If buyer is also purchasing: inventory matched to their budget and preference, viewing scheduled in same session. Social Media Optimisation \u2014 Primary channels: YouTube, Instagram. \u2014 Bio: \"Certified pre-owned cars. Get your car valuation on WhatsApp \u2193\" \u2014 Content hooks: Vehicle detail highlight walk-arounds, customer delivery reaction videos, \"what to check when buying a used car\" educational series, and EMI calculator reels. Marketing Automation \u2014 WhatsApp: Inspection reminder, offer confirmation, RC transfer status updates, and 6-month post-purchase service booking reminder. \u2014 SMS: Appointment confirmation and payment notification. \u2014 Email: Monthly new-stock catalog and maintenance advisory. Brand Visibility \u2014 GBP updated with vehicle categories, certifications, warranty offerings, and finance partner details. \u2014 Listed on CarDekho C2B, Cars24 partner directory, OLX Autos, and Spinny for discovery. \u2014 Post-delivery review request via SMS. Outcome: Trade-in inquiries convert to inspections the same day \u2014 and buyers who came to sell often leave with a viewed replacement vehicle in the pipeline."}, {"title": "5.5 Showroom & Office Space Rental Agencies", "who": "Commercial real estate brokers and leasing agencies specialising in retail showroom spaces, commercial office rentals, and business premises for SMEs, retail chains, and corporate tenants.", "leak": "A retail chain's expansion manager shortlists 6 potential spaces from online listings. The three that respond with a 3D tour link the same day get a visit. The other three send a brochure PDF 3 days later and never hear back.", "wedge": "", "outcome": "Expansion managers shortlist you first because you're the only one who sent a 3D tour within the hour \u2014 and the CRM pipeline closes the deal before competitors have scheduled a call.", "details": "Who this is for: Commercial real estate brokers and leasing agencies specialising in retail showroom spaces, commercial office rentals, and business premises for SMEs, retail chains, and corporate tenants. The Core Revenue Leak: A retail chain's expansion manager shortlists 6 potential spaces from online listings. The three that respond with a 3D tour link the same day get a visit. The other three send a brochure PDF 3 days later and never hear back. The Wedge: A 3D Virtual Walkthrough of available spaces shared proactively on first inquiry \u2014 establishing visual confidence before the physical visit. What We Install: Acquisition Funnel \u2014 LinkedIn target ads to Operations Directors, Retail Expansion Managers, and Business Development Heads. \u2014 Google Search Ads for \"showroom space for rent City,\" \"commercial office Area.\" \u2014 Outbound agent sharing 3D virtual tour link within 1 hour of lead inquiry. Lead Qualification & Nurture \u2014 WhatsApp bot: space type \u2192 area requirement \u2192 location preference \u2192 budget \u2192 3D tour link sent \u2192 visit scheduled. \u2014 Commercial CRM pipeline: Lead \u2192 Tour Sent \u2192 Visit Scheduled \u2192 Proposal \u2192 LOI \u2192 Signed. \u2014 Post-virtual-tour: floor plan PDF, area growth data, and connectivity guide emailed within 24 hours. Social Media Optimisation \u2014 Primary channels: LinkedIn, YouTube. \u2014 Bio: \"Premium commercial real estate. Schedule showroom walk-throughs below \u2193\" \u2014 Content hooks: Space transformation videos (fit-out process), commercial zone growth analysis posts, and client testimonial interviews. Marketing Automation \u2014 Email: Area market analysis reports, new inventory alerts, and investment return comparisons. \u2014 WhatsApp: Virtual tour link, visit confirmation, and proposal follow-up. \u2014 SMS: Physical visit reminder. Brand Visibility \u2014 Enterprise website with interactive floor layout selector and zone pricing map. \u2014 Listed on 99acres Commercial, MagicBricks Business, and commercial property directories. \u2014 LinkedIn Company Page as a credibility hub with case studies. Outcome: Expansion managers shortlist you first because you're the only one who sent a 3D tour within the hour \u2014 and the CRM pipeline closes the deal before competitors have scheduled a call."}];
  const outcomes = [{"label": "| What Usually Happens | What This System Does |", "detail": ""}, {"label": "|---|---|", "detail": ""}, {"label": "| Missed calls go to competitor voicemail | Missed-call text-back fires in 90 seconds, keeping the lead in your pipeline |", "detail": ""}, {"label": "| Real estate leads wait 6+ hours for a reply | AI qualification bot responds in under 60 seconds and books the viewing |", "detail": ""}, {"label": "| Trade-in inquiries need a phone call to progress | WhatsApp valuation bot gives an indicative value and books inspection instantly |", "detail": ""}, {"label": "| Renovation leads ghost after the first visit | Post-visit proposal and follow-up sequence keeps momentum going |", "detail": ""}, {"label": "| Reviews collected inconsistently after jobs | Review request fires automatically 1 hour post-job, every time |", "detail": ""}];
  const faqs = [{"question": "Can the missed-call text-back work with any phone system?", "answer": "Yes \u2014 it works with mobile numbers, landlines routed through a VoIP system, and WhatsApp Business accounts."}, {"question": "Does the real estate qualification bot work for rental inquiries as well as sales?", "answer": "Yes. The bot can be configured for both sale and rental inquiry flows with different qualification criteria."}, {"question": "How long does it take to set up the local services system end-to-end?", "answer": "For a standalone trade business, the missed-call text-back and GBP optimisation are typically live within 5\u20137 working days. Full funnel including ads takes 10\u201314 days."}, {"question": "Can the renovation cost calculator handle different material grades and regional pricing?", "answer": "Yes \u2014 the calculator is built with configurable pricing parameters that can reflect your specific regional cost structures and material tiers."}];

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

export default LocalServicesRealestateServicePage;
