import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { getOffering } from "@/data/services/catalog";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const CONTACT_EMAIL = "hello@regularhub.in";

// Every service-page CTA links here with ?service=&intent=(&segment=) so the
// enquiry arrives labelled with what the visitor asked for.
const intentLabels = {
  "growth-audit": "Free growth audit",
  demo: "Live demo",
  trial: "14-day free trial",
  assessment: "Confidential assessment",
  consultation: "Consultation",
};

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
  const [sent, setSent] = useState(false);

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  useEffect(() => {
    if (router.isReady) setSubject(buildSubject(router.query));
  }, [router.isReady, router.query]);

  // The site is a static export with no form backend, so the enquiry is handed to
  // the visitor's email client, fully pre-filled, instead of posting to a missing script.
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      "",
      data.get("message"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      data.get("subject")
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

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
                    <a href="tel:+(91)8250686154">+(91) 8250 - 686 - 145</a>
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
                <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="wc-btn-primary btn-hover btn-item">
                          <span></span> Send <br />
                          enquiry <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                      {sent && (
                        <p role="status" style={{ marginTop: 16 }}>
                          Your email app should now be open with your enquiry
                          filled in — just press send. If nothing opened, email us
                          at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                        </p>
                      )}
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
