import React, { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
