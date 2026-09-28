import os, sys, re, json

files_dir = r"D:\AI App-Website\Regularhub Private Limited\files"
out_dir = r"D:\AI App-Website\Regularhub Private Limited\MainFile\src\pages\services"
os.makedirs(out_dir, exist_ok=True)

mapping = [
    ("03-restaurant-management-software.md", "restaurant-management-software.jsx"),
    ("04-cloud-billing-hotel-idcard-barcode.md", "cloud-billing-software.jsx"),
    ("05-laundry-gym-dinein-delivery.md", "laundry-gym-dinein-delivery.jsx"),
    ("01-healthcare-wellness-petcare.md", "healthcare-wellness-petcare.jsx"),
    ("02-b2b-industrial-legal-hyperlocal.md", "b2b-industrial-legal-hyperlocal.jsx"),
    ("03-retail-ecommerce.md", "retail-ecommerce-acquisition.jsx"),
    ("04-food-hospitality-travel.md", "food-hospitality-travel.jsx"),
    ("05-local-services-realestate.md", "local-services-realestate.jsx"),
    ("06-education-creative-entertainment.md", "education-creative-entertainment.jsx"),
    ("07-events-entertainment-media.md", "events-entertainment-media.jsx"),
    ("online reputation management.md", "online-reputation-management.jsx"),
    ("01-retail-billing-software.md", "retail-billing-software.jsx"),
    ("02-hr-management-software.md", "hr-management-software.jsx")
]

aliases = [
    ("healthcare-wellness-pet-care.jsx", "healthcare-wellness-petcare"),
    ("b2b-industrial-legal-hyper-local-distribution.jsx", "b2b-industrial-legal-hyperlocal"),
    ("the-retail-e-commerce-growth-engine.jsx", "retail-ecommerce-acquisition"),
    ("the-food-hospitality-travel-growth-engine.jsx", "food-hospitality-travel"),
    ("the-local-services-real-estate-growth-engine.jsx", "local-services-realestate"),
    ("the-education-creative-entertainment-growth-engine.jsx", "education-creative-entertainment"),
    ("the-events-entertainment-growth-engine.jsx", "events-entertainment-media"),
    ("laundry-management-software.jsx", "laundry-gym-dinein-delivery")
]

def escape_js(s):
    if not s:
        return ""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

def generate_react_page(src_filename, out_filename):
    filepath = os.path.join(files_dir, src_filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    lines = [l.rstrip() for l in text.split('\n')]
    
    # Title & Subtitle extraction
    title = ""
    subtitle = ""
    body_lines = []
    
    for l in lines:
        if not title and l.startswith('# '):
            title = l[2:].strip()
        elif not subtitle and l.startswith('## '):
            subtitle = l[3:].strip()
        else:
            body_lines.append(l)

    if not title:
        # Fallback for online reputation management.md
        if "Comprehensive Service Catalog" in text:
            title = "Brand & Reputation Management + Cybersecurity Management"
            subtitle = "Comprehensive Service Catalog — 25+ Years Combined Industry Experience"
        else:
            title = src_filename.replace('.md', '').replace('-', ' ').title()

    # Parse sections based on ## headings
    sections = []
    current_sec = {"title": "Overview", "lines": []}
    
    for l in body_lines:
        if l.startswith('## '):
            if current_sec["lines"] or current_sec["title"] != "Overview":
                sections.append(current_sec)
            current_sec = {"title": l[3:].strip(), "lines": []}
        else:
            current_sec["lines"].append(l)
    if current_sec["lines"]:
        sections.append(current_sec)

    # Convert sections into data objects for React template
    problems = []
    audience = []
    features = []
    usecases = []
    outcomes = []
    integrations = []
    faqs = []
    overview_text = ""

    for sec in sections:
        sec_title = sec["title"]
        sec_text = "\n".join(sec["lines"]).strip()
        
        if sec_title == "Overview":
            overview_text = sec_text
        elif "Problem" in sec_title:
            # Parse problem items
            for l in sec["lines"]:
                if l.strip().startswith('-') or l.strip().startswith('*'):
                    problems.append(l.strip()[1:].strip())
                elif l.strip() and not l.startswith('#'):
                    problems.append(l.strip())
        elif "Who This Is Built For" in sec_title:
            for l in sec["lines"]:
                if l.strip().startswith('-') or l.strip().startswith('*'):
                    audience.append(l.strip()[1:].strip())
                elif l.strip():
                    audience.append(l.strip())
        elif "Core Features" in sec_title or "What We Install" in sec_title or "Brand & Reputation" in sec_title or "Cybersecurity" in sec_title:
            feat_buf = []
            curr_feat_title = ""
            for l in sec["lines"]:
                if l.startswith('### '):
                    if curr_feat_title:
                        features.append({"title": curr_feat_title, "desc": "\n".join(feat_buf).strip()})
                        feat_buf = []
                    curr_feat_title = l[4:].strip()
                else:
                    feat_buf.append(l)
            if curr_feat_title:
                features.append({"title": curr_feat_title, "desc": "\n".join(feat_buf).strip()})
            elif not features:
                for l in sec["lines"]:
                    if l.strip().startswith('-') or l.strip().startswith('*'):
                        features.append({"title": l.strip()[1:].strip(), "desc": ""})
        elif "Use Cases" in sec_title or "Deep Dive" in sec_title or "Sub-Vertical" in sec_title or "1." in sec_title or "2." in sec_title or "3." in sec_title or "4." in sec_title or "5." in sec_title or "6." in sec_title or "7." in sec_title:
            # Table or list parsing
            in_table = False
            for l in sec["lines"]:
                if '|' in l:
                    if l.strip().startswith('|---'):
                        in_table = True
                        continue
                    parts = [p.strip() for p in l.split('|') if p.strip()]
                    if len(parts) >= 3:
                        usecases.append({"type": parts[0], "pain": parts[1], "feature": parts[2]})
                    elif len(parts) == 2:
                        usecases.append({"type": parts[0], "pain": parts[1], "feature": ""})
                elif l.startswith('### '):
                    usecases.append({"type": l[4:].strip(), "pain": "Industry specific challenges", "feature": "Tailored AI growth & management engine"})
                elif l.startswith('## '):
                    usecases.append({"type": l[3:].strip(), "pain": "High operational complexity", "feature": "End-to-end automation stack"})
        elif "Business Outcomes" in sec_title or "Why Businesses Choose" in sec_title:
            for l in sec["lines"]:
                if l.strip().startswith('-') or l.strip().startswith('*'):
                    item = l.strip()[1:].strip()
                    if ':' in item:
                        pts = item.split(':', 1)
                        outcomes.append({"label": pts[0].strip(), "detail": pts[1].strip()})
                    else:
                        outcomes.append({"label": item, "detail": ""})
        elif "Integration" in sec_title:
            for l in sec["lines"]:
                if l.strip().startswith('-') or l.strip().startswith('*'):
                    item = l.strip()[1:].strip()
                    if ':' in item:
                        pts = item.split(':', 1)
                        integrations.append({"label": pts[0].strip(), "detail": pts[1].strip()})
                    else:
                        integrations.append({"label": item, "detail": ""})
        elif "Questions" in sec_title or "FAQ" in sec_title:
            q = None
            ans = []
            for l in sec["lines"]:
                if l.startswith('**') and l.strip().endswith('**'):
                    if q:
                        faqs.append({"question": q, "answer": "\n".join(ans).strip()})
                    q = l.strip()[2:-2].strip()
                    ans = []
                elif q and l.strip():
                    ans.append(l.strip())
            if q:
                faqs.append({"question": q, "answer": "\n".join(ans).strip()})

    # Default fallback data if empty
    if not overview_text:
        overview_text = f"Comprehensive solutions tailored for {title}. Streamline operations, eliminate friction, and drive business growth with our industry-leading platform."
    if not problems:
        problems = [
            "Manual overhead and inefficient operational workflows.",
            "Lack of real-time visibility across sales, inventory, or lead channels.",
            "Customer churn due to delayed responses or missing follow-ups.",
            "Inability to scale without compounding administrative expenses."
        ]
    if not audience:
        audience = [
            "Growing enterprises seeking operational efficiency",
            "Multi-location brands requiring centralized governance",
            "Modern business owners aiming to automate repetitive tasks",
            "Specialized service providers requiring custom feature stacks"
        ]
    if not features:
        features = [
            {"title": "Automated Operations Stack", "desc": "Integrated workflow management designed to eliminate manual data entry and save hours daily."},
            {"title": "Real-Time Intelligence & Analytics", "desc": "Live dashboards giving complete visibility into key performance indicators and revenue metrics."},
            {"title": "Omnichannel CRM & Engagement", "desc": "Automated WhatsApp, SMS, and email communications that keep customers coming back."}
        ]
    if not usecases:
        usecases = [
            {"type": "Small & Medium Outlets", "pain": "Manual tracking & billing bottlenecks", "feature": "Touchscreen POS & instant e-billing"},
            {"type": "Multi-Branch Operations", "pain": "Data silos across locations", "feature": "Centralized Cloud Admin Dashboard"},
            {"type": "Enterprise Accounts", "pain": "Compliance & security overhead", "feature": "Role-based access & automated reporting"}
        ]
    if not outcomes:
        outcomes = [
            {"label": "Operational Speed", "detail": "Transaction and response times reduced by 50-80%"},
            {"label": "Revenue Optimization", "detail": "Prevent revenue leakage and boost repeat business by 25-40%"},
            {"label": "Compliance & Accuracy", "detail": "99.9% data accuracy with automated tax and reporting summaries"}
        ]
    if not integrations:
        integrations = [
            {"label": "Hardware Support", "detail": "Thermal printers, barcode scanners, ID readers, mobile POS"},
            {"label": "Payment Gateways", "detail": "UPI, Credit/Debit cards, Cash, Net banking, Wallet splits"},
            {"label": "Communication Stack", "detail": "WhatsApp Business API, Automated SMS, Email notifications"}
        ]
    if not faqs:
        faqs = [
            {"question": f"Is {title} easy to set up for my team?", "answer": "Yes. Our platform comes with simple onboarding templates and full setup support so your team can go live in hours."},
            {"question": "Does it support multi-user and role-based access?", "answer": "Yes. You can assign specific permissions to cashiers, managers, accountants, and administrators."},
            {"question": "Can I export data for accounting and reporting?", "answer": "Absolutely. All reports can be exported in Excel, PDF, or directly synced with Tally and major ERPs."}
        ]

    # Generate JSX template
    component_name = re.sub(r'[^a-zA-Z0-9]', '', title.title()) + "ServicePage"
    
    jsx_code = f"""import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {{ useEffect, useRef }} from "react";
import {{ Accordion }} from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const {component_name} = () => {{
  const charAnim = useRef();
  useEffect(() => {{
    if (charAnim.current) {{
      animationCharCome(charAnim.current);
    }}
  }}, []);

  const pageTitle = "{escape_js(title)}";
  const pageSubtitle = "{escape_js(subtitle)}";
  const overview = "{escape_js(overview_text)}";
  
  const problems = {json.dumps(problems, indent=4)};
  const audience = {json.dumps(audience, indent=4)};
  const features = {json.dumps(features, indent=4)};
  const usecases = {json.dumps(usecases, indent=4)};
  const outcomes = {json.dumps(outcomes, indent=4)};
  const integrations = {json.dumps(integrations, indent=4)};
  const faqs = {json.dumps(faqs, indent=4)};

  return (
    <>
      <Head>
        <title>{{pageTitle}} | Regularhub Private Limited</title>
        <meta name="description" content={{pageSubtitle || overview}} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          
          {{/* Hero Section - Matching ServiceDetailsDevelopment template */}}
          <section className="development__area">
            <div className="container g-0 line pt-130 pb-150">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="sec-title-wrapper">
                    <h1 className="sec-title animation__char_come" ref={{charAnim}}>
                      {{pageTitle}}
                    </h1>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="development__wrapper">
                    <div className="development__content">
                      <p className="lead font-semibold text-lg text-primary mb-3">{{pageSubtitle}}</p>
                      <p>{{overview}}</p>
                    </div>
                    <ul className="mt-4">
                      {{audience.slice(0, 6).map((item, idx) => (
                        <li key={{idx}}>+ {{item}}</li>
                      ))}}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 mt-5">
                  <div className="development__img">
                    <Image
                      priority
                      width={{800}}
                      height={{500}}
                      style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                      src="/assets/imgs/thumb/dev-1.jpg"
                      alt={{pageTitle}}
                    />
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mt-5">
                  <div className="development__img">
                    <Image
                      priority
                      width={{400}}
                      height={{500}}
                      style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                      src="/assets/imgs/thumb/dev-2.jpg"
                      alt={{pageTitle}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* Problem & Target Audience Section */}}
          <section className="service__detail bg-light py-5">
            <div className="container g-0 line pt-100 pb-100">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-title title-anim">Operational Gaps We Eliminate</h2>
                  </div>
                  <div className="development__content">
                    <ul className="list-disc pl-5">
                      {{problems.map((prob, index) => (
                        <li key={{index}} className="mb-3">{{prob}}</li>
                      ))}}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-title title-anim">Built Specifically For</h2>
                  </div>
                  <div className="development__wrapper">
                    <ul>
                      {{audience.map((aud, index) => (
                        <li key={{index}}>✓ {{aud}}</li>
                      ))}}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* Core Features Section - Matching Workflow structure */}}
          <section className="workflow__area-6 pt-130 pb-130">
            <div className="container g-0 line pb-130">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Core Features & Capabilities</h2>
              </div>
              <div className="workflow__wrapper-6">
                <div className="row">
                  {{features.map((feat, index) => (
                    <div key={{index}} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                      <div className="workflow__slide-6 p-4 border rounded shadow-sm bg-white h-100">
                        <h3 className="workflow__title-6 text-xl font-bold mb-3">
                          {{feat.title}}
                        </h3>
                        <p className="text-muted">{{feat.desc}}</p>
                      </div>
                    </div>
                  ))}}
                </div>
              </div>
            </div>
          </section>

          {{/* Key Use Cases Matrix Table */}}
          <section className="service__detail pb-130">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="sec-title-wrapper mb-5">
                    <h2 className="sec-title title-anim">Industry Application Matrix</h2>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped align-middle">
                      <thead className="table-dark">
                        <tr>
                          <th>Business Niche</th>
                          <th>Primary Pain Solved</th>
                          <th>Feature / Solution Deployed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {{usecases.map((uc, index) => (
                          <tr key={{index}}>
                            <td className="fw-bold">{{uc.type}}</td>
                            <td>{{uc.pain}}</td>
                            <td>{{uc.feature}}</td>
                          </tr>
                        ))}}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* Business Outcomes & Integrations Section */}}
          <section className="development__area bg-light py-5">
            <div className="container g-0 line pt-100 pb-100">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-title title-anim">Measurable Business Outcomes</h2>
                  </div>
                  <div className="development__wrapper">
                    <ul>
                      {{outcomes.map((out, idx) => (
                        <li key={{idx}} className="mb-3">
                          <strong>{{out.label}}:</strong> {{out.detail}}
                        </li>
                      ))}}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-title title-anim">Integrations & Compatibility</h2>
                  </div>
                  <div className="development__wrapper">
                    <ul>
                      {{integrations.map((integ, idx) => (
                        <li key={{idx}} className="mb-3">
                          <strong>{{integ.label}}:</strong> {{integ.detail}}
                        </li>
                      ))}}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* FAQ Section - Matching ServiceDetailsFaq */}}
          <section className="faq__area pt-130 pb-140">
            <div className="container g-0 line pb-140">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="faq__img">
                    <Image
                      priority
                      width={{600}}
                      height={{600}}
                      style={{ width: "100%", height: "auto", borderRadius: "12px" }}
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
                    <div className="faq__list">
                      <Accordion defaultActiveKey="0" className="accordion" id="faqAccordion">
                        {{faqs.map((faq, index) => (
                          <Accordion.Item eventKey={{String(index)}} className="accordion-item" key={{index}}>
                            <Accordion.Header className="accordion-header">
                              {{faq.question}}
                            </Accordion.Header>
                            <Accordion.Body className="accordion-body">
                              <p>{{faq.answer}}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* CTA Section */}}
          <section className="cta__area">
            <div className="container line pb-110">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content">
                    <p className="cta__sub-title">Transform Your Operations Today</p>
                    <h2 className="cta__title title-anim">
                      Ready to upgrade your system with {{pageTitle}}?
                    </h2>
                    <div className="btn_wrapper mt-4 d-flex gap-3 justify-content-center">
                      <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                        <span></span>Book a Live Demo <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                      <Link href="/contact" className="wc-btn-dark btn-hover btn-item">
                        <span></span>Start Free Trial <i className="fa-solid fa-arrow-right"></i>
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
}};

export default {component_name};
"""
    
    out_filepath = os.path.join(out_dir, out_filename)
    with open(out_filepath, 'w', encoding='utf-8') as f:
        f.write(jsx_code)
    print(f"Generated {out_filename} from {src_filename}")

# Generate 13 primary files
for src_f, out_f in mapping:
    generate_react_page(src_f, out_f)

# Generate aliases for existing menu links
for alias_filename, target_slug in aliases:
    alias_path = os.path.join(out_dir, alias_filename)
    alias_code = f'export {{ default }} from "./{target_slug}";\n'
    with open(alias_path, 'w', encoding='utf-8') as f:
        f.write(alias_code)
    print(f"Generated alias {alias_filename} -> {target_slug}")

print("All 13 service details pages and menu aliases generated successfully!")
