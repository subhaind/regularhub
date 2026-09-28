import os, sys, re, json

files_dir = r"D:\AI App-Website\Regularhub Private Limited\files"
out_dir = r"D:\AI App-Website\Regularhub Private Limited\MainFile\src\pages\services"
os.makedirs(out_dir, exist_ok=True)

b1 = '{{'
b2 = '}}'

def strip_md_syntax(text):
    if not text:
        return ""
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)
    text = re.sub(r'\[Start Free Trial[^\]]*\]', '', text, flags=re.IGNORECASE)
    text = re.sub(r'\[Book a Live Demo[^\]]*\]', '', text, flags=re.IGNORECASE)
    text = re.sub(r'\[([^\]]+)\]', r'\1', text)
    text = text.replace('**', '').replace('*', '').replace('`', '')
    text = re.sub(r'^\s*[-*_]{3,}\s*$', '', text, flags=re.MULTILINE)
    return text.strip()

def clean_str(s):
    if not s:
        return ""
    s = strip_md_syntax(s)
    lines = [l.strip() for l in s.split('\n') if l.strip()]
    return ' '.join(lines)

def parse_software_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    title = ""
    subtitle = ""
    
    for l in lines:
        if not title and l.startswith('# '):
            title = strip_md_syntax(l[2:]).strip()
        elif not subtitle and l.startswith('## '):
            subtitle = strip_md_syntax(l[3:]).strip()

    sec_blocks = re.split(r'\n## ', '\n' + content)
    
    overview_text = ""
    problems = []
    audience = []
    features = []
    usecases = []
    outcomes = []
    integrations = []
    faqs = []

    for block in sec_blocks:
        if not block.strip():
            continue
        lines_b = block.strip().split('\n')
        sec_heading = strip_md_syntax(lines_b[0]).strip()
        sec_body = lines_b[1:]

        if block.startswith('# '):
            ov_lines = []
            for l in sec_body:
                if l.startswith('## '):
                    break
                l_clean = strip_md_syntax(l).strip()
                if l_clean and not l_clean.startswith('|') and not 'Start Free Trial' in l_clean:
                    ov_lines.append(l_clean)
            overview_text = ' '.join(ov_lines)

        elif 'Problem' in sec_heading:
            p_text = ' '.join([strip_md_syntax(l).strip() for l in sec_body if strip_md_syntax(l).strip()])
            for l in sec_body:
                l_c = strip_md_syntax(l).strip()
                if l_c and (l.strip().startswith('-') or l.strip().startswith('*') or l.strip().startswith('1.')):
                    problems.append(re.sub(r'^[-*+1-9.]+\s*', '', l_c))
            if not problems and p_text:
                problems = [p_text]

        elif 'Who This Is Built For' in sec_heading:
            for l in sec_body:
                l_c = strip_md_syntax(l).strip()
                if l_c and (l.strip().startswith('-') or l.strip().startswith('*') or l.strip().startswith('1.')):
                    l_c = re.sub(r'^[-*+1-9.]+\s*', '', l_c)
                    audience.append(l_c)
                elif l_c and not l_c.startswith('#'):
                    audience.append(l_c)

        elif 'Core Features' in sec_heading:
            feat_blocks = re.split(r'\n### ', '\n' + '\n'.join(sec_body))
            for fb in feat_blocks:
                if not fb.strip():
                    continue
                fb_lines = fb.strip().split('\n')
                f_title = strip_md_syntax(fb_lines[0]).strip()
                f_body_raw = '\n'.join(fb_lines[1:])
                
                f_desc = ""
                f_uc = ""
                if 'Use Case:' in f_body_raw or 'Use Case :' in f_body_raw:
                    parts = re.split(r'Use Case\s*:', f_body_raw, flags=re.IGNORECASE)
                    f_desc = clean_str(parts[0])
                    f_uc = clean_str(parts[1])
                else:
                    f_desc = clean_str(f_body_raw)

                if f_title:
                    features.append({"title": f_title, "desc": f_desc, "useCase": f_uc})

        elif 'Use Cases' in sec_heading or 'Key Use Cases' in sec_heading:
            for l in sec_body:
                if '|' in l:
                    l_c = strip_md_syntax(l).strip()
                    if 'Retail Type' in l_c or 'Primary Pain' in l_c or '---' in l_c or 'Business Type' in l_c or 'Restaurant Type' in l_c:
                        continue
                    parts = [strip_md_syntax(p).strip() for p in l.split('|') if p.strip()]
                    if len(parts) >= 3:
                        usecases.append({"type": parts[0], "pain": parts[1], "feature": parts[2]})
                    elif len(parts) == 2:
                        usecases.append({"type": parts[0], "pain": parts[1], "feature": "Integrated Solution"})

        elif 'Business Outcomes' in sec_heading:
            for l in sec_body:
                l_c = strip_md_syntax(l).strip()
                if l_c:
                    l_c = re.sub(r'^[-*+]\s*', '', l_c)
                    if ':' in l_c:
                        pts = l_c.split(':', 1)
                        outcomes.append({"label": pts[0].strip(), "detail": pts[1].strip()})
                    else:
                        outcomes.append({"label": l_c, "detail": ""})

        elif 'Integration' in sec_heading:
            for l in sec_body:
                l_c = strip_md_syntax(l).strip()
                if l_c:
                    l_c = re.sub(r'^[-*+]\s*', '', l_c)
                    if ':' in l_c:
                        pts = l_c.split(':', 1)
                        integrations.append({"label": pts[0].strip(), "detail": pts[1].strip()})
                    else:
                        integrations.append({"label": l_c, "detail": ""})

        elif 'Questions' in sec_heading or 'FAQ' in sec_heading:
            q = None
            ans = []
            for l in sec_body:
                l_raw = l.strip()
                if l_raw.startswith('**') and l_raw.endswith('**'):
                    if q:
                        faqs.append({"question": q, "answer": clean_str(' '.join(ans))})
                    q = strip_md_syntax(l_raw).strip()
                    ans = []
                elif q and l_raw:
                    ans.append(strip_md_syntax(l_raw).strip())
            if q:
                faqs.append({"question": q, "answer": clean_str(' '.join(ans))})

    return {
        "title": title,
        "subtitle": subtitle,
        "overview": overview_text,
        "problems": problems,
        "audience": audience,
        "features": features,
        "usecases": usecases,
        "outcomes": outcomes,
        "integrations": integrations,
        "faqs": faqs
    }

def parse_growth_engine_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    title = ""
    subtitle = ""
    for l in lines:
        if not title and l.startswith('# '):
            title = strip_md_syntax(l[2:]).strip()
        elif not subtitle and l.startswith('## '):
            subtitle = strip_md_syntax(l[3:]).strip()

    sec_blocks = re.split(r'\n## ', '\n' + content)
    overview_text = ""
    core_pillars = []
    sub_verticals = []
    outcomes = []
    faqs = []

    for block in sec_blocks:
        if not block.strip():
            continue
        lines_b = block.strip().split('\n')
        heading = strip_md_syntax(lines_b[0]).strip()
        body = lines_b[1:]

        if block.startswith('# '):
            ov_lines = [strip_md_syntax(l).strip() for l in body if l.strip() and not l.startswith('## ')]
            overview_text = ' '.join(ov_lines)

        elif 'What We Install Across' in heading:
            pillar_blocks = re.split(r'\n### ', '\n' + '\n'.join(body))
            for pb in pillar_blocks:
                if not pb.strip():
                    continue
                pb_lines = pb.strip().split('\n')
                p_title = strip_md_syntax(pb_lines[0]).strip()
                p_desc = clean_str('\n'.join(pb_lines[1:]))
                if p_title:
                    core_pillars.append({"title": p_title, "desc": p_desc})

        elif re.match(r'^[0-9]\.[0-9]', heading):
            sv_title = heading
            sv_text = '\n'.join(body)
            
            who = ""
            leak = ""
            wedge = ""
            outcome = ""
            
            who_match = re.search(r'Who this is for\s*:\s*(.*?)(?=\n\n|\n\*\*|\Z)', sv_text, re.DOTALL | re.IGNORECASE)
            if who_match:
                who = clean_str(who_match.group(1))

            leak_match = re.search(r'The Core Revenue Leak\s*:\s*(.*?)(?=\n\n|\n\*\*|\Z)', sv_text, re.DOTALL | re.IGNORECASE)
            if leak_match:
                leak = clean_str(leak_match.group(1))

            wedge_match = re.search(r'The Wedge We Start With\s*:\s*(.*?)(?=\n\n|\n\*\*|\Z)', sv_text, re.DOTALL | re.IGNORECASE)
            if wedge_match:
                wedge = clean_str(wedge_match.group(1))

            outcome_match = re.search(r'Outcome\s*:\s*(.*?)(?=\n\n|\n\*\*|\Z)', sv_text, re.DOTALL | re.IGNORECASE)
            if outcome_match:
                outcome = clean_str(outcome_match.group(1))

            sub_verticals.append({
                "title": sv_title,
                "who": who,
                "leak": leak,
                "wedge": wedge,
                "outcome": outcome,
                "details": clean_str(sv_text)
            })

        elif 'Why' in heading or 'Choose' in heading or 'Outcomes' in heading:
            for l in body:
                l_c = strip_md_syntax(l).strip()
                if l_c:
                    l_c = re.sub(r'^[-*+]\s*', '', l_c)
                    if ':' in l_c:
                        pts = l_c.split(':', 1)
                        outcomes.append({"label": pts[0].strip(), "detail": pts[1].strip()})
                    else:
                        outcomes.append({"label": l_c, "detail": ""})

        elif 'Questions' in heading or 'FAQ' in heading:
            q = None
            ans = []
            for l in body:
                l_raw = l.strip()
                if l_raw.startswith('**') and l_raw.endswith('**'):
                    if q:
                        faqs.append({"question": q, "answer": clean_str(' '.join(ans))})
                    q = strip_md_syntax(l_raw).strip()
                    ans = []
                elif q and l_raw:
                    ans.append(strip_md_syntax(l_raw).strip())
            if q:
                faqs.append({"question": q, "answer": clean_str(' '.join(ans))})

    return {
        "title": title,
        "subtitle": subtitle,
        "overview": overview_text,
        "pillars": core_pillars,
        "subVerticals": sub_verticals,
        "outcomes": outcomes,
        "faqs": faqs
    }

def parse_orm_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    title = "Brand & Reputation Management + Cybersecurity Management"
    subtitle = "Comprehensive Service Catalog — 25+ Years Combined Industry Experience"
    overview = "Reputation and security are two views of the same risk. A data breach becomes a reputation crisis within hours of disclosure. An impersonation campaign or disinformation is often made possible by a security gap: a compromised account, a spoofed domain, a leaked credential. We treat them as one continuous practice."

    part1_indiv = []
    part1_corp = []
    part2_indiv = []
    part2_corp = []
    part3_integrated = []
    part4_models = []

    current_part = ""
    current_target = ""
    lines = content.split('\n')
    
    curr_title = ""
    curr_desc = []

    for line in lines:
        line_s = line.strip()
        if 'Part I — Brand & Reputation Management' in line_s:
            current_part = "P1"
            continue
        elif 'Part II — Cybersecurity Management' in line_s:
            current_part = "P2"
            continue
        elif 'Part III — Integrated Services' in line_s:
            current_part = "P3"
            continue
        elif 'Part IV — Engagement Models' in line_s:
            current_part = "P4"
            continue

        if current_part in ["P1", "P2"]:
            if 'For Individuals' in line_s:
                current_target = "indiv"
                continue
            elif 'For Companies' in line_s:
                current_target = "corp"
                continue

        if line_s and len(line_s) < 60 and not line_s.endswith('.') and not line_s.startswith('-'):
            if curr_title and curr_desc:
                item = {"title": clean_str(curr_title), "desc": clean_str(' '.join(curr_desc))}
                if current_part == "P1" and current_target == "indiv": part1_indiv.append(item)
                elif current_part == "P1" and current_target == "corp": part1_corp.append(item)
                elif current_part == "P2" and current_target == "indiv": part2_indiv.append(item)
                elif current_part == "P2" and current_target == "corp": part2_corp.append(item)
                elif current_part == "P3": part3_integrated.append(item)
                elif current_part == "P4": part4_models.append(item)
            curr_title = line_s
            curr_desc = []
        elif line_s:
            curr_desc.append(line_s)

    if curr_title and curr_desc:
        item = {"title": clean_str(curr_title), "desc": clean_str(' '.join(curr_desc))}
        if current_part == "P1" and current_target == "indiv": part1_indiv.append(item)
        elif current_part == "P1" and current_target == "corp": part1_corp.append(item)
        elif current_part == "P2" and current_target == "indiv": part2_indiv.append(item)
        elif current_part == "P2" and current_target == "corp": part2_corp.append(item)
        elif current_part == "P3": part3_integrated.append(item)
        elif current_part == "P4": part4_models.append(item)

    return {
        "title": title,
        "subtitle": subtitle,
        "overview": overview,
        "p1_indiv": part1_indiv,
        "p1_corp": part1_corp,
        "p2_indiv": part2_indiv,
        "p2_corp": part2_corp,
        "p3_integrated": part3_integrated,
        "p4_models": part4_models
    }

def render_software_page(data, comp_name):
    title_json = json.dumps(data["title"])
    subtitle_json = json.dumps(data["subtitle"])
    overview_json = json.dumps(data["overview"])
    problems_json = json.dumps(data["problems"])
    audience_json = json.dumps(data["audience"])
    features_json = json.dumps(data["features"])
    usecases_json = json.dumps(data["usecases"])
    outcomes_json = json.dumps(data["outcomes"])
    integrations_json = json.dumps(data["integrations"])
    faqs_json = json.dumps(data["faqs"])

    return f"""import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {{ useEffect, useRef }} from "react";
import {{ Accordion }} from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const {comp_name} = () => {{
  const charAnim = useRef();
  useEffect(() => {{
    if (charAnim.current) {{
      animationCharCome(charAnim.current);
    }}
  }}, []);

  const pageTitle = {title_json};
  const pageSubtitle = {subtitle_json};
  const overview = {overview_json};
  const problems = {problems_json};
  const audience = {audience_json};
  const features = {features_json};
  const usecases = {usecases_json};
  const outcomes = {outcomes_json};
  const integrations = {integrations_json};
  const faqs = {faqs_json};

  return (
    <>
      <Head>
        <title>{{pageTitle}} | Regularhub Private Limited</title>
        <meta name="description" content={{pageSubtitle || overview}} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          
          {{/* Hero Section */}}
          <section className="development__area pt-130 pb-100">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-bold mb-3 d-inline-block">
                      Enterprise Software Solution
                    </span>
                    <h1 className="sec-title animation__char_come text-dark fw-bold mb-3" ref={{charAnim}}>
                      {{pageTitle}}
                    </h1>
                    {{pageSubtitle && <p className="lead fw-bold text-primary mb-4" style={b1} color: "#1d4ed8" {b2}>{{pageSubtitle}}</p>}}
                  </div>
                  {{overview && <p className="text-secondary fs-5 mb-4" style={b1} lineHeight: "1.7" {b2}>{{overview}}</p>}}
                  {{audience && audience.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mt-4 mb-4">
                      {{audience.slice(0, 5).map((item, idx) => (
                        <span key={{idx}} className="badge bg-light text-dark border p-2 px-3 rounded-pill">
                          <i className="fa-solid fa-check text-success me-2"></i>{{item}}
                        </span>
                      ))}}
                    </div>
                  )}}
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
                          width={{800}}
                          height={{450}}
                          style={b1} width: "100%", height: "auto", borderRadius: "16px" {b2}
                          src="/assets/imgs/thumb/dev-1.jpg"
                          alt={{pageTitle}}
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="development__img shadow-md rounded-4 overflow-hidden border">
                        <Image
                          priority
                          width={{800}}
                          height={{300}}
                          style={b1} width: "100%", height: "auto", borderRadius: "16px" {b2}
                          src="/assets/imgs/thumb/dev-2.jpg"
                          alt={{pageTitle}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* Problems & Audience */}}
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
                      {{problems.map((prob, index) => (
                        <li key={{index}} className="mb-3 p-3 bg-white rounded-3 border-start border-4 border-danger shadow-sm">
                          <i className="fa-solid fa-triangle-exclamation text-danger me-2"></i>{{prob}}
                        </li>
                      ))}}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div className="sec-title-wrapper mb-4">
                    <h2 className="sec-title title-anim text-dark">Built Specifically For</h2>
                  </div>
                  <div className="development__wrapper">
                    <div className="row g-2">
                      {{audience.map((aud, index) => (
                        <div key={{index}} className="col-12">
                          <div className="p-3 bg-white rounded-3 border shadow-sm d-flex align-items-center">
                            <i className="fa-solid fa-circle-check text-success me-3 fs-5"></i>
                            <span className="fw-semibold text-dark">{{aud}}</span>
                          </div>
                        </div>
                      ))}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* Core Features */}}
          <section className="workflow__area-6 pt-130 pb-130">
            <div className="container g-0 line pb-130">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5 text-center">
                <h2 className="sec-title title-anim">Core Features & Capabilities</h2>
                <p className="text-muted">Designed around how your business actually operates daily</p>
              </div>
              <div className="workflow__wrapper-6">
                <div className="row">
                  {{features.map((feat, index) => (
                    <div key={{index}} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                      <div className="workflow__slide-6 p-4 border rounded-4 shadow-sm bg-white h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="feature-icon mb-3 text-primary">
                            <i className="fa-solid fa-layer-group fs-2"></i>
                          </div>
                          <h3 className="workflow__title-6 fw-bold mb-3 fs-4 text-dark" style={b1} fontSize: "1.25rem" {b2}>
                            {{feat.title}}
                          </h3>
                          <p className="text-muted">{{feat.desc}}</p>
                        </div>
                        {{feat.useCase && (
                          <div className="bg-light border-start border-4 border-primary p-3 mt-3 rounded-3 shadow-sm" style={b1} fontSize: "0.875rem" {b2}>
                            <span className="badge bg-primary text-white mb-2">Use Case Scenario</span>
                            <p className="mb-0 text-dark fw-medium">{{feat.useCase}}</p>
                          </div>
                        )}}
                      </div>
                    </div>
                  ))}}
                </div>
              </div>
            </div>
          </section>

          {{/* Use Cases Matrix Table */}}
          {{usecases && usecases.length > 0 && (
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
                          {{usecases.map((uc, index) => (
                            <tr key={{index}}>
                              <td className="fw-bold px-4 py-3 text-dark">{{uc.type}}</td>
                              <td className="px-4 py-3 text-danger fw-medium">{{uc.pain}}</td>
                              <td className="px-4 py-3"><span className="badge bg-success-subtle text-success border border-success-subtle p-2 px-3 fs-6">{{uc.feature}}</span></td>
                            </tr>
                          ))}}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}}

          {{/* Business Outcomes & Integrations */}}
          <section className="development__area bg-light py-5">
            <div className="container g-0 line pt-100 pb-100">
              <div className="line-3"></div>
              <div className="row">
                {{outcomes && outcomes.length > 0 && (
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                    <div className="sec-title-wrapper mb-4">
                      <h2 className="sec-title title-anim">Measurable Business Outcomes</h2>
                    </div>
                    <div className="development__wrapper">
                      <div className="d-flex flex-column gap-3">
                        {{outcomes.map((out, idx) => (
                          <div key={{idx}} className="p-3 bg-white border rounded-3 shadow-sm border-start border-4 border-success">
                            <h4 className="fw-bold text-success mb-1" style={b1} fontSize: "1.1rem" {b2}>
                              <i className="fa-solid fa-chart-line me-2"></i>{{out.label}}
                            </h4>
                            <p className="mb-0 text-muted">{{out.detail}}</p>
                          </div>
                        ))}}
                      </div>
                    </div>
                  </div>
                )}}
                {{integrations && integrations.length > 0 && (
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                    <div className="sec-title-wrapper mb-4">
                      <h2 className="sec-title title-anim">Integrations & Compatibility</h2>
                    </div>
                    <div className="development__wrapper">
                      <div className="d-flex flex-column gap-3">
                        {{integrations.map((integ, idx) => (
                          <div key={{idx}} className="p-3 bg-white border rounded-3 shadow-sm border-start border-4 border-primary">
                            <h4 className="fw-bold text-primary mb-1" style={b1} fontSize: "1.1rem" {b2}>
                              <i className="fa-solid fa-plug me-2"></i>{{integ.label}}
                            </h4>
                            <p className="mb-0 text-muted">{{integ.detail}}</p>
                          </div>
                        ))}}
                      </div>
                    </div>
                  </div>
                )}}
              </div>
            </div>
          </section>

          {{/* FAQ Section */}}
          {{faqs && faqs.length > 0 && (
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
                        style={b1} width: "100%", height: "auto", borderRadius: "16px" {b2}
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
                          {{faqs.map((faq, index) => (
                            <Accordion.Item eventKey={{String(index)}} className="accordion-item mb-2 border rounded" key={{index}}>
                              <Accordion.Header className="accordion-header">
                                {{faq.question}}
                              </Accordion.Header>
                              <Accordion.Body className="accordion-body">
                                <p className="mb-0 text-muted">{{faq.answer}}</p>
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
          )}}

          {{/* CTA Section */}}
          <section className="cta__area py-5 bg-dark text-white">
            <div className="container line pb-110">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content text-center py-5">
                    <p className="cta__sub-title mb-2 text-primary fw-bold text-uppercase tracking-wider">Transform Your Operations Today</p>
                    <h2 className="cta__title title-anim mb-4 text-white">
                      Ready to upgrade your system with {{pageTitle}}?
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
}};

export default {comp_name};
"""

def render_growth_engine_page(data, comp_name):
    title_json = json.dumps(data["title"])
    subtitle_json = json.dumps(data["subtitle"])
    overview_json = json.dumps(data["overview"])
    pillars_json = json.dumps(data["pillars"])
    sub_vert_json = json.dumps(data["subVerticals"])
    outcomes_json = json.dumps(data["outcomes"])
    faqs_json = json.dumps(data["faqs"])

    return f"""import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {{ useEffect, useRef }} from "react";
import {{ Accordion }} from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const {comp_name} = () => {{
  const charAnim = useRef();
  useEffect(() => {{
    if (charAnim.current) {{
      animationCharCome(charAnim.current);
    }}
  }}, []);

  const pageTitle = {title_json};
  const pageSubtitle = {subtitle_json};
  const overview = {overview_json};
  const pillars = {pillars_json};
  const subVerticals = {sub_vert_json};
  const outcomes = {outcomes_json};
  const faqs = {faqs_json};

  return (
    <>
      <Head>
        <title>{{pageTitle}} | Regularhub Private Limited</title>
        <meta name="description" content={{pageSubtitle || overview}} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          
          {{/* Hero Section */}}
          <section className="development__area pt-130 pb-100">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <span className="badge bg-primary text-white p-2 px-3 rounded-pill fw-bold mb-3 d-inline-block">
                      AI-Powered Acquisition Engine
                    </span>
                    <h1 className="sec-title animation__char_come text-dark fw-bold mb-3" ref={{charAnim}}>
                      {{pageTitle}}
                    </h1>
                    {{pageSubtitle && <p className="lead fw-bold text-primary mb-4" style={b1} color: "#1d4ed8" {b2}>{{pageSubtitle}}</p>}}
                  </div>
                  {{overview && <p className="text-secondary fs-5 mb-4" style={b1} lineHeight: "1.7" {b2}>{{overview}}</p>}}
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
                          width={{800}}
                          height={{450}}
                          style={b1} width: "100%", height: "auto", borderRadius: "16px" {b2}
                          src="/assets/imgs/thumb/dev-1.jpg"
                          alt={{pageTitle}}
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="development__img shadow-md rounded-4 overflow-hidden border">
                        <Image
                          priority
                          width={{800}}
                          height={{300}}
                          style={b1} width: "100%", height: "auto", borderRadius: "16px" {b2}
                          src="/assets/imgs/thumb/dev-2.jpg"
                          alt={{pageTitle}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* 5 System Pillars */}}
          {{pillars && pillars.length > 0 && (
            <section className="workflow__area-6 pt-130 pb-130 bg-light">
              <div className="container g-0 line pb-130">
                <div className="line-3"></div>
                <div className="sec-title-wrapper mb-5 text-center">
                  <h2 className="sec-title title-anim">What We Install Across Every Business</h2>
                  <p className="text-muted">Complete 5-stage acquisition & retention infrastructure</p>
                </div>
                <div className="workflow__wrapper-6">
                  <div className="row">
                    {{pillars.map((pil, index) => (
                      <div key={{index}} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                        <div className="workflow__slide-6 p-4 border rounded-4 shadow-sm bg-white h-100 border-top border-4 border-primary">
                          <h3 className="workflow__title-6 fw-bold mb-3 fs-4 text-dark" style={b1} fontSize: "1.25rem" {b2}>
                            <i className="fa-solid fa-cube text-primary me-2"></i>{{pil.title}}
                          </h3>
                          <p className="text-muted mb-0">{{pil.desc}}</p>
                        </div>
                      </div>
                    ))}}
                  </div>
                </div>
              </div>
            </section>
          )}}

          {{/* Sub-Vertical Deep Dives */}}
          {{subVerticals && subVerticals.length > 0 && (
            <section className="service__detail pt-130 pb-130">
              <div className="container g-0 line">
                <div className="line-3"></div>
                <div className="sec-title-wrapper mb-5 text-center">
                  <h2 className="sec-title title-anim">Sub-Vertical Systems & Solutions</h2>
                  <p className="text-muted">Tailored wedges and automated workflows built per industry niche</p>
                </div>
                <div className="row">
                  {{subVerticals.map((sv, idx) => (
                    <div key={{idx}} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-4">
                      <div className="border rounded-4 p-4 bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="badge bg-primary text-white mb-3 p-2 px-3 rounded-pill fw-bold fs-6">
                            {{sv.title}}
                          </div>
                          {{sv.who && (
                            <div className="p-3 mb-2 bg-light rounded-3 border">
                              <i className="fa-solid fa-users text-primary me-2"></i><strong>Who this is for:</strong> {{sv.who}}
                            </div>
                          )}}
                          {{sv.leak && (
                            <div className="p-3 mb-2 bg-danger-subtle text-danger-emphasis rounded-3 border border-danger-subtle">
                              <i className="fa-solid fa-triangle-exclamation text-danger me-2"></i><strong>Core Revenue Leak:</strong> {{sv.leak}}
                            </div>
                          )}}
                          {{sv.wedge && (
                            <div className="p-3 mb-2 bg-warning-subtle text-warning-emphasis rounded-3 border border-warning-subtle">
                              <i className="fa-solid fa-bolt text-warning me-2"></i><strong>Sales Wedge We Start With:</strong> {{sv.wedge}}
                            </div>
                          )}}
                          {{sv.details && (
                            <p className="text-muted mt-3" style={b1} fontSize: "0.95rem" {b2}>{{sv.details}}</p>
                          )}}
                        </div>
                        {{sv.outcome && (
                          <div className="bg-success-subtle text-success-emphasis border-start border-4 border-success p-3 mt-3 rounded-3" style={b1} fontSize: "0.9rem" {b2}>
                            <i className="fa-solid fa-circle-check text-success me-2"></i><strong>Measurable Outcome:</strong> {{sv.outcome}}
                          </div>
                        )}}
                      </div>
                    </div>
                  ))}}
                </div>
              </div>
            </section>
          )}}

          {{/* Business Outcomes */}}
          {{outcomes && outcomes.length > 0 && (
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
                        {{outcomes.map((out, idx) => (
                          <div key={{idx}} className="col-md-6 mb-3">
                            <div className="p-4 bg-white border rounded-3 shadow-sm border-start border-4 border-success">
                              <strong className="text-dark fs-5 mb-2 d-block"><i className="fa-solid fa-check-double text-success me-2"></i>{{out.label}}</strong>
                              <span className="text-muted">{{out.detail}}</span>
                            </div>
                          </div>
                        ))}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}}

          {{/* FAQ Section */}}
          {{faqs && faqs.length > 0 && (
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
                        style={b1} width: "100%", height: "auto", borderRadius: "16px" {b2}
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
                          {{faqs.map((faq, index) => (
                            <Accordion.Item eventKey={{String(index)}} className="accordion-item mb-2 border rounded" key={{index}}>
                              <Accordion.Header className="accordion-header">
                                {{faq.question}}
                              </Accordion.Header>
                              <Accordion.Body className="accordion-body">
                                <p className="mb-0 text-muted">{{faq.answer}}</p>
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
          )}}

          {{/* CTA Section */}}
          <section className="cta__area py-5 bg-dark text-white">
            <div className="container line pb-110">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content text-center py-5">
                    <p className="cta__sub-title mb-2 text-primary fw-bold text-uppercase tracking-wider">Transform Your Client Acquisition</p>
                    <h2 className="cta__title title-anim mb-4 text-white">
                      Ready to deploy {{pageTitle}}?
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
}};

export default {comp_name};
"""

def render_orm_page(data, comp_name):
    title_json = json.dumps(data["title"])
    subtitle_json = json.dumps(data["subtitle"])
    overview_json = json.dumps(data["overview"])
    p1_indiv_json = json.dumps(data["p1_indiv"])
    p1_corp_json = json.dumps(data["p1_corp"])
    p2_indiv_json = json.dumps(data["p2_indiv"])
    p2_corp_json = json.dumps(data["p2_corp"])
    p3_integrated_json = json.dumps(data["p3_integrated"])
    p4_models_json = json.dumps(data["p4_models"])

    return f"""import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {{ useEffect, useRef }} from "react";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const {comp_name} = () => {{
  const charAnim = useRef();
  useEffect(() => {{
    if (charAnim.current) {{
      animationCharCome(charAnim.current);
    }}
  }}, []);

  const pageTitle = {title_json};
  const pageSubtitle = {subtitle_json};
  const overview = {overview_json};

  const p1Indiv = {p1_indiv_json};
  const p1Corp = {p1_corp_json};
  const p2Indiv = {p2_indiv_json};
  const p2Corp = {p2_corp_json};
  const p3Integrated = {p3_integrated_json};
  const p4Models = {p4_models_json};

  return (
    <>
      <Head>
        <title>{{pageTitle}} | Regularhub Private Limited</title>
        <meta name="description" content={{pageSubtitle}} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          
          {{/* Hero Section */}}
          <section className="development__area pt-130 pb-100">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <span className="badge bg-primary text-white p-2 px-3 rounded-pill fw-bold mb-3 d-inline-block">
                      Unified Protection Practice
                    </span>
                    <h1 className="sec-title animation__char_come text-dark fw-bold mb-3" ref={{charAnim}}>
                      {{pageTitle}}
                    </h1>
                    <p className="lead fw-bold text-primary mb-4">{{pageSubtitle}}</p>
                  </div>
                  <p className="text-secondary fs-5 mb-4">{{overview}}</p>
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
                      width={{800}}
                      height={{500}}
                      style={b1} width: "100%", height: "auto", borderRadius: "16px" {b2}
                      src="/assets/imgs/thumb/dev-1.jpg"
                      alt={{pageTitle}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {{/* Part I - Brand & Reputation Management */}}
          <section className="workflow__area-6 pt-100 pb-100 bg-light">
            <div className="container g-0 line pb-100">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Part I — Brand & Reputation Management</h2>
                <p className="text-muted">Protecting and elevating how individuals and organizations are perceived online.</p>
              </div>

              <h3 className="mb-4 text-primary font-bold"><i className="fa-solid fa-user me-2"></i>Services for Individuals</h3>
              <div className="row mb-5">
                {{p1Indiv.map((item, idx) => (
                  <div key={{idx}} className="col-md-6 col-lg-4 mb-4">
                    <div className="p-4 border rounded-4 bg-white h-100 shadow-sm border-top border-4 border-primary">
                      <h4 className="font-bold mb-2 text-dark" style={b1} fontSize: "1.1rem" {b2}>{{item.title}}</h4>
                      <p className="text-muted mb-0" style={b1} fontSize: "0.9rem" {b2}>{{item.desc}}</p>
                    </div>
                  </div>
                ))}}
              </div>

              <h3 className="mb-4 text-primary font-bold"><i className="fa-solid fa-building me-2"></i>Services for Companies</h3>
              <div className="row">
                {{p1Corp.map((item, idx) => (
                  <div key={{idx}} className="col-md-6 col-lg-4 mb-4">
                    <div className="p-4 border rounded-4 bg-white h-100 shadow-sm border-top border-4 border-dark">
                      <h4 className="font-bold mb-2 text-dark" style={b1} fontSize: "1.1rem" {b2}>{{item.title}}</h4>
                      <p className="text-muted mb-0" style={b1} fontSize: "0.9rem" {b2}>{{item.desc}}</p>
                    </div>
                  </div>
                ))}}
              </div>
            </div>
          </section>

          {{/* Part II - Cybersecurity Management */}}
          <section className="workflow__area-6 pt-100 pb-100">
            <div className="container g-0 line pb-100">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Part II — Cybersecurity Management</h2>
                <p className="text-muted">Protecting devices, accounts, data, and enterprise infrastructure.</p>
              </div>

              <h3 className="mb-4 text-primary font-bold"><i className="fa-solid fa-shield-cat me-2"></i>Individual Cybersecurity</h3>
              <div className="row mb-5">
                {{p2Indiv.map((item, idx) => (
                  <div key={{idx}} className="col-md-6 col-lg-4 mb-4">
                    <div className="p-4 border rounded-4 bg-light h-100 shadow-sm border-start border-4 border-info">
                      <h4 className="font-bold mb-2 text-dark" style={b1} fontSize: "1.1rem" {b2}>{{item.title}}</h4>
                      <p className="text-muted mb-0" style={b1} fontSize: "0.9rem" {b2}>{{item.desc}}</p>
                    </div>
                  </div>
                ))}}
              </div>

              <h3 className="mb-4 text-primary font-bold"><i className="fa-solid fa-server me-2"></i>Enterprise Cybersecurity</h3>
              <div className="row">
                {{p2Corp.map((item, idx) => (
                  <div key={{idx}} className="col-md-6 col-lg-4 mb-4">
                    <div className="p-4 border rounded-4 bg-light h-100 shadow-sm border-start border-4 border-danger">
                      <h4 className="font-bold mb-2 text-dark" style={b1} fontSize: "1.1rem" {b2}>{{item.title}}</h4>
                      <p className="text-muted mb-0" style={b1} fontSize: "0.9rem" {b2}>{{item.desc}}</p>
                    </div>
                  </div>
                ))}}
              </div>
            </div>
          </section>

          {{/* Part III - Integrated Services */}}
          <section className="service__detail pt-100 pb-100 bg-light">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Part III — Integrated Reputation & Security Services</h2>
              </div>
              <div className="row">
                {{p3Integrated.map((item, idx) => (
                  <div key={{idx}} className="col-md-6 mb-4">
                    <div className="p-4 border rounded-4 bg-white shadow-sm h-100 border-start border-4 border-primary">
                      <h4 className="font-bold mb-2 text-primary"><i className="fa-solid fa-shield-halved me-2"></i>{{item.title}}</h4>
                      <p className="text-muted mb-0">{{item.desc}}</p>
                    </div>
                  </div>
                ))}}
              </div>
            </div>
          </section>

          {{/* Part IV - Engagement Models */}}
          <section className="development__area pt-100 pb-100">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5">
                <h2 className="sec-title title-anim">Part IV — Engagement Models</h2>
              </div>
              <div className="row">
                {{p4Models.map((item, idx) => (
                  <div key={{idx}} className="col-md-4 mb-4">
                    <div className="p-4 border rounded-4 bg-white shadow-sm h-100 border-top border-4 border-success">
                      <h4 className="font-bold mb-2 text-dark"><i className="fa-solid fa-handshake me-2 text-success"></i>{{item.title}}</h4>
                      <p className="text-muted mb-0" style={b1} fontSize: "0.9rem" {b2}>{{item.desc}}</p>
                    </div>
                  </div>
                ))}}
              </div>
            </div>
          </section>

          {{/* CTA Section */}}
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
}};

export default {comp_name};
"""

# Mapping 13 files
software_files = [
    ("01-retail-billing-software.md", "retail-billing-software.jsx", "RetailBillingSoftwareServicePage"),
    ("02-hr-management-software.md", "hr-management-software.jsx", "HrManagementSoftwareServicePage"),
    ("03-restaurant-management-software.md", "restaurant-management-software.jsx", "RestaurantManagementSoftwareServicePage"),
    ("04-cloud-billing-hotel-idcard-barcode.md", "cloud-billing-software.jsx", "CloudBillingSoftwareServicePage"),
    ("05-laundry-gym-dinein-delivery.md", "laundry-gym-dinein-delivery.jsx", "LaundryGymDineinDeliveryServicePage")
]

growth_files = [
    ("01-healthcare-wellness-petcare.md", "healthcare-wellness-petcare.jsx", "HealthcareWellnessPetcareServicePage"),
    ("02-b2b-industrial-legal-hyperlocal.md", "b2b-industrial-legal-hyperlocal.jsx", "B2bIndustrialLegalHyperlocalServicePage"),
    ("03-retail-ecommerce.md", "retail-ecommerce-acquisition.jsx", "RetailEcommerceAcquisitionServicePage"),
    ("04-food-hospitality-travel.md", "food-hospitality-travel.jsx", "FoodHospitalityTravelServicePage"),
    ("05-local-services-realestate.md", "local-services-realestate.jsx", "LocalServicesRealestateServicePage"),
    ("06-education-creative-entertainment.md", "education-creative-entertainment.jsx", "EducationCreativeEntertainmentServicePage"),
    ("07-events-entertainment-media.md", "events-entertainment-media.jsx", "EventsEntertainmentMediaServicePage")
]

orm_file = ("online reputation management.md", "online-reputation-management.jsx", "OnlineReputationManagementServicePage")

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

for src_f, out_f, comp_name in software_files:
    data = parse_software_file(os.path.join(files_dir, src_f))
    code = render_software_page(data, comp_name)
    with open(os.path.join(out_dir, out_f), 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Rendered Software Page: {out_f}")

for src_f, out_f, comp_name in growth_files:
    data = parse_growth_engine_file(os.path.join(files_dir, src_f))
    code = render_growth_engine_page(data, comp_name)
    with open(os.path.join(out_dir, out_f), 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Rendered Growth Page (removed Request System Demo): {out_f}")

src_f, out_f, comp_name = orm_file
data = parse_orm_file(os.path.join(files_dir, src_f))
code = render_orm_page(data, comp_name)
with open(os.path.join(out_dir, out_f), 'w', encoding='utf-8') as f:
    f.write(code)
print(f"Rendered ORM Page: {out_f}")

for alias_filename, target_slug in aliases:
    alias_path = os.path.join(out_dir, alias_filename)
    alias_code = f'export {{ default }} from "./{target_slug}";\n'
    with open(alias_path, 'w', encoding='utf-8') as f:
        f.write(alias_code)
    print(f"Generated Alias: {alias_filename} -> {target_slug}")

print("SUCCESS: Removed Request System Demo from all files!")
