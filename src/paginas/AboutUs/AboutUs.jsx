import React from "react";
import { Typography } from "keep-react";

export default function AboutUs() {
  const NAME = "¿Quiénes Somos?";
  const NAME2 ="Nuestro Equipo"
  const parrafo1 =
    "Somos una plataforma online terapéutica Shasam, con un modelo de carácter religioso, dedicada a la prevención, rehabilitación y adaptación social de jóvenes y adultos con problemas de drogodependencia, alcoholismo y marginación.";
  const parrafo2 =
    "Hemos desarrollado un intenso y dedicado trabajo en el tratamiento de personas con problemáticas de alcohol y drogodependientes en una fase online, con duración de 9 meses.";
    const parrafo3 ="En SHASAM contamos con un equipo multidiciplinario compuesto por Psicóloga, Psiquiatra, monitores de apoyo, Asistente Social, Técnicos en Rehabilitación.";

  return (
    <div>
      <div className="relative overflow-hidden h-60">
        <img
          className="w-full absolute opacity-50 -top-96 left-1/2 transform -translate-x-1/2"
          src="quienessomos.jpeg"
          alt="imagen-sitio"
        />
      </div>    

      <div className="flex justify-center mx-32 items-center mt-8">
        <div className="flex-1">
          <Typography className="text-sky-400 text-5xl font-medium">
            {NAME}
          </Typography>
          <Typography className="text-justify space-y-4 text-xl m-5">
            <Typography>{parrafo1}</Typography>
            <Typography>{parrafo2}</Typography>
          </Typography>
        </div>
        
        <div className="ml-8">
          <img
            className="w-72 h-auto"
            src="aboutus.jpeg"
            alt="aboutus"
          />
        </div>
      </div>
      <div className="flex-1 mx-32">
          <Typography className="text-sky-400 text-5xl font-medium">
            {NAME2}
          </Typography>
          <Typography className="text-justify space-y-4 text-xl m-5">
            <Typography>{parrafo3}</Typography>
          </Typography>
        </div>
    </div>
  );
}
