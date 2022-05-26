import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  light?: boolean;
}

export const H1 = ({ children, light }: IProps) => {
  return (
    <h1
      className={`text-center ${
        light ? "text-white" : "text-black"
      } font-primary font-extralight text-5xl sm:text-7xl uppercase tracking-wide`}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, light }: IProps) => {
  return (
    <h2
      className={`text-center ${
        light ? "text-white" : "text-black"
      } font-primary font-extralight text-4xl sm:text-5xl uppercase tracking-wide my-4`}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, light }: IProps) => {
  return (
    <h3
      className={`text-center ${
        light ? "text-white" : "text-black"
      } font-primary text-lg font-bold uppercase tracking-widest`}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, light }: IProps) => {
  return (
    <h4
      className={`text-center ${
        light ? "text-white" : "text-black"
      } font-primary text-2xl font-bold uppercase tracking-wide my-4`}
    >
      {children}
    </h4>
  );
};
