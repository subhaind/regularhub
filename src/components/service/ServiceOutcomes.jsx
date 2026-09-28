import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceOutcomes = ({ outcomes }) => {
  const charAnim = useRef();
  const outcomesArea = useRef();

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
      <section className="outcomes__area" ref={outcomesArea}>
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Business Outcomes
                </h2>
              </div>
              <div className="outcomes__content">
                <ul>
                  {outcomes.map((outcome, index) => (
                    <li key={index}>
                      <strong>{outcome.label}:</strong> {outcome.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="outcomes__img">
                <Image
                  priority
                  width={800} height={600}
                  src="/assets/imgs/outcomes.jpg"
                  alt="Outcomes Image"
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

export default ServiceOutcomes;
