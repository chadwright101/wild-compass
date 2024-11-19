"use client";

import classNames from "classnames";
import Link from "next/link";
import { useFormStatus } from "react-dom";

interface Props {
  backgroundColor?: "khaki" | "grey";
  onClick?: () => void;
  typeSubmit?: boolean;
  children?: React.ReactNode;
  cssClasses?: string;
  url?: string;
  target?: string;
  normalButton?: boolean;
  disabled?: boolean;
}

const buttonStyles = ({ cssClasses, backgroundColor }: Props) =>
  classNames(
    `flex gap-3 w-full items-center text-[20px] font-bold tracking-[0.025rem] text-white justify-center uppercase ease-in-out duration-300 py-1 px-7 ${cssClasses}`,
    {
      "bg-khaki border-4 border-khaki desktop:hover:bg-transparent desktop:hover:text-khaki":
        backgroundColor === "khaki",
      "bg-grey border-4 border-grey desktop:hover:bg-transparent desktop:hover:text-grey":
        backgroundColor === "grey",
    }
  );

const Button = ({
  backgroundColor = "khaki",
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
