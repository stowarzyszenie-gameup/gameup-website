import React from "react";
import { H2, H3 } from "../TextElements/headers";
import { P } from "../TextElements/paragraph";

const Contact = () => {
  return (
    <div className="py-8 px-10 bg-white">
      <H3>Kontakt</H3>
      <H2>SKONTAKTUJ SIĘ Z NAMI</H2>
      <P>
        Skontaktuj się z nami za pomocą formularza kontaktowego znajdującego się
        po prawej stronie lub za pomocą metod wymienionych poniżej. Postaramy
        się odpowiedzieć najszybciej jak tylko będzie to możliwe! ul. Komorowska
        11/2, 54-436 Wrocław +48 600 631 820 stowarzyszeniegameup@gmail.com
      </P>
    </div>
  );
};

export default Contact;
