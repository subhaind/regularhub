import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const EventsEntertainmentMediaServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Events, Entertainment & Media";
  const pageSubtitle = "AI-Powered Client Acquisition for Venues, Planners, OTT Networks, Creators & Podcast Studios";
  const overview = "";
  const pillars = [{"title": "Early-Momentum Acquisition Funnel", "desc": "Performance ads, outbound sequences, and ASO campaigns engineered to build demand before the deadline \u2014 not chase it."}, {"title": "AI Qualification & Response Bots", "desc": "WhatsApp budget calculators, DM automations, and intake bots that eliminate repetitive conversations and route qualified buyers to the right next step."}, {"title": "Social Media Optimisation (SMO)", "desc": "Visual portfolio content, sponsor-facing media kits, and audience-building reels \u2014 built for the platform where your buyer discovers and evaluates you."}, {"title": "Marketing Automation Stack (WhatsApp \u00b7 Email \u00b7 SMS)", "desc": "Proposal builders, countdown alerts, sponsor follow-ups, and post-event review requests \u2014 running without manual chasing."}, {"title": "Brand Visibility & Directory Optimisation", "desc": "Virtual tour production, app store optimisation, media kit pages, and aggregator listings \u2014 built out where corporate clients, sponsor brands, and ticketing audiences are already searching."}];
  const subVerticals = [{"title": "7.1 Entertainment Venues", "who": "Live event venues, multiplex auditoriums, cultural centres, banquet halls, and ticketed experience operators hosting concerts, stand-up shows, exhibitions, and private events.", "leak": "Ticket demand follows a predictable pattern \u2014 flat for weeks, then a spike in the 72 hours before the event. That spike is last-minute and unpredictable. Early sales, group bookings, and B2B venue hire don't happen because there's no system creating early momentum.", "wedge": "", "outcome": "Ticket sales build steadily from Week 1 instead of panicking into the final weekend \u2014 and B2B venue inquiries are handled end-to-end without waiting for a human callback.", "details": "Who this is for: Live event venues, multiplex auditoriums, cultural centres, banquet halls, and ticketed experience operators hosting concerts, stand-up shows, exhibitions, and private events. The Core Revenue Leak: Ticket demand follows a predictable pattern \u2014 flat for weeks, then a spike in the 72 hours before the event. That spike is last-minute and unpredictable. Early sales, group bookings, and B2B venue hire don't happen because there's no system creating early momentum. The Wedge: Targeted Meta and Google performance-ad setup specifically engineered for early ticket sales \u2014 before the last-minute rush \u2014 combined with virtual tour production for B2B venue booking inquiries. What We Install: Early Ticket Sales Campaign \u2014 Meta and Google performance ads launched 4\u20136 weeks before the event, targeting the audience profile most likely to book early (prior attendees, interest-matched audiences, retargeting from venue website visitors). \u2014 Early-bird pricing tier available for first 2 weeks: communicated explicitly in all ad creative. \u2014 Group booking incentive: \"4 tickets for the price of 3 \u2014 available until date.\" \u2014 WhatsApp broadcast to prior attendee database: \"Tickets are live. Early-bird ends date.\" B2B Venue Booking System \u2014 3D virtual tour of the venue embedded on the corporate booking inquiry page. \u2014 WhatsApp qualification bot for venue hire: event type \u2192 expected capacity \u2192 date \u2192 F&B requirement \u2192 quote sent within 4 hours. \u2014 B2B CRM: Inquiry \u2192 Tour Sent \u2192 Site Visit \u2192 Proposal \u2192 Signed. Social Media Optimisation \u2014 Primary channels: Instagram, YouTube. \u2014 Bio: \"Live events and private venue hire in City. Book early \u2014 limited seats \u2193\" \u2014 Content hooks: Event countdown content, past show highlight reels, behind-the-scenes setup videos, venue aerial/drone footage, and audience reaction clips. Marketing Automation \u2014 WhatsApp: Booking confirmation with seat details and entry QR code; event-day reminder with parking and arrival info; post-event review request. \u2014 SMS: Boarding reminder and last-available-seats alert. \u2014 Email: 4-week event countdown email series; post-event newsletter and next-event early access invite. Brand Visibility \u2014 GBP updated with venue capacity, amenities, accessibility details, and event calendar. \u2014 Listed on BookMyShow, Insider.in, and local event aggregators. \u2014 TripAdvisor and Google review management for venue experience ratings. Outcome: Ticket sales build steadily from Week 1 instead of panicking into the final weekend \u2014 and B2B venue inquiries are handled end-to-end without waiting for a human callback."}, {"title": "7.2 Wedding & Event Planning Companies", "who": "Full-service wedding planners, corporate event agencies, destination wedding coordinators, and event management companies handling end-to-end event production.", "leak": "A planner spends 40\u201360% of inquiry time answering the same questions: \"What's included in your package?\" \"How much does a 200-guest wedding cost?\" \"Do you handle vendor sourcing?\" These conversations happen before the client is even qualified \u2014 wasting senior planner time on inquiries that won't convert.", "wedge": "", "outcome": "Repetitive pricing conversations are eliminated \u2014 the calculator handles them \u2014 and the planner's time is spent on consultations with qualified, budget-confirmed clients.", "details": "Who this is for: Full-service wedding planners, corporate event agencies, destination wedding coordinators, and event management companies handling end-to-end event production. The Core Revenue Leak: A planner spends 40\u201360% of inquiry time answering the same questions: \"What's included in your package?\" \"How much does a 200-guest wedding cost?\" \"Do you handle vendor sourcing?\" These conversations happen before the client is even qualified \u2014 wasting senior planner time on inquiries that won't convert. The Wedge: A WhatsApp Budget & Guest-Count Calculator Bot that answers pricing questions instantly and pre-qualifies the inquiry before a human coordinator is ever involved. What We Install: Inquiry Qualification Bot \u2014 WhatsApp bot triggered from Instagram DM, website inquiry, or LinkedIn lead: event type \u2192 guest count \u2192 venue preference (client-supplied or agency-sourced) \u2192 budget bracket \u2192 estimated package range generated instantly. \u2014 Qualified leads: coordinator consultation scheduled. \u2014 Unqualified leads: \"Here's what that budget can realistically cover\" guide shared \u2014 keeping the relationship warm. Full-Service Project CRM \u2014 Pipeline: Lead \u2192 Qualified \u2192 Proposal Sent \u2192 Retainer Signed \u2192 Planning Active \u2192 Event Executed \u2192 Post-Event Review. \u2014 Proposal builder: branded proposal template with deliverables, vendor marketplace options, budget tracker, and timeline. \u2014 Day-of operations checklist shared with client via WhatsApp on event morning. Social Media Optimisation \u2014 Primary channels: LinkedIn (corporate events), Pinterest and Instagram (weddings and social events). \u2014 Bio: \"Planning seamless events and corporate retreats. Build your custom budget \u2193\" \u2014 Content hooks: Event setup time-lapses, decor mood board reveals, corporate feedback clips, and \"how we managed event type\" behind-the-scenes case study content. Marketing Automation \u2014 Email: Vendor specification guides, budget breakdown templates, and 30/14/7-day countdown check-in emails. \u2014 WhatsApp: Planning milestone updates, vendor confirmation pings, and day-of logistics briefing. \u2014 SMS: Vendor meeting confirmation and schedule reminder. Peak Season Planning \u2014 Campaign calendar aligned to peak event season: Oct\u2013Feb for weddings and social events, year-round for corporate. \u2014 Pre-season lead generation campaign: \"Planning a season wedding? Lock your date now.\" \u2014 Waiting-list system for peak dates that are fully booked. Brand Visibility \u2014 Portfolio landing page with verified corporate client testimonials and wedding gallery. \u2014 Listed on WedMeGood, ShaadiSaga, and corporate event planning directories. \u2014 LinkedIn Company Page as a B2B credibility hub for corporate event inquiries. Outcome: Repetitive pricing conversations are eliminated \u2014 the calculator handles them \u2014 and the planner's time is spent on consultations with qualified, budget-confirmed clients."}, {"title": "7.3 OTT & Streaming Networks (Media Vertical)", "who": "Regional OTT platforms, niche subscription video services, independent streaming networks, and content-specific channels building subscriber bases in a market dominated by large platforms.", "leak": "App install campaigns are generating downloads. But trial-to-paid conversion is low \u2014 users install, watch one episode, and churn when billing starts because they never experienced enough of the catalogue to feel the value.", "wedge": "", "outcome": "Trial users who receive personalised content suggestions on Days 1, 3, and 5 convert at significantly higher rates \u2014 because they've seen the value before the billing conversation begins.", "details": "Who this is for: Regional OTT platforms, niche subscription video services, independent streaming networks, and content-specific channels building subscriber bases in a market dominated by large platforms. The Core Revenue Leak: App install campaigns are generating downloads. But trial-to-paid conversion is low \u2014 users install, watch one episode, and churn when billing starts because they never experienced enough of the catalogue to feel the value. The Wedge: ASO Metadata Optimisation and a CRO-audited conversion landing page \u2014 fixing the in-app and landing page experience before spending more on acquisition. What We Install: App Store Optimisation (ASO) \u2014 Title, subtitle, and keyword field optimisation for category and content-specific searches. \u2014 Screenshot redesign: narrative flow showing the content experience, not the UI. \u2014 Preview video: 30-second compilation of highest-engagement content moments. \u2014 Rating response management to protect and improve app store scores. Conversion Landing Page \u2014 Hero: autoplay content preview (muted) with genre/language filter. \u2014 Social proof: subscriber count, content awards, and editorial coverage. \u2014 Trial CTA: prominent \"Start Free Trial\" with \"Cancel Anytime\" trust signal. \u2014 A/B test framework: headline, clip selection, and CTA button copy variants. Trial-to-Paid Nurture \u2014 Day 1: WhatsApp \"Top 3 shows to start with based on your app activity.\" \u2014 Day 3: \"Watched X? You'll love Y \u2014 here's a preview.\" \u2014 Day 5: \"Your trial ends in 2 days. Here's what's releasing next week.\" \u2014 Day 7 (trial end): Subscription offer with first-month discount. Social Media Optimisation \u2014 Primary channels: Instagram, TikTok, YouTube. \u2014 Bio: \"Stream your favourite shows. Start your free trial below \u2193\" \u2014 Content hooks: Trailer release reels, show countdown content, behind-the-scenes interviews, and genre discovery carousels. Marketing Automation \u2014 WhatsApp: Personalised new show alerts, renewal reminders, and \"you haven't watched in a while\" re-engagement trigger. \u2014 SMS: 3-day renewal reminder. \u2014 Email: Weekly recommended watch list personalised to viewing history. Outcome: Trial users who receive personalised content suggestions on Days 1, 3, and 5 convert at significantly higher rates \u2014 because they've seen the value before the billing conversation begins."}, {"title": "7.4 Content Creators (Media Vertical)", "who": "YouTube content creators, Instagram macro-influencers, multi-platform content personalities, and niche authority builders seeking brand sponsorships, product collaborations, and long-form brand partnerships.", "leak": "Sponsor outreach depends on someone with creative energy also having systematic sales energy \u2014 which is rare. Deals stall because follow-ups don't happen, the pitch isn't professional enough, or the response is too slow.", "wedge": "", "outcome": "Sponsorship outreach is systematic \u2014 every brand goes through the same 4-touch sequence and lands on the same pitch-ready media kit \u2014 and the CRM means no deal is left without a follow-up.", "details": "Who this is for: YouTube content creators, Instagram macro-influencers, multi-platform content personalities, and niche authority builders seeking brand sponsorships, product collaborations, and long-form brand partnerships. The Core Revenue Leak: Sponsor outreach depends on someone with creative energy also having systematic sales energy \u2014 which is rare. Deals stall because follow-ups don't happen, the pitch isn't professional enough, or the response is too slow. The Wedge: A Public Media Kit Page that handles the pitch before the brand has even replied \u2014 putting verified analytics, audience demographics, past integration case studies, and a rate card in front of the decision-maker the moment they land on the link. What We Install: Media Kit & Sponsor Pipeline \u2014 Media kit page: channel/platform analytics (verified screenshots), audience demographics breakdown, content category alignment, past brand integrations with outcome metrics, and rate card. \u2014 Outbound 4-touch email sequence: Introduction \u2192 Value (case study) \u2192 Content Preview \u2192 Proposal Invitation. \u2014 Sponsor CRM: Targeted \u2192 Outreached \u2192 Replied \u2192 Proposal Sent \u2192 Negotiating \u2192 Signed \u2192 Live \u2192 Reported. Campaign Delivery System \u2014 Branded proposal template: deliverables, content format, timeline, licensing terms, and pricing tiers. \u2014 Content approval flow via WhatsApp: brand sends brief \u2192 creator confirms \u2192 approval link sent \u2192 published. \u2014 Post-campaign performance report auto-generated with views, engagement, and link click data. Social Media Optimisation \u2014 Primary channels: YouTube, Instagram. \u2014 Bio: \"Content Creator | Niche | Collabs & Sponsorships: Email / Media Kit Link\" \u2014 Content hooks: High-reach hook formats matched to algorithm trends, creator collab content, and transparent brand integration reels that perform as content, not ads. Marketing Automation \u2014 Email: 4-touch automated outbound sequence to brand marketing contacts; renewal offer to existing sponsors at campaign completion. \u2014 WhatsApp: Asset delivery, publishing alerts, and approval request messages. \u2014 SMS: Payment confirmation. Brand Visibility \u2014 Media kit landing page hosted at a clean domain with verified analytics. \u2014 Profile grid optimised for sponsor-facing first impression. \u2014 Listed on Winkl, Plixxo, and category-specific creator marketplaces. Outcome: Sponsorship outreach is systematic \u2014 every brand goes through the same 4-touch sequence and lands on the same pitch-ready media kit \u2014 and the CRM means no deal is left without a follow-up."}, {"title": "7.5 Podcast Networks (Media Vertical)", "who": "Independent podcast studios, multi-show podcast networks, and branded podcast operators seeking advertising sponsor slots, live event partnerships, and branded content deals.", "leak": "Ad slots go unsold because sponsor outreach is a one-email exercise \u2014 no follow-up, no performance data presented visually, and no professional pitch infrastructure that makes the value of a podcast ad obvious to a brand that's never measured it.", "wedge": "", "outcome": "Every ad slot has a systematic, trackable path to being sold \u2014 and the post-campaign report turns a one-time sponsor into a recurring partner.", "details": "Who this is for: Independent podcast studios, multi-show podcast networks, and branded podcast operators seeking advertising sponsor slots, live event partnerships, and branded content deals. The Core Revenue Leak: Ad slots go unsold because sponsor outreach is a one-email exercise \u2014 no follow-up, no performance data presented visually, and no professional pitch infrastructure that makes the value of a podcast ad obvious to a brand that's never measured it. The Wedge: A Video-Shorts Visualiser that converts raw podcast audio into social-ready video clips \u2014 building a visual proof-of-audience that sponsors can see, share internally, and use to justify an ad buy. What We Install: Sponsor Pipeline System \u2014 Video shorts visualiser: automated conversion of podcast clips to captioned social videos for sponsor prospect delivery. \u2014 Sponsor deck: listener demographics, episode download averages, engagement metrics, past sponsor case studies, and slot pricing. \u2014 Outbound sponsor email sequence: 4-touch campaign targeting brand marketing managers in relevant categories. \u2014 Sponsor CRM: Targeted \u2192 Outreached \u2192 Proposal Sent \u2192 Negotiating \u2192 Signed \u2192 Live \u2192 Reported. Performance Reporting System \u2014 Post-campaign sponsor report: downloads during sponsorship period, listener territory breakdown, promo code redemption (where applicable), and audience sentiment summary. \u2014 Renewal offer attached to post-campaign report: \"Your ad reached N listeners. Here's how Season 2 looks for our next available slot.\" Social Media Optimisation \u2014 Primary channels: YouTube, Instagram. \u2014 Bio: \"Home of top-ranking podcasts on topic. Explore sponsorship opportunities below \u2193\" \u2014 Content hooks: Episode highlight audio clips, sponsor integration showcase reels, listener stat milestone posts, and \"why podcast advertising works\" educational content for prospective sponsors. Marketing Automation \u2014 Email: Outbound sponsor sequence, campaign performance report, and renewal offer. \u2014 WhatsApp: Audio asset delivery, episode publishing notifications, and approval pings. \u2014 SMS: Payment confirmation alerts. Brand Visibility \u2014 Sponsor-facing landing page: verified download stats, audience demographics, and sponsor slot calendar. \u2014 Listed on Spotify for Podcasters, Apple Podcasts Connect, and podcast advertising directories. \u2014 PR outreach for editorial coverage on podcast industry platforms. Outcome: Every ad slot has a systematic, trackable path to being sold \u2014 and the post-campaign report turns a one-time sponsor into a recurring partner."}];
  const outcomes = [{"label": "| What Usually Happens | What This System Does |", "detail": ""}, {"label": "|---|---|", "detail": ""}, {"label": "| Ticket sales spike in the last 72 hours | Early-bird ad campaigns build momentum from Week 1 |", "detail": ""}, {"label": "| Planner time wasted on unqualified pricing inquiries | Budget calculator pre-qualifies every inquiry automatically |", "detail": ""}, {"label": "| OTT trial users churn before they see value | Day 1/3/5 WhatsApp nurture demonstrates value before billing |", "detail": ""}, {"label": "| Sponsor outreach stalls after the first email | 4-touch automated sequence with a pitch-ready media kit |", "detail": ""}, {"label": "| B2B venue inquiries need a physical site visit first | 3D virtual tour handles site evaluation remotely |", "detail": ""}];
  const faqs = [{"question": "How far in advance should the early ticket sales campaign start?", "answer": "For events under 500 seats: 4\u20136 weeks. For large-scale events (1,000+ seats): 8\u201312 weeks. We build the campaign calendar backward from the event date."}, {"question": "Can the wedding planner calculator handle different event types \u2014 corporate, social, destination?", "answer": "Yes. The bot is configurable with separate flows for corporate, wedding, and social events, each with their own budget logic and qualification criteria."}, {"question": "Does the podcast sponsor pipeline require minimum download numbers to be effective?", "answer": "No. The system works across audience sizes. For smaller shows, the pitch focuses on audience quality (niche specificity, engagement rate) rather than volume \u2014 and the video shorts visualiser makes the audience real and tangible for the brand."}, {"question": "How does the OTT conversion system personalise suggestions without access to internal data?", "answer": "For platforms that share viewing history data via API or export, the personalisation is fully automated. For platforms without data access, the system uses genre/language preference collected at sign-up to personalise the trial nurture messages."}];

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

export default EventsEntertainmentMediaServicePage;
