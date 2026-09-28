import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceIntegration = ({ integration }) => {
  const charAnim = useRef();
  const integrationArea = useRef();

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
      <section className="integration__area" ref={integrationArea}>
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Integration & Compatibility
                </h2>
              </div>
              <div className="integration__content">
                <ul>
                  {integration.map((item, index) => (
                    <li key={index}>
                      <strong>{item.label}:</strong> {item.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="integration__img">
                <Image
                  priority
                  width={800} height={600}
                  src="/assets/imgs/integration.jpg"
                  alt="Integration Image"
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

export default ServiceIntegration;
