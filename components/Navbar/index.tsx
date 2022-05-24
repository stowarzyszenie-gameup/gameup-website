/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between p-6">
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
          H
        </button>
      </div>
      <ul id="desktop-menu" className="hidden sm:flex flex-row list-none gap-4">
        <li>
          <Link href="/#about" scroll={false}>
            <a>O nas</a>
          </Link>
        </li>
        <li>Warsztaty</li>
        <li>Zespół</li>
        <li>Kontakt</li>
      </ul>
      <ul
        id="mobile-menu"
        className={`${
          showMenu ? "flex" : "hidden"
        } sm:hidden flex-col list-none gap-4 items-center`}
      >
        <li>O nas</li>
        <li>Warsztaty</li>
        <li>Zespół</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};

export default Navbar;
