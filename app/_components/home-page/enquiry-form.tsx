import ContentWrapper from "@/app/_utils/content-wrapper";
import Button from "../button";

const EnquiryForm = () => {
  return (
    <section className="bg-grey py-8">
      <ContentWrapper cssClasses="grid gap-8 min-[1100px]:grid-cols-2">
        <div className="grid gap-5 justify-items-center min-[1100px]:justify-items-start min-[1100px]:gap-1">
          <p className="text-white text-[1.25rem] leading-[27px] tracking-[0.025rem] uppercase min-[1100px]:font-raleway min-[1100px]:text-[2.25rem] min-[1100px]:leading-normal min-[1100px]:tracking-normal min-[1100px]:normal-case min-[1100px]:text-left">
            Already know what you need?
          </p>
          <p className="text-white min-[1100px]:text-left">
            Fill out our enquiry form and let’s get the ball rolling...
          </p>
        </div>
        <Button
          url="#"
          backgroundColor="grey"
          cssClasses="min-[1100px]:my-auto"
        >
          Enquiry Form
        </Button>
      </ContentWrapper>
    </section>
  );
};

export default EnquiryForm;
