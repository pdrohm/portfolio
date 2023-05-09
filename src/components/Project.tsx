import React from "react";
import { project } from "./Projects";

type Props = {
  index: number;
  project: project;
};

export default function Project({ index, project }: Props) {
  return (
    <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center h-screen p-15 md:p-40">
      <img className="w-1/2 h-1/2" src={project.mockupArt} alt="" />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h3 className="xl:text-3xl text-xl text-center">
          <span className="underline decoration-blue xl:text-4xl text-2xl">
            Case of Study {index + 1} of 3:
          </span>{" "}
          {project.title}
        </h3>
        <p className="text-center md:text-left lg:text-lg text-sm leading-tight overflow-y-auto max-h-80 px-9  ">
          {project.description}
        </p>
      </div>
    </div>
  );
}
