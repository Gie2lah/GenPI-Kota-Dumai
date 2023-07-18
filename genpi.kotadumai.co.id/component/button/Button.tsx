import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: string;
  className: string;
  onClick: boolean;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "text-red border py-2 px-4 bg-white font-bold rounded-md shadow-md drop-shadow-md hover:scale-[1.02]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
