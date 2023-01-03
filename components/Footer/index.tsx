import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white font-secondary p-4 flex justify-center items-center gap-4">
      Stowarzyszenie Badania i Rozwoju Gier GameUp {new Date().getFullYear()}
      <li className="flex gap-4">
        <a href="https://www.facebook.com/stowarzyszeniegameup">
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
        </a>
        <a href="https://www.linkedin.com/company/stowarzyszenie-game-up/">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
      </li>
    </footer>
  );
};

export default Footer;
