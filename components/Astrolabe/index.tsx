/* eslint-disable @next/next/no-img-element */
import React from "react";
import { H2, H3 } from "../TextElements/headers";
import { P } from "../TextElements/paragraph";
import logo from "./images/logo.png";
import steam from "./images/steam.webp";
import game from "./images/poster.jpg";

const Astrolabe = () => {
  return (
    <div
      className="py-8 px-10 bg-gray-200 flex justify-center items-center"
      id="astrolabe"
    >
      <div className=" max-w-screen-xl flex flex-col gap-4 items-center justify-around">
        <H3>Game Development</H3>
        <H2>ASTROLABE STORIES</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col justify-center order-2 sm:order-1">
            <P>
              Astrolabe Stories to gamingowy projekt Stowarzyszenia. Jego
              głównym celem jest tworzenie gier skupionych na fabule oraz
              narracji, a także projektowanie gier wideo dla odbiorców o różnych
              potrzebach.
            </P>
            <P>
              W marcu 2022 premierę miała pierwsza gra stworzona w ramach
              działania projektu - Last Threshold.
            </P>
            <a
              href="https://store.steampowered.com/app/1840770/Last_Threshold/"
              className="mx-auto sm:mx-0"
            >
              <img src={steam.src} alt="Available on Steam" className="h-16" />
            </a>

            {/* <Button
              text="Dowiedz się więcej"
              href="/workshops"
              classes="mx-auto sm:mx-0"
            /> */}
          </div>
          <figure className="order-1 sm:order-2">
            <img src={logo.src} alt="" className="basis-5/12" />
          </figure>
        </div>
        <figure className="order-1 sm:order-2">
          <img src={game.src} alt="" className="basis-5/12" />
          <figcaption className="text-gray-400 font-secondary">
            Grafika promująca grę Last Threshold
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Astrolabe;
