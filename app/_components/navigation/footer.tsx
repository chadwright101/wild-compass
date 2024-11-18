import Image from "next/image";
import Link from "next/link";

import navData from "@/app/_data/nav-data.json";

const Footer = () => {
  return (
    <footer className="px-5 pt-6 pb-8 border-t-4 border-purple tablet:px-15 tablet:pt-10 tablet:pb-5">
      <div className="max-w-[1280px] mx-auto grid gap-5 tablet:grid-cols-2 tablet:gap-y-2">
        <ul className="hidden tablet:block list-none pl-0">
          {navData.map(({ title, url }, index) => (
            <li
              key={index}
              className={index !== navData.length - 1 ? "mb-0.5" : ""}
            >
              <Link
                href={url}
                className="text-paragraph hover:underline underline-offset-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid gap-5 tablet:place-items-end">
          <ul className="list-none pl-0 flex flex-wrap gap-4 justify-around items-center phone:justify-center phone:gap-8 tablet:gap-5">
            <li>
              <Link href="/" target="_blank">
                <Image
                  src="/assets/real-brides-logo-black.png"
                  alt="Real Brides logo"
                  width={60}
                  height={60}
                  className="drop-shadow-none tablet:hover:opacity-80 ease-in-out duration-200"
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.neonproductions.co.za/" target="_blank">
                <Image
                  src="/assets/images/vendors/neon-productions-logo.jpg"
                  alt="Neon Productions logo"
                  width={60}
                  height={60}
                  className="w-[60px] h-auto drop-shadow-none tablet:hover:opacity-80 ease-in-out duration-200"
                />
              </Link>
            </li>
            <li>
              <Link href="https://pink-book.co.za/" target="_blank">
                <Image
                  src="/assets/images/vendors/pink-book-logo.png"
                  alt="Pink Book logo"
                  width={60}
                  height={60}
                  className="drop-shadow-none tablet:hover:opacity-80 ease-in-out duration-200"
                />
              </Link>
            </li>
            <li>
              <Link href="https://sellmyweddingdress.co.za/" target="_blank">
                <Image
                  src="/assets/images/vendors/sell-my-dress-logo.png"
                  alt="Sell My Dress logo"
                  width={60}
                  height={60}
                  className="w-[60px] h-auto drop-shadow-none tablet:hover:opacity-80 ease-in-out duration-200"
                />
              </Link>
            </li>
          </ul>
          <h4 className="hidden normal-case text-paragraph font-light text-right tablet:grid">
            Designed & developed by{" "}
            <Link
              href="https://thewrightdesigns.co.za"
              className=" text-paragraph text-link ml-auto tablet:hover:underline underline-offset-2"
            >
              The Wright Designs
            </Link>
          </h4>
        </div>
        <h3 className="normal-case text-paragraph grid text-center mx-auto font-light tablet:col-span-2 tablet:block">
          © 2024 Real Brides{" "}
          <Link
            href="/"
            className=" text-paragraph text-link p-2 -m-2 tablet:hover:underline underline-offset-2 tablet:p-0 tablet:m-0"
          >
            www.realbrides.co.za
          </Link>
        </h3>
        <h4 className="normal-case text-paragraph grid text-center font-light mx-auto tablet:hidden">
          Designed & developed by{" "}
          <Link
            href="https://thewrightdesigns.co.za"
            className=" text-paragraph text-link p-2 -m-2"
          >
            The Wright Designs
          </Link>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
