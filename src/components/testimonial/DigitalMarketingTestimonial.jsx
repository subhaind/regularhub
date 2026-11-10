import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial31 from "../../../public/assets/imgs/testimonial/3/1.png";
import Testimonial32 from "../../../public/assets/imgs/testimonial/3/2.png";
import Testimonial33 from "../../../public/assets/imgs/testimonial/3/3.png";
import Testimonial34 from "../../../public/assets/imgs/testimonial/3/4.png";
import Testimonial35 from "../../../public/assets/imgs/testimonial/3/5.png";
import Testimonial36 from "../../../public/assets/imgs/testimonial/3/6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingTestimonial = () => {
  const testimonialArea = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

        gsap.to(".animation_image_zoom img", {
          scrollTrigger: {
            trigger: ".testimonial__area-3",
            start: "top center+=200",
            markers: false,
          },
          opacity: 1,
          scale: 1,
          x: 20,
          ease: "power2.out",
          duration: 2.5,
          stagger: {
            each: 0.3,
          },
        });
        function imageMoving(wrapper, image_list) {
          let container = wrapper;
          try {
            if (container) {
              container.addEventListener("mousemove", (e) => {
                var x = e.clientX;
                var y = e.clientY;
                let viewportWidth = window.innerWidth;
                let viewportHeight = window.innerHeight;
                let center = viewportWidth / 2;
                let centerHeight = innerHeight / 2;

                if (x > center) {
                  gsap.to(image_list, {
                    x: 15,
                    duration: 5,
                    ease: "power4.out",
                  });
                } else {
                  gsap.to(image_list, {
                    x: -15,
                    duration: 5,
                    ease: "power4.out",
                  });
                }
                if (y > centerHeight) {
                  gsap.to(image_list, {
                    y: 15,
                    duration: 5,
                    ease: "power4.out",
                  });
                } else {
                  gsap.to(image_list, {
                    y: -15,
                    duration: 5,
                    ease: "power4.out",
                  });
                }
              });
            }
          } catch (err) {
            console.log(err);
          }
        }
        imageMoving(testimonialArea.current, ".testimonial__area-3 img");
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="testimonial__area-3" ref={testimonialArea}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div>
                <Swiper
                  modules={[Navigation, FreeMode]}
                  spaceBetween={0}
                  slidesPerView={1}
                  freeMode={true}
                  loop={true}
                  speed={2000}
                  navigation={{
                    prevEl: ".prev-button",
                    nextEl: ".next-button",
                  }}
                  className="testimonial__slider-3"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          Strategic Growth Advisors has been instrumental in helping us
                          achieve our growth objectives. Their team provides expert
                          guidance and strategic insights that have made a significant
                          impact on our business performance.
                        </p>
                        <h2 className="client__name-3">Sumandeep Sarkar</h2>
                        <h3 className="client__role-3">CEO, TechStartup Inc.</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          Working with Strategic Growth Advisors transformed our
                          approach to business growth. Their strategic planning and
              execution expertise helped us achieve results we never thought possible.
                        </p>
                        <h2 className="client__name-3">Kartin K</h2>
                        <h3 className="client__role-3">Operations Director</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          Strategic Growth Advisors provided the guidance and
              framework we needed to scale our business successfully. Their
              7+ years of industry expertise is evident in every interaction.
                        </p>
                        <h2 className="client__name-3">Raghunath Chen</h2>
                        <h3 className="client__role-3">Founder & CEO</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          The strategic insights from Strategic Growth Advisors
              helped us navigate complex market challenges and identify
              new growth opportunities. Truly a valuable partner in our success.
                        </p>
                        <h2 className="client__name-3">Radhika Sarma</h2>
                        <h3 className="client__role-3">VP of Strategy</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          Thanks to Strategic Growth Advisors, we&apos;ve seen
              measurable improvement in our key performance indicators and
              overall business growth. Their expertise is unmatched in the industry.
                        </p>
                        <h2 className="client__name-3">Somik Boumik</h2>
                        <h3 className="client__role-3">Business Owner</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          Strategic Growth Advisors delivered exactly what we needed
              - a clear, actionable growth strategy that aligned with our
              business goals and resources. Their team is professional,
              knowledgeable, and results-driven.
                        </p>
                        <h2 className="client__name-3">Ankur Parek</h2>
                        <h3 className="client__role-3">Director of Growth</h3>
                      </div>
                    </SwiperSlide>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__images-3 animation_image_zoom">
          <Image
            priority
            width={170}
            height={200}
            src={Testimonial31}
            alt="testimonial Image"
            className="testimonial3__img"
          />
          <Image
            priority
            width={90}
            height={100}
            src={Testimonial32}
            alt="testimonial Image"
            className="testimonial3__img-2"
          />
          <Image
            priority
            width={110}
            height={130}
            src={Testimonial33}
            alt="testimonial Image"
            className="testimonial3__img-3"
          />
          <Image
            priority
            width={330}
            height={430}
            src={Testimonial34}
            alt="testimonial Image"
            className="testimonial3__img-4"
          />
          <Image
            priority
            width={245}
            height={278}
            src={Testimonial35}
            alt="testimonial Image"
            className="testimonial3__img-5"
          />
          <Image
            priority
            width={140}
            height={160}
            src={Testimonial36}
            alt="testimonial Image"
            className="testimonial3__img-6"
          />
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingTestimonial;
