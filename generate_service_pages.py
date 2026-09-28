import os, re, json

files_dir = r"D:/AI App-Website/Regularhub Private Limited/files"
out_dir = r"D:/AI App-Website/Regularhub Private Limited/MainFile/src/pages/services"
os.makedirs(out_dir, exist_ok=True)

def parse_md(path):
    with open(path, 'r', encoding='utf-8') as f:
        lines = [line.rstrip('\n') for line in f]
    # Remove leading empty lines
    while lines and lines[0] == '':
        lines.pop(0)
    if not lines:
        return None, None, {}
    title = lines[0][2:] if lines[0].startswith('# ') else ""
    # Find description: first non-empty line after title that is not a heading
    desc = ""
    for line in lines[1:]:
        if line == '':
            continue
        if line.startswith('#'):
            break
        desc = line
        break
    # Parse sections
    sections = {}
    current = None
    buf = []
    for line in lines[1:]:
        if line.startswith('## '):
            if current is not None:
                sections[current] = '\n'.join(buf).strip()
                buf = []
            current = line[3:].strip()
        else:
            buf.append(line)
    if current is not None:
        sections[current] = '\n'.join(buf).strip()
    return title, desc, sections

def slugify(title):
    return re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')

# Process each markdown file
for fname in sorted(os.listdir(files_dir)):
    if fname.endswith('.md'):
        title, desc, sections = parse_md(os.path.join(files_dir, fname))
        if not title:
            print(f"Skipping {fname}: no title")
            continue
        slug = slugify(title)
        
        # Extract content for components with fallbacks
        problem = sections.get('The Problem We Solve', sections.get('The Problem', ''))
        audience = sections.get('Who This Is Built For', '')
        
        # Features - extract list items
        features_text = sections.get('Core Features', sections.get('Core Features, Built Around How Retail Actually Works', ''))
        features = []
        for line in features_text.split('\n'):
            line = line.strip()
            if line.startswith('-') or line.startswith('*'):
                features.append(line[1:].strip())
            elif line and not line.startswith('#') and not line.startswith('-') and not line.startswith('*'):
                # If it's not a list item but has content, treat as a feature
                features.append(line)
        
        # Use cases - try to parse table
        usecases = []
        usecase_text = sections.get('Key Use Cases', sections.get('Key Use Cases by Retail Type', ''))
        if usecase_text:
            lines = usecase_text.split('\n')
            in_table = False
            for line in lines:
                if '|' in line:
                    if line.strip().startswith('|---'):
                        in_table = True
                        continue
                    if in_table or (not in_table and line.count('|') >= 2):
                        parts = [p.strip() for p in line.split('|') if p.strip()]
                        if len(parts) >= 3:
                            usecases.append({'type': parts[0], 'pain': parts[1], 'feature': parts[2]})
                            in_table = True
                elif line.strip() and not line.startswith('#'):
                    # If not a table, treat each line as a use case
                    usecases.append({'type': line, 'pain': '', 'feature': ''})
        
        # Business outcomes
        outcomes = []
        outcomes_text = sections.get('Business Outcomes', '')
        for line in outcomes_text.split('\n'):
            line = line.strip()
            if line.startswith('-'):
                line = line[1:].strip()
                if ':' in line:
                    parts = line.split(':', 1)
                    outcomes.append({'label': parts[0].strip(), 'detail': parts[1].strip()})
                else:
                    outcomes.append({'label': line, 'detail': ''})
            elif line and not line.startswith('#'):
                outcomes.append({'label': line, 'detail': ''})
        
        # Integration
        integration = []
        integration_text = sections.get('Integration & Compatibility', '')
        for line in integration_text.split('\n'):
            line = line.strip()
            if line.startswith('-'):
                line = line[1:].strip()
                if ':' in line:
                    parts = line.split(':', 1)
                    integration.append({'label': parts[0].strip(), 'detail': parts[1].strip()})
                else:
                    integration.append({'label': line, 'detail': ''})
            elif line and not line.startswith('#'):
                integration.append({'label': line, 'detail': ''})
        
        # FAQ
        faqs = []
        faq_text = sections.get('Frequently Asked Questions', '')
        q = None
        ans = []
        for line in faq_text.split('\n'):
            line = line.strip()
            if line.startswith('**') and line.endswith('**'):
                if q is not None:
                    faqs.append({'question': q, 'answer': '\n'.join(ans).strip()})
                q = line[2:-2].strip()
                ans = []
            elif q is not None and line:
                ans.append(line)
        if q is not None:
            faqs.append({'question': q, 'answer': '\n'.join(ans).strip()})
        
        # Build JSX - using string concatenation to avoid quote issues
        jsx_lines = []
        jsx_lines.append('import json')
        jsx_lines.append('import Head from "next/head";')
        jsx_lines.append('import RootLayout from "@/components/common/layout/RootLayout";')
        jsx_lines.append('import ServiceHero from "@/components/hero/ServiceHero";')
        jsx_lines.append('import ServiceProblem from "@/components/service/ServiceProblem";')
        jsx_lines.append('import ServiceAudience from "@/components/service/ServiceAudience";')
        jsx_lines.append('import ServiceFeatures from "@/components/service/ServiceFeatures";')
        jsx_lines.append('import ServiceUseCases from "@/components/service/ServiceUseCases";')
        jsx_lines.append('import ServiceOutcomes from "@/components/service/ServiceOutcomes";')
        jsx_lines.append('import ServiceIntegration from "@/components/service/ServiceIntegration";')
        jsx_lines.append('import ServiceFaq from "@/components/service/ServiceFaq";')
        jsx_lines.append('import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";')
        jsx_lines.append('')
        jsx_lines.append('const ServiceDetail = () => {')
        jsx_lines.append('  return (')
        jsx_lines.append('    <>')
        jsx_lines.append('      <Head>')
        jsx_lines.append(f'        <title>{title} | {desc}</title>')
        jsx_lines.append(f'        <meta name="description" content="{desc}" />')
        jsx_lines.append('      </Head>')
        jsx_lines.append('      <main>')
        jsx_lines.append('        <RootLayout header="header3" footer="footer3">')
        jsx_lines.append('          <ServiceHero')
        jsx_lines.append(f'            title="{title}"')
        jsx_lines.append(f'            description="{desc}"')
        jsx_lines.append('          />')
        jsx_lines.append('          <ServiceProblem')
        jsx_lines.append(f'            content={json.dumps(problem)}')
        jsx_lines.append('          />')
        jsx_lines.append('          <ServiceAudience')
        jsx_lines.append(f'            content={json.dumps(audience)}')
        jsx_lines.append('          />')
        jsx_lines.append('          <ServiceFeatures')
        jsx_lines.append(f'            features={json.dumps(features)}')
        jsx_lines.append('          />')
        jsx_lines.append('          <ServiceUseCases')
        jsx_lines.append(f'            useCases={json.dumps(usecases)}')
        jsx_lines.append('          />')
        jsx_lines.append('          <ServiceOutcomes')
        jsx_lines.append(f'            outcomes={json.dumps(outcomes)}')
        jsx_lines.append('          />')
        jsx_lines.append('          <ServiceIntegration')
        jsx_lines.append(f'            integration={json.dumps(integration)}')
        jsx_lines.append('          />')
        jsx_lines.append('          <ServiceFaq')
        jsx_lines.append(f'            faqs={json.dumps(faqs)}')
        jsx_lines.append('          />')
        jsx_lines.append('          <DigitalAgencyCTA />')
        jsx_lines.append('        </RootLayout>')
        jsx_lines.append('      </main>')
        jsx_lines.append('    </>')
        jsx_lines.append('  );')
        jsx_lines.append('};')
        jsx_lines.append('')
        jsx_lines.append('export default ServiceDetail;')
        
        jsx = '\n'.join(jsx_lines)
        with open(os.path.join(out_dir, f"{slug}.jsx"), 'w', encoding='utf-8') as f:
            f.write(jsx)
        print(f"Created {slug}.jsx")

print("Finished creating service detail pages.")
