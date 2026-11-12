import Head from "next/head";
import Link from "next/link";
import RootLayout from "@/components/common/layout/RootLayout";
import {
  SITE_URL,
  ctaHref,
  categories,
  dpdp,
  getOffering,
  serviceHref,
  whyUs,
} from "@/data/services/catalog";
import SegmentExplorer from "./SegmentExplorer";
import { AnchorLink, CtaPair, JsonLd, SectionHead } from "./shared";
import LeadForm from "./LeadForm";
import ServiceChrome from "./ServiceChrome";
import s from "./ServicePage.module.scss";

// One template for every offering. Section order follows the buying sequence:
// promise + proof → problem → system → fit → results → how we deliver → objections → act.
const ServicePage = ({ service }) => {
  const category = categories[service.category];
  const { slug, hero, problem, capabilities } = service;
  const url = `${SITE_URL}${serviceHref(slug)}/`;
  const isGrowth = service.category === "growth";
  const isAdvisory = service.category === "advisory";
  // Page-specific questions first, then the questions every buyer in this line asks (price, DPDP…).
  const faqs = [...service.faqs, ...(category.faqs || [])];
  const dpdpItems = service.dpdp ? [...dpdp.items, dpdp.extras[slug]].filter(Boolean) : [];

  const jump = [
    { id: "problem", label: "The problem" },
    { id: "system", label: isGrowth ? "What we install" : isAdvisory ? "Services" : "Capabilities" },
    service.segments && { id: "segments", label: "Your business type" },
    service.useCases && { id: "use-cases", label: "Use cases" },
    service.results && { id: "results", label: "Results" },
    faqs.length > 0 && { id: "faq", label: "FAQ" },
  ].filter(Boolean);

  const capabilityGroups = capabilities
    ? capabilities.items.reduce((acc, item) => {
        const key = item.group || "";
        (acc[key] = acc[key] || []).push(item);
        return acc;
      }, {})
    : {};

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.meta.description,
      url,
      provider: { "@type": "Organization", name: "Regularhub Private Limited", url: SITE_URL },
      areaServed: "IN",
      serviceType: category.label,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Services", item: `${SITE_URL}/services/` },
        { "@type": "ListItem", position: 2, name: service.name, item: url },
      ],
    },
    faqs.length > 0 && {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title key="title">{`${service.meta.title} | Regularhub`}</title>
        <meta name="description" content={service.meta.description} />
        <link key="canonical" rel="canonical" href={url} />
        <meta key="og:title" property="og:title" content={service.meta.title} />
        <meta key="og:description" property="og:description" content={service.meta.description} />
        <meta key="og:url" property="og:url" content={url} />
        <meta name="twitter:title" content={service.meta.title} />
        <meta name="twitter:description" content={service.meta.description} />
        <JsonLd data={structuredData} />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceChrome label={category.primaryCta.label} />
          <article className={s.page}>
            {/* ── Hero: promise, proof, one primary action ── */}
            <header className={s.hero} id="service-hero">
              <div className={s.container}>
                <div className={s.heroGrid}>
                  <div>
                    <nav aria-label="Breadcrumb" className={s.breadcrumb}>
                      <Link href="/services">Services</Link>
                      <span aria-hidden="true">/</span>
                      <span>{category.label}</span>
                    </nav>
                    <span className={s.eyebrow}>
                      {category.eyebrow}
                      {isGrowth ? ` · ${service.name}` : ""}
                    </span>
                    <h1 className={s.h1}>{hero.headline}</h1>
                    <p className={s.heroSub}>{hero.subhead}</p>
                    <CtaPair slug={slug} category={category} />
                    <p className={s.assurance}>{category.assurance}</p>
                    <nav aria-label="On this page" className={s.jumpNav}>
                      <span>On this page:</span>
                      {jump.map((j) => (
                        <AnchorLink key={j.id} id={j.id}>
                          {j.label}
                        </AnchorLink>
                      ))}
                    </nav>
                  </div>
                  <aside className={s.proofCard} aria-label="Key results">
                    <p className={s.proofTitle}>What changes</p>
                    <ul className={s.proofList}>
                      {hero.proof.map((p) => (
                        <li key={p.label} className={s.proofItem}>
                          <span className={s.proofValue}>{p.value}</span>
                          <span className={s.proofLabel}>{p.label}</span>
                        </li>
                      ))}
                    </ul>
                    {!isAdvisory && (
                      <p className={s.proofFoot}>
                        {isGrowth
                          ? "Typical outcomes. Your growth audit sets your actual baseline."
                          : "Typical outcomes. Your live demo maps them to your volumes."}
                      </p>
                    )}
                  </aside>
                </div>
              </div>
            </header>

            {/* ── Problem: name the cost of the status quo ── */}
            <section id="problem" className={s.section} aria-labelledby="problem-title">
              <div className={s.container}>
                <div className={s.split}>
                  <div>
                    <span className={s.eyebrow}>The problem</span>
                    <h2 className={s.h2} id="problem-title">
                      {problem.heading}
                    </h2>
                  </div>
                  <div className={s.prose}>
                    {problem.body.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── Free first step (low-commitment offer right after the problem lands) ── */}
            {service.offer && (
              <section className={s.band} aria-labelledby="offer-title">
                <div className={s.container}>
                  <div className={s.bandInner}>
                    <div>
                      <h2 id="offer-title">{service.offer.title}</h2>
                      <p>{service.offer.body}</p>
                      {service.offer?.stat && (
                        <p className={s.bandStat}>
                          {service.offer.stat.text}
                          <cite>Source: {service.offer.stat.source}</cite>
                        </p>
                      )}
                    </div>
                    <Link href={ctaHref(slug, service.offer.intent)} className={s.btnInk}>
                      {service.offer.cta} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </section>
            )}

            {/* ── System / capabilities ── */}
            {capabilities && (
              <section id="system" className={s.sectionAlt} aria-labelledby="system-title">
                <div className={s.container}>
                  <SectionHead
                    id="system-title"
                    eyebrow={isGrowth ? "What we install" : "Capabilities"}
                    title={isGrowth ? capabilities.heading : "Built around how your operation actually runs."}
                    lead={capabilities.intro}
                  />
                  {Object.entries(capabilityGroups).map(([group, items]) => (
                    <div key={group || "all"}>
                      {group && <h3 className={s.groupTitle}>{group}</h3>}
                      <div className={s.grid3}>
                        {items.map((item, i) => (
                          <div key={item.title} className={s.card}>
                            {isGrowth && <span className={s.cardIndex}>{String(i + 1).padStart(2, "0")}</span>}
                            <h3 className={s.cardTitle}>{item.title}</h3>
                            <p className={s.cardBody}>{item.body}</p>
                            {item.example && (
                              <div className={s.example}>
                                <strong>In practice</strong>
                                {item.example}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── Advisory catalog ── */}
            {service.catalog && (
              <section id="system" className={s.sectionAlt} aria-labelledby="catalog-title">
                <div className={s.container}>
                  <SectionHead
                    id="catalog-title"
                    eyebrow="Service catalog"
                    title="Three disciplines. One coordinated team."
                    lead="Organised by discipline, then by client type — with integrated services where reputation and security overlap."
                  />
                  {service.catalog.map((part) => (
                    <div key={part.title} className={s.catalogPart}>
                      <h3>{part.title}</h3>
                      <p className={s.catalogLead}>{part.lead}</p>
                      {part.groups.map((group) => (
                        <div key={group.title} className={s.catalogGroup}>
                          <h4>
                            {group.title} · {group.items.length} services
                          </h4>
                          <div className={s.grid2}>
                            {group.items.map((item) => (
                              <details key={item.title} className={s.disclosure}>
                                <summary>{item.title}</summary>
                                <p className={s.disclosureBody}>{item.body}</p>
                              </details>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── Fit: sub-verticals (growth) ── */}
            {service.segments && (
              <section id="segments" className={s.section} aria-labelledby="segments-title">
                <div className={s.container}>
                  <SectionHead
                    id="segments-title"
                    eyebrow="Built for your business"
                    title="Pick your business type. See the exact leak and the exact fix."
                    lead={`${service.segments.length} sub-verticals, each with its own revenue leak, starting point and install plan.`}
                  />
                  <SegmentExplorer
                    slug={slug}
                    segments={service.segments}
                    ctaIntent={category.primaryCta.intent}
                    ctaLabel="Get the growth audit"
                  />
                </div>
              </section>
            )}

            {/* ── Fit: audience + use cases (software) ── */}
            {service.audience?.length > 0 && (
              <section className={s.section} aria-labelledby="audience-title">
                <div className={s.container}>
                  <SectionHead id="audience-title" eyebrow="Who it’s for" title="Built for operators like you." />
                  <ul className={s.chips}>
                    {service.audience.map((a) => (
                      <li key={a} className={s.chip}>
                        <i className="fa-solid fa-check" aria-hidden="true"></i>
                        {a}
                      </li>
                    ))}
                  </ul>
                  {service.useCases && (
                    <div id="use-cases" style={{ marginTop: 48, scrollMarginTop: 110 }}>
                      <div className={s.tableWrap}>
                        <table className={s.table}>
                          <caption className="visually-hidden">{`${service.name} use cases by business type`}</caption>
                          <thead>
                            <tr>
                              {service.useCases.columns.map((c) => (
                                <th key={c} scope="col">
                                  {c}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {service.useCases.rows.map((row) => (
                              <tr key={row.join("|")}>
                                {row.map((cell, ci) => (
                                  <td key={ci} data-label={service.useCases.columns[ci]}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* ── Mid-page conversion point ── */}
            <section className={s.band} aria-label="Next step">
              <div className={s.container}>
                <div className={s.bandInner}>
                  <div>
                    <h2>{category.midCta.heading}</h2>
                    <p>{category.midCta.body}</p>
                    {category.midCta?.stat && (
                      <p className={s.bandStat}>
                        {category.midCta.stat.text}
                        <cite>Source: {category.midCta.stat.source}</cite>
                      </p>
                    )}
                  </div>
                  <AnchorLink id="enquire" className={s.btnInk}>
                    {category.primaryCta.label} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </AnchorLink>
                </div>
              </div>
            </section>

            {/* ── Results ── */}
            {service.results && (
              <section id="results" className={s.sectionDark} aria-labelledby="results-title">
                <div className={s.container}>
                  <SectionHead
                    onDark
                    id="results-title"
                    eyebrow="Results"
                    title={service.results.type === "beforeAfter" ? "What usually happens — and what the system does instead." : "Measurable business outcomes."}
                  />
                  {service.results.type === "beforeAfter" ? (
                    <div className={s.compare} role="table" aria-label="Before and after">
                      <div className={s.compareHead} role="row">
                        <div role="columnheader">What usually happens</div>
                        <div role="columnheader">What this system does</div>
                      </div>
                      {service.results.items.map((r) => (
                        <div key={r.before} className={s.compareRow} role="row">
                          <div className={s.before} role="cell">
                            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                            <span>{r.before}</span>
                          </div>
                          <div className={s.after} role="cell">
                            <i className="fa-solid fa-check" aria-hidden="true"></i>
                            <span>{r.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={s.grid3}>
                      {service.results.items.map((o) => (
                        <div key={o.label} className={s.outcomeCard}>
                          <h3>{o.label}</h3>
                          <p>{o.detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* ── Integrations ── */}
            {service.integrations?.length > 0 && (
              <section className={s.section} aria-labelledby="integrations-title">
                <div className={s.container}>
                  <SectionHead
                    id="integrations-title"
                    eyebrow="Integrations"
                    title="Works with the hardware and tools you already run."
                  />
                  <div className={s.grid3}>
                    {service.integrations.map((i) => (
                      <div key={i.label} className={s.card}>
                        <h3 className={s.cardTitle}>{i.label}</h3>
                        <p className={s.cardBody}>{i.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ── Why us + data protection: the trust layer before the process and price questions ── */}
            <section className={s.section} aria-labelledby="why-title">
              <div className={s.container}>
                <SectionHead id="why-title" eyebrow={whyUs.eyebrow} title={whyUs.title} />
                <div className={s.grid2}>
                  {whyUs.items.map((item) => (
                    <div key={item.title} className={s.card}>
                      <h3 className={s.cardTitle}>{item.title}</h3>
                      <p className={s.cardBody}>{item.body}</p>
                    </div>
                  ))}
                </div>
                {dpdpItems.length > 0 && (
                  <div id="dpdp" style={{ marginTop: 72, scrollMarginTop: 110 }}>
                    <SectionHead eyebrow={dpdp.eyebrow} title={dpdp.title} lead={dpdp.lead} />
                    <div className={dpdpItems.length === 3 ? s.grid3 : s.grid2}>
                      {dpdpItems.map((item) => (
                        <div key={item.title} className={s.card}>
                          <h3 className={s.cardTitle}>{item.title}</h3>
                          <p className={s.cardBody}>{item.body}</p>
                        </div>
                      ))}
                    </div>
                    <p className={s.proofFoot} style={{ marginTop: 20 }}>{dpdp.note}</p>
                  </div>
                )}
              </div>
            </section>

            {/* ── How we deliver ── */}
            <section className={s.sectionAlt} aria-labelledby="process-title">
              <div className={s.container}>
                <SectionHead id="process-title" eyebrow="How we work" title="From first call to running system." />
                <ol className={s.steps}>
                  {category.process.map((step) => (
                    <li key={step.title} className={s.step}>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </li>
                  ))}
                </ol>
                {service.engagement && (
                  <div style={{ marginTop: 56 }}>
                    <h3 className={s.groupTitle}>{service.engagement.heading}</h3>
                    <div className={s.grid3}>
                      {service.engagement.models.map((m) => (
                        <div key={m.title} className={s.card}>
                          <h4 className={s.cardTitle}>{m.title}</h4>
                          <p className={s.cardBody}>{m.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {category.included && (
                  <div style={{ marginTop: 56 }}>
                    <h3 className={s.groupTitle}>What every engagement includes</h3>
                    <p className={s.cardBody} style={{ marginBottom: 20 }}>{category.includedLead}</p>
                    <ul className={s.chips}>
                      {category.included.map((item) => (
                        <li key={item} className={s.chip}>
                          <i className="fa-solid fa-check" aria-hidden="true"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* ── Objections ── */}
            {faqs.length > 0 && (
              <section id="faq" className={s.section} aria-labelledby="faq-title">
                <div className={s.container}>
                  <div className={s.split}>
                    <SectionHead id="faq-title" eyebrow="FAQ" title="Questions buyers ask before they commit." />
                    <div className={s.faqList}>
                      {faqs.map((f, i) => (
                        <details key={f.question} className={s.faqItem} open={i === 0}>
                          <summary>{f.question}</summary>
                          <p className={s.faqAnswer}>{f.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ── Final CTA: pitch + the enquiry form, on the page the visitor is already reading ── */}
            <section className={s.sectionDark} aria-labelledby="closing-title">
              <div className={s.container}>
                <div className={s.closingGrid}>
                  <div className={s.closing}>
                    <span className={s.eyebrowOnDark}>Next step</span>
                    <h2 className={s.h2OnDark} id="closing-title">
                      {service.closing.heading}
                    </h2>
                    {service.closing.body.filter(Boolean).map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                    {category.secondaryCta.intent && (
                      <div className={s.btnRow}>
                        <Link href={ctaHref(slug, category.secondaryCta.intent)} className={s.btnSecondaryOnDark}>
                          {category.secondaryCta.label}
                        </Link>
                      </div>
                    )}
                    <p className={s.assuranceOnDark}>{category.assurance}</p>
                  </div>
                  <LeadForm service={service} category={category} lead={category.midCta.body} />
                </div>
              </div>
            </section>

            {/* ── Cross-sell ── */}
            {service.related?.length > 0 && (
              <section className={s.section} aria-labelledby="related-title">
                <div className={s.container}>
                  <SectionHead id="related-title" eyebrow="Often paired with" title="Complete the system." />
                  <div className={s.grid3}>
                    {service.related.map(getOffering).filter(Boolean).map((o) => (
                      <Link key={o.slug} href={serviceHref(o.slug)} className={s.relatedCard}>
                        <span className={s.relatedMeta}>{categories[o.category].label}</span>
                        <h3 className={s.cardTitle}>{o.name}</h3>
                        <p className={s.cardBody}>{o.promise}</p>
                        <span className={s.textLink}>
                          Explore <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </article>
        </RootLayout>
      </main>
    </>
  );
};

export default ServicePage;
