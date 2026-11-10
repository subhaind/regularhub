import { CONTACT_EMAIL, HONEYPOT } from "@/lib/leadForm";

// Off-screen trap for bots. Hidden from sighted users and assistive tech, skipped by tab.
export const Honeypot = () => (
  <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
    <label>
      Leave this field empty
      <input type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" defaultValue="" />
    </label>
  </div>
);

// Live-region feedback for every form: announced by screen readers, styled in extra.css.
export const FormStatus = ({ status, error, success, className = "" }) => {
  if (status === "success") {
    return (
      <p role="status" className={`form-status form-status--success ${className}`}>
        <i className="fa-solid fa-circle-check" aria-hidden="true"></i> {success}
      </p>
    );
  }
  if (status === "fallback") {
    return (
      <p role="status" className={`form-status form-status--success ${className}`}>
        Your email app should now be open with your message filled in — just press send. If nothing opened, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    );
  }
  if (status === "error") {
    return (
      <p role="alert" className={`form-status form-status--error ${className}`}>
        <i className="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> {error}{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>Email us instead</a>.
      </p>
    );
  }
  return null;
};
