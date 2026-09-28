import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const OnlineReputationManagementServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Brand & Reputation Management + Cybersecurity Management";
  const pageSubtitle = "Comprehensive Service Catalog \u2014 25+ Years Combined Industry Experience";
  const overview = "Reputation and security are two views of the same risk. A data breach becomes a reputation crisis within hours of disclosure. An impersonation campaign or disinformation is often made possible by a security gap: a compromised account, a spoofed domain, a leaked credential. We treat them as one continuous practice.";

  const p1Indiv = [{"title": "What's Inside", "desc": "Protecting and elevating how a person or organization is perceived \u2014 built proactively, and mobilized fast when something goes wrong."}, {"title": "Reputation Audit & Baseline Monitoring", "desc": "Every individual engagement starts with a full audit of what currently appears about the client across search engines, news archives, social platforms, forums, and review sites \u2014 cataloguing sentiment, ranking position, and source authority for each result. Once the baseline is set, we configure ongoing monitoring (search alerts, social listening, news scraping) so new mentions are caught within hours rather than discovered by the client after the fact."}, {"title": "Search Engine Reputation Management (SERM)", "desc": "For individuals dealing with outdated, embarrassing, or damaging content ranking on the first page of search results, we run a structured SEO campaign to build and promote owned, positive assets \u2014 professional profiles, press features, personal sites \u2014 that outrank the negative material. This is usually more realistic than attempting to erase third-party-hosted content outright."}, {"title": "Content Removal & De-Indexing Support", "desc": "Where content violates a platform's terms of service, is defamatory, or qualifies for a formal removal request \u2014 right-to-be-forgotten requests under GDPR, DMCA takedowns for copyright violations, or platform-specific harassment/impersonation reporting \u2014 we manage the entire submission and follow-up process directly with platforms, webmasters, and search engines on the client's behalf."}, {"title": "Digital Footprint Cleanup", "desc": "A methodical sweep of old accounts, abandoned forum posts, data broker listings, and outdated personal information scattered across the internet \u2014 closing what can be closed, requesting deletion from people-search and data broker sites, and documenting what remains outside our control so the client knows exactly where they stand."}, {"title": "Personal Brand Strategy", "desc": "Development of a clear, consistent narrative and positioning for the client \u2014 who they are, what they're known for, and how that should read across every platform and touchpoint. This becomes the foundation everything else (content, media, social presence) is built against, so growth compounds instead of scattering in different directions."}, {"title": "Social Media Profile Management & Optimization", "desc": "Hands-on management or optimization of the client's professional presence \u2014 primarily LinkedIn, but also Instagram, X, and TikTok depending on the industry \u2014 covering bio and positioning, content calendars, engagement strategy, and a review of privacy and security settings."}, {"title": "Crisis Response for Individuals", "desc": "Rapid-response support when a client is at the center of a viral post, leaked information, or sudden negative press: a same-day assessment of exposure, a holding statement if warranted, coordinated outreach to platforms and journalists, and a monitoring plan to track how the situation develops."}, {"title": "Media Training & Interview Coaching", "desc": "One-on-one coaching to prepare clients for press interviews, depositions, podcast appearances, or public statements \u2014 message development, difficult-question drilling, and on-camera or on-mic delivery practice."}, {"title": "Review Management", "desc": "For client-facing professionals (physicians, agents, consultants, contractors), ongoing monitoring and response strategy for Google, Yelp, Healthgrades, Avvo, and other industry-specific review platforms, plus ethical review-generation campaigns to build a stronger, more representative rating over time."}, {"title": "Thought Leadership Placement", "desc": "Positioning the client as a credible voice in their field through ghostwritten or co-written bylines, op-eds, podcast guest bookings, and speaking opportunities \u2014 each chosen to reinforce the personal brand strategy rather than chase visibility for its own sake."}];
  const p1Corp = [{"title": "Legal Referral Coordination", "desc": "Where a matter crosses into defamation, harassment, or extortion, we identify and coordinate with outside defamation/media counsel, and manage the practical workflow between legal action and reputation remediation so the two efforts reinforce rather than duplicate each other."}, {"title": "Corporate Reputation Audit & Brand Health Assessment", "desc": "A structured diagnostic of how the company is perceived across media, search, social, review platforms, employee channels (Glassdoor), and analyst commentary \u2014 benchmarked against direct competitors to identify where reputation is an asset versus a liability."}, {"title": "Crisis Communications Planning & Rapid Response", "desc": "Development of a pre-built crisis playbook \u2014 scenario matrices, approval chains, holding statements, spokesperson designation \u2014 so that when an actual incident hits, the company is executing a rehearsed plan within the first hour rather than improvising. Live incident support includes message drafting, media monitoring, and direct coordination with leadership through resolution."}, {"title": "Media Relations & Press Office Support", "desc": "Ongoing relationship management with relevant journalists, editors, and outlets; press release drafting and distribution; and day-to-day handling of inbound media inquiries so the company controls its own narrative rather than reacting to someone else's."}, {"title": "Online Review Management", "desc": "Enterprise-level monitoring and response strategy across Google, Yelp, Trustpilot, G2, Capterra, and industry-specific platforms, with response templates, escalation protocols for false or malicious reviews, and campaigns to increase the volume of genuine positive reviews."}, {"title": "Search Engine Reputation Management (SERM) for Companies", "desc": "The same suppress-and-promote methodology as individual SERM, scaled to protect a corporate brand name, executive names, and product names from negative press, review-aggregation sites, or coordinated attack campaigns dominating branded search results."}, {"title": "Social Listening & Sentiment Analysis", "desc": "Continuous tracking of brand mentions across social platforms, forums, and news, with sentiment scoring and trend analysis delivered as a recurring report \u2014 surfacing emerging issues (a viral complaint, a coordinated campaign) while they're still small enough to manage."}, {"title": "Executive & C-Suite Reputation Management", "desc": "Personal reputation and digital security management for founders, CEOs, and other public-facing leaders, recognizing that executive reputation and company reputation are tightly linked \u2014 a personal controversy can move stock price and hiring outcomes just as fast as a corporate one."}, {"title": "Employer Branding", "desc": "Management of the company's reputation as a place to work \u2014 Glassdoor and Indeed presence, response strategy for employee reviews, and positioning that supports recruiting and retention goals, developed in coordination with HR leadership."}, {"title": "Content Strategy & Thought Leadership Programs", "desc": "Company-wide programs \u2014 executive bylines, research reports, speaking placements, podcast strategy \u2014 designed to establish the organization and its leaders as authoritative voices in their category, built on an editorial calendar tied to business goals."}, {"title": "Influencer & Analyst Relations", "desc": "Relationship management with industry analysts (Gartner, Forrester, and sector-specific equivalents) and relevant influencers or creators, ensuring the company is accurately represented in reports, rankings, and organic commentary that shape buyer perception."}, {"title": "Competitive Reputation Benchmarking", "desc": "Structured comparison of the company's reputation metrics \u2014 share of voice, sentiment, review scores, search presence \u2014 against named competitors, refreshed on a recurring cadence to track relative movement over time."}, {"title": "Litigation PR & Regulatory Communications Support", "desc": "Communications strategy that runs parallel to active litigation or regulatory proceedings \u2014 coordinated closely with legal counsel to ensure public statements don't undermine the legal position, while still protecting the company's standing with customers, investors, and the public."}, {"title": "M&A and Rebranding Communications", "desc": "Reputation and communications strategy for mergers, acquisitions, and rebrands \u2014 stakeholder messaging for employees, customers, and investors, timeline sequencing, and narrative continuity so a name or ownership change doesn't read as instability."}, {"title": "Product Recall / Issue Management Communications", "desc": "Rapid-turnaround communications support for product safety issues, service outages, or quality failures \u2014 coordinating legal, regulatory, and customer-facing messaging so the response is fast, accurate, and consistent across every channel."}, {"title": "ESG & Corporate Responsibility Narrative Management", "desc": "Development and protection of the company's environmental, social, and governance story \u2014 ensuring public claims are substantiated (avoiding greenwashing exposure) and that the narrative holds up under scrutiny from journalists, NGOs, and regulators."}, {"title": "Internal Communications & Employee Advocacy Programs", "desc": "Programs that turn employees into informed, consistent brand ambassadors \u2014 internal messaging alignment, executive communication cadences, and structured social advocacy programs that extend organic reach while reducing the risk of off-message public statements."}];
  const p2Indiv = [{"title": "Brand Protection", "desc": "Ongoing monitoring for trademark misuse, counterfeit goods, and domain-squatting or typosquatting targeting the company's name and marks, paired with a takedown and enforcement process when infringement is found. Protecting the devices, accounts, data, and infrastructure an individual or organization depends on \u2014 from prevention through incident response."}, {"title": "Personal Device & Home Network Security Assessment", "desc": "A hands-on review of every device and the home network they connect through \u2014 router configuration, firmware status, open ports, Wi-Fi encryption, and device-level settings \u2014 with a prioritized remediation list, not just a report full of findings."}, {"title": "Identity Theft Monitoring & Protection", "desc": "Continuous monitoring of credit files, Social Security number usage, and public records for signs of identity theft, paired with a response plan and hands-on support \u2014 credit freezes, fraud affidavits, agency notifications \u2014 if theft actually occurs."}, {"title": "Dark Web Monitoring", "desc": "Automated scanning of breach dumps, criminal marketplaces, and paste sites for the client's email addresses, passwords, and other personal data, with immediate alerts and a remediation checklist \u2014 what to change, where, and in what order \u2014 whenever something surfaces."}, {"title": "Password Manager Setup & Credential Hygiene", "desc": "Full setup and migration to a password manager, including auditing existing passwords for reuse and weakness, replacing them with unique high-strength credentials, and training the client on day-to-day use so the habit actually sticks."}, {"title": "Multi-Factor Authentication Implementation", "desc": "Rollout of MFA \u2014 preferably app-based or hardware key rather than SMS \u2014 across email, financial accounts, social media, and any other high-value account, with backup and recovery options configured properly so the client isn't locked out of their own life."}, {"title": "VPN & Secure Browsing Setup", "desc": "Selection and configuration of a reputable VPN service, browser hardening (extensions, tracker blocking, DNS settings), and guidance on safe use of public Wi-Fi and untrusted networks."}, {"title": "Social Media Account Hardening", "desc": "A platform-by-platform review of privacy and security settings, login activity, connected apps, and account-recovery options \u2014 closing the gaps that make accounts easy to hijack or scrape for personal information."}, {"title": "Phishing & Scam Awareness Coaching", "desc": "Practical, example-based training on recognizing phishing emails, smishing texts, vishing calls, and social-engineering attempts \u2014 tailored to the scams currently circulating rather than generic slideware."}, {"title": "Personal Data Breach Response", "desc": "Direct support when a client's information appears in a breach \u2014 determining what was exposed, which accounts and credentials need immediate action, and what longer-term monitoring is warranted."}, {"title": "Financial Account Monitoring & Fraud Alerts", "desc": "Setup of transaction alerts and monitoring across banking, credit card, and investment accounts, plus a rehearsed response plan for unauthorized activity so minutes matter, not days."}, {"title": "Family & Child Online Safety", "desc": "Age-appropriate parental controls, device management, and monitoring setup, paired with digital-literacy coaching for kids and teens and plain-language guidance for parents on what to watch for."}, {"title": "Smart Home / IoT Device Security", "desc": "Security review and hardening of connected devices \u2014 cameras, doorbells, thermostats, voice assistants \u2014 which are frequently the weakest link in an otherwise well-secured home network."}, {"title": "Digital Estate Planning", "desc": "Secure documentation and handoff planning for online accounts, passwords, and digital assets, so a trusted person can access what's needed in the event of death or incapacitation, without leaving credentials sitting in an unsecured document."}];
  const p2Corp = [{"title": "Cyberstalking & Online Harassment Protection", "desc": "Support for clients experiencing targeted harassment or stalking \u2014 evidence documentation for law enforcement or legal action, account and device hardening, and coordination with platforms to enforce their harassment policies."}, {"title": "Enterprise Security Risk Assessment & Gap Analysis", "desc": "A full-scope evaluation of the organization's security posture against a recognized framework (NIST CSF, CIS Controls, ISO 27001), producing a prioritized, risk-ranked remediation roadmap rather than an undifferentiated list of findings."}, {"title": "Penetration Testing", "desc": "Authorized, simulated attacks against networks, web applications, wireless infrastructure, and staff (via social engineering) to identify exploitable vulnerabilities before an actual adversary does \u2014 delivered with clear severity ratings and proof-of-concept detail engineers can act on."}, {"title": "Vulnerability Management Program", "desc": "An ongoing, not one-time, program of scanning, patch prioritization, and remediation tracking across the environment \u2014 closing the gap between \"we found it\" and \"we fixed it\" that most one-off assessments leave open."}, {"title": "24/7 Security Operations Center (SOC) Monitoring", "desc": "Round-the-clock monitoring of network and endpoint activity by human analysts backed by SIEM tooling, with defined escalation thresholds so real threats get a fast human response instead of getting lost in alert noise."}, {"title": "Incident Response Planning & Digital Forensics", "desc": "Pre-built incident response plans with defined roles, communication trees, and playbooks for common scenarios (ransomware, business email compromise, data exfiltration), plus forensic investigation capability to determine scope, root cause, and evidence for legal or insurance purposes when an incident occurs."}, {"title": "Data Breach Response & Regulatory Notification Support", "desc": "End-to-end breach response \u2014 containment, investigation, and management of legally required notifications to regulators and affected individuals under frameworks like GDPR, HIPAA, and state breach-notification laws \u2014 coordinated with legal counsel."}, {"title": "Compliance Consulting", "desc": "Gap assessment and remediation support to meet specific regulatory and framework requirements \u2014 GDPR, HIPAA, PCI-DSS, SOC 2, ISO 27001, CCPA \u2014 including documentation, control implementation, and audit preparation."}, {"title": "Employee Security Awareness Training & Phishing Simulations", "desc": "Recurring training programs combined with simulated phishing campaigns, tracked by department and individual so the organization can see where risk actually concentrates and target follow-up training accordingly."}, {"title": "Cloud Security Architecture", "desc": "Design and review of security controls across AWS, Azure, and GCP environments \u2014 identity permissions, network segmentation, encryption, logging, and configuration hardening \u2014 for organizations migrating to or already operating in the cloud."}, {"title": "Network Security Design & Implementation", "desc": "Architecture and deployment of firewalls, segmentation, intrusion detection/prevention, and secure remote-access infrastructure, built around the organization's actual traffic patterns and risk profile rather than a generic template."}, {"title": "Endpoint Detection & Response (EDR/XDR) Deployment", "desc": "Selection, deployment, and tuning of endpoint protection platforms across laptops, servers, and mobile devices, with monitoring integrated into the broader detection and response workflow. Identity & Access Management (IAM) and Zero Trust Architecture Design of least-privilege access models, single sign-on, and conditional access policies built around zero-trust principles \u2014 verifying every request regardless of network location rather than assuming anything inside the perimeter is safe."}, {"title": "Ransomware Readiness & Response Planning", "desc": "Proactive hardening against ransomware \u2014 backup strategy, segmentation, endpoint controls \u2014 paired with a rehearsed response plan covering the operational, legal, and communications decisions a ransomware event forces in the first 24 hours."}, {"title": "Business Continuity & Disaster Recovery Planning", "desc": "Documented plans and tested procedures for keeping critical operations running, or recovering them quickly, through a cyber incident, natural disaster, or major system failure, including defined recovery time and recovery point objectives."}, {"title": "Third-Party & Vendor Risk Management", "desc": "Assessment and ongoing monitoring of the security posture of vendors, contractors, and partners who touch company data or systems \u2014 because an organization's security is only as strong as its weakest connected party."}, {"title": "Application Security Testing", "desc": "Manual code review, static and dynamic analysis (SAST/DAST), and secure development lifecycle consulting to catch vulnerabilities in custom-built software before it ships, not after."}, {"title": "Red Team / Blue Team / Purple Team Exercises", "desc": "Adversarial simulation exercises \u2014 red team attacking, blue team defending, purple team running both sides collaboratively \u2014 that test detection and response capability under realistic conditions, not just technical controls in isolation."}, {"title": "Virtual CISO (vCISO) Advisory Services", "desc": "Fractional executive-level security leadership for organizations that need strategic security direction \u2014 board reporting, budget planning, program development \u2014 without the cost of a full-time Chief Information Security Officer."}, {"title": "Security Policy & Governance Development", "desc": "Drafting and implementation of the policy backbone every security program needs \u2014 acceptable use, data classification, incident response, access control \u2014 written to actually be followed, not just filed away for an audit."}, {"title": "Data Loss Prevention (DLP) Strategy", "desc": "Design and deployment of controls that detect and block unauthorized movement of sensitive data \u2014 outbound email, cloud uploads, removable media \u2014 tuned to minimize the false positives that cause employees to route around the controls."}, {"title": "Insider Threat Program Development", "desc": "Programs combining technical monitoring, policy, and HR coordination to detect and respond to risk from within the organization \u2014 malicious, negligent, or compromised insiders \u2014 handled with appropriate privacy and legal safeguards."}, {"title": "Cyber Insurance Readiness Consulting", "desc": "Preparation support to meet insurer requirements and strengthen the organization's position ahead of a policy application or renewal, plus claims support in the event of an actual incident."}, {"title": "M&A Cybersecurity Due Diligence", "desc": "Security assessment of an acquisition target's environment, ideally before the deal closes \u2014 surfacing undisclosed breaches, technical debt, or compliance gaps that materially affect valuation or deal terms."}, {"title": "Industrial / OT and IoT Security", "desc": "Specialized security assessment and hardening for operational technology and industrial control systems in manufacturing and critical infrastructure environments, where availability and safety constraints rule out standard IT security approaches."}];
  const p3Integrated = [{"title": "Supply Chain Security Assessments", "desc": "Evaluation of security risk introduced through the software and hardware supply chain \u2014 third-party code dependencies, vendor software, and hardware sourcing \u2014 increasingly a primary attack vector for well-resourced adversaries. Most real-world incidents are a security event and a reputation event at the same time. These services are staffed and run as one coordinated team, not two firms trading handoffs."}, {"title": "Data Breach Crisis Communications", "desc": "Technical containment and public-facing communications run as a single coordinated workstream rather than sequential ones \u2014 because customers, media, and regulators start asking questions long before a forensic investigation is complete, and what's said in those first hours has to be both accurate and legally sound."}, {"title": "Social Media Account Takeover Response", "desc": "Rapid technical recovery of a hijacked account, working directly with platform trust & safety teams, paired with reputational damage control for whatever the attacker posted or messaged while in control."}, {"title": "Impersonation & Fake Account/Site Takedowns", "desc": "Identification and takedown of fraudulent profiles, phishing sites, and fake storefronts impersonating a person or company \u2014 combining domain and platform reporting mechanisms with monitoring to catch repeat offenders."}, {"title": "Deepfake & Synthetic Media Monitoring and Response", "desc": "Detection of AI-generated audio, video, or images misrepresenting a client, with a response process covering platform takedown requests, public clarification where needed, and technical forensics to support the case."}, {"title": "Executive Protection Programs", "desc": "Combined digital security hardening and reputation shielding for high-profile executives and public figures \u2014 because threats against them rarely stay in one lane, moving fluidly between online harassment, account compromise, and physical safety risk."}];
  const p4Models = [{"title": "Brand & Domain Protection", "desc": "Monitoring for typosquatting, cybersquatting, and lookalike domains, tracked simultaneously as a reputational risk (customer confusion, brand dilution) and a security risk (phishing infrastructure), with enforcement action pursued accordingly. How these services are typically packaged depends on the client's risk profile, public exposure, and how ongoing the need is: Project-based \u2014 a defined-scope engagement (an audit, a penetration test, a cleanup) with a clear start and end. Monthly retainer \u2014 ongoing monitoring, management, or advisory work billed on a recurring basis; most reputation and SOC-style services fall here. On-call incident response retainer \u2014 a standing agreement guaranteeing priority response time (often contractual, e.g., a 1-hour or 4-hour SLA) if a breach or reputational crisis occurs, without paying for full-time coverage in the meantime. Tiered packages \u2014 individual and company services are commonly bundled into tiers (e.g., Essential / Professional / Enterprise) scaled by monitoring frequency, response time, and scope of coverage. Fractional / advisory \u2014 ongoing strategic guidance (vCISO, personal brand advisory) without operational day-to-day work. Most clients start with an audit or assessment in the relevant domain \u2014 reputation, security, or both \u2014 before committing to an ongoing engagement model."}];

  return (
    <>
      <Head>
        <title>{pageTitle} | Regularhub Private Limited</title>
        <meta name="description" content={pageSubtitle} />
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
                      Unified Protection Practice
                    </span>
                    <h1 className="sec-title animation__char_come text-dark fw-bold mb-3" ref={charAnim}>
                      {pageTitle}
                    </h1>
                    <p className="lead fw-bold text-primary mb-4">{pageSubtitle}</p>
                  </div>
                  <p className="text-secondary fs-5 mb-4">{overview}</p>
                  <div className="d-flex gap-3 mt-4">
                    <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                      <span></span>Schedule Audit <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="development__img shadow-lg rounded-4 overflow-hidden border">
                    <Image
                      priority
                      width={800}
                      height={500}
                      style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                      src="/assets/imgs/thumb/dev-1.jpg"
                      alt={pageTitle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Part I - Brand & Reputation Management */}
          <section className="workflow__area-6 pt-100 pb-100 bg-light">
            <div className="container g-0 line pb-100">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Part I — Brand & Reputation Management</h2>
                <p className="text-muted">Protecting and elevating how individuals and organizations are perceived online.</p>
              </div>

              <h3 className="mb-4 text-primary font-bold"><i className="fa-solid fa-user me-2"></i>Services for Individuals</h3>
              <div className="row mb-5">
                {p1Indiv.map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4">
                    <div className="p-4 border rounded-4 bg-white h-100 shadow-sm border-top border-4 border-primary">
                      <h4 className="font-bold mb-2 text-dark" style={{ fontSize: "1.1rem" }}>{item.title}</h4>
                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-primary font-bold"><i className="fa-solid fa-building me-2"></i>Services for Companies</h3>
              <div className="row">
                {p1Corp.map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4">
                    <div className="p-4 border rounded-4 bg-white h-100 shadow-sm border-top border-4 border-dark">
                      <h4 className="font-bold mb-2 text-dark" style={{ fontSize: "1.1rem" }}>{item.title}</h4>
                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Part II - Cybersecurity Management */}
          <section className="workflow__area-6 pt-100 pb-100">
            <div className="container g-0 line pb-100">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Part II — Cybersecurity Management</h2>
                <p className="text-muted">Protecting devices, accounts, data, and enterprise infrastructure.</p>
              </div>

              <h3 className="mb-4 text-primary font-bold"><i className="fa-solid fa-shield-cat me-2"></i>Individual Cybersecurity</h3>
              <div className="row mb-5">
                {p2Indiv.map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4">
                    <div className="p-4 border rounded-4 bg-light h-100 shadow-sm border-start border-4 border-info">
                      <h4 className="font-bold mb-2 text-dark" style={{ fontSize: "1.1rem" }}>{item.title}</h4>
                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-primary font-bold"><i className="fa-solid fa-server me-2"></i>Enterprise Cybersecurity</h3>
              <div className="row">
                {p2Corp.map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4">
                    <div className="p-4 border rounded-4 bg-light h-100 shadow-sm border-start border-4 border-danger">
                      <h4 className="font-bold mb-2 text-dark" style={{ fontSize: "1.1rem" }}>{item.title}</h4>
                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Part III - Integrated Services */}
          <section className="service__detail pt-100 pb-100 bg-light">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Part III — Integrated Reputation & Security Services</h2>
              </div>
              <div className="row">
                {p3Integrated.map((item, idx) => (
                  <div key={idx} className="col-md-6 mb-4">
                    <div className="p-4 border rounded-4 bg-white shadow-sm h-100 border-start border-4 border-primary">
                      <h4 className="font-bold mb-2 text-primary"><i className="fa-solid fa-shield-halved me-2"></i>{item.title}</h4>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Part IV - Engagement Models */}
          <section className="development__area pt-100 pb-100">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Part IV — Engagement Models</h2>
              </div>
              <div className="row">
                {p4Models.map((item, idx) => (
                  <div key={idx} className="col-md-4 mb-4">
                    <div className="p-4 border rounded-4 bg-white shadow-sm h-100 border-top border-4 border-success">
                      <h4 className="font-bold mb-2 text-dark"><i className="fa-solid fa-handshake me-2 text-success"></i>{item.title}</h4>
                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta__area py-5 bg-dark text-white">
            <div className="container line pb-110">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content text-center py-5">
                    <p className="cta__sub-title mb-2 text-primary fw-bold text-uppercase tracking-wider">Protect Your Reputation & Security</p>
                    <h2 className="cta__title title-anim mb-4 text-white">
                      Schedule a Confidential Audit & Strategy Session
                    </h2>
                    <div className="btn_wrapper d-flex gap-3 justify-content-center mt-4">
                      <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                        <span></span>Request Reputation & Security Audit <i className="fa-solid fa-arrow-right ms-2"></i>
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

export default OnlineReputationManagementServicePage;
