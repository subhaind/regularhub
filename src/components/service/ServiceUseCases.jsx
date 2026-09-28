import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceUseCases = ({ useCases }) => {
  const charAnim = useRef();
  const useCasesArea = useRef();

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
      <section className="usecases__area" ref={useCasesArea}>
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Key Use Cases
                </h2>
              </div>
              <div className="usecases__content">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Business Type</th>
                      <th>Pain Point</th>
                      <th>Our Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {useCases.map((uc, index) => (
                      <tr key={index}>
                        <td>{uc.type}</td>
                        <td>{uc.pain}</td>
                        <td>{uc.feature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="usecases__img">
                <Image
                  priority
                  width={800} height={600}
                  src="/assets/imgs/usecases.jpg"
                  alt="Use Cases Image"
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

export default ServiceUseCases;
