import React from "react";
import { H2, H3 } from "../TextElements/headers";
import AboutCard from "./AboutCard";
import {
  faHandshake,
  faLightbulb,
  faLifeRing,
} from "@fortawesome/free-regular-svg-icons";

const cardsContent = [
  {
    icon: faHandshake,
    title: "Wspieramy",
    content:
      "Wspieramy rozwój instytucji oraz podmiotów gospodarczych z wykorzystaniem gier",
  },
  {
    icon: faLightbulb,
    title: "Badamy",
    content:
      "Prowadzimy badania, konsultacje oraz audyty dla podmiotów branż kreatywnych oraz innych podmiotów gospodarczych wykorzystujących gry jako medium",
  },
  {
    icon: faLifeRing,
    title: "Szkolimy",
    content:
      "Organizujemy szkolenia dokształcające dla osób już działających lub pragnących wejść na rynek pracy związanej z produkcją, wydawnictwem oraz promocją gier",
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="py-8 px-10 bg-slate-100 flex justify-center items-center"
    >
      <div className=" max-w-screen-xl flex flex-col gap-4 items-center justify-around">
        <H3>CZYM SIĘ ZAJMUJEMY?</H3>
        <H2>PRACUJEMY NAD ROZWOJEM BRANŻY GIER</H2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
          {cardsContent.map((card, index) => (
            <li className="flex" key={`about-${index}`}>
              <AboutCard
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
