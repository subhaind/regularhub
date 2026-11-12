import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link.js";
import { categories } from "@/data/services/catalog";

// The pricing questions each practice already answers on its service pages.
const pricingFaqs = [
  ...categories.growth.faqs.slice(0, 1),
  ...categories.software.faqs,
  ...categories.advisory.faqs,
];

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingPrice = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });
        let pricing_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".price__table",
            start: "top center",
          },
        });

        gsap.set(".animation_from_bottom", { yPercent: 50 });
        pricing_timeline.to(".animation_from_bottom", {
          yPercent: 0,
          duration: 2,
          ease: "power4.out",
        });

        gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 });
        pricing_timeline.to(
          ".animation_from_top",
          {
            yPercent: 0,
            duration: 2,
            opacity: 1,
            ease: "power4.out",
          },
          "-=2"
        );
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="price__area pt-130 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">How pricing works</h2>
                <h3 className="sec-title title-anim">
                  A written, itemised quote before any work starts
                </h3>
              </div>
              <div className="faq__list-3">
                <Accordion defaultActiveKey="0" className="accordion">
                  {pricingFaqs.map((faq, index) => (
                    <Accordion.Item key={faq.question} eventKey={String(index)} className="accordion-item">
                      <Accordion.Header>{faq.question}</Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <p>{faq.answer}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h2 className="price__type">Growth Engines</h2>
                    <h3 className="price__title">Free growth audit</h3>
                    <p>
                      Then a written quote with the one-time setup and the monthly
                      operating fee itemised. No lock-in.
                    </p>
                  </div>
                  <div className="price__amount">
                    <h4 className="best-value">Start here</h4>
                    <p>Free</p>
                  </div>
                </div>

                <div className="price__item animation_from_top">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h2 className="price__type">Operations Software</h2>
                    <h3 className="price__title">14 days free</h3>
                    <p>
                      No credit card. After a live demo on your own products, a
                      written quote with every module itemised. No lock-in.
                    </p>
                  </div>
                  <div className="price__amount">
                    <p>
                      14<span> days</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="price__btn btn_wrapper">
                <Link
                  href="/contact"
                  className="wc-btn-black btn-hover btn-item"
                >
                  <span></span> Book a free <br />
                  audit or demo <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPrice;
