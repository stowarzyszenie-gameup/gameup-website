import React from "react";

interface IProps {
  text: string;
}

const Button = ({ text }: IProps) => {
  return (
    <button
      type="button"
      className={`text-white hover:text-black relative top-0 hover:-top-1.5 transition-all duration-300 ease-in font-secondary uppercase font-bold text-base tracking-wide rounded-full bg-lime-500 hover:bg-white px-12 py-4`}
    >
      {text}
    </button>
  );
};

export default Button;
