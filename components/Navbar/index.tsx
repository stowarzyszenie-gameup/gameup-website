import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between p-6">
      <div>LOGO</div>
      <ul className="flex flex-row list-none gap-4">
        <li>O nas</li>
        <li>Warsztaty</li>
        <li>Zespół</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};

export default Navbar;
