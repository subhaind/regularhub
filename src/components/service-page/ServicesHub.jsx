import Head from "next/head";
import Link from "next/link";
import RootLayout from "@/components/common/layout/RootLayout";
import {
  SITE_URL,
  categories,
  categoryOrder,
  getOffering,
  offeringsByCategory,
  positioning,
  serviceHref,
} from "@/data/services/catalog";
import { AnchorLink, SectionHead } from "./shared";
import s from "./ServicePage.module.scss";

// Industry → the growth engine that fills the pipeline + the software that runs the floor.
const matrix = [
  { industry: "Healthcare, wellness & fitness", engine: "healthcare-wellness-pet-care", software: ["gym-management-software", "cloud-billing-software"] },
  { industry: "Restaurants, cafés & cloud kitchens", engine: "the-food-hospitality-travel-growth-engine", software: ["restaurant-management-software", "order-kitchen-billing-management"] },
  { industry: "Hotels, resorts & homestays", engine: "the-food-hospitality-travel-growth-engine", software: ["hotel-room-management-software"] },
  { industry: "Retail, D2C & showrooms", engine: "the-retail-e-commerce-growth-engine", software: ["retail-billing-software", "barcode-label-design-software"] },
  { industry: "Manufacturing, distribution & legal", engine: "b2b-industrial-legal-hyper-local-distribution", software: ["cloud-billing-software", "barcode-label-design-software", "hr-management-software"] },
  { industry: "Trades, home services & real estate", engine: "the-local-services-real-estate-growth-engine", software: ["cloud-billing-software", "laundry-management-software"] },
  { industry: "Schools, academies & creators", engine: "the-education-creative-entertainment-growth-engine", software: ["id-card-making-software", "hr-management-software"] },
  { industry: "Events, venues & media", engine: "the-events-entertainment-growth-engine", software: ["id-card-making-software"] },
];

const hubCta = { href: "/contact?intent=consultation", label: "Talk to an expert" };

const ServicesHub = () => {
  const url = `${SITE_URL}/services/`;
  const title = "Services — Growth Engines, Operations Software & Security";
  const description =
    "Industry growth engines, operations software and brand reputation & cybersecurity from Regularhub — engineered, installed and operated by one team.";

  return (
    <>
      <Head>
        <title>{`${title} | Regularhub`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <div className={s.page}>
            <header className={s.hero}>
              <div className={s.container}>
                <span className={s.eyebrow}>{positioning.eyebrow}</span>
                <h1 className={s.h1}>{positioning.headline}</h1>
                <p className={s.heroSub}>{positioning.subhead}</p>
                <div className={s.btnRow}>
                  <AnchorLink id="find" className={s.btnPrimary}>
                    Find the right system <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
                  </AnchorLink>
                  <Link href={hubCta.href} className={s.btnSecondary}>
                    {hubCta.label}
                  </Link>
                </div>
                <nav aria-label="Service lines" className={s.jumpNav}>
                  <span>Jump to:</span>
                  {categoryOrder.map((key) => (
                    <AnchorLink key={key} id={`cat-${key}`}>
                      {categories[key].label} ({offeringsByCategory(key).length})
                    </AnchorLink>
                  ))}
                </nav>
              </div>
            </header>

            <section className={s.section} aria-label="Service lines">
              <div className={s.container}>
                {categoryOrder.map((key) => {
                  const cat = categories[key];
                  return (
                    <div key={key} id={`cat-${key}`} className={s.hubCategory} style={{ scrollMarginTop: 110 }}>
                      <div className={s.hubCategoryHead}>
                        <SectionHead eyebrow={cat.label} title={cat.tagline} lead={cat.description} />
                      </div>
                      <div className={s.grid3}>
                        {offeringsByCategory(key).map((o) => (
                          <Link key={o.slug} href={serviceHref(o.slug)} className={s.relatedCard}>
                            <span className={s.relatedMeta}>{cat.eyebrow}</span>
                            <h3 className={s.cardTitle}>{o.name}</h3>
                            <p className={s.cardBody}>{o.promise}</p>
                            <span className={s.textLink}>
                              Explore <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="find" className={s.sectionAlt} aria-labelledby="find-title">
              <div className={s.container}>
                <SectionHead
                  id="find-title"
                  eyebrow="Find your system"
                  title="Fill the pipeline and run the floor — by industry."
                  lead="Most clients pair a growth engine that captures demand with the operations software that serves it."
                />
                <div className={s.tableWrap}>
                  <table className={s.matrix}>
                    <caption className="visually-hidden">Recommended growth engine and software by industry</caption>
                    <thead>
                      <tr>
                        <th scope="col">Industry</th>
                        <th scope="col">Growth engine</th>
                        <th scope="col">Operations software</th>
                      </tr>
                    </thead>
                    <tbody>
                      {matrix.map((row) => (
                        <tr key={row.industry}>
                          <td>{row.industry}</td>
                          <td data-label="Growth engine">
                            <Link href={serviceHref(row.engine)}>{getOffering(row.engine).name}</Link>
                          </td>
                          <td data-label="Software">
                            <span className={s.matrixLinks}>
                              {row.software.map((slug) => (
                                <Link key={slug} href={serviceHref(slug)}>
                                  {getOffering(slug).name}
                                </Link>
                              ))}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className={s.sectionDark} aria-labelledby="hub-closing">
              <div className={s.container}>
                <div className={s.closing}>
                  <span className={s.eyebrowOnDark}>Not sure where to start?</span>
                  <h2 className={s.h2OnDark} id="hub-closing">
                    Tell us where revenue is leaking. We’ll tell you which system fixes it.
                  </h2>
                  <p>One focused conversation about your business — and a specific recommendation before you commit to anything.</p>
                  <div className={s.btnRow}>
                    <Link href={hubCta.href} className={s.btnPrimaryOnDark}>
                      {hubCta.label} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </RootLayout>
      </main>
    </>
  );
};

export default ServicesHub;
