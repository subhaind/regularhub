import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import { categories } from "@/data/services/catalog";

// Site-wide questions. Pricing and DPDP answers are the same ones the service pages give.
const faqs = [
  {
    question: "What does Regularhub do?",
    answer:
      "We build and run three things for growing Indian businesses: growth engines that answer, qualify and follow up every enquiry; operations software for billing, inventory, people and front-of-house; and brand reputation and cybersecurity work. One team handles all three, so nothing falls between two vendors.",
  },
  {
    question: "Which businesses do you work with?",
    answer:
      "We build for more than 100 business types across healthcare, education, local services and real estate, retail and e-commerce, food and hospitality, events, and B2B and industrial trade. We lead with dental and aesthetic clinics, coaching centres and real-estate agents.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "With your own business, not a canned pitch: a free growth audit for growth engines, a 30-minute live demo on your own products for software, or a confidential assessment for reputation and security.",
  },
  ...categories.growth.faqs,
  ...categories.software.faqs,
  {
    question: "Can I try the software before I buy?",
    answer: "Yes. After the live demo you can run it free for 14 days. No credit card is needed.",
  },
  categories.advisory.faqs[0],
  {
    question: "Do you just install the system, or run it too?",
    answer:
      "We run it. Funnels, bots and follow-ups are operated and optimised after launch, with live dashboards, instead of being handed over as a login and a manual.",
  },
  {
    question: "Does the AI give medical advice or diagnose patients?",
    answer:
      "No. The bot never diagnoses and never recommends treatment. It answers your practice’s questions, collects the details your team asks for, books slots and routes anything clinical to your doctors.",
  },
  {
    question: "Where are you based?",
    answer:
      "Regularhub Private Limited is based in Kolkata and works with businesses across India. Send an enquiry from the contact page and we'll reply within one business day.",
  },
].filter(Boolean);

const Faq1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  FAQ
                </h2>
                <p className="">
                  Straight answers about what we do, <br /> how it starts and what it costs.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  {faqs.map((faq, index) => (
                    <Accordion.Item key={faq.question} eventKey={String(index)} className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        {faq.question}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>{faq.answer}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq1;
