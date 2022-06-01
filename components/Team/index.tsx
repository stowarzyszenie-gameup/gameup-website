/* eslint-disable @next/next/no-img-element */
import React from "react";
import { H2, H3, H4 } from "../TextElements/headers";
import { P } from "../TextElements/paragraph";
import {
  adamPhoto,
  kacperPhoto,
  ninaPhoto,
  rozaPhoto,
  szymonMakuchPhoto,
  szymonStoczekPhoto,
  prawnikPhoto,
} from "./images";

import TeamCard from "./TeamCard";

const teamMembersData = [
  {
    name: "Adam Flamma",
    role: "PREZES & SENIOR PROJECT MANAGER",
    imgSrc: adamPhoto.src,
  },
  {
    name: "Nina Świłło",
    role: "CREATIVE DIRECTOR​",
    imgSrc: ninaPhoto.src,
  },
  {
    name: "Szymon Makuch",
    role: "COPYRIGHT SPECIALIST",
    imgSrc: szymonMakuchPhoto.src,
  },
  {
    name: "Szymon Stoczek",
    role: "LEAD WRITER",
    imgSrc: szymonStoczekPhoto.src,
  },
  {
    name: "Róza Hnatkowska",
    role: "UX/UI DESIGNER",
    imgSrc: rozaPhoto.src,
  },
  {
    name: "Kacper Łach",
    role: "SOCIAL MEDIA SPECIALIST",
    imgSrc: kacperPhoto.src,
  },
];

const Team = () => {
  return (
    <div
      className="py-8 px-10 bg-lime-500 flex justify-center items-center"
      id="team"
    >
      <div className=" max-w-screen-xl flex flex-col gap-4 items-center justify-around">
        <H3>Zespół</H3>
        <H2>NASI EKSPERCI</H2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembersData.map((member, index) => (
            <TeamCard
              imageSrc={member.imgSrc}
              name={member.name}
              role={member.role}
              key={`team-member-${index}`}
            />
          ))}
        </ul>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full rounded overflow-hidden shadow-lg bg-white my-2 px-6 py-4 gap-8">
          <img
            src={prawnikPhoto.src}
            alt=""
            className="rounded-full w-3/5 sm:w-2/5 lg:w-full m-auto"
          />
          <div className="lg:col-start-2 lg:col-end-4">
            <H4>USŁUGI PRAWNICZE</H4>
            <P>
              Radca prawny, członek Okręgowej Izby Radców Prawnych we Wrocławiu,
              absolwent Uniwersytetu Wrocławskiego na kierunkach prawo i
              administracja. Doświadczenie zdobywał w renomowanych kancelariach
              prawnych działających we Wrocławiu. Współpracuje z podmiotami z
              branży rozrywkowej i usługowej, prowadząc obsługę prawną tych
              przedsiębiorstw. W swojej pracy zawodowej styka się z między
              innymi z umowami IT, zagadnieniami prawa autorskiego, prawa
              własności intelektualnej, opodatkowania twórców. Prywatnie
              oldschoolowiec, nadal zdarza mu się grać w Wolfensteina 3D, ma
              wciąż zainstalowanego Medievala II oraz GTA:San Andreas.
            </P>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Team;
