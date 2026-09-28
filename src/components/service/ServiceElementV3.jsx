import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Service21 from "../../../public/assets/imgs/service/2/1.png";
import Service22 from "../../../public/assets/imgs/service/2/2.png";
import Service23 from "../../../public/assets/imgs/service/2/3.png";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV3 = ({
  introText = "",
  sectionTitle = "",
  serviceItems = [],
  btnText = "View More",
  btnLink = "/contact"
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, index) => {
              gsap.to(item, {
                keyframes: {
                  opacity: [0, 1],
                  x: [-30, 0],
                },
                duration: 0.8,
                ease: "power3.out",
                delay: index * 0.2,
              });
            });
          } else {
            animation__services2.forEach((item, index) => {
              gsap.to(item, {
                keyframes: {
                  opacity: [0, 1],
                  x: [-30, 0],
                },
                duration: 0.8,
                ease: "power3.out",
                delay: index * 0.1,
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="service__area-2 pt-130 pb-110">
        <div className="container">

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-text text-anim">
                <p>{introText}</p>
              </div>
              <div className="btn_wrapper mt-30">
                <Link
                  className="wc-btn-primary btn-hover btn-item"
                  href={btnLink}
                >
                  <span></span> {btnText}{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">{sectionTitle}</h2>
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                {serviceItems.slice(0, 3).map((item, index) => (
                  <div className="service__item-2" key={index}>
                    <div>
                      <Image
                        priority
                        width={item.width ?? 102}
                        height={item.height ?? 114}
                        src={item.image ?? Service21}
                        alt="Service Icon"
                      />
                      <h3 className="service__title-2">
                        {item.title}
                      </h3>
                      <p>
                        {item.description}
                      </p>
                      <ul>
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>+ {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                {serviceItems.slice(3, 6).map((item, index) => (
                  <div className="service__item-2" key={index + 3}>
                    <div>
                      <Image
                        priority
                        width={item.width ?? 107}
                        height={item.height ?? 114}
                        src={item.image ?? Service22}
                        alt="Service Icon"
                      />
                      <h3 className="service__title-2 ">
                        {item.title}
                      </h3>
                      <p>
                        {item.description}
                      </p>
                      <ul>
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>+ {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                {serviceItems.slice(6, 9).map((item, index) => (
                  <div className="service__item-2" key={index + 6}>
                    <div>
                      <Image
                        priority
                        width={item.width ?? 112}
                        height={item.height ?? 114}
                        src={item.image ?? Service23}
                        alt="Service Icon"
                      />
                      <h3 className="service__title-2">
                        {item.title}
                      </h3>
                      <p>
                        {item.description}
                      </p>
                      <ul>
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>+ {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceElementV3;