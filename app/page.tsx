import AboutUs from "./_components/home-page/about-us";
import EnquiryForm from "./_components/home-page/enquiry-form";
import GallerySlider from "./_components/home-page/gallery";
import HeroComponent from "./_components/home-page/hero/hero-component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <div className="-translate-y-10" id="about"></div>
      <AboutUs />
      <EnquiryForm />
      <GallerySlider />
    </div>
  );
}
