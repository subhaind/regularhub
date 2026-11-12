// About page: how an engagement runs. Each step restates a commitment the service pages already make.
const steps = [
  {
    title: "Start on your business",
    body: "A free growth audit, a live demo on your own products, or a confidential assessment of your exposure. Not a canned pitch.",
  },
  {
    title: "Get a written quote",
    body: "Every module, setup and monthly fee itemised before any work starts. There's no lock-in.",
  },
  {
    title: "Build and go live",
    body: "The system is built around your workflow: WhatsApp-first, GST-ready, and on the hardware you already own.",
  },
  {
    title: "Run and improve",
    body: "We operate and optimise what we build after launch, with live dashboards, instead of handing over a login and a manual.",
  },
];

const AboutHowWeWork = () => {
  return (
    <section className="team__area pt-140 pb-140">
      <div className="container">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">Our process</h2>
          <h3 className="sec-title title-anim">How we work</h3>
        </div>
        <div className="row" style={{ rowGap: 40, marginTop: 20 }}>
          {steps.map((step, index) => (
            <div key={step.title} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div style={{ borderTop: "1px solid #d7d7d7", paddingTop: 24, height: "100%" }}>
                <span style={{ fontSize: 14, opacity: 0.6 }}>{String(index + 1).padStart(2, "0")}</span>
                <h4 style={{ fontSize: 24, lineHeight: 1.3, margin: "12px 0 14px" }}>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHowWeWork;
