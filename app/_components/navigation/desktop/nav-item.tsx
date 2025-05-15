// NavItem.tsx
"use client";

import classNames from "classnames";
import Link from "next/link";

interface NavItemProps {
  title: string;
  url: string;
}

const scrollIntoView = (section: string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavItem = ({ title, url }: NavItemProps) => {
  return (
    <li>
      <Link
        href={url}
        className={classNames(
          "pb-1 -mb-1 text-white text-paragraph decoration-khaki",
          {
            "pt-[3px] pb-[5px] px-[7px] border-2 border-khaki bg-khaki text-white hover:bg-grey hover:border-white ease-in-out duration-200":
              title === "Enquire Now",
            "hover:underline underline-offset-4 decoration-2":
              title !== "Enquire Now",
          }
        )}
        onClick={() => scrollIntoView(url)}
        target={title === "Enquire Now" ? "_blank" : "_self"}
        rel={title === "Enquire Now" ? "noopener noreferrer" : undefined}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
