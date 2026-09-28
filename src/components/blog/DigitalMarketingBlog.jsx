import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Blog31 from "../../../public/assets/imgs/blog/3/1.jpg";
import Blog32 from "../../../public/assets/imgs/blog/3/2.jpg";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingBlog = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item-3");
          blogList.forEach((item, i) => {
            gsap.from(item, {
              x: 50,
              opacity: 0,
              duration: 1,
              delay: i * 0.2,
              ease: "power3.out",
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item-3", {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="blog__area-3 pb-140 blog__animation">
        <div className="container">
          <div className="row ">
            <div className="col-xl-12">
              <div className="sec-title-wrapper text-anim pt-130">
                <h2 className="sec-sub-title">Strategic Insights</h2>
                <h3 className="sec-title title-anim">
                  Growth Strategies<br />& Business Insights
                </h3>
                <p>
                  Stay updated with the latest strategic growth insights, proven methodologies,
                  and expert advice to help your business thrive and achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog31}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog31}
                        alt="Blog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                  <h4 className="blog__meta">
                    <Link href="/category">Growth Strategy</Link> . January 15, 2026
                  </h4>
                  <h5>
                    <Link href="/blog-details" className="blog__title-3">
                      5 Proven Strategies for Sustainable Business Growth in 2026
                    </Link>
                  </h5>
                  <Link href="/blog-details" className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </article>
            </div>
            <div className="col-xl-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog32}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog32}
                        alt="Blog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                  <h4 className="blog__meta">
                    <Link href="/category">Market Analysis</Link> . February 1, 2026
                  </h4>
                  <h5>
                    <Link href="/blog-details" className="blog__title-3">
                      How to Conduct Effective Market Analysis for Business Growth
                    </Link>
                  </h5>
                  <Link href="/blog-details" className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingBlog;
