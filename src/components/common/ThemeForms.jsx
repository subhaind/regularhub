import Image from "next/image";
import ArrowBlack from "../../../public/assets/imgs/icon/arrow-black.png";
import { FormStatus, Honeypot } from "@/components/common/FormParts";
import { useLeadForm } from "@/lib/leadForm";

// Drop-in replacements for the template's dead `<form action="#">` blocks, keeping
// their markup and classes so the existing theme styling still applies.

export const NewsletterForm = () => {
  const { status, error, handleSubmit, sending } = useLeadForm("newsletter");
  return (
    <form onSubmit={handleSubmit} aria-busy={sending}>
      <Honeypot />
      <label htmlFor="newsletter-email" className="visually-hidden">
        Email address
      </label>
      <input id="newsletter-email" type="email" name="email" placeholder="Enter your email" autoComplete="email" required />
      <button type="submit" className="submit" disabled={sending} aria-label="Subscribe">
        <Image priority style={{ width: "auto", height: "auto" }} src={ArrowBlack} alt="" />
      </button>
      <FormStatus status={status} error={error} success="You're subscribed. Thank you!" />
    </form>
  );
};

export const QuoteForm = () => {
  const { status, error, handleSubmit, sending } = useLeadForm("portfolio-quote");
  return (
    <form onSubmit={handleSubmit} aria-busy={sending}>
      <Honeypot />
      <div className="row g-3">
        <div className="col-xxl-6 col-xl-6 col-12">
          <input type="text" name="name" placeholder="Name *" aria-label="Name" autoComplete="name" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-12">
          <input type="email" name="email" placeholder="Email *" aria-label="Email" autoComplete="email" required />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-xxl-6 col-xl-6 col-12">
          <input type="tel" name="phone" placeholder="Phone" aria-label="Phone" autoComplete="tel" />
        </div>
        <div className="col-xxl-6 col-xl-6 col-12">
          <input type="text" name="subject" placeholder="Subject *" aria-label="Subject" required />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-12">
          <textarea name="message" placeholder="Messages *" aria-label="Message" required></textarea>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-12">
          <div className="pc-btn">
            <button type="submit" className="wc-btn-dark" disabled={sending}>
              {sending ? "Sending…" : "Send Me Quotes"}
            </button>
          </div>
          <FormStatus status={status} error={error} success="Thank you — we'll send your quote shortly." />
        </div>
      </div>
    </form>
  );
};
