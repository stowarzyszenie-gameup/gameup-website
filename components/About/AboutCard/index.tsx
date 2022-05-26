import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { P } from "../../TextElements/paragraph";
import { H4 } from "../../TextElements/headers";

interface IProps {
  icon: IconDefinition;
  title: string;
  content: string;
}

const AboutCard = ({ icon, title, content }: IProps) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white my-2 px-6 py-4 flex flex-col items-center">
      <FontAwesomeIcon icon={icon} size="3x" className="text-lime-500" />
      <H4>{title}</H4>
      <P centered={true}>{content}</P>
    </div>
  );
};

export default AboutCard;
