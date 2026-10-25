import Link from "next/link";
import { ScrollSmoother } from "@/plugins";
import { ctaHref } from "@/data/services/catalog";
import s from "./ServicePage.module.scss";

// ScrollSmoother transforms the page wrapper, so native #hash jumps land in the
// wrong place. Route in-page links through the smoother when it is running.
export const scrollToAnchor = (event, id) => {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const smoother = ScrollSmoother.get && ScrollSmoother.get();
  if (smoother) smoother.scrollTo(target, true, "top 90px");
  else target.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const AnchorLink = ({ id, className, children }) => (
  <a href={`#${id}`} className={className} onClick={(e) => scrollToAnchor(e, id)}>
    {children}
  </a>
);

// Primary + secondary CTA pair. A CTA config carries either an `intent` (goes to
// /contact pre-labelled) or an `anchor` (scrolls within the page).
export const CtaPair = ({ slug, category, onDark = false, secondary = true }) => {
  const primaryClass = onDark ? s.btnPrimaryOnDark : s.btnPrimary;
  const secondaryClass = onDark ? s.btnSecondaryOnDark : s.btnSecondary;
  const { primaryCta, secondaryCta } = category;
  return (
    <div className={s.btnRow}>
      <Link href={ctaHref(slug, primaryCta.intent)} className={primaryClass}>
        {primaryCta.label} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </Link>
      {secondary && secondaryCta.intent && (
        <Link href={ctaHref(slug, secondaryCta.intent)} className={secondaryClass}>
          {secondaryCta.label}
        </Link>
      )}
      {secondary && secondaryCta.anchor && (
        <AnchorLink id={secondaryCta.anchor} className={secondaryClass}>
          {secondaryCta.label}
        </AnchorLink>
      )}
    </div>
  );
};

export const SectionHead = ({ eyebrow, title, lead, onDark = false, id }) => (
  <div className={s.sectionHead}>
    {eyebrow && <span className={onDark ? s.eyebrowOnDark : s.eyebrow}>{eyebrow}</span>}
    <h2 className={onDark ? s.h2OnDark : s.h2} id={id}>
      {title}
    </h2>
    {lead && <p className={s.lead}>{lead}</p>}
  </div>
);

export const JsonLd = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);
