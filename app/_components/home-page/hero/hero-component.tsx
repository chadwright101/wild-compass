import HeroSlider from "@/app/_components/home-page/hero/hero-slider";

import data from "@/app/_data/general-data.json";
import Button from "../../button";
import ContentWrapper from "@/app/_utils/content-wrapper";

const { heroSlider } = data;

const HeroComponent = () => {
  return (
    <section className="relative max-w-[1280px] mx-auto">
      <div className="overflow-hidden mb-10 tablet:mb-0">
        <HeroSlider
          data={heroSlider}
          cssClasses="h-[500px] tablet:h-[550px] desktop:h-[600px]"
        />
      </div>
      <ContentWrapper>
        <section className="grid gap-8 tablet:w-[365px] tablet:bg-white/[92%] z-10 tablet:gap-5 tablet:px-15 tablet:py-5 tablet:absolute tablet:top-[283px] tablet:-translate-x-10">
          <div className="grid gap-2">
            <h2 className="leading-[30px]">
              Welcome to{" "}
              <span className="font-semibold">Wild Compass Events</span>
            </h2>
            <h3 className="text-paragraph italic normal-case">
              An event hire company servicing the Garden Route, South Africa.
            </h3>
          </div>
          <Button
            url="/assets/catalogues/catalogue-2025-wild-compass-events.pdf"
            target="_blank"
          >
            View Catalogue
          </Button>
        </section>
      </ContentWrapper>
    </section>
  );
};

export default HeroComponent;
