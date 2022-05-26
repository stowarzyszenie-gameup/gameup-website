/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useState } from "react";

const navbarLinks = [
  {
    href: "/#about",
    text: "O nas",
  },
  {
    href: "#",
    text: "Warsztaty",
  },
  {
    href: "#",
    text: "Zespół",
  },
  {
    href: "#",
    text: "Kontakt",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between px-12 py-6">
      <div className="flex flex-row justify-between">
        <div>
          <Link href="/">
            <a>
              <img src="/gameup_logo.webp" alt="GameUP logo" className="w-36" />
            </a>
          </Link>
        </div>
        <button
          className="sm:hidden"
          onClick={() => setShowMenu(!showMenu)}
          aria-expanded={showMenu}
          aria-label="Menu mobilne"
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      </div>
      <ul
        id="desktop-menu"
        className="hidden sm:flex flex-row list-none gap-4 items-center font-secondary"
      >
        {navbarLinks.map((link, index) => (
          <li
            key={`navbar-${index}`}
            className="transition-all duration-100 border-lime-500 hover:font-bold hover:border-b-2"
          >
            <Link href={link.href} scroll={false}>
              <a>{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul
        id="mobile-menu"
        className={`${
          showMenu ? "flex" : "hidden"
        } sm:hidden flex-col list-none gap-4 items-center font-secondary pt-4`}
      >
        {navbarLinks.map((link, index) => (
          <li
            key={`navbar-mobile-${index}`}
            className="transition-all duration-100 hover:font-bold"
          >
            <Link href={link.href} scroll={false}>
              <a className="py-2">{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
