import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const EducationCreativeEntertainmentServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Education, Creative & Entertainment";
  const pageSubtitle = "AI-Powered Client Acquisition for Schools, Academies, Creators & Studios";
  const overview = "";
  const pillars = [{"title": "Acquisition Funnel", "desc": "Search, social, and outbound traffic routed into trial bookings, tour scheduling, sponsor pitches, and enrollment flows \u2014 not a generic contact form."}, {"title": "AI Booking & Voice Agents", "desc": "WhatsApp bots, AI voice agents with cloned instructor voices, and DM automation that follow up personally and schedule \u2014 at any hour."}, {"title": "Social Media Optimisation (SMO)", "desc": "Outcome-driven content \u2014 student results, recital clips, creator analytics, and behind-the-scenes trust \u2014 built for the platform your buyer discovers you on."}, {"title": "Marketing Automation Stack (WhatsApp \u00b7 Email \u00b7 SMS)", "desc": "Class reminders, exam alerts, sponsor follow-ups, and progress reports \u2014 running without a coordinator manually sending messages."}, {"title": "Brand Visibility Optimisation", "desc": "Google Business Profile, LMS integrations, app store listings, media kit pages, and sports/academy directories \u2014 built out where students, parents, and sponsors are already looking."}];
  const subVerticals = [{"title": "6.1 K-12 Private Schools & Preschools", "who": "Private CBSE, ICSE, and IB schools, Montessori preschools, and early learning centres competing for annual admissions in metro and Tier-2 cities.", "leak": "Parents searching \"best school near me\" visit 4\u20136 school websites. Three send a brochure and wait for a callback. One books a campus tour in the same session. That one gets the admission.", "wedge": "", "outcome": "The parent who books a tour in the same WhatsApp session is the parent who enrolls \u2014 and the post-tour sequence closes the admission before they visit a competing school.", "details": "Who this is for: Private CBSE, ICSE, and IB schools, Montessori preschools, and early learning centres competing for annual admissions in metro and Tier-2 cities. The Core Revenue Leak: Parents searching \"best school near me\" visit 4\u20136 school websites. Three send a brochure and wait for a callback. One books a campus tour in the same session. That one gets the admission. The Wedge: A WhatsApp Admission FAQ & Tour Booking Bot that answers curriculum, fee, and admission criteria questions instantly \u2014 and books the campus tour before the parent leaves the conversation. What We Install: Acquisition Funnel \u2014 Meta Ads targeting local parents by age bracket, location radius, and parenting interests. \u2014 Landing page with a 2-minute school overview video, fee structure summary, and \"Book a Tour\" CTA. \u2014 WhatsApp bot triggered on ad click: admission year \u2192 curriculum questions answered \u2192 tour booked. Tour-to-Enrollment Conversion \u2014 Pre-tour WhatsApp: campus map, parking details, who to meet, and what to bring. \u2014 Post-tour Day 1: personalised thank-you from the principal with application link. \u2014 Post-tour Day 3: admission deadline reminder and document checklist. \u2014 Post-tour Day 7: \"Limited seats remaining\" urgency message. Social Media Optimisation \u2014 Primary channels: Facebook, Instagram. \u2014 Bio: \"Nurturing curious minds in City. Admissions open for Academic Year. Book a tour \u2193\" \u2014 Content hooks: Student science fair and project highlights, teacher profile introduction videos, classroom tour walk-throughs, co-curricular achievement showcases, and parent testimonial reels. Marketing Automation \u2014 WhatsApp: Tour confirmation and pre-visit details, post-tour application link, deadline alerts. \u2014 SMS: Admission deadline countdown: \"3 days left to complete your child's application for School Name.\" \u2014 Email: Weekly school news newsletter, parent guides on curriculum and extracurricular options. Brand Visibility \u2014 GBP optimised with campus photos, board affiliation, fee structure, and school hours. \u2014 Review collection program targeting existing parents via SMS. \u2014 Listed on SchoolMyKids, AskIITians directories, and local parenting community groups. Outcome: The parent who books a tour in the same WhatsApp session is the parent who enrolls \u2014 and the post-tour sequence closes the admission before they visit a competing school."}, {"title": "6.2 Local Coaching Centers & Govt Job Teaching Institutes", "who": "UPSC/SSC coaching institutes, state PSC preparation centres, banking exam coaching academies, and JEE/NEET preparation institutes running long-term batch programs.", "leak": "Your free demo class offer generates inquiries. Half the students who attend the demo never enroll because there's no structured follow-up taking them from \"I attended\" to \"I'm registered and billed.\"", "wedge": "", "outcome": "Mock test completers receive a personalised batch recommendation that makes the enrollment decision feel inevitable \u2014 and the automated billing removes the friction of paying.", "details": "Who this is for: UPSC/SSC coaching institutes, state PSC preparation centres, banking exam coaching academies, and JEE/NEET preparation institutes running long-term batch programs. The Core Revenue Leak: Your free demo class offer generates inquiries. Half the students who attend the demo never enroll because there's no structured follow-up taking them from \"I attended\" to \"I'm registered and billed.\" The Wedge: An Interactive Free Mock Test Funnel \u2014 students take a timed online test, receive their score and subject-wise analysis on WhatsApp, and get a personalised batch recommendation that makes enrollment the obvious next step. What We Install: Mock Test Funnel \u2014 Local Meta and Google Ads offering a free full-length mock test (UPSC/SSC/Banking format). \u2014 Test hosted on a branded white-label LMS or microsite. \u2014 Instant results delivered on WhatsApp with score, percentile, and subject analysis. \u2014 Personalised batch recommendation appended: \"Based on your score, the Batch Name starting Date is the right fit. Seats: N remaining.\" Enrollment & Billing System \u2014 WhatsApp registration link post-recommendation. \u2014 Fee payment via UPI/card integrated in LMS. \u2014 Auto-billing activated for monthly instalment plans. \u2014 Student added to batch group and study material released. Social Media Optimisation \u2014 Primary channels: YouTube, Telegram. \u2014 Bio: \"Institute | Crack UPSC & SSC exams. Free Mock Test & paper downloads \u2193\" \u2014 Content hooks: Daily GK/current affairs short videos, question-solving trick reels, student selection announcement posts, and \"how I cracked exam\" student interview series. Marketing Automation \u2014 WhatsApp: Exam calendar reminders, class time notifications, and daily practice problem sends. \u2014 SMS: Mock test scorecard and batch recommendation notification. \u2014 Email: LMS course update reminders, fee due alerts, and study schedule releases. Brand Visibility \u2014 Mock test results and student selection stats displayed on the landing page. \u2014 Google Maps updated with batch timings, faculty details, and coaching centre photos. \u2014 Listed on Shiksha, Careers360, and exam-specific directories. Outcome: Mock test completers receive a personalised batch recommendation that makes the enrollment decision feel inevitable \u2014 and the automated billing removes the friction of paying."}, {"title": "6.3 EdTech & Private Tutors", "who": "Online tutoring platforms, independent private tutors, and subject-specialist teachers offering 1-on-1 or small-group sessions for K-12 students via Zoom, Google Meet, or a proprietary LMS.", "leak": "A parent searching \"maths tutor for Class 10 near me\" fills three inquiry forms. The tutor who schedules a free trial class in the same conversation gets the student. The others send a fee structure PDF and wait.", "wedge": "", "outcome": "Trial classes are booked within hours of inquiry \u2014 and the post-trial sequence converts to a subscription before the parent compares three more tutors.", "details": "Who this is for: Online tutoring platforms, independent private tutors, and subject-specialist teachers offering 1-on-1 or small-group sessions for K-12 students via Zoom, Google Meet, or a proprietary LMS. The Core Revenue Leak: A parent searching \"maths tutor for Class 10 near me\" fills three inquiry forms. The tutor who schedules a free trial class in the same conversation gets the student. The others send a fee structure PDF and wait. The Wedge: A Free Trial Class Scheduling Funnel that matches the student to the right tutor and books the trial session in one flow \u2014 reducing the time-to-first-class to under 24 hours. What We Install: Trial Class Funnel \u2014 Google Search Ads for \"online subject tutor class grade.\" \u2014 Landing page with tutor bios, subject coverage, and a \"Book Your Free 30-min Trial Class\" CTA. \u2014 Tutor-matching flow: grade \u2192 subject \u2192 preferred schedule \u2192 available tutor displayed \u2192 trial booked. \u2014 Trial class hosted on LMS or video call with session recording. Trial-to-Subscription Conversion \u2014 Post-trial WhatsApp: feedback form + subscription plan options. \u2014 Day 1 after trial: parent message with session summary and recommended plan. \u2014 Day 3: limited-time subscription offer: \"Enroll this week and get your first month at 10% off.\" Social Media Optimisation \u2014 Primary channels: Instagram, YouTube, TikTok. \u2014 Bio: \"1-on-1 expert tutoring for K-12. Book your free 30-min trial class \u2193\" \u2014 Content hooks: Quick subject-hack reels (maths shortcuts, grammar rules, physics visualisations), study schedule templates, parent testimonial videos, and \"student went from C to A in 6 weeks\" progress stories. Marketing Automation \u2014 WhatsApp: Session reminder 30 minutes before class, rescheduling option, and post-session notes. \u2014 SMS: Class reminder 2 hours before. \u2014 Email: Monthly progress report, subscription renewal notice, and seasonal exam preparation offer. Brand Visibility \u2014 LMS profile page with tutor credentials, subject expertise, and verified reviews. \u2014 Listed on UrbanPro, Superprof, Vedantu partner directories, and Google Maps for local tutors. \u2014 Review collection post-quarter via SMS. Outcome: Trial classes are booked within hours of inquiry \u2014 and the post-trial sequence converts to a subscription before the parent compares three more tutors."}, {"title": "6.4 Music, Dance & Hobby Academies", "who": "Music schools, classical and contemporary dance academies, art institutes, and hobby coaching centres offering monthly subscription coaching in instruments, vocals, dance forms, and creative skills.", "leak": "A parent signs up their child for a trial class. The sign-up confirmation is a standard email. The trial is booked. Nobody calls to confirm the child's interest, explain the curriculum, or build excitement before the first session. Trial-to-subscription conversion suffers.", "wedge": "", "outcome": "Trial-to-subscription conversion improves because the first touchpoint after sign-up is a personal voice message from the instructor \u2014 not a generic email.", "details": "Who this is for: Music schools, classical and contemporary dance academies, art institutes, and hobby coaching centres offering monthly subscription coaching in instruments, vocals, dance forms, and creative skills. The Core Revenue Leak: A parent signs up their child for a trial class. The sign-up confirmation is a standard email. The trial is booked. Nobody calls to confirm the child's interest, explain the curriculum, or build excitement before the first session. Trial-to-subscription conversion suffers. The Wedge: A Personalized AI Voice Agent \u2014 cloned from the head instructor's voice \u2014 that calls or sends a WhatsApp voice note to every new sign-up within 2 hours, personally welcoming them and confirming the trial class. What We Install: Trial Class Booking System \u2014 Instagram class showcase reels driving to a free trial booking page. \u2014 WhatsApp booking flow: instrument/dance form \u2192 age group \u2192 preferred day/time \u2192 trial slot confirmed. \u2014 AI voice agent (ElevenLabs cloned instructor voice) sends a personalised WhatsApp voice note: \"Hi Name, this is Instructor Name from Academy. I'm looking forward to meeting you on Day\u2026\" Post-Trial Conversion \u2014 Day of trial: welcome message from human coordinator. \u2014 Day 1 post-trial: personalised feedback audio note from instructor AI clone. \u2014 Day 3: subscription plan with early-bird month 1 discount. \u2014 Monthly: practice reminder voice notes, recital invitation, and progress update. Social Media Optimisation \u2014 Primary channels: Instagram, YouTube, TikTok. \u2014 Bio: \"Discover your creative potential. Register for a free trial session and download student tracks below \u2193\" \u2014 Content hooks: Student recital clips and practice progress time-lapses, choreography breakdown reels, instrument unboxing and setup guides, and trainer bio introduction videos. Music & Audio Visibility Launch \u2014 Student original tracks and covers released on YouTube, Spotify, and Apple Music \u2014 building the academy's local authority as a creative institution. \u2014 Google Maps optimised for \"guitar classes near me,\" \"dance academy City,\" and \"music school for kids.\" Marketing Automation \u2014 WhatsApp: Recital invitations, class schedule updates, personalised tutor practice reminder voice notes. \u2014 SMS: Monthly payment confirmation. \u2014 Email: Monthly class roster, student track release schedule, and academy newsletter. Outcome: Trial-to-subscription conversion improves because the first touchpoint after sign-up is a personal voice message from the instructor \u2014 not a generic email."}, {"title": "6.5 Daycares & Childcare Centers", "who": "Licensed daycare centres, after-school care providers, and creche operators offering full-day and half-day childcare packages for working parents.", "leak": "A working parent searching \"daycare near my office\" is making a high-trust decision in limited time. They'll submit 2\u20133 inquiries and go with the first facility that gives them a clear, warm response and a tour option \u2014 not the one with the best brochure.", "wedge": "", "outcome": "The parent who gets a warm, detailed WhatsApp response and a tour booked in 3 minutes chooses you over the facility that sent a PDF.", "details": "Who this is for: Licensed daycare centres, after-school care providers, and creche operators offering full-day and half-day childcare packages for working parents. The Core Revenue Leak: A working parent searching \"daycare near my office\" is making a high-trust decision in limited time. They'll submit 2\u20133 inquiries and go with the first facility that gives them a clear, warm response and a tour option \u2014 not the one with the best brochure. The Wedge: A Virtual Tour Booking Bot on WhatsApp that answers the parent's top 5 concerns instantly and books a physical tour in the same conversation. What We Install: Tour Booking Bot \u2014 WhatsApp bot triggered from Maps or website click: age of child \u2192 care hours needed \u2192 nearest centre \u2192 safety and nutrition questions answered \u2192 tour booked. \u2014 Pre-tour parent guide: what to expect, what to bring, who you'll meet. \u2014 Post-tour: enrollment details, fee structure, and portal access. Acquisition Funnel \u2014 Local Maps SEO near corporate campuses, IT parks, and office zones. \u2014 Facebook and Instagram ads targeting parents of 0\u20136 year olds by location and interest. \u2014 Landing page featuring a child activity video, safety certification display, and \"Book a Visit\" CTA. Social Media Optimisation \u2014 Primary channels: Facebook, Instagram. \u2014 Bio: \"Safe and nurturing childcare. Check availability and book a visit below \u2193\" \u2014 Content hooks: Child activity log highlights, nutritious meal prep videos, safety system demonstration reels, and caregiver introduction profiles. Marketing Automation \u2014 WhatsApp: Daily child check-in and check-out photo update to parents. \u2014 SMS: Monthly tuition billing alert. \u2014 Email: Monthly daycare newsletter with child development milestones and activity updates. Brand Visibility \u2014 GBP verified with safety certificates, operating hours, staff-to-child ratio, and CCTV disclosure. \u2014 In-centre review campaign targeting parents at pickup time. \u2014 Listed on UrbanSitter, Care.com (India), and local parent community groups. Outcome: The parent who gets a warm, detailed WhatsApp response and a tour booked in 3 minutes chooses you over the facility that sent a PDF."}, {"title": "6.6 Art, Design, Photography & Wedding Shoots", "who": "Wedding photographers, fashion photographers, portrait studios, and creative agencies offering photography and videography packages for weddings, pre-weddings, corporate events, and brand campaigns.", "leak": "A bride-to-be messages three photographers at once asking for pricing. The one who sends a portfolio link and a quote in under an hour gets the WhatsApp reply. The others get \"We went with someone else.\"", "wedge": "", "outcome": "Inquiries get a portfolio + quote in under 60 minutes \u2014 the speed alone filters out competitors and shortlists you for the first consultation.", "details": "Who this is for: Wedding photographers, fashion photographers, portrait studios, and creative agencies offering photography and videography packages for weddings, pre-weddings, corporate events, and brand campaigns. The Core Revenue Leak: A bride-to-be messages three photographers at once asking for pricing. The one who sends a portfolio link and a quote in under an hour gets the WhatsApp reply. The others get \"We went with someone else.\" The Wedge: A Price Quote Calculator Widget that gives an instant package estimate based on event date, location, and coverage duration \u2014 attached to a conversion-optimised portfolio landing page. What We Install: Quote Calculator & Portfolio Funnel \u2014 Instagram and Pinterest visual ads targeting brides, grooms, and event planners. \u2014 Landing page: curated portfolio + quote calculator embedded above the fold. \u2014 Calculator: event type \u2192 date \u2192 hours of coverage \u2192 locations \u2192 estimated package range. \u2014 Lead form at calculator result: name, WhatsApp, event date \u2192 CRM entry created \u2192 follow-up within 30 minutes. High-Touch Sales Process \u2014 WhatsApp follow-up: \"Hi Name, I'd love to capture your event type. Here's my portfolio for similar shoots: link. Want to hop on a quick call to discuss your vision?\" \u2014 Consultation call scheduled via Calendly link. \u2014 Post-consultation: personalised proposal within 24 hours with custom package and mood board. Social Media Optimisation \u2014 Primary channels: Instagram, Pinterest. \u2014 Bio: \"Capturing raw emotions. Wedding photography & portfolios. Build your package \u2193\" \u2014 Content hooks: Wedding shoot behind-the-scenes reels, photo transition showcases, \"how I planned shoot location\" vlogs, and couple reaction moments on delivery day. Marketing Automation \u2014 WhatsApp: Photoshoot day-of timeline checklist, shot list confirmation, and proof gallery delivery notification. \u2014 SMS: Proof ready for review alert. \u2014 Email: Anniversary photoshoot offer sent 11 months post-wedding. Brand Visibility \u2014 Pinterest boards organised by shoot type: pre-wedding, ceremony, reception, portrait. \u2014 Google Maps listing with portfolio gallery and booking link. \u2014 Listed on WedMeGood, ShaadiSaga, and local wedding planning directories. Outcome: Inquiries get a portfolio + quote in under 60 minutes \u2014 the speed alone filters out competitors and shortlists you for the first consultation."}, {"title": "6.7 Content Creators", "who": "YouTube creators, Instagram influencers, podcast hosts, and multi-platform content personalities seeking brand sponsorships, affiliate deals, and long-term brand partnerships.", "leak": "Sponsor outreach lives in a spreadsheet that gets updated when someone remembers. Follow-up emails go out manually. Deals stall at the proposal stage because there's no professional pitch infrastructure.", "wedge": "", "outcome": "Sponsor outreach is systematic, not occasional \u2014 and the media kit converts cold emails into signed deals at a higher rate because the pitch is already complete when brands land on the page.", "details": "Who this is for: YouTube creators, Instagram influencers, podcast hosts, and multi-platform content personalities seeking brand sponsorships, affiliate deals, and long-term brand partnerships. The Core Revenue Leak: Sponsor outreach lives in a spreadsheet that gets updated when someone remembers. Follow-up emails go out manually. Deals stall at the proposal stage because there's no professional pitch infrastructure. The Wedge: A Public Media Kit Page that hosts all your channel stats, audience demographics, past sponsor case studies, and a rate card \u2014 converting cold outreach from a conversation starter into a decision-ready presentation. What We Install: Sponsor Pipeline System \u2014 Media kit page: channel analytics (subscribers, views, engagement rate, audience demo), past brand integrations, content categories, and rate card. \u2014 Outbound sponsor email sequence: 4-touch automated campaign targeting brand marketing managers in relevant categories. \u2014 CRM pipeline: Targeted \u2192 Outreached \u2192 Replied \u2192 Proposal Sent \u2192 Negotiating \u2192 Signed \u2192 Live \u2192 Reported. Proposal & Delivery System \u2014 Branded sponsorship proposal template with deliverables, timeline, content format, and pricing. \u2014 Post-campaign performance report auto-generated and shared with sponsor at completion. \u2014 Sponsor WhatsApp channel: asset delivery pings, publishing notifications, and approval follow-ups. Social Media Optimisation \u2014 Primary channels: YouTube, Instagram. \u2014 Bio: \"Content Creator | Niche | Collabs & Sponsorships: Email / Link\" \u2014 Content hooks: High-reach visual hooks matched to algorithm trends, creator collaboration content, brand integration showcase reels, and BTS content creation vlogs. Marketing Automation \u2014 Email: Automated 4-touch outbound sequence to brand contacts; sponsor renewal offer at campaign end. \u2014 WhatsApp: Asset delivery and content approval notifications. \u2014 SMS: Payment confirmation alerts. Brand Visibility \u2014 Media kit landing page with verified analytics screenshots and sponsor testimonials. \u2014 Optimised profile grid aligned to content niche and brand aesthetic. \u2014 Listed on creator marketplaces: Plixxo, Winkl, and relevant niche directories. Outcome: Sponsor outreach is systematic, not occasional \u2014 and the media kit converts cold emails into signed deals at a higher rate because the pitch is already complete when brands land on the page."}, {"title": "6.8 OTT & Streaming Networks", "who": "Independent OTT platforms, regional content streaming networks, and niche subscription video services building subscriber bases against large platform competition.", "leak": "App installs are high because the category ad spend is working. Trial-to-paid conversion is low because the in-app experience doesn't demonstrate enough value before the trial ends \u2014 and the follow-up system is either non-existent or a generic renewal email.", "wedge": "", "outcome": "Trial-to-paid conversion improves because the follow-up sequence demonstrates value before the trial ends \u2014 not after the subscriber has already cancelled.", "details": "Who this is for: Independent OTT platforms, regional content streaming networks, and niche subscription video services building subscriber bases against large platform competition. The Core Revenue Leak: App installs are high because the category ad spend is working. Trial-to-paid conversion is low because the in-app experience doesn't demonstrate enough value before the trial ends \u2014 and the follow-up system is either non-existent or a generic renewal email. The Wedge: An ASO (App Store Optimisation) Audit combined with a CRO-audited landing page \u2014 fixing the conversion gap before spending more on installs. What We Install: ASO & Landing Page Optimisation \u2014 App store listing: title, subtitle, keyword optimisation, screenshot redesign, and preview video. \u2014 Landing page: content preview clips, genre/language filters, and trial CTA above the fold. \u2014 A/B testing framework for landing page elements (headline, preview clip selection, CTA copy). Trial-to-Paid Conversion System \u2014 Day 3 of trial: WhatsApp message highlighting 3 shows the user hasn't watched yet. \u2014 Day 5: \"Your trial ends in 2 days \u2014 here's what you'd miss\" personalised content summary. \u2014 Day 7 (trial end): subscription offer with first-month discount. \u2014 Post-subscription: new show release alerts tailored to watch history. Social Media Optimisation \u2014 Primary channels: Instagram, TikTok, YouTube. \u2014 Bio: \"Stream your favourite shows and movies. Start your free trial below \u2193\" \u2014 Content hooks: Trailer clip releases, show behind-the-scenes content, release countdown reels, and genre-specific recommendation lists. Marketing Automation \u2014 WhatsApp: New show alerts, personalised \"watch next\" suggestions, and subscription renewal reminders. \u2014 SMS: Renewal reminder 3 days before billing. \u2014 Email: Weekly recommended watch list personalised to subscriber viewing history. Brand Visibility \u2014 App store listing optimised for category and content-specific keyword searches. \u2014 Review response management to maintain app store rating. \u2014 Listed on streaming aggregator discovery platforms relevant to your content niche. Outcome: Trial-to-paid conversion improves because the follow-up sequence demonstrates value before the trial ends \u2014 not after the subscriber has already cancelled."}, {"title": "6.9 Sports Clubs & Academies", "who": "Football, cricket, basketball, badminton, swimming, and multi-sport academies offering coaching memberships, seasonal camps, and competitive training programs for juniors and adults.", "leak": "Parents who register for a trial session arrive with no context about the program, receive a generic group experience, and leave without a clear enrollment path \u2014 resulting in low trial-to-membership conversion.", "wedge": "", "outcome": "Trial sessions are booked with full pre-visit context \u2014 parents arrive informed, the experience matches expectations, and the post-trial message converts while enthusiasm is highest.", "details": "Who this is for: Football, cricket, basketball, badminton, swimming, and multi-sport academies offering coaching memberships, seasonal camps, and competitive training programs for juniors and adults. The Core Revenue Leak: Parents who register for a trial session arrive with no context about the program, receive a generic group experience, and leave without a clear enrollment path \u2014 resulting in low trial-to-membership conversion. The Wedge: An AI Trial Booking Bot combined with a Direct Ticketing Web App that pre-sells camp entries and trial sessions \u2014 and sends parent-specific program information before the first visit. What We Install: Trial & Camp Booking System \u2014 Local Meta Ads targeting parents of school-age children by location and interest. \u2014 Ticketing web app: sport \u2192 age group \u2192 available trial slots \u2192 booking confirmed \u2192 parent information pack sent on WhatsApp. \u2014 Pre-trial WhatsApp: what to wear, what to bring, coach introduction, and arrival instructions. Post-Trial Enrollment \u2014 Same-day post-trial WhatsApp from coach: personalised observation and membership recommendation. \u2014 Day 2: membership plan options with early-bird pricing. \u2014 Day 5: \"One spot remaining in your child's age group\" \u2014 urgency trigger. Social Media Optimisation \u2014 Primary channels: Instagram, Facebook. \u2014 Bio: \"Professional sports coaching in City. Book your trial session \u2193\" \u2014 Content hooks: Student game highlight reels, coach bio and qualification videos, training drill walk-throughs, and competition day documentation content. Marketing Automation \u2014 WhatsApp: Training schedule and roster updates, match day reminders, and payment confirmation. \u2014 SMS: Payment due alerts. \u2014 Email: Monthly academy newsletter with student achievements and upcoming camp announcements. Brand Visibility \u2014 GBP listing with training ground address, operating hours, coach credentials, and facility photos. \u2014 Review request sent post-season via SMS. \u2014 Listed on SportyHQ, PlayyOn, and local school sports directories. Outcome: Trial sessions are booked with full pre-visit context \u2014 parents arrive informed, the experience matches expectations, and the post-trial message converts while enthusiasm is highest."}];
  const outcomes = [{"label": "| What Usually Happens | What This System Does |", "detail": ""}, {"label": "|---|---|", "detail": ""}, {"label": "| Trial sign-ups get a generic confirmation email | AI voice agent sends a personal welcome note within 2 hours |", "detail": ""}, {"label": "| Mock test takers never get a follow-up call | Personalised batch recommendation fires instantly on WhatsApp |", "detail": ""}, {"label": "| Sponsor outreach is manual and stalls in inboxes | 4-touch automated email sequence with a pitch-ready media kit page |", "detail": ""}, {"label": "| Photography pricing inquiries wait 2 days for a quote | Quote calculator gives an instant estimate and books a consultation |", "detail": ""}, {"label": "| OTT trial users cancel without knowing what they missed | Day 3 and Day 5 WhatsApp messages demonstrate value before trial ends |", "detail": ""}];
  const faqs = [{"question": "Can the AI voice agent genuinely clone a real instructor's voice?", "answer": "Yes \u2014 ElevenLabs voice cloning creates a natural-sounding clone from 5\u201310 minutes of clean audio. It supports English, Hindi, Bengali, and other regional languages."}, {"question": "Does the sports ticketing app handle online payments?", "answer": "Yes \u2014 UPI, card, and net banking are integrated. Camp entries and trial bookings are paid at booking, reducing no-shows significantly."}, {"question": "How does the OTT trial-to-paid conversion system personalise recommendations?", "answer": "It connects to your platform's watch history data and generates content-specific suggestions in the WhatsApp messages \u2014 making each trigger feel personally relevant rather than broadcast."}, {"question": "What makes this different from a generic digital marketing retainer?", "answer": "A standard retainer manages awareness. This system manages the full funnel \u2014 from the first inquiry or ad click to the enrollment confirmation or signed sponsor deal. Awareness without conversion infrastructure is expensive."}];

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

export default EducationCreativeEntertainmentServicePage;
