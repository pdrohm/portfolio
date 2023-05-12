import Image from "next/image";
import React from "react";
import Project from "./Project";
import { useLanguage } from "../context/LanguageProvider";
import { ProjectsText } from "../exports/Texts";

type Props = {};

export type project = {
  title: string;
  description: string;
  mockupArt: string;
};
export default function Projects({}: Props) {
  const { isEngActive } = useLanguage();

  const projs: project[] = [
    {
      title: "PHFlix",
      description:
        "Phflix is a web application that is designed to resemble Netflix's interface, built using React and powered by the TMDB API. With Phflix, users can browse movies and TV shows, search for specific titles, and view detailed information about each title, including ratings, descriptions, and cast members. The application also features a responsive design, making it easy to use on a variety of devices. By fetching data from the TMDB API, Phflix is able to provide users with access to a vast library of movie and TV show content, making it a great choice for anyone looking for a Netflix-like experience.",
      mockupArt: "./phflix.png",
    },
    {
      title: "Apollo - Soluções em Dados Solares",
      description:
        "This website  was developed to a company called Apollo. It was built with React, TailwindCSS and Vite. The company has a product that will revolutioanize the way the Brazilians solar companies measure, control and store solar data, providing a better decision making .",
      mockupArt: "./apollo.png",
    },
  ];

  return (
    <div
      id="projects"
      className="relative snap-start h-screen flex justify-evenly overflow-hidden flex-col items-center text-left max-w-full mx-auto z-1"
    >
      <h2 className="title-section ">
        {isEngActive ? ProjectsText.mainTitle.en : ProjectsText.mainTitle.br}
      </h2>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-blue/90 ">
        {projs.map((project, index) => (
          <Project
            key={index}
            index={index}
            project={project}
            length={projs.length}
          />
        ))}
      </div>

      <div
        id="faixa"
        className="w-full absolute z-0 top-[20%] bg-blue/10 left-0 h-[500px] -skew-y-12"
      ></div>
    </div>
  );
}
