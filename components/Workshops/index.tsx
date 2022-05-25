import React from "react";
import Button from "../Button";
import { H2, H3 } from "../TextElements/headers";
import { P } from "../TextElements/paragraph";

const Workshops = () => {
  return (
    <div className="py-8 px-10 bg-white">
      <H3>Warsztaty</H3>
      <H2>WARSZTATY PISANIA SCENARIUSZY GIER</H2>
      <P>
        Masz pomysł na własną grę, chciałbyś zaistnieć w branży i tworzyć
        questy, które zapadają w pamięć? Stworzyłeś wyjątkowy świat, w którym
        chciałbyś osadzić fabułę gry? Chcesz zdobyć konkretne umiejętności i
        poprawić swój warsztat pisarski? Jeśli tak – te warsztaty są dla Ciebie!
        Kurs ma charakter warsztatowy i podzielony jest na część teoretyczną
        (interaktywne wykłady) i praktyczną (ćwiczenia). Podczas zajęć
        uczestnicy zdobywają umiejętności niezbędne podczas tworzenia
        scenariuszy gier – prawdziwe „Know How” writera. Stworzą także zarys
        swojej gry oraz kilka pierwszych stron scenariusza, które mogą stać się
        elementem portfolio.
      </P>
      <Button text="Dowiedz się więcej" />
    </div>
  );
};

export default Workshops;
