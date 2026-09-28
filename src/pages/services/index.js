import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceHero from "@/components/hero/ServiceHero";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServicesIndex = () => {
  const services = [
    {
      title: "Retail & E-Commerce Growth Engine",
      description: "AI-powered client acquisition for online, showroom & luxury retail brands",
      image: "/public/assets/imgs/service/20/1.png",
      width: 102,
      height: 114,
      link: "/the-retail-e-commerce-growth-engine"
    },
    {
      title: "Ultimate Industry-Product Solutions Matrix",
      description: "Complete blueprint matching sub-niches with core products, sales wedges, SaaS engines, and marketing automation",
      image: "/public/assets/imgs/service/10/1.png",
      width: 102,
      height: 114,
      link: "/ultimate-industry-product-solutions-matrix"
    },
    {
      title: "Food, Hospitality & Travel Growth Engine",
      description: "System that brings customers and repeat business back to you directly from third-party aggregators",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/the-food-hospitality-travel-growth-engine"
    },
    {
      title: "Education, Creative & Entertainment Growth Engine",
      description: "System that never misses enrollment, sponsorship, and trial class follow-up moments",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/the-education-creative-entertainment-growth-engine"
    },
    {
      title: "HR Management Software",
      description: "AI-powered system for recruitment, onboarding, performance management, and employee retention",
      image: "/public/assets/imgs/service/3/1.png",
      width: 102,
      height: 114,
      link: "/hr-management-software"
    },
    {
      title: "Healthcare, Wellness & Pet Care Growth Engine",
      description: "24/7 system that answers first to prevent losing patients to competitors",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/the-healthcare-wellness-pet-care-growth-engine"
    },
    {
      title: "Events & Entertainment Growth Engine",
      description: "Fix for last-minute ticket sales spikes and repetitive pricing conversations",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/the-events-entertainment-growth-engine"
    },
    {
      title: "Complete Laundry Management Software",
      description: "End-to-end solution for laundry businesses including route optimization and customer management",
      image: "/public/assets/imgs/service/4/1.png",
      width: 102,
      height: 114,
      link: "/complete-laundry-management-software"
    },
    {
      title: "Cloud Billing Software",
      description: "Automated invoicing, payment processing, and subscription management for cloud services",
      image: "/public/assets/imgs/service/5/1.png",
      width: 102,
      height: 114,
      link: "/cloud-billing-software"
    },
    {
      title: "B2B, Industrial, Legal & Hyper-Local Distribution",
      description: "AI-powered client acquisition combining long-cycle pipeline management with instant local response",
      image: "/public/assets/imgs/service/2/1.png",
      width: 107,
      height: 114,
      link: "/b2b-industrial-legal-hyper-local-distribution"
    },
    {
      title: "Local Services & Real Estate Growth Engine",
      description: "Google Maps optimization, WhatsApp bots, AI tour scheduling, and marketing automation for local leads",
      image: "/public/assets/imgs/service/20/1.png",
      width: 102,
      height: 114,
      link: "/the-local-services-real-estate-growth-engine"
    },
    {
      title: "B2B Industrial Hyper-Local Growth Engine",
      description: "LinkedIn outreach, virtual showrooms, AI bots, and marketing automation for ticket sales and sponsorships",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/the-b2b-industrial-hyper-local-growth-engine"
    },
    {
      title: "Restaurant Management Software",
      description: "Complete POS, inventory, table management, and customer relationship management for restaurants",
      image: "/public/assets/imgs/service/4/1.png",
      width: 102,
      height: 114,
      link: "/restaurant-management-software"
    },
    {
      title: "Retail Billing Software",
      description: "Automated billing, inventory tracking, and customer management for retail businesses",
      image: "/public/assets/imgs/service/2/1.png",
      width: 107,
      height: 114,
      link: "/retail-billing-software"
    },
    {
      title: "Healthcare Wellness Pet Care",
      description: "Patient management, appointment scheduling, and billing for healthcare and veterinary practices",
      image: "/public/assets/imgs/service/2/1.png",
      width: 107,
      height: 114,
      link: "/healthcare-wellness-pet-care"
    },
    {
      title: "Industries We Grow",
      description: "Overview of industries served and our tailored growth solutions for each sector",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/industries-we-grow"
    },
    {
      title: "Local Services Real Estate",
      description: "Property management, tenant acquisition, and maintenance tracking for real estate professionals",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/local-services-real-estate"
    },
    {
      title: "Food Hospitality Travel",
      description: "Reservation management, menu engineering, and guest experience optimization for hospitality businesses",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/food-hospitality-travel"
    },
    {
      title: "Events Entertainment Media",
      description: "Ticket sales, event promotion, attendee management, and media production for event organizers",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/events-entertainment-media"
    },
    {
      title: "Education Creative Entertainment",
      description: "Enrollment management, curriculum delivery, and student engagement for educational institutions",
      image: "/public/assets/imgs/service/1/1.jpg",
      width: 102,
      height: 114,
      link: "/education-creative-entertainment"
    }
  ];

  return (
    <>
      <Head>
        <title>Explore Our Services | Strategic Growth Advisors</title>
        <meta name="description" value="Explore our comprehensive range of services designed to grow your business across industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceHero />
          <div className="container">
            <div className="row pt-140">
              <div className="col-xxl-12">
                <h2 className="sec-title title-anim">Explore Our Services</h2>
                <p className="mb-50">
                  Discover how our specialized growth engines drive results across every industry. From healthcare to hospitality, we tailor our proven systems to your unique challenges.
                </p>
                <div className="row">
                  {services.map((service, index) => (
                    <div key={index} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                      <div className="service__item-2">
                        <div>
                          <img src={service.image} alt={service.title} width={service.width} height={service.height} />
                          <h3 className="service__title-2">{service.title}</h3>
                          <p>{service.description}</p>
                          <a href={service.link} className="btn btn-sm btn-primary mt-20">Learn More</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServicesIndex;