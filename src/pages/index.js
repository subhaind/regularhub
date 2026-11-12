import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DigitalMarketingBrand from "@/components/brand/DigitalMarketingBrand";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import DigitalMarketingProtfolio from "@/components/portfolio/DigitalMarketingProtfolio";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingPrice from "@/components/price/DigitalMarketingPrice";

export default function Home() {
  return (
    <div>
      {/* Title, description, canonical, Open Graph and JSON-LD come from <SiteSeo> in _app.js. */}
      <main>
        <RootLayout header="header1" footer="footer1">
          <DigitalMarketingHero />
          <DigitalMarketingBrand />
          <DigitalMarketingAbout />
          <DigitalMarketingService />
          <DigitalMarketingProtfolio />
          <DigitalMarketingTestimonial />
          <DigitalMarketingWorkflow />
          <DigitalMarketingPrice />        </RootLayout>
      </main>
    </div>
  );
}
