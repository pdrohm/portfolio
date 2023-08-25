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
  const { isEnglish } = useLanguage();

  const filteredIcons = techsIcon.filter((icon) =>
    project.techs.includes(icon.name),
  );

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="p-15 flex h-3/4 w-screen flex-col items-center justify-start space-y-5 md:flex-row md:p-20 xl:flex-row ">
      <img
        className="h-auto w-auto md:w-1/2 xl:w-1/2"
        src={project.mockupArt}
        alt="Laptop and Mobile Mockup of the project"
      />

      <div className="max-w-6xl space-y-10 px-0 md:px-10">
        <h3 className="flex flex-col items-center justify-center text-center text-xl font-semibold md:flex-row xl:flex-row xl:text-3xl">
          {project.title}
        </h3>

        <p className="max-h-80 overflow-y-auto px-9 text-center text-sm leading-tight md:text-left lg:text-lg">
          {isEnglish ? project.descriptionEn : project.descriptionBr}
        </p>

        <div className="flex flex-col justify-end md:flex-row xl:flex-row">
          <div className="flex w-full flex-wrap items-center justify-center md:justify-start xl:justify-start">
            {filteredIcons.map((icon) => (
              <div key={icon.name} className="group relative inline-block">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="mx-2 h-10 w-10 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                />
                <span className="absolute left-1/2 top-full mb-1  -translate-x-1/2 rounded px-2 py-1 text-xs text-zinc-800 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:text-zinc-200">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-5 flex w-64 justify-center md:mt-0 md:w-1/2 xl:mt-0 xl:w-1/2 ">
            <button
              className="mr-5 flex h-12 w-32 cursor-pointer items-center justify-center rounded-md bg-black p-2 "
              onClick={() => handleOpenLink(project.githubLink)}
            >
              <FaGithub className="text-zinc-200" />
              <span className="ml-1 text-zinc-200">
                {isEnglish ? ProjectText.code.en : ProjectText.code.br}
              </span>
            </button>
            <button
              onClick={() => handleOpenLink(project.liveLink)}
              className="flex h-12 w-32 cursor-pointer items-center justify-center rounded-md bg-blue p-2"
            >
              <FaPlusCircle />
              <span className="ml-1">
                {isEnglish ? ProjectText.more.en : ProjectText.more.br}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
