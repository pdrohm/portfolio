import React from "react";
import { motion } from "framer-motion";
import { techsIcon } from "./TechsIcon";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { company } from "@/exports/companies";
import { useLanguage } from "../context/LanguageProvider";
import { copyFile } from "fs";
import Image from "next/image";

type Props = {
  company: company;
};

export default function ExperienceCard({ company }: Props) {
  const { isEngActive } = useLanguage();

  const filteredIcons = techsIcon.filter((icon) =>
    company.technologies.includes(icon.name)
  );

  const handleOnClick = () => {
    window.open(
      `https://www.linkedin.com/in/pdrohm/?section=experience`,
      "_blank"
    );
  };

  const activities = isEngActive
    ? company.activities.en
    : company.activities.br;

  const duration = company.actual
    ? isEngActive
      ? company.duration + " current work"
      : company.duration + " atualmente"
    : company.duration;

  console.log("activities", activities);

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 snap-center bg-zinc-700 p-10 opacity-100  lg:opacity-40 md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-250 overflow-hidden xl:h-[600px]"
      onClick={handleOnClick}
    >
      <div className="flex items-center flex-col">
        <img
          className="w-24 h-24 rounded-full  object-cover object-center mb-3"
          src={company.logo}
          alt={`Logo of company ${company.name}`}
        />
        <div className="px-0 md:px-8">
          <div className="flex items-center flex-col text-start">
            <h3 className="text-2xl xl:text-3xl md:text-3xl font-light">
              {" "}
              {isEngActive ? company.role.en : company.role.br}
            </h3>
            <p className="font-semibold text-xl mt-2">{company.name}</p>
          </div>

          <div className="flex flex-row items-center my-5">
            <CalendarIcon className="text-blue h-6 w-6 animate-pulse" />

            <p className="ml-2">{duration}</p>
          </div>

          <ul className="list-disc space-y-3 ml-7 lg:text-lg text-sm leading-tight overflow-y-auto max-h-52 lg:max-h-80  scrollbar scrollbar-thumb-blue/90">
            {activities.map((activity, i) => (
              <li key={i}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex space-x-3 my-3 h-20 items-center justify-center">
        {filteredIcons.map((icon) => (
          <img
            src={icon.src}
            alt={icon.alt}
            key={icon.name}
            className="w-10 h-10"
          />
        ))}
      </div>
    </article>
  );
}
