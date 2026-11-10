import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1.jpg";
import Service12 from "../../../public/assets/imgs/service/2.jpg";
import Service13 from "../../../public/assets/imgs/service/3.jpg";
import Service14 from "../../../public/assets/imgs/service/4.jpg";
import Service15 from "../../../public/assets/imgs/service/5.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
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
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <Link href="/services/healthcare-wellness-pet-care">
                        Healthcare, Wellness & Pet Care <br />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/retail-billing-software">
                        Retail Billing Software <br />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/b2b-industrial-legal-hyper-local-distribution">
                        B2B, Industrial, Legal & Hyper-Local Distribution <br />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/hr-management-software">
                        HR Management Software <br />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/restaurant-management-software">
                        Restaurant Management Software <br />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/the-retail-e-commerce-growth-engine">
                        Retail & E-Commerce <br />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mid-content"><div className="service__image-wrap">
                  <div className="service__image">
                    <Image
                      priority
                      width={800} height={600}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      width={800} height={600}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      width={800} height={600}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      width={800} height={600}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      width={800} height={600}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      width={800} height={600}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                </div></div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          width={800} height={600}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          User paths or user flows functional models
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/healthcare-wellness-pet-care"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          width={800} height={600}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Web & Mobile Development
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/retail-billing-software"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          width={800} height={600}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          UMotion & Branding Design
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/b2b-industrial-legal-hyper-local-distribution"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          width={800} height={600}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          User paths or user flows functional models
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/hr-management-software"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          width={800} height={600}
                          src={Service15}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          User paths or user flows functional models
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/restaurant-management-software"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          width={800} height={600}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Illustrations & Prototype
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/the-retail-e-commerce-growth-engine"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
