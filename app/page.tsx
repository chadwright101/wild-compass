import AboutUs from "./_components/home-page/about-us";
import EnquiryForm from "./_components/home-page/enquiry-form";
import HeroComponent from "./_components/home-page/hero/hero-component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <AboutUs />
      <EnquiryForm />
    </div>
  );
}
