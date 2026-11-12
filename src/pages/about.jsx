import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import AboutHowWeWork from "@/components/about/AboutHowWeWork";
import AboutTestimonial from "@/components/testimonial/AboutTestimonial";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Regularhub | Growth Engines, Software & Security</title>
        <meta name="description" content="Regularhub Private Limited, Kolkata: the team that engineers growth systems, operations software and brand security for growing businesses." />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <AboutHero />
          <AboutStory />
          <AboutCounter />
          <AboutHowWeWork />
          <DigitalAgencyBrand />
          <AboutTestimonial />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
