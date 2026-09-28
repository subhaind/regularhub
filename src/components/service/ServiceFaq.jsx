import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import { Accordion } from "react-bootstrap";

const ServiceFaq = ({ faqs }) => {
  const charAnim = useRef();
  const faqArea = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tHero = gsap.context(() => {
        // Add any animations if needed
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="faq__area" ref={faqArea}>
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="faq__content">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="faqAccordion"
                >
                  {faqs.map((faq, index) => (
                    <Accordion.Item eventKey={index} className="accordion-item" key={index}>
                      <Accordion.Header className="accordion-header" eventKey={index}>
                        <Accordion.Button
                          type="button"
                          className="accordion-button"
                          collapsed={index !== 0}
                        >
                          {faq.question}
                        </Accordion.Button>
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse" eventKey={index}>
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  width={800} height={600}
                  src="/assets/imgs/faq.jpg"
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceFaq;
