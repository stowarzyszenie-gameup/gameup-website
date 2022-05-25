import React from "react";
import Button from "../Button";
import { H1, H3 } from "../TextElements/headers";
import { P } from "../TextElements/paragraph";

const Hero = () => {
  return (
    <div className="min-h-60 sm:min-h-96 xl:min-h-[50vh] bg-hero bg-cover bg-center w-full px-5 py-20 flex flex-col gap-4 items-center">
      <H3 light={true}>Stowarzyszenie GameUp</H3>
      <H1 light={true}>
        WANT TO PLAY?
        <br />
        IT&apos;S TIME TO UPGRADE
      </H1>
      <P light={true} centered={true}>
        Gry komputerowe, mobilne, planszowe, miejskie – nie mają dla nas
        tajemnic! Wiemy, że są nie tylko narzędziem rozrywki. To także świetne
        medium dla nauki, rozwoju, reklamy czy komunikacji. Jesteś ciekaw, w
        jaki sposób gry mogą pomóc Ci w życiu prywatnym lub zawodowym? Chętnie
        Ci o tym opowiemy!
      </P>
      <Button text="Dowiedz się więcej" />
    </div>
  );
};

export default Hero;
