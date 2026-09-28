import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceAudience = ({ content }) => {
  const charAnim = useRef();
  const audienceArea = useRef();

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
      <section className="audience__area" ref={audienceArea}>
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Who This Is Built For
                </h2>
              </div>
              <div className="audience__content">
                <p>{content}</p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="audience__img">
                <Image
                  priority
                  width={800}
                  height={600}
                  src="/assets/imgs/audience.jpg"
                  alt="Audience Image"
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

export default ServiceAudience;