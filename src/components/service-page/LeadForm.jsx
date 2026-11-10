import { useId } from "react";
import { Honeypot, FormStatus } from "@/components/common/FormParts";
import { CONTACT_EMAIL, useLeadForm } from "@/lib/leadForm";
import s from "./ServicePage.module.scss";

const intentLabels = {
  "growth-audit": "Free growth audit",
  demo: "Live demo",
  trial: "14-day free trial",
  assessment: "Confidential assessment",
  consultation: "Consultation",
};

// The visitor is already on the page that sells the thing, so ask for the minimum
// (name + email), keep everything else optional, and file the lead against the
// service they were reading. Replaces a click-through to a blank contact page.
const LeadForm = ({ service, category, heading, lead, intent }) => {
  const uid = useId();
  const id = (name) => `${uid}-${name}`;
  const intentKey = intent || category.primaryCta.intent;
  const action = intentLabels[intentKey] || "Enquiry";
  const serviceName = service?.name || "General";

  const { status, error, handleSubmit, sending } = useLeadForm("service-enquiry", {
    getExtra: () => ({
      service: serviceName,
      intent: intentKey,
      subject: `${action} — ${serviceName}`,
    }),
    mailtoFallback: (d) =>
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${action} — ${serviceName}`)}&body=${encodeURIComponent(
        `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || "-"}\nBusiness: ${d.business || "-"}\n\n${d.message || ""}`
      )}`,
  });

  if (status === "success") {
    return (
      <div className={s.formCard} id="enquire" role="status">
        <div className={s.formSuccess}>
          <span className={s.formSuccessIcon} aria-hidden="true">
            <i className="fa-solid fa-check"></i>
          </span>
          <h3>Thank you — we’ve got it.</h3>
          <p>
            Your {action.toLowerCase()} request for <strong>{serviceName}</strong> is in. Expect a reply within one
            business day with specific next steps.
          </p>
          <p className={s.formNote}>
            Need it sooner? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.formCard} id="enquire">
      <h3 className={s.formTitle}>{heading || category.primaryCta.label}</h3>
      {lead && <p className={s.formLead}>{lead}</p>}
      <form onSubmit={handleSubmit} noValidate={false} className={s.form} aria-busy={sending}>
        <Honeypot />
        <div className={s.formGrid}>
          <div className={s.field}>
            <label htmlFor={id("name")}>
              Your name <span aria-hidden="true">*</span>
            </label>
            <input id={id("name")} name="name" type="text" autoComplete="name" required maxLength={120} />
          </div>
          <div className={s.field}>
            <label htmlFor={id("email")}>
              Work email <span aria-hidden="true">*</span>
            </label>
            <input id={id("email")} name="email" type="email" autoComplete="email" inputMode="email" required maxLength={160} />
          </div>
          <div className={s.field}>
            <label htmlFor={id("phone")}>Phone / WhatsApp</label>
            <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={30} />
          </div>
          <div className={s.field}>
            <label htmlFor={id("business")}>Business name</label>
            <input id={id("business")} name="business" type="text" autoComplete="organization" maxLength={160} />
          </div>
          <div className={`${s.field} ${s.fieldWide}`}>
            <label htmlFor={id("message")}>Anything we should know? (optional)</label>
            <textarea
              id={id("message")}
              name="message"
              rows={3}
              maxLength={2000}
              placeholder="Team size, current tools, what is not working…"
            ></textarea>
          </div>
        </div>
        <button type="submit" className={s.btnPrimary} disabled={sending}>
          {sending ? (
            <>
              <span className={s.spinner} aria-hidden="true"></span> Sending…
            </>
          ) : (
            <>
              {category.primaryCta.label} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </>
          )}
        </button>
        <FormStatus status={status} error={error} />
        <p className={s.formNote}>{category.assurance} We only use your details to reply to this request.</p>
      </form>
    </div>
  );
};

export default LeadForm;
