import { useRef, useState } from "react";
import Link from "next/link";
import { ctaHref } from "@/data/services/catalog";
import s from "./ServicePage.module.scss";

// Accessible tabs (WAI-ARIA tabs pattern): every panel stays in the DOM for SEO,
// arrow keys / Home / End move between tabs, inactive panels use `hidden`.
const SegmentExplorer = ({ slug, segments, ctaIntent, ctaLabel }) => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const focusTab = (index) => {
    const next = (index + segments.length) % segments.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event, index) => {
    const keys = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: segments.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      focusTab(keys[event.key]);
    }
  };

  return (
    <div className={s.explorer}>
      <div className={s.tabList} role="tablist" aria-label="Choose your business type">
        {segments.map((seg, i) => (
          <button
            key={seg.title}
            ref={(el) => (tabRefs.current[i] = el)}
            type="button"
            role="tab"
            id={`seg-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`seg-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className={s.tab}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {seg.title}
          </button>
        ))}
      </div>

      <div>
        {segments.map((seg, i) => (
          <div
            key={seg.title}
            role="tabpanel"
            id={`seg-panel-${i}`}
            aria-labelledby={`seg-tab-${i}`}
            hidden={active !== i}
            className={s.panel}
            tabIndex={0}
          >
            <h3 className={s.panelTitle}>{seg.title}</h3>
            <dl className={s.facts}>
              {seg.who && (
                <div className={s.fact}>
                  <dt>Who it’s for</dt>
                  <dd>{seg.who}</dd>
                </div>
              )}
              {seg.leak && (
                <div className={s.factLeak}>
                  <dt>The revenue leak</dt>
                  <dd>{seg.leak}</dd>
                </div>
              )}
              {seg.wedge && (
                <div className={s.factWedge}>
                  <dt>Where we start</dt>
                  <dd>{seg.wedge}</dd>
                </div>
              )}
            </dl>

            {seg.install?.length > 0 && (
              <div className={s.installGrid}>
                {seg.install.map((group, gi) => (
                  <details key={group.group} className={s.disclosure} open={gi === 0}>
                    <summary>{group.group}</summary>
                    <div className={s.disclosureBody}>
                      <ul className={s.bullets}>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            )}

            {seg.outcome && (
              <p className={s.outcomeLine}>
                <strong>Outcome: </strong>
                {seg.outcome}
              </p>
            )}

            <div className={s.panelCta}>
              <Link href={`${ctaHref(slug, ctaIntent)}&segment=${encodeURIComponent(seg.title)}`} className={s.textLink}>
                {ctaLabel} for {seg.title} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentExplorer;
