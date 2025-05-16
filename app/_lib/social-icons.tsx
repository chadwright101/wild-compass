import Link from "next/link";
import Image from "next/image";

import whatsapp from "@/public/assets/icons/whatsapp.svg";
import facebook from "@/public/assets/icons/facebook.svg";
import instagram from "@/public/assets/icons/instagram.svg";
import whatsappGrey from "@/public/assets/icons/whatsapp-grey.svg";
import facebookGrey from "@/public/assets/icons/facebook-grey.svg";
import instagramGrey from "@/public/assets/icons/instagram-grey.svg";

interface Props {
  cssClasses?: string;
  small?: boolean;
  grey?: boolean;
}

const SocialIcons = ({ cssClasses, small, grey }: Props) => {
  if (small) {
    return (
      <ul className={`flex w-full gap-2 ${cssClasses}`}>
        <li>
          <Link
            href="https://www.facebook.com/profile.php?id=61564297827070"
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Facebook page"
          >
            <Image
              src={!grey ? facebook : facebookGrey}
              alt="View our Facebook page"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/wildcompassevents"
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Instagram profile"
          >
            <Image
              src={!grey ? instagram : instagramGrey}
              alt="View our Instagram profile"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link
            href=""
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={!grey ? whatsapp : whatsappGrey}
              alt="Get in touch on WhatsApp"
              width={20}
              height={20}
            />
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className={`flex gap-5 ml-0.5 ${cssClasses}`}>
        <li>
          <Link
            href="https://www.facebook.com/profile.php?id=61564297827070"
            className="grid h-10 w-10 -mx-2 -my-1.5 place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="View our Facebook page"
          >
            <Image
              src={!grey ? facebook : facebookGrey}
              alt="View our Facebook page"
              width={28}
              height={28}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/wildcompassevents"
            className="grid h-10 w-10 -mx-2.5 -my-1.5 place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="View our Instagram profile"
          >
            <Image
              src={!grey ? instagram : instagramGrey}
              alt="View our Instagram profile"
              width={28}
              height={28}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/27610093643?src=qr"
            className="grid h-10 w-10 -mx-2.5 -my-1.5 place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={!grey ? whatsapp : whatsappGrey}
              alt="Get in touch on WhatsApp"
              width={28}
              height={28}
            />
          </Link>
        </li>
      </ul>
    );
  }
};

export default SocialIcons;
