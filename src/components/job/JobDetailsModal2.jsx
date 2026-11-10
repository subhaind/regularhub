import { Modal } from "react-bootstrap";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Image from "next/image";
import { FormStatus, Honeypot } from "@/components/common/FormParts";
import { useLeadForm } from "@/lib/leadForm";

const JobDetailsModal2 = ({ modal2, setModal1, setModal2, answersRef }) => {
  const { status, error, handleSubmit, sending } = useLeadForm("job-application", {
    getExtra: () => ({ role: "Frontend Developer", ...(answersRef ? answersRef.current : {}) }),
  });
  const backForm = () => {
    setModal2(false);
  };

  const applyClose = () => {
    setModal2(false);
    setModal1(false);
  };
  return (
    <>
      <Modal
        show={modal2}
        onHide={applyClose}
        backdrop="static"
        keyboard={false}
        className="modal-show modal__application"
        id="application_form2"
      >
        <div className="modal__apply">
          <button
            onClick={applyClose}
            className="modal__close-2"
            id="apply_close2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="form-top">
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={LogoBlack}
              alt="Site logo"
            />
            <h2 className="sec-title">Frontend Developer</h2>
            <p>Full time</p>
          </div>
          <div className="form-apply">
            <form id="job-apply-form" onSubmit={handleSubmit} aria-busy={sending}>
              <Honeypot />
              <div className="input-apply-2">
                <p>Name *</p>
                <input type="text" name="name" required />
              </div>
              <div className="input-apply-2">
                <p>Email *</p>
                <input type="email" name="email" required />
              </div>
              <div className="input-apply-2">
                <p>Phone *</p>
                <input type="tel" name="phone" required />
              </div>
              <div className="input-apply-2">
                <p>Upload CV *</p>
                <input type="file" name="cv" accept=".pdf,.doc,.docx" required />
                <small>PDF or Word, up to 2 MB.</small>
              </div>
              <FormStatus status={status} error={error} success="Application received — thank you! We'll be in touch." />
            </form>
          </div>
          <div className="form-btn-2">
            <button
              onClick={backForm}
              className="wc-btn-primary btn-hover"
              id="back_form1"
            >
              <span></span> back <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button
              type="submit"
              form="job-apply-form"
              className="wc-btn-primary btn-hover"
              disabled={sending || status === "success"}
            >
              <span></span> {sending ? "Sending…" : "Submit"} <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobDetailsModal2;
