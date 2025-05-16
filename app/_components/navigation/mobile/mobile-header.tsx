"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import classNames from "classnames";

import navData from "@/app/_data/nav-data.json";

interface Props {
  cssClasses?: string;
}

const MobileHeader = ({ cssClasses }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <>
      <div
        className={`pl-3 pr-7 py-3 flex justify-between items-center min-[340px]:grid grid-cols-[50px_1fr_50px] gap-4 ${cssClasses}`}
      >
        <button
          className="p-3 -mr-3 z-40"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <Image
            src={
              !showMenu
                ? "/assets/icons/menu-icon.svg"
                : "/assets/icons/close-icon.svg"
            }
            alt="Menu icon"
            width={44}
            height={44}
            priority
          />
        </button>
        <h1 className="hidden min-[340px]:block text-white font-afacad font-semibold text-[20px] text-center tracking-[0.025rem] leading-[18px] uppercase z-40">
          Wild Compass Events
        </h1>
        <Link href="/" className="justify-self-end z-40">
          <Image
            src="/assets/wild-compass-logo-no-text.png"
            alt="Wild Compass Logo"
            width={41}
            height={42}
            priority
          />
        </Link>
      </div>
      <nav
        className={classNames(
          `fixed top-0 w-full h-screen bg-grey/[97%] z-30 pt-28 ease-in-out duration-200 ${cssClasses}`,
          {
            "left-full": !showMenu,
            "left-0": showMenu,
          }
        )}
      >
        <ul className="text-white grid gap-2 list-none px-7">
          {navData.map(({ title, url }, index) => (
            <li
              key={index}
              className={classNames({
                "order-last mt-6": title === "Enquire Now",
              })}
            >
              <Link
                key={index}
                href={url}
                className={classNames(
                  "text-white text-[20px] tracking-[0.02rem] uppercase p-3 -ml-3",
                  {
                    "bg-khaki p-2 -ml-2": title === "Enquire Now",
                  }
                )}
                onClick={() => setShowMenu(false)}
                target={title === "Enquire Now" ? "_blank" : "_self"}
                rel={
                  title === "Enquire Now" ? "noopener noreferrer" : undefined
                }
              >
                {title}
              </Link>
              {index !== navData.length - 1 && index !== navData.length - 2 && (
                <hr className="border-white mt-[16px] mb-2" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileHeader;
