"use client";

import classNames from "classnames";
import Link from "next/link";
import { useFormStatus } from "react-dom";

interface Props {
  backgroundColor?: "khaki" | "grey";
  strokeWhite?: boolean;
  onClick?: () => void;
  typeSubmit?: boolean;
  children?: React.ReactNode;
  cssClasses?: string;
  url?: string;
  target?: string;
  normalButton?: boolean;
  disabled?: boolean;
  pending?: boolean;
}

const buttonStyles = ({
  cssClasses,
  backgroundColor,
  strokeWhite,
  disabled,
  pending,
}: Props) =>
  classNames(
    `flex gap-3 w-full items-center text-[20px] font-bold tracking-[0.025rem] text-white justify-center uppercase ease-in-out duration-300 px-7 h-[46px] ${cssClasses}`,
    {
      "bg-khaki border-4 border-khaki desktop:hover:bg-transparent desktop:hover:text-khaki":
        backgroundColor === "khaki" && !strokeWhite,
      "bg-grey border-4 border-white desktop:hover:bg-white desktop:hover:text-grey":
        backgroundColor === "grey" && !strokeWhite,
      "bg-khaki border-4 border-white desktop:hover:bg-white desktop:hover:text-grey":
        backgroundColor === "khaki" && strokeWhite && !disabled && !pending,
      "bg-khaki border-4 border-white cursor-not-allowed":
        backgroundColor === "khaki" && strokeWhite && (disabled || pending),
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
  strokeWhite,
}: Props) => {
  const { pending } = useFormStatus();
  const isPending = pending;

  if (!normalButton) {
    return (
      <Link
        href={url}
        target={target}
        className={buttonStyles({
          cssClasses,
          backgroundColor,
          strokeWhite,
          disabled,
          pending: false,
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
          strokeWhite,
          disabled,
          pending: isPending,
        })}
        type={typeSubmit ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled || isPending}
        aria-disabled={disabled || isPending}
        aria-label={children as string}
      >
        {isPending && typeSubmit === true ? (
          <div className="spinner"></div>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
};

export default Button;
