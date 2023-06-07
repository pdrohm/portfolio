import React from "react";
import { project } from "./Projects";
import { useLanguage } from "../context/LanguageProvider";
import { ProjectsText, ProjectText } from "../exports/Texts";
import Tags from "./Tags";
import { FaGithub, FaPlusCircle } from "react-icons/fa";
import { techsIcon } from "./TechsIcon";

type Props = {
  index: number;
  project: project;
  length: number;
};

export default function Project({ index, project, length }: Props) {
  const { isEngActive } = useLanguage();

  const filteredIcons = techsIcon.filter((icon) =>
    project.techs.includes(icon.name)
  );

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-screen h-3/4 flex flex-col xl:flex-row md:flex-row space-y-5 items-center justify-start p-15 md:p-20 ">
      <img
        className="xl:w-1/2 md:w-1/2 w-auto h-auto"
        src={project.mockupArt}
        alt=""
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h3 className="xl:text-3xl text-xl text-center flex xl:flex-row md:flex-row flex-col items-center justify-center font-semibold">
          {project.title}
        </h3>

        <p className="text-center md:text-left lg:text-lg text-sm leading-tight overflow-y-auto max-h-80 px-9">
          {isEngActive ? project.descriptionEn : project.descriptionBr}
        </p>

        <div className="flex justify-end xl:flex-row md:flex-row flex-col">
          <div className="flex items-center xl:justify-start md:justify-start justify-center w-full flex-wrap">
            {filteredIcons.map((icon) => (
              <div key={icon.name} className="group relative inline-block">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-10 h-10 mx-2 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-50"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2  text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mb-1">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex xl:w-1/2 md:w-1/2 w-64 justify-center mx-auto xl:mt-0 md:mt-0 mt-5 ">
            <button
              className="cursor-pointer flex bg-black rounded-md p-2 items-center justify-center mr-5 w-32 h-12 "
              onClick={() => handleOpenLink(project.githubLink)}
            >
              <FaGithub />
              <span className="ml-1">
                {isEngActive ? ProjectText.code.en : ProjectText.code.br}
              </span>
            </button>
            <button
              onClick={() => handleOpenLink(project.liveLink)}
              className="cursor-pointer flex bg-blue rounded-md p-2 items-center justify-center w-32 h-12"
            >
              <FaPlusCircle />
              <span className="ml-1">
                {" "}
                {isEngActive ? ProjectText.more.en : ProjectText.more.br}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
