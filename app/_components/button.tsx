"use client";

import classNames from "classnames";
import Link from "next/link";
import { useFormStatus } from "react-dom";

interface Props {
  backgroundColor?: "khaki" | "grey";
  secondaryColor?: "khaki" | "grey";
  onClick?: () => void;
  typeSubmit?: boolean;
  children?: React.ReactNode;
  cssClasses?: string;
  url?: string;
  target?: string;
  normalButton?: boolean;
  disabled?: boolean;
}

const buttonStyles = ({ cssClasses, secondaryColor, backgroundColor }: Props) =>
  classNames(
    `flex gap-3 w-full items-center text-white justify-center rounded drop-shadow-md uppercase ease-in-out duration-300 ${cssClasses}`,
    {
      "px-10 py-3": !secondaryColor,
      "desktopSmall:hover:px-[44px] desktopSmall:hover:-mx-1": backgroundColor,
      "desktopSmall:hover:px-10 desktopSmall:hover:-mx-1": secondaryColor,
      "px-9 py-2": secondaryColor,
      "bg-khaki desktopSmall:hover:bg-khaki/90": backgroundColor === "khaki",
      "bg-grey desktopSmall:hover:bg-grey/90": backgroundColor === "grey",
      "bg-white border-4 border-khaki desktopSmall:hover:bg-khaki":
        secondaryColor === "khaki",
      "bg-white border-4 border-grey desktopSmall:hover:bg-grey":
        secondaryColor === "grey",
    }
  );

const Button = ({
  backgroundColor = "khaki",
  secondaryColor,
  onClick,
  typeSubmit,
  children,
  cssClasses,
  url = "#",
  target,
  normalButton,
  disabled,
}: Props) => {
  const { pending } = useFormStatus();

  if (!normalButton) {
    return (
      <Link
        href={url}
        target={target}
        className={buttonStyles({
          cssClasses,
          secondaryColor,
          backgroundColor,
        })}
        aria-label={children as string}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={buttonStyles({
          cssClasses,
          secondaryColor,
          backgroundColor,
        })}
        type={typeSubmit ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled}
        aria-label={children as string}
      >
        {pending ? <div className="spinner"></div> : <>{children}</>}
      </button>
    );
  }
};

export default Button;
