import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { scrollToAnchor } from "./shared";
import s from "./ServicePage.module.scss";

// Page-level chrome that must sit outside the theme's transformed #smooth-content
// (position:fixed breaks inside a transformed ancestor), so it is portalled to <body>:
//   • a reading-progress bar
//   • a sticky call to action that appears once the hero is behind the visitor and
//     steps aside while the enquiry form is on screen
const ServiceChrome = ({ label, heroId = "service-hero", formId = "enquire" }) => {
  const [mounted, setMounted] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [formInView, setFormInView] = useState(false);
  const bar = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return undefined;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${ratio})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const hero = document.getElementById(heroId);
    const form = document.getElementById(formId);
    const heroObs = hero
      ? new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0))
      : null;
    const formObs = form ? new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting), { threshold: 0.15 }) : null;
    if (hero && heroObs) heroObs.observe(hero);
    if (form && formObs) formObs.observe(form);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      heroObs?.disconnect();
      formObs?.disconnect();
    };
  }, [mounted, heroId, formId]);

  if (!mounted) return null;

  const show = pastHero && !formInView;

  return createPortal(
    <>
      <div className={s.progress} aria-hidden="true">
        <span ref={bar} className={s.progressBar}></span>
      </div>
      <div className={`${s.stickyCta} ${show ? s.stickyCtaShow : ""}`} aria-hidden={!show}>
        <a href={`#${formId}`} onClick={(e) => scrollToAnchor(e, formId)} tabIndex={show ? 0 : -1}>
          {label} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </>,
    document.body
  );
};

export default ServiceChrome;
