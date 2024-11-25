import AboutUs from "./_components/home-page/about-us";
import ContactComponent from "./_components/home-page/contact/contact-component";
import EnquiryForm from "./_components/home-page/enquiry-form";
import GallerySlider from "./_components/home-page/gallery/gallery";
import HeroComponent from "./_components/home-page/hero/hero-component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <div className="-translate-y-10" id="about"></div>
      <AboutUs />
      <EnquiryForm />
      <div
        className="-translate-y-16 tablet:-translate-y-20"
        id="gallery"
      ></div>
      <GallerySlider />
      <div className="-translate-y-20" id="contact"></div>
      <ContactComponent />
    </div>
  );
}
