import React from "react";
import { H2, H3 } from "../TextElements/headers";

const About = () => {
  return (
    <div id="about" className="py-8 px-10 bg-slate-100">
      <H3>CZYM SIĘ ZAJMUJEMY?</H3>
      <H2>PRACUJEMY NAD ROZWOJEM BRANŻY GIER</H2>
      <ul className="grid grid-cols-1 sm:grid-cols-3">
        <li>
          <h5>WSPIERAMY</h5>
          <p>
            Wspieramy rozwój instytucji oraz podmiotów gospodarczych z
            wykorzystaniem gier
          </p>
        </li>
        <li>
          <h5>BADAMY</h5>
          <p>
            Prowadzimy badania, konsultacje oraz audyty dla podmiotów branż
            kreatywnych oraz innych podmiotów gospodarczych wykorzystujących gry
            jako medium
          </p>
        </li>
        <li>
          <h5>SZKOLIMY</h5>
          <p>
            Organizujemy szkolenia dokształcające dla osób już działających lub
            pragnących wejść na rynek pracy związanej z produkcją, wydawnictwem
            oraz promocją gier
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
