import React from "react";
import { motion } from "framer-motion";
import { company } from "./Experience";
import { techsIcon } from "./TechsIcon";
import { CalendarIcon } from "@heroicons/react/24/solid";

type Props = {
  company: company;
};

export default function ExperienceCard({ company }: Props) {
  const filteredIcons = techsIcon.filter((icon) =>
    company.technologies.includes(icon.name)
  );

  const handleOnClick = () => {
    window.open(
      `https://www.linkedin.com/in/pdrohm/?section=experience`,
      "_blank"
    );
  };

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-96 md:w-[600px] xl:w-[900px] lg:h-[750px] h-[600px] snap-center bg-zinc-700 p-10 opacity-100  lg:opacity-40 md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-250 overflow-hidden"
      onClick={handleOnClick}
    >
      <div className="flex items-center flex-col h-full">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[180px] xl:h-[180px] object-cover object-center"
          src={company.logo}
          alt={company.name}
        />
        <div className="px-0 md:px-8">
          <div className="flex items-center flex-col text-start">
            <h3 className="text-3xl font-light">{company.role}</h3>
            <p className="font-semibold text-xl mt-2">{company.name}</p>
          </div>

          <div className="flex flex-row items-center my-5">
            <CalendarIcon className="text-blue h-6 w-6 animate-pulse" />

            <p className="ml-2">{company.duration}</p>
          </div>

          <ul className="list-disc space-y-3 ml-7 lg:text-lg text-sm leading-tight overflow-y-auto max-h-52 lg:max-h-80  scrollbar scrollbar-thumb-blue/90">
            {company.activities.map((activity, i) => (
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
