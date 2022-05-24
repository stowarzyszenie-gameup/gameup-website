import React from "react";

const Hero = () => {
  return (
    <div className="h-60 sm:h-96 xl:h-[50vh] bg-hero bg-cover bg-center w-full">
      <h2 className="">Stowarzyszenie GameUp</h2>
      <h1>{"WANT TO PLAY? IT'S TIME TO UPGRADE"}</h1>
      <p>
        Gry komputerowe, mobilne, planszowe, miejskie – nie mają dla nas
        tajemnic! Wiemy, że są nie tylko narzędziem rozrywki. To także świetne
        medium dla nauki, rozwoju, reklamy czy komunikacji. Jesteś ciekaw, w
        jaki sposób gry mogą pomóc Ci w życiu prywatnym lub zawodowym? Chętnie
        Ci o tym opowiemy!
      </p>
      <button>Dowiedz się więcej</button>
    </div>
  );
};

export default Hero;
