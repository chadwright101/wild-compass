import Link from "next/link";
import Image from "next/image";

import whatsapp from "@/public/assets/icons/whatsapp.svg";
import facebook from "@/public/assets/icons/facebook.svg";
import instagram from "@/public/assets/icons/instagram.svg";

interface Props {
  cssClasses?: string;
  small?: boolean;
}

const SocialIcons = ({ cssClasses, small }: Props) => {
  if (small) {
    return (
      <ul className={`flex gap-2 ${cssClasses}`}>
        <li>
          <Link
            href=""
            target="_blank"
            className="tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Facebook page"
          >
            <Image
              src={facebook}
              alt="View our Facebook page"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link
            href=""
            target="_blank"
            className="tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Instagram profile"
          >
            <Image
              src={instagram}
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
            className="tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={whatsapp}
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
      <ul className={`flex gap-5 ${cssClasses}`}>
        <li>
          <Link
            href=""
            className="grid h-10 w-10 -mx-2.5 -my-1.5 place-items-center"
            target="_blank"
            aria-label="View our Facebook page"
          >
            <Image
              src={facebook}
              alt="View our Facebook page"
              width={28}
              height={28}
            />
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="grid h-10 w-10 -mx-2.5 -my-1.5 place-items-center"
            target="_blank"
            aria-label="View our Instagram profile"
          >
            <Image
              src={instagram}
              alt="View our Instagram profile"
              width={28}
              height={28}
            />
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="grid h-10 w-10 -mx-2.5 -my-1.5 place-items-center"
            target="_blank"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={whatsapp}
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
