/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Button";
import { H2, H3 } from "../TextElements/headers";
import { P } from "../TextElements/paragraph";
import photo from "./workshop_hero.webp";

const Workshops = () => {
  return (
    <div className="py-8 px-10 bg-white flex justify-center items-center">
      <div className=" max-w-screen-xl flex flex-col gap-4 items-center justify-around">
        <H3>Warsztaty</H3>
        <H2>WARSZTATY PISANIA SCENARIUSZY GIER</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          <figure>
            <img src={photo.src} alt="" className="basis-5/12" />
            <figcaption className="text-gray-400 font-secondary">
              Szymon Stoczek podczas Warsztatów
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center">
            <P>
              Masz pomysł na własną grę, chciałbyś zaistnieć w branży i tworzyć
              questy, które zapadają w pamięć? Stworzyłeś wyjątkowy świat, w
              którym chciałbyś osadzić fabułę gry? Chcesz zdobyć konkretne
              umiejętności i poprawić swój warsztat pisarski?
            </P>
            <P>Jeśli tak – te warsztaty są dla Ciebie!</P>
            <P>
              Kurs ma charakter warsztatowy i podzielony jest na część
              teoretyczną (interaktywne wykłady) i praktyczną (ćwiczenia).
              Podczas zajęć uczestnicy zdobywają umiejętności niezbędne podczas
              tworzenia scenariuszy gier – prawdziwe „Know How” writera. Stworzą
              także zarys swojej gry oraz kilka pierwszych stron scenariusza,
              które mogą stać się elementem portfolio.
            </P>
            <Button
              text="Dowiedz się więcej"
              href=""
              classes="mx-auto sm:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
