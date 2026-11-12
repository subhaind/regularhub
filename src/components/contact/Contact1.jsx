import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { getOffering, intentLabels } from "@/data/services/catalog";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, useLeadForm } from "@/lib/leadForm";
import { FormStatus, Honeypot } from "@/components/common/FormParts";


// Every service-page CTA links here with ?service=&intent=(&segment=) so the
// enquiry arrives labelled with what the visitor asked for.
const buildSubject = ({ service, intent, segment }) => {
  const offering = service ? getOffering(String(service)) : null;
  const action = intentLabels[intent] || (offering ? "Enquiry" : "");
  return [action, offering?.name, segment].filter(Boolean).join(" — ");
};

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();
  const router = useRouter();
  const [subject, setSubject] = useState("");

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  useEffect(() => {
    if (router.isReady) setSubject(buildSubject(router.query));
  }, [router.isReady, router.query]);

  // Posts to the Google Apps Script web app (sheet + email alert). If the script URL
  // is not configured, the enquiry is handed to the visitor's email client instead.
  const { status, error, handleSubmit, sending } = useLeadForm("contact", {
    getExtra: () => ({
      service: router.query.service ? String(router.query.service) : "",
      intent: router.query.intent ? String(router.query.intent) : "",
      segment: router.query.segment ? String(router.query.segment) : "",
    }),
    mailtoFallback: (d) =>
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(d.subject || "Enquiry")}&body=${encodeURIComponent(
        [`Name: ${d.name}`, `Email: ${d.email}`, `Phone: ${d.phone || "-"}`, "", d.message].join("\n")
      )}`,
    onSuccess: () => setSubject(buildSubject({})),
  });

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h1 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Tell us what you need
                </h1>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  Share a few details about your business and where revenue or
                  operations are leaking. We&apos;ll come back with specific next
                  steps — not a generic deck.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  Prefer to talk <br />
                  directly?
                </h3>
                <ul>
                  <li>
                    <a href="tel:+918250686154">+91 82506 86154</a>
                  </li>
                  <li>
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </li>
                  <li>
                    <span>
                      65/1, Rabindrasarani, Kolkata <br /> India
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form onSubmit={handleSubmit} aria-busy={sending}>
                  <Honeypot />
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <label htmlFor="contact-name" className="visually-hidden">Name</label>
                      <input id="contact-name" type="text" name="name" placeholder="Name *" autoComplete="name" required />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <label htmlFor="contact-email" className="visually-hidden">Work email</label>
                      <input id="contact-email" type="email" name="email" placeholder="Work email *" autoComplete="email" required />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <label htmlFor="contact-phone" className="visually-hidden">Phone or WhatsApp</label>
                      <input id="contact-phone" type="tel" name="phone" placeholder="Phone / WhatsApp" autoComplete="tel" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <label htmlFor="contact-subject" className="visually-hidden">What do you need?</label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        placeholder="What do you need? *"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="contact-message" className="visually-hidden">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Your business, team size, and the problem you want solved *"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button type="submit" className="wc-btn-primary btn-hover btn-item" disabled={sending}>
                          <span></span> {sending ? "Sending…" : <>Send <br />enquiry</>} <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                      <FormStatus
                        status={status}
                        error={error}
                        success="Thank you — your enquiry is in. We'll reply within one business day."
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
