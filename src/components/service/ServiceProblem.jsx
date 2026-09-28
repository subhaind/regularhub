import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceProblem = ({ content }) => {
  const charAnim = useRef();
  const problemArea = useRef();

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
      <section className="problem__area" ref={problemArea}>
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  The Problem We Solve
                </h2>
              </div>
              <div className="problem__content">
                <p>{content}</p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="problem__img">
                <Image
                  priority
                  width={800}
                  height={600}
                  src="/assets/imgs/problem.jpg"
                  alt="Problem Image"
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

export default ServiceProblem;