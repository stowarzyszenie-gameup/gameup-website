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
      } font-primary text-7xl uppercase tracking-wide`}
    >
      {children}
    </h1>
  );
};

export const H2 = () => {
  return <h2>headers</h2>;
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
