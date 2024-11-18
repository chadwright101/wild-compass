import Image from "next/image";
import Link from "next/link";

import navData from "@/app/_data/nav-data.json";
import NavItem from "./nav-item";

interface Props {
  cssClasses?: string;
}

const DesktopHeader = ({ cssClasses }: Props) => {
  return (
    <div
      className={`py-5 px-[52px] max-w-[1280px] mx-auto justify-between w-full items-end ${cssClasses}`}
    >
      <Link
        href="/"
        className="w-[200px] flex gap-5 items-center tablet:hover:opacity-90 ease-in-out duration-200"
      >
        <Image
          src="/assets/wild-compass-logo-no-text.png"
          alt="Real Brides logo"
          width={52}
          height={53}
          className="drop-shadow-none hover:opacity-80 ease-in-out duration-200"
          priority
        />
        <h1 className="text-white font-afacad font-semibold text-[24px] tracking-[0.03rem] leading-[18px] uppercase">
          Wild Compass Events
        </h1>
      </Link>
      <nav>
        <ul className="flex list-none items-center gap-4 z-10">
          {navData.map(({ title, url }, index) => (
            <NavItem key={index} title={title} url={url} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopHeader;
