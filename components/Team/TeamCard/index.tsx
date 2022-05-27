/* eslint-disable @next/next/no-img-element */
import React from "react";
import { H3, H4 } from "../../TextElements/headers";

interface IProps {
  imageSrc: string;
  name: string;
  role: string;
}

const TeamCard = ({ imageSrc, name, role }: IProps) => {
  return (
    <li>
      <div className="w-full h-full rounded overflow-hidden shadow-lg bg-white my-2 px-6 py-4 flex flex-col items-center">
        <img src={imageSrc} alt={name} />
        <H4>{name}</H4>
        <H3>{role}​</H3>
      </div>
    </li>
  );
};

export default TeamCard;
