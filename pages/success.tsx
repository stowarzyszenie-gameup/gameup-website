import React from "react";
import Button from "../components/Button";
import { H2 } from "../components/TextElements/headers";
import { P } from "../components/TextElements/paragraph";

const Success = () => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
      <H2>Wiadomość wysłana</H2>
      <P>Odpowiemy na nią najszybciej jak to możliwe</P>
      <Button text="Powrót do strony głównej" href="/" />
    </div>
  );
};

export default Success;
