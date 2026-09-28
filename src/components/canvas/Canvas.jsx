import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";

const services = [
  { nav_name: "Healthcare, Wellness & Pet Care ", link: "/services/healthcare-wellness-pet-care" },
  { nav_name: "Food, Hospitality & Travel ", link: "/services/the-food-hospitality-travel-growth-engine" },
  { nav_name: "Education, Creative & Entertainment", link: "/services/the-education-creative-entertainment-growth-engine" },
  { nav_name: "Retail & E-Commerce", link: "/services/the-retail-e-commerce-growth-engine" },
  { nav_name: "B2B, Industrial, Legal & Hyper-Local Distribution", link: "/services/b2b-industrial-legal-hyper-local-distribution" },
  { nav_name: "Local Services & Real Estate", link: "/services/the-local-services-real-estate-growth-engine" },
  { nav_name: "Events & Entertainment", link: "/services/the-events-entertainment-growth-engine" },
  { nav_name: "HR Management Software", link: "/services/hr-management-software" },
  { nav_name: "Laundry Management Software", link: "/services/laundry-management-software" },
  { nav_name: "Cloud Billing Software", link: "/services/cloud-billing-software" },
  { nav_name: "Restaurant Management Software", link: "/services/restaurant-management-software" },
  { nav_name: "Retail Billing Software", link: "/services/retail-billing-software" }
];

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let rootParent = headerTitle.current.children;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className.includes("header_title")) {
              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] == " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);
  
  const openData = (data) => {
    setAccordion(data);
  };
  
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  
  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href="/digital-marketing">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={logoWhite2}
                  alt="Offcanvas Logo"
                />
              </Link>
            </div>
            <div className="offcanvas__social">
              <h3 className="social-title">Follow Us</h3>
              <ul>
                <li>
                  <a href="#">Dribbble</a>
                </li>
                <li>
                  <a href="#">Behance</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="offcanvas__links">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <Link href="/career">Career</Link>
                </li>
                <li>
                  <Link href="/blog">blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                  <li>
                    <div className="header_title">
                      <Link href="/digital-marketing">Home</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href="/service">Services</Link>
                      <div className="accordian-btn">
                        {accordion === 1 ? (
                          <a onClick={() => openData(0)}>-</a>
                        ) : (
                          <a onClick={() => openData(1)}>+</a>
                        )}
                      </div>
                    </div>
                    <ul
                      className="sub_title"
                      style={
                        accordion === 1 ? { display: "" } : { display: "none" }
                      }
                    >
                      {services.map((service, index) => (
                        <li key={index}>
                          <Link href={service.link}>{service.nav_name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href="/about">About</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href="/contact">Contact</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;