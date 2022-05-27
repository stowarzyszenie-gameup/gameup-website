import React from "react";
import { H2, H3 } from "../TextElements/headers";
import { P } from "../TextElements/paragraph";

const Contact = () => {
  return (
    <div className="py-8 px-10 bg-white flex justify-center items-center">
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
            <ul>
              <li>ul. Komorowska 11/2, 54-436 Wrocław</li>
              <li>+48 600 631 820</li>
              <li>stowarzyszeniegameup@gmail.com</li>
            </ul>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="yourname">Imię:</label> <br />
              <input type="text" name="name" id="yourname" placeholder="Imię" />
            </p>
            <p>
              <label htmlFor="youremail">Email:</label> <br />
              <input
                type="email"
                name="email"
                id="youremail"
                placeholder="Email"
              />
            </p>
            <p>
              <label htmlFor="yourmessage">Wiadomość:</label> <br />
              <textarea
                name="message"
                id="yourmessage"
                placeholder="Treść wiadomości"
              ></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
