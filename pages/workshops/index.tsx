import React from "react";
import Button from "../../components/Button";
import { H2 } from "../../components/TextElements/headers";
import { P } from "../../components/TextElements/paragraph";

const WorkshopsPage = () => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
      <H2>Strona w budowie</H2>
      <P>Zapraszamy wkrótce po więcej informacji!</P>
      <Button text="Powrót do strony głównej" href="/" />
    </div>
  );
};

export default WorkshopsPage;
