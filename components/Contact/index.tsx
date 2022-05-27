import React from "react";
import { H2, H3 } from "../TextElements/headers";
import { P } from "../TextElements/paragraph";
import {
  faAddressCard,
  faPhoneSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div
      className="py-8 px-10 bg-gray-200 flex justify-center items-center"
      id="contact"
    >
      <div className=" max-w-screen-xl flex flex-col gap-4 items-center justify-around">
        <H3>Kontakt</H3>
        <H2>SKONTAKTUJ SIĘ Z NAMI</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <P>
              Skontaktuj się z nami za pomocą formularza kontaktowego lub za
              pomocą metod wymienionych poniżej. Postaramy się odpowiedzieć
              najszybciej jak tylko będzie to możliwe!
            </P>
            <P>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center">
                  <div className="w-12 flex justify-center">
                    <FontAwesomeIcon icon={faAddressCard} size="2x" />
                  </div>
                  &nbsp;ul. Komorowska 11/2, 54-436 Wrocław
                </li>
                <li className="flex items-center">
                  <div className="w-12 flex justify-center">
                    <FontAwesomeIcon icon={faPhoneSquare} size="2x" />
                  </div>
                  &nbsp;+48 600 631 820
                </li>
                <li className="flex items-center">
                  <div className="w-12 flex justify-center">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </div>
                  &nbsp;stowarzyszeniegameup@gmail.com
                </li>
              </ul>
            </P>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
            className="w-full rounded overflow-hidden shadow-lg bg-white my-2 px-6 py-4 flex flex-col items-stretch"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="font-secondary">
              <label htmlFor="yourname" className="font-secondary">
                Imię:
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="yourname"
                placeholder="Imię"
                required
                className="border-2 border-gray-200 rounded font-secondary p-2 w-full"
              />
            </p>
            <p>
              <label htmlFor="youremail" className="font-secondary">
                Email:
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                id="youremail"
                placeholder="Email"
                required
                className="border-2 border-gray-200 rounded font-secondary p-2 w-full"
              />
            </p>
            <p>
              <label htmlFor="yourmessage" className="font-secondary">
                Wiadomość:
              </label>{" "}
              <br />
              <textarea
                name="message"
                id="yourmessage"
                placeholder="Treść wiadomości"
                required
                className="border-2 border-gray-200 rounded font-secondary p-2 w-full"
              ></textarea>
            </p>
            <p>
              <button
                type="submit"
                className="hover:text-black uppercase font-bold text-base tracking-wide hover:bg-white border-2 border-lime-500 transition-all duration-200 ease-in hover:border-gray-200 bg-lime-500 text-white rounded font-secondary p-2  w-full"
              >
                Wyślij wiadomość
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
