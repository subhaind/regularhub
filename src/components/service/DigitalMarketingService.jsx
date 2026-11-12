import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

// Homepage service cards. Titles, bullets and links mirror the service pages they point to.
const homeServices = [
  {
    title: ["Growth", "Engines"],
    href: "/services#cat-growth",
    body: "Done-for-you client acquisition systems, tuned to how your industry converts, then operated and optimised after launch.",
    points: ["Acquisition funnels", "AI qualification & booking bots", "WhatsApp, email & SMS automation", "Reviews & local visibility"],
    image: "/assets/imgs/service/3/1.png",
  },
  {
    title: ["Clinics &", "Healthcare"],
    href: "/services/healthcare-wellness-pet-care",
    body: "Patients book whoever answers first. Dental, ortho and aesthetic clinics answer every enquiry, day or night, and close the review gap.",
    points: ["AI triage & booking bot", "Reputation engine", "Follow-up on every consult", "Routes anything clinical to your doctors"],
    image: "/assets/imgs/service/3/2.png",
  },
  {
    title: ["Coaching &", "Education"],
    href: "/services/the-education-creative-entertainment-growth-engine",
    body: "Enrolments are lost to slow follow-up, not to competitors. Coaching centres and institutes reply first and follow up every lead.",
    points: ["AI booking & voice agents", "Demo-class booking", "Parent follow-up on WhatsApp", "Consent-first onboarding for minors"],
    image: "/assets/imgs/service/3/3.png",
  },
  {
    title: ["Real Estate &", "Local Services"],
    href: "/services/the-local-services-real-estate-growth-engine",
    body: "The job goes to whoever picks up first. Agents, brokers and local trades keep every call and enquiry in the pipeline.",
    points: ["Missed-call text-back", "AI response & qualification", "Viewing & inspection booking", "Automated review requests"],
    image: "/assets/imgs/service/3/4.png",
  },
  {
    title: ["Operations", "Software"],
    href: "/services#cat-software",
    body: "Billing, inventory, people and front-of-house on one system per business. GST-ready, on the hardware you already own.",
    points: ["Retail & cloud billing", "Restaurant & kitchen", "Hotel, gym & laundry", "HR & payroll"],
    image: "/assets/imgs/service/3/2.png",
  },
  {
    title: ["Brand &", "Security"],
    href: "/services/brand-reputation-cybersecurity",
    body: "Reputation and security are one risk, so we run them as one practice, for individuals and organisations.",
    points: ["Reputation audits & monitoring", "Search reputation management", "Crisis response", "Cybersecurity assessments"],
    image: "/assets/imgs/service/3/5.jpg",
  },
];

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
                <h2 className="sec-sub-title title-anim">What we build and run</h2>
                <h3 className="sec-title title-anim">
                  Three practices, one team
                </h3>
                <p>
                  Growth engines that win the enquiry, software that runs the business behind it,
                  and the reputation and security work that protects both. Start with the practice
                  you need, or the industry we already build for.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
                {homeServices.map((item) => (
                  <div key={item.href} className="service__item-3 service_animation">
                    <h3>
                      <Link href={item.href} className="service__title-3">
                        {item.title[0]}
                        <br />
                        {item.title[1]}
                      </Link>
                    </h3>
                    <div className="service__content-3">
                      <p>{item.body}</p>
                      <ul className="">
                        {item.points.map((point) => (
                          <li key={point}>+ {point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service__btn-3">
                      <div className="btn_wrapper">
                        <Link href={item.href} className="wc-btn-black btn-hover btn-item">
                          <span></span> Details
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="service__hover-3"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
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

export default DigitalMarketingService;