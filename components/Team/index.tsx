import React from "react";
import { H2, H3 } from "../TextElements/headers";

const Team = () => {
  return (
    <div className="py-8 px-10 bg-lime-500">
      <H3>Zespół</H3>
      <H2>NASI EKSPERCI</H2>
      <ul className="grid grid-cols-3">
        <li>Adam Flamma</li>
        <li>Nina Świłło</li>
        <li>Szymon Makuch</li>
        <li>Szymon Stoczek</li>
        <li>Róza Hnatkowska</li>
        <li>Kacper Łach</li>
      </ul>
      <div>
        USŁUGI PRAWNICZE Radca prawny, członek Okręgowej Izby Radców Prawnych we
        Wrocławiu, absolwent Uniwersytetu Wrocławskiego na kierunkach prawo i
        administracja. Doświadczenie zdobywał w renomowanych kancelariach
        prawnych działających we Wrocławiu. Współpracuje z podmiotami z branży
        rozrywkowej i usługowej, prowadząc obsługę prawną tych przedsiębiorstw.
        W swojej pracy zawodowej styka się z między innymi z umowami IT,
        zagadnieniami prawa autorskiego, prawa własności intelektualnej,
        opodatkowania twórców. Prywatnie oldschoolowiec, nadal zdarza mu się
        grać w Wolfensteina 3D, ma wciąż zainstalowanego Medievala II oraz
        GTA:San Andreas.
      </div>
    </div>
  );
};

export default Team;
