import React from "react";
import { project } from "./Projects";

type Props = {
  index: number;
  project: project;
  length: number;
};

export default function Project({ index, project, length }: Props) {
  return (
    <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-start h-scren p-15 md:p-40 ">
      <img className="xl:w-1/2 md:w-1/2 w-auto h-auto" src={project.mockupArt} alt="" />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
       
        <h3 className="xl:text-3xl text-xl text-center flex xl:flex-row md:flex-row flex-col items-center justify-center">
          <span className="underline decoration-blue xl:text-4xl text-2xl xl:mr-5 md:mr-3">
            Case of Study {index + 1} of {length}:
          </span>{" "}
          {project.title}
        </h3>
        
        <p className="text-center md:text-left lg:text-lg text-sm leading-tight overflow-y-auto max-h-80 px-9">
          {project.description}
        </p>
      </div>
    </div>
  );
}
