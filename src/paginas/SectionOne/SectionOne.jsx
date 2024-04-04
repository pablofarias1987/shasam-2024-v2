import { Typography, Button } from "keep-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SectionOne() {
  const WEBSITE_NAME = "Comienza tu terapia";
  const DESCRIPTION_ONE = "hoy mismo...";

  return (
    <div
      className="h-screen bg-local bg-cover text-gray-700 flex flex-col lg:flex-row "
      style={{ backgroundImage: "url(/bglanding.jpg)" }}
    >
      {" "}
      {/* Agregada la clase bg-cover */}
      <div className="lg:w-2/4 flex items-center">
        <Typography variant="div" className="p-5 ml-5 lg:ml-20">
          <Typography className="font-roboto text-7xl">
            {" "}
            {WEBSITE_NAME}
          </Typography>
          <Typography className="font-roboto text-7xl">
            {" "}
            {DESCRIPTION_ONE}{" "}
          </Typography>
          <div className="text-lg p-3 m-6">
            <Link to="/register">
              <Button
                className=" bg-black rounded-xl p-3 hover:bg-blue-800 text-white"
                size=""
              >
                !Recibe orientación gratis!
              </Button>
            </Link>
          </div>
        </Typography>
      </div>
    </div>
  );
}
