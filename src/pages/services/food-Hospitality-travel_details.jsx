import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const FoodHospitalityTravelServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Food, Hospitality & Travel";
  const pageSubtitle = "AI-Powered Client Acquisition for Restaurants, Hotels, Kitchens & Travel Brands";
  const overview = "";
  const pillars = [{"title": "Direct Acquisition Funnel", "desc": "Maps, Search, and social traffic routed into your own booking and ordering system \u2014 not a third-party aggregator taking commission."}, {"title": "AI Booking & Concierge Bots", "desc": "WhatsApp bots handling reservations, custom orders, check-in logistics, and guest queries \u2014 available at any hour."}, {"title": "Social Media Optimisation (SMO)", "desc": "Visual, destination- and appetite-driven content built for the platforms your guests browse during the inspiration phase."}, {"title": "Marketing Automation Stack (WhatsApp \u00b7 Email \u00b7 SMS)", "desc": "Pre-arrival guides, order confirmations, post-stay review requests, and loyalty sequences running automatically."}, {"title": "Brand Visibility & Aggregator Optimisation", "desc": "Google Business Profile, travel listings, and aggregator ranking audits \u2014 built to convert the guest who finds you anywhere into a direct relationship that lasts."}];
  const subVerticals = [{"title": "4.1 Restaurants & Cafes", "who": "Independent restaurants, multi-cuisine cafes, fine dining establishments, and themed food venues serving dine-in, takeaway, and delivery.", "leak": "Every Swiggy/Zomato order costs you 18\u201325% in commission \u2014 on a customer who already knows your restaurant, enjoys your food, and would happily order direct if it were as easy.", "wedge": "", "outcome": "Regular customers order direct, keeping the commission in your margin \u2014 and QR table codes make direct the default, not the extra effort.", "details": "Who this is for: Independent restaurants, multi-cuisine cafes, fine dining establishments, and themed food venues serving dine-in, takeaway, and delivery. The Core Revenue Leak: Every Swiggy/Zomato order costs you 18\u201325% in commission \u2014 on a customer who already knows your restaurant, enjoys your food, and would happily order direct if it were as easy. The Wedge: A Zero-Commission Direct Online Ordering Web App \u2014 a mobile-optimised ordering page accessible via a QR code on the table or a link in your Instagram bio. What We Install: Direct Ordering System \u2014 Mobile-first ordering web app with your full menu, customisation options, and UPI/card/cash checkout. \u2014 QR codes on every table: scan \u2192 browse menu \u2192 order \u2192 pay \u2192 kitchen receives order on KDS. \u2014 Direct ordering link in all social bios, Google Maps, and WhatsApp. AI Reservation Bot \u2014 WhatsApp bot for reservations: date, time, party size \u2192 available slot confirmed \u2192 booking logged in POS. \u2014 Pre-visit reminder: \"Your table for N is confirmed for Date at Time. Any dietary requirements to note?\" \u2014 Post-visit: review request at 2 hours after checkout. Social Media Optimisation \u2014 Primary channels: Instagram, Facebook. \u2014 Bio: \"Authentic cuisine in City. Skip Swiggy \u2014 Order Direct at 0% Commission \u2193\" \u2014 Content hooks: Chef preparation videos (real-time, unscripted), signature dish showcase reels, foodie review reactions, ingredient sourcing stories, and \"today's special\" daily content. Marketing Automation \u2014 WhatsApp: Direct order receipt, estimated preparation time, loyalty points update. \u2014 SMS: Birthday month discount voucher: \"Your birthday treat from us: 20% off your next meal.\" \u2014 Email: Monthly seasonal menu updates, event announcements, and catering inquiry forms. Brand Visibility \u2014 GBP fully updated: visual menu with prices, operating hours, and direct booking option. \u2014 Aggregator ranking audit: photo quality, menu categorisation, response time, review response. \u2014 Weekly review response management to maintain Maps rating above 4.4. Outcome: Regular customers order direct, keeping the commission in your margin \u2014 and QR table codes make direct the default, not the extra effort."}, {"title": "4.2 Hotels & Resorts", "who": "Boutique hotels, business hotels, heritage properties, and luxury resorts competing for direct bookings against OTA platforms like Booking.com, MakeMyTrip, and Agoda.", "leak": "A guest who loved their stay books their next visit through Booking.com because that's where they started their search \u2014 and you pay 15\u201320% on a returning customer.", "wedge": "", "outcome": "Returning guests find your direct booking option, take the perk, and bypass the OTA \u2014 turning a 20% commission into a 100% margin stay.", "details": "Who this is for: Boutique hotels, business hotels, heritage properties, and luxury resorts competing for direct bookings against OTA platforms like Booking.com, MakeMyTrip, and Agoda. The Core Revenue Leak: A guest who loved their stay books their next visit through Booking.com because that's where they started their search \u2014 and you pay 15\u201320% on a returning customer. The Wedge: A 360\u00b0 Virtual Tour of your property combined with a Direct Booking Widget offering an exclusive benefit (free breakfast, room upgrade, or 10% off) that OTAs can't match. What We Install: Direct Booking Engine \u2014 Commission-free booking widget embedded on the property website. \u2014 Rate parity monitoring: direct rate always matches or beats OTA with an exclusive perk. \u2014 360\u00b0 virtual room tours and common area walk-throughs on the booking page. \u2014 Google Travel Ads driving to direct booking page, not an OTA. AI Guest Concierge Bot \u2014 Pre-arrival WhatsApp: dietary preferences, early check-in request, local activity recommendations. \u2014 Check-in logistics: room number, digital key instructions (if applicable), and parking details. \u2014 In-stay: room service ordering, laundry request, restaurant reservation. \u2014 Post-checkout: review request 4 hours after departure. Social Media Optimisation \u2014 Primary channels: Instagram, YouTube. \u2014 Bio: \"Experience luxury in Location. Book direct for 10% off and free breakfast \u2193\" \u2014 Content hooks: Sunset resort drone clips, room interior morning-light tours, in-stay experience reels (spa, pool, dining), and local area travel guides co-created with guests. Marketing Automation \u2014 Email: Pre-arrival guide (check-in time, local highlights, weather, packing suggestions) sent 72 hours before arrival. \u2014 WhatsApp: Concierge channel open from booking to checkout. \u2014 SMS: Post-checkout review request and next-visit \"welcome back\" offer. Brand Visibility \u2014 High-converting direct booking engine with full SSl, payment security, and mobile optimisation. \u2014 Google Travel ratings management and TripAdvisor review response. \u2014 PR outreach to travel bloggers and media for editorial coverage. Outcome: Returning guests find your direct booking option, take the perk, and bypass the OTA \u2014 turning a 20% commission into a 100% margin stay."}, {"title": "4.3 Dark/Ghost Kitchens", "who": "Virtual restaurant brands and ghost kitchen operators running multiple food concepts from a single kitchen, distributing via aggregators and direct WhatsApp ordering.", "leak": "Your ranking on Zomato/Swiggy depends on an algorithm you can't control, reviews you can't always influence, and commission rates that erode margin on every order \u2014 including your most loyal repeat customers.", "wedge": "", "outcome": "Aggregator revenue grows through better ranking, while direct WhatsApp orders grow as loyal customers realise the discount \u2014 reducing platform dependency over time.", "details": "Who this is for: Virtual restaurant brands and ghost kitchen operators running multiple food concepts from a single kitchen, distributing via aggregators and direct WhatsApp ordering. The Core Revenue Leak: Your ranking on Zomato/Swiggy depends on an algorithm you can't control, reviews you can't always influence, and commission rates that erode margin on every order \u2014 including your most loyal repeat customers. The Wedge: An Aggregator Ranking Audit identifying exactly what your top competitors are doing in menu categorisation, photo quality, and review strategy \u2014 combined with a direct WhatsApp ordering channel that removes the commission entirely for loyal customers. What We Install: Direct Ordering Channel \u2014 WhatsApp ordering bot: daily menu selection \u2192 order confirmed \u2192 KDS notified \u2192 delivery dispatched. \u2014 Subscription logic: regular customers on a weekly lunch plan \u2192 auto-order suggestion sent every Monday morning. \u2014 Direct ordering discount: 15% off vs. aggregator prices \u2014 positioned openly. Aggregator Ranking Optimisation \u2014 Menu photo quality audit and reshoot recommendations. \u2014 Menu category and keyword optimisation for search discovery on Zomato/Swiggy. \u2014 Review management: template responses for negative reviews, thank-you sequences for positives. \u2014 Peak hour performance analysis and menu engineering for high-margin item prominence. Social Media Optimisation \u2014 Primary channels: Instagram, WhatsApp. \u2014 Bio: \"Chef-crafted meals delivered to your desk. Save 15% on direct orders below \u2193\" \u2014 Content hooks: Behind-the-scenes clean kitchen vlogs, daily specials announcement, packing process reels, and \"how we make signature dish\" transparency content. Marketing Automation \u2014 WhatsApp: Order status updates (received \u2192 preparing \u2192 dispatched \u2192 delivered), and daily lunch menu broadcast. \u2014 SMS: Daily special and new item alert. \u2014 Email: Weekly subscription meal pack offers. Brand Visibility \u2014 Aggregator listing details audited and updated weekly. \u2014 Review loop for delivery speed and food quality post-delivery. \u2014 Zomato/Swiggy Gold and subscription program exploration for volume growth. Outcome: Aggregator revenue grows through better ranking, while direct WhatsApp orders grow as loyal customers realise the discount \u2014 reducing platform dependency over time."}, {"title": "4.4 Bakeries & Confectionery Shops", "who": "Artisan bakeries, designer cake studios, patisseries, and dessert boutiques creating custom wedding, birthday, and celebration cakes.", "leak": "Custom cake inquiries are inherently high-touch \u2014 multiple back-and-forth messages about design, flavour, size, and date. Each exchange is an opportunity for the customer to go cold or be won by a competitor who replied faster.", "wedge": "", "outcome": "Custom cake orders are placed and confirmed in a single WhatsApp conversation \u2014 no back-and-forth delay that loses the customer.", "details": "Who this is for: Artisan bakeries, designer cake studios, patisseries, and dessert boutiques creating custom wedding, birthday, and celebration cakes. The Core Revenue Leak: Custom cake inquiries are inherently high-touch \u2014 multiple back-and-forth messages about design, flavour, size, and date. Each exchange is an opportunity for the customer to go cold or be won by a competitor who replied faster. The Wedge: A WhatsApp Custom Cake Builder Bot that captures every design parameter in one structured conversation \u2014 and generates the invoice automatically. What We Install: Custom Order Bot \u2014 WhatsApp bot flow: event type \u2192 flavour \u2192 tiers \u2192 design reference photo \u2192 date \u2192 serving count \u2192 delivery/pickup \u2192 quote generated \u2192 invoice sent \u2192 deposit payment link. \u2014 Design confirmation message with baker notes 48 hours before baking starts. \u2014 Progress update: photo of finished cake before dispatch. \u2014 Pickup or delivery notification. Acquisition Funnel \u2014 Pinterest and Instagram visual ads targeting wedding planners, event managers, and occasion-sensitive buyers. \u2014 Seasonal campaign content: wedding season (Oct\u2013Feb), birthday months, and festival specials. \u2014 Google Maps optimised for \"custom cake City,\" \"wedding cake bakery,\" and \"designer cake near me.\" Social Media Optimisation \u2014 Primary channels: Instagram, Pinterest. \u2014 Bio: \"Designing dream cakes for your special days. Request a quote below \u2193\" \u2014 Content hooks: Cake decoration time-lapses, surprise delivery reactions, tasting session vlogs, and \"cake for every occasion\" educational carousels. Marketing Automation \u2014 WhatsApp: Order status and in-progress photos; pickup/delivery reminder. \u2014 SMS: Ready-for-collection alert. \u2014 Email: Annual birthday occasion reminder: \"Last year we made your mum's cake \u2014 ready to book this year?\" Brand Visibility \u2014 Instagram feed curated as a portfolio \u2014 aesthetic consistency across all posts. \u2014 Google Maps listing with gallery of past work and booking link. \u2014 Listed on WedMeGood, ShaadiSaga, and wedding planning directories. Outcome: Custom cake orders are placed and confirmed in a single WhatsApp conversation \u2014 no back-and-forth delay that loses the customer."}, {"title": "4.5 Tiffin & Meal Prep Subscriptions", "who": "Home-kitchen tiffin operators, meal prep subscription services, and diet-plan delivery businesses serving office workers, students, and health-conscious urban professionals.", "leak": "Subscribers cancel because the daily commitment of replying to \"what do you want today?\" becomes friction \u2014 and competitors who let you pause, swap, or skip without a phone call win the loyalty.", "wedge": "", "outcome": "Subscriber retention improves because pausing or changing the menu takes one message \u2014 not a phone call that leads to cancellation.", "details": "Who this is for: Home-kitchen tiffin operators, meal prep subscription services, and diet-plan delivery businesses serving office workers, students, and health-conscious urban professionals. The Core Revenue Leak: Subscribers cancel because the daily commitment of replying to \"what do you want today?\" becomes friction \u2014 and competitors who let you pause, swap, or skip without a phone call win the loyalty. The Wedge: A WhatsApp Menu Selection & Pause/Resume Bot that gives subscribers full control in one message \u2014 making staying easier than leaving. What We Install: Subscription Management Bot \u2014 Daily menu ping: \"Tomorrow's menu: Option A or Option B? Reply 1 or 2.\" \u2014 One-message pause: \"Reply PAUSE number of days to pause deliveries.\" \u2014 One-message resume: \"Reply START to resume from tomorrow.\" \u2014 Monthly billing auto-generated and sent via WhatsApp. Acquisition Funnel \u2014 Hyper-local flyers in office buildings, tech parks, and co-working spaces with QR codes. \u2014 Instagram content targeting health-conscious urban professionals. \u2014 Referral program: \"Refer a colleague, both get a free week.\" Social Media Optimisation \u2014 Primary channels: WhatsApp Business, Instagram. \u2014 Bio: \"Healthy, home-style meals. Pause or change menu on WhatsApp daily \u2193\" \u2014 Content hooks: Meal prep behind-the-scenes, \"what's in today's tiffin\" daily stories, dietitian review videos, and customer testimonial reels. Marketing Automation \u2014 WhatsApp: Daily menu choice, delivery confirmation, billing reminder. \u2014 SMS: Driver live-location alert: \"Your tiffin is 10 mins away.\" \u2014 Email: Weekly nutrition summary report with calories and macros. Brand Visibility \u2014 Review campaign: notice board flyers in target office buildings. \u2014 Verified hygiene rating display on packaging and website. \u2014 Listed on local food delivery communities and apartment society groups. Outcome: Subscriber retention improves because pausing or changing the menu takes one message \u2014 not a phone call that leads to cancellation."}, {"title": "4.6 Cloud Kitchens (Corporate Catering)", "who": "Cloud kitchens, catering companies, and commercial kitchen operators targeting corporate clients \u2014 tech companies, co-working spaces, and enterprises \u2014 for daily office meal contracts.", "leak": "Corporate meal contracts are high-value recurring revenue, but the sales cycle \u2014 reaching HR managers, arranging tastings, getting approved \u2014 is long, manual, and often derailed by one unanswered email.", "wedge": "", "outcome": "Sample orders become standing weekly contracts \u2014 and the corporate billing portal makes renewal automatic.", "details": "Who this is for: Cloud kitchens, catering companies, and commercial kitchen operators targeting corporate clients \u2014 tech companies, co-working spaces, and enterprises \u2014 for daily office meal contracts. The Core Revenue Leak: Corporate meal contracts are high-value recurring revenue, but the sales cycle \u2014 reaching HR managers, arranging tastings, getting approved \u2014 is long, manual, and often derailed by one unanswered email. The Wedge: A Free \"Corporate Meal Sample\" Funnel that gets your food in front of the decision-maker before any proposal is ever discussed. What We Install: Sample Meal Funnel \u2014 LinkedIn ads targeting HR Managers, Admin Heads, and Office Managers at companies of 50\u2013500 employees. \u2014 Landing page: \"Book a complimentary sample meal for your team \u2014 10 boxes delivered to your office.\" \u2014 Post-sample follow-up: same-day feedback WhatsApp \u2192 Day 3 pricing proposal \u2192 Day 7 onboarding call invitation. Corporate Billing Portal \u2014 Client onboarding: employee headcount, dietary preferences, delivery address, billing cadence. \u2014 Monthly recurring billing: invoice auto-generated and sent via email and WhatsApp. \u2014 Menu customisation portal: HR manager selects monthly rotating menu options. Social Media Optimisation \u2014 Primary channels: LinkedIn, Instagram. \u2014 Bio: \"Premium corporate catering. Streamlining office meal prep for teams of 50\u2013500.\" \u2014 Content hooks: Corporate event catering showcases, kitchen hygiene certification posts, menu option reels, and employee meal happiness testimonials. Marketing Automation \u2014 Email: Monthly B2B newsletter with new menu items and client testimonials. \u2014 WhatsApp: Delivery confirmation and daily meal schedule reminder. \u2014 SMS: Billing reminders. Brand Visibility \u2014 Corporate client logo showcase on the website (with permission). \u2014 Registration on corporate event planning and vendor empanelment directories. \u2014 LinkedIn Company Page built as a B2B credibility hub. Outcome: Sample orders become standing weekly contracts \u2014 and the corporate billing portal makes renewal automatic."}, {"title": "4.7 Vacation Rentals & Property Management", "who": "Villa rental operators, holiday home managers, boutique stay owners, and serviced apartment businesses competing against Airbnb and Booking.com for direct guests.", "leak": "A guest who loved their stay leaves you a 5-star review on Airbnb \u2014 and books their next visit through Airbnb again, costing you 15% service fee and host commission on a returning guest.", "wedge": "", "outcome": "Returning guests book direct on their next visit \u2014 and the post-checkout email turns a 5-star review into a re-booking before they've unpacked.", "details": "Who this is for: Villa rental operators, holiday home managers, boutique stay owners, and serviced apartment businesses competing against Airbnb and Booking.com for direct guests. The Core Revenue Leak: A guest who loved their stay leaves you a 5-star review on Airbnb \u2014 and books their next visit through Airbnb again, costing you 15% service fee and host commission on a returning guest. The Wedge: A Direct Booking Engine with local GBP optimisation \u2014 giving repeat guests a way to book direct and save, while keeping the full revenue for you. What We Install: Direct Booking System \u2014 Commission-free booking engine on the property website with payment gateway integration. \u2014 Direct booking incentive: \"Book direct for 10% off + free late checkout.\" \u2014 GBP Maps optimisation for local tourist searches: \"Property type near Location,\" \"villa for rent District.\" Guest Experience Bot \u2014 Pre-arrival: check-in PIN code, parking instructions, local area guide PDF, and restaurant recommendations. \u2014 In-stay: maintenance request handling, additional towel request, and nearby activity suggestions. \u2014 Post-checkout: review request on Google and direct booking platform. Social Media Optimisation \u2014 Primary channels: Instagram, Pinterest. \u2014 Bio: \"Luxury vacation properties in Location. Book direct to save \u2193\" \u2014 Content hooks: Property exterior and interior showcase reels, nearby location guide videos, guest check-in moment reactions, and seasonal travel inspiration content. Marketing Automation \u2014 WhatsApp: Guest check-in PIN, local guide, in-stay support, and post-checkout review request. \u2014 SMS: Review request 4 hours after checkout. \u2014 Email: Seasonal re-booking offer: \"Summer at Property Name \u2014 book your dates before they go.\" Brand Visibility \u2014 Google Travel integration for direct property visibility. \u2014 Listed on holiday-specific aggregators (Airbnb for discovery; direct for conversion). \u2014 Review management across all platforms with template responses. Outcome: Returning guests book direct on their next visit \u2014 and the post-checkout email turns a 5-star review into a re-booking before they've unpacked."}, {"title": "4.8 Travel Agencies & Tour Operators", "who": "Travel agencies, incoming tour operators, and package holiday specialists crafting custom itineraries for domestic and international leisure travel.", "leak": "A potential traveller messages you with \"I want to go to Destination.\" You manually draft an itinerary over 2 days. By the time you send it, they've booked with an operator who sent them a WhatsApp draft in 3 hours.", "wedge": "", "outcome": "Inspiration-stage inquiries get a draft itinerary in hours, not days \u2014 and the deposit link at the end converts intent into a booked trip.", "details": "Who this is for: Travel agencies, incoming tour operators, and package holiday specialists crafting custom itineraries for domestic and international leisure travel. The Core Revenue Leak: A potential traveller messages you with \"I want to go to Destination.\" You manually draft an itinerary over 2 days. By the time you send it, they've booked with an operator who sent them a WhatsApp draft in 3 hours. The Wedge: A WhatsApp Itinerary & Quote Builder Bot that creates a draft itinerary based on destination, travel dates, budget, and group size \u2014 and sends it instantly. What We Install: Itinerary Builder Bot \u2014 WhatsApp bot: destination \u2192 travel dates \u2192 group size \u2192 budget bracket \u2192 interests (adventure/culture/leisure/luxury) \u2192 draft itinerary generated and sent in the same conversation. \u2014 Itinerary confirmation \u2192 deposit link sent \u2192 CRM slot booked. \u2014 Pre-departure: ticket PDFs, hotel confirmation, emergency contacts, and day-by-day guide shared on WhatsApp. Acquisition Funnel \u2014 Instagram visual ads targeting travel intent: dream destinations, travel transformation content. \u2014 Pinterest boards by destination type: beaches, mountains, heritage, adventure. \u2014 Google Search Ads for high-intent queries: \"Destination tour package from City.\" Social Media Optimisation \u2014 Primary channels: Instagram, Pinterest. \u2014 Bio: \"Curating dream international holidays. Plan your itinerary on WhatsApp \u2193\" \u2014 Content hooks: Hidden gems travel vlogs, packing checklist reels, customer tour highlight reels, and \"what \u20b9budget gets you in destination\" comparison content. Marketing Automation \u2014 WhatsApp: Ticket and document PDFs, pre-departure reminders, daily in-trip check-in messages. \u2014 SMS: Flight boarding reminder and hotel check-in logistics. \u2014 Email: Post-trip review request, destination guide newsletter, and next-trip early-bird offers. Brand Visibility \u2014 Listed on TripAdvisor, Viator, and local travel aggregators. \u2014 Google My Business fully built as a travel agency profile. \u2014 Partnership listings with hotel and activity providers in key destinations. Outcome: Inspiration-stage inquiries get a draft itinerary in hours, not days \u2014 and the deposit link at the end converts intent into a booked trip."}];
  const outcomes = [{"label": "| What Usually Happens | What This System Does |", "detail": ""}, {"label": "|---|---|", "detail": ""}, {"label": "| 20\u201330% aggregator commission on every order | Direct channel captures returning customers at 0% commission |", "detail": ""}, {"label": "| Custom inquiries take 2\u20133 days to quote | Bot generates draft itinerary or quote in the same conversation |", "detail": ""}, {"label": "| Post-stay reviews depend on a staff request | Review request fires automatically 2\u20134 hours post-checkout |", "detail": ""}, {"label": "| Seasonal bookings are reactive | Pre-season campaign captures demand before the rush |", "detail": ""}, {"label": "| Guest communication is fragmented across platforms | WhatsApp concierge handles everything pre-arrival to post-departure |", "detail": ""}];
  const faqs = [{"question": "Does the direct ordering system replace Swiggy/Zomato entirely?", "answer": "No \u2014 aggregators remain valuable for discovery and new customers. The direct channel captures returning customers who already know you. Both run simultaneously."}, {"question": "Can the guest concierge bot handle in-stay requests like room service?", "answer": "Yes. The bot can be trained on your specific service menu \u2014 room service, housekeeping requests, and activity bookings \u2014 with escalation to a human for complex requests."}, {"question": "How quickly can the direct booking engine go live for a hotel or vacation rental?", "answer": "Typically 14\u201321 working days for full setup, including payment gateway integration and GBP optimisation."}, {"question": "What languages can the WhatsApp bots operate in?", "answer": "English, Hindi, Bengali, Tamil, Telugu, and other major Indian regional languages, plus Arabic, Russian, and French for international hospitality clients."}];

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

export default FoodHospitalityTravelServicePage;
