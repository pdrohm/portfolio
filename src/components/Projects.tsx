import Image from "next/image";
import React from "react";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div
      id="projects"
      className="relative snap-start h-screen flex justify-evenly overflow-hidden flex-col items-center text-left max-w-full mx-auto z-1"
    >
      <h2 className="title-section ">Projects</h2>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-blue/90 ">
        {projects.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </div>

      <div
        id="faixa"
        className="w-full absolute z-0 top-[20%] bg-blue/10 left-0 h-[500px] -skew-y-12"
      ></div>
    </div>
  );
}
