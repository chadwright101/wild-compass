"use client";

import { useState } from "react";
import Link from "next/link";

import ContentWrapper from "@/app/_utils/content-wrapper";
import { showEmailAddress, showPhoneNumber } from "@/app/_actions/actions";
import SocialIcons from "@/app/_lib/social-icons";
import Image from "next/image";
import ContactForm from "./contact-form";

const ContactComponent = () => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showspinnerPhone, setShowSpinnerPhone] = useState(false);
  const [showspinnerEmail, setShowspinnerEmail] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowSpinnerPhone(true);
    const phoneNumber = await showPhoneNumber();
    setShowPhone(phoneNumber);
    setShowSpinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowspinnerEmail(true);
    const emailAddress = await showEmailAddress();
    setShowEmail(emailAddress);
    setShowspinnerEmail(false);
  };

  return (
    <ContentWrapper>
      <section className="mt-10">
        <h2 className="mb-8">Contact</h2>
        <div className="desktop:grid grid-cols-2 gap-x-10">
          <div className="grid tablet:grid-cols-[1fr_2fr] gap-10 desktop:grid-cols-1">
            <div className="flex flex-col gap-y-8 desktop:grid desktop:grid-cols-2">
              <div className="flex flex-col gap-8 tablet:gap-6">
                <div className="grid gap-1 phone:grid-cols-[60px_1fr]">
                  <h3 className="text-subheading">Email:</h3>
                  {showEmail === "Show email address" ? (
                    <button
                      onClick={handleShowEmailAddress}
                      className="text-paragraph py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue place-self-start -mt-4 tablet:-mt-1"
                      aria-label="Show email address"
                    >
                      {showspinnerEmail ? (
                        <>
                          <div className="spinner-grey tablet:mt-[5px]"></div>
                        </>
                      ) : (
                        showEmail
                      )}
                    </button>
                  ) : (
                    <Link
                      href={`mailto:${showEmail}`}
                      className="text-paragraph self-center tablet:hover:text-pink place-self-start text-linkBlue -mt-1"
                    >
                      {showEmail}
                    </Link>
                  )}
                </div>
                <div className="grid gap-1 justify-items-start phone:grid-cols-[60px_1fr]">
                  <h3 className="text-subheading">Phone:</h3>
                  {showPhone === "Show phone number" ? (
                    <button
                      onClick={handleShowPhoneNumber}
                      className="text-paragraph py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue place-self-start -mt-4 tablet:-mt-1"
                      aria-label="Show phone number"
                    >
                      {showspinnerPhone ? (
                        <>
                          <div className="spinner-grey mt-[5px]"></div>
                        </>
                      ) : (
                        showPhone
                      )}
                    </button>
                  ) : (
                    <Link
                      href={`tel:${showPhone}`}
                      className="text-paragraph self-center tablet:hover:text-pink place-self-start text-linkBlue -mt-1"
                    >
                      {showPhone}
                    </Link>
                  )}
                </div>
                <SocialIcons grey />
              </div>
              <div className="hidden tablet:flex gap-4 flex-col desktop:justify-self-end">
                <h4 className="normal-case">Chat to us on WhatsApp:</h4>
                <div className="w-20 h-20 desktop:ml-auto">
                  <Image
                    src="/assets/wild-compass-whatsapp-contact.png"
                    alt="Contact us on WhatsApp"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="bg-khaki -mx-7 px-7 py-10 tablet:mx-0 tablet:p-5 tablet:pb-6">
              <ContactForm />
            </div>
          </div>
          <div className="hidden desktop:block">
            <Image
              src="/assets/images/Website-Photo-3.JPG"
              alt="Wild Compass Events"
              width={1000}
              height={850}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default ContactComponent;
