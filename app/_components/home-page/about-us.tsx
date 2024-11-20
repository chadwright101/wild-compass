import ContentWrapper from "@/app/_utils/content-wrapper";
import Button from "../button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <ContentWrapper>
      <main className="py-10 my-10 border-y border-grey/25 desktop:flex gap-10">
        <div>
          <h3 className="mb-7">About us</h3>
          <p className="mb-5">
            Welcome to Wild Compass Events, your premier event equipment dry
            hire company based in the picturesque Plettenberg Bay, proudly
            servicing the entire Garden Route.
          </p>
          <p className="mb-5">
            Whether you're planning a wedding, corporate event, or a special
            celebration, we provide all the essential equipment to make your
            event unforgettable.
          </p>
          <p className="mb-5">
            Our extensive range includes elegant tables and chairs, stylish
            crockery and cutlery, glassware, dance floors, heaters, umbrellas,
            vases, and enchanting fairy lights.
          </p>
          <p className="mb-8">
            At Wild Compass Events, we are committed to helping you create the
            perfect atmosphere for your event, offering reliable and
            high-quality service every step of the way. Let us bring your vision
            to life with our top-tier equipment and exceptional attention to
            detail.
          </p>
          <Button url="/#contact">Get in touch</Button>
        </div>
        <Image
          src="/assets/placeholders/_MG_7081-HDR.jpg"
          alt="Wild Compass Events"
          width={600}
          height={400}
          className="hidden desktop:block object-cover"
        />
      </main>
    </ContentWrapper>
  );
};

export default AboutUs;
