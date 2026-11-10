import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

const DigitalMarketingService = () => {
  const serviceList = useRef();
  const smootherRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      imageAnimation(serviceList.current.children);
      
      // Initialize ScrollSmoother for smooth scrolling
      smootherRef.current = ScrollSmoother.create({
        smooth: 1.5,
        effects: window.innerWidth > 1024 ? true : false,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });

      // Cleanup
      return () => {
        tHero.revert();
        if (smootherRef.current) smootherRef.current.kill();
      };
    }
  }, []);

  const imageAnimation = (data) => {
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("mousemove", (event) => {
        clearInterval(data[i]._followInterval);
        data[i]._followInterval = setInterval(
          () => followImageCursor(event, data[i]),
          16
        );
      });
      
      data[i].addEventListener("mouseleave", () => {
        clearInterval(data[i]._followInterval);
        data[i].children[3].style.transform = "translate(0px, 0px)";
      });
    }
  };

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Our Growth Solutions</h2>
                <h3 className="sec-title title-anim">
                  Strategic Growth Advisors Services
                </h3>
                <p>
                  Strategic Growth Advisors company with over 7 years in this industry.
                  We provide expert strategic consulting and growth solutions to help
                  businesses thrive and achieve their full potential.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
                {/* Service Item 1: Strategic Planning & Consulting */}
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/services/the-b2b-industrial-hyper-local-growth-engine" className="service__title-3">
                      Strategic Planning<br />& Consulting
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Expert strategic planning and consulting services to help
                      businesses define their vision, set achievable goals, and
                      create roadmaps for sustainable growth.
                    </p>
                    <ul className="">
                      <li>+ Vision Development</li>
                      <li>+ Goal Setting Framework</li>
                      <li>+ Roadmap Creation</li>
                      <li>+ KPI Definition</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/services/b2b-industrial-legal-hyper-local-distribution"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(/assets/imgs/service/3/1.png)",
                    }}
                  ></div>
                </div>

                {/* Service Item 2: Performance Improvement */}
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/services/the-retail-e-commerce-growth-engine" className="service__title-3">
                      Performance<br />Improvement
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Performance improvement services focused on identifying
                      inefficiencies, optimizing operations, and enhancing
                      overall business effectiveness for measurable growth results.
                    </p>
                    <ul className="">
                      <li>+ Process Optimization</li>
                      <li>+ Efficiency Audits</li>
                      <li>+ Performance Metrics</li>
                      <li>+ Continuous Improvement</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/services/the-retail-e-commerce-growth-engine"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(/assets/imgs/service/3/2.png)",
                    }}
                  ></div>
                </div>

                {/* Service Item 3: Market Entry & Expansion */}
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/services/the-local-services-real-estate-growth-engine" className="service__title-3">
                      Market Entry<br />& Expansion
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Market entry and expansion strategies to help businesses
                      successfully enter new markets, expand their reach, and
                      capture new growth opportunities domestically and internationally.
                    </p>
                    <ul className="">
                      <li>+ Market Research</li>
                      <li>+ Entry Strategy</li>
                      <li>+ Localization Planning</li>
                      <li>+ Partnership Development</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/services/the-local-services-real-estate-growth-engine"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(/assets/imgs/service/3/3.png)",
                    }}
                  ></div>
                </div>

                {/* Service Item 4: Growth Strategy Development */}
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/services/ultimate-industry-product-solutions-matrix" className="service__title-3">
                      Growth Strategy<br />Development
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Custom growth strategy development tailored to each business&apos;s
                      unique position, resources, and market conditions to achieve
                      sustainable, profitable growth over the short and long term.
                    </p>
                    <ul className="">
                      <li>+ Growth Planning</li>
                      <li>+ Resource Optimization</li>
                      <li>+ Scalability Planning</li>
                      <li>+ Risk Management</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/services/ultimate-industry-product-solutions-matrix"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(/assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>

                {/* Service Item 5: Email Marketing */}
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/service-details" className="service__title-3">
                      Email<br />Marketing
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      We help brands stand out through awesome, elegant visual
                      design. Our design philosophy focuses on creating memorable
                      brand identities that resonate with target audiences.
                    </p>
                    <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(/assets/imgs/service/3/2.png)",
                    }}
                  ></div>
                </div>

                {/* Service Item 6: Technology Solutions */}
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/services/cloud-billing-software" className="service__title-3">
                      Technology<br />Solutions
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Comprehensive technology solutions including cloud infrastructure,
                      billing software, and digital transformation services to help
                      businesses leverage technology for growth and efficiency.
                    </p>
                    <ul className="">
                      <li>+ Cloud Migration</li>
                      <li>+ Billing Automation</li>
                      <li>+ Digital Transformation</li>
                      <li>+ Technology Consulting</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/services/cloud-billing-software"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(/assets/imgs/service/3/5.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;