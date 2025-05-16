import Image from "next/image";
import Link from "next/link";

import navData from "@/app/_data/nav-data.json";
import SocialIcons from "@/app/_lib/social-icons";

const Footer = () => {
  return (
    <footer className="pt-7 pb-8 mt-10 border-t border-white bg-grey tablet:pt-10 tablet:pb-5">
      <div className="px-7 max-w-[1280px] mx-auto grid gap-5 tablet:grid-cols-2 tablet:gap-y-2 tablet:px-10">
        <ul className="hidden tablet:block list-none pl-0">
          {navData.map(({ title, url }, index) => (
            <li
              key={index}
              className="text-white text-[14px] tracking-[0.0175rem]"
            >
              <Link
                href={url}
                className="text-paragraph hover:underline underline-offset-2"
              >
                {title}
              </Link>
            </li>
          ))}
          <SocialIcons small cssClasses="hidden tablet:flex mt-2" />
        </ul>
        <div className="grid gap-5 place-content-center tablet:justify-items-end tablet:place-content-stretch tablet:place-items-start tablet:gap-0">
          <SocialIcons cssClasses="mx-auto tablet:hidden" />
          <Image
            src="/assets/wild-compass-logo.png"
            alt="Wild Compass Events Logo"
            width={60}
            height={66}
            className="hidden tablet:block"
          />
          <h4 className="hidden text-white text-paragraph font-light normal-case text-right tablet:grid">
            Designed & developed by{" "}
            <Link
              href="https://thewrightdesigns.co.za"
              className=" text-paragraph text-link ml-auto underline underline-offset-4 tablet:hover:text-khaki ease-in-out duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Wright Designs"
            >
              The Wright Designs
            </Link>
          </h4>
        </div>
        <h3 className="hidden tablet:block col-span-2 text-white text-paragraph gap-2 text-center mx-auto normal-case ">
          © 2024 Wild Compass Events |{" "}
          <Link
            href="/"
            className="text-white text-paragraph text-link p-2 -m-2 underline underline-offset-4 tablet:p-0 tablet:m-0 tablet:hover:text-khaki ease-in-out duration-200"
          >
            www.wildcompassevents.co.za
          </Link>
        </h3>
        <h3 className="text-white text-paragraph grid text-center normal-case mx-auto tablet:hidden">
          © Wild Compass Events{" "}
          <Link
            href="/"
            className="text-white text-paragraph text-link p-2 -m-2 underline underline-offset-4 tablet:p-0 tablet:m-0 tablet:hover:text-khaki ease-in-out duration-200"
          >
            www.wildcompassevents.co.za
          </Link>
        </h3>
        <Image
          src="/assets/wild-compass-logo.png"
          alt="Wild Compass Events Logo"
          width={80}
          height={88}
          className="mx-auto tablet:hidden"
        />
        <h4 className="text-white text-paragraph text-center font-light mx-auto flex flex-wrap justify-center gap-x-1 normal-case tablet:hidden">
          Designed & developed by{" "}
          <Link
            href="https://thewrightdesigns.co.za"
            className="text-paragraph text-link p-2 -m-2 underline underline-offset-4 tablet:hover:text-khaki ease-in-out duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Wright Designs"
          >
            The Wright Designs
          </Link>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
