import React from "react";
import Project from "./Project";
import { useLanguage } from "../context/LanguageProvider";
import { ProjectsText } from "../exports/Texts";

type Props = {};

export type project = {
  title: string;
  descriptionEn: string;
  descriptionBr: string;
  mockupArt: string;
  techs: string[];
  githubLink: string;
  liveLink: string;
};
export default function Projects({}: Props) {
  const { isEnglish } = useLanguage();

  const projs: project[] = [
    {
      title: "PHFlix",
      descriptionEn:
        "Phflix is a web application that is designed to resemble Netflix's interface, built using React and powered by the TMDB API. With Phflix, users can browse movies and TV shows, search for specific titles, and view detailed information about each title, including ratings, descriptions, and cast members. The application also features a responsive design, making it easy to use on a variety of devices. By fetching data from the TMDB API, Phflix is able to provide users with access to a vast library of movie and TV show content, although was only develop the visual and design part.",
      descriptionBr:
        "Phflix é uma aplicação web projetada para se assemelhar à interface da Netflix, construída usando React e alimentada pela API do TMDB. A aplicação possui um design responsivo, facilitando o uso em diversos dispositivos. Ao buscar dados na API do TMDB, o Phflix é capaz de fornecer aos usuários acesso a uma vasta biblioteca de conteúdo de filmes e programas de TV, contudo, foi desenvolvida somente a parte de design, não sendo 100% funcional.",

      mockupArt: "./phflix.png",
      techs: ["html", "css", "javascript", "react", "git"],
      githubLink: "https://github.com/pdrohm/phflix",
      liveLink: "https://phflix.onrender.com/",
    },
    {
      title: "Apollo - Soluções em Dados Solares",
      descriptionEn:
        "This website  was developed to a company called Apollo. It was built with React, TailwindCSS and Vite. The company has a product that will revolutioanize the way the Brazilians solar companies measure, control and store solar data, providing a better decision making .",
      descriptionBr:
        "Este website foi desenvolvido para uma empresa chamada Apollo. Foi construído com React, TailwindCSS e Vite. A empresa possui um produto que mudará a forma como as empresas de energia solar brasileiras medem, controlam e armazenam dados solares, proporcionando uma melhor tomada de decisão.",
      mockupArt: "./apollo.png",
      techs: ["react", "html", "css", "javascript", "tailwindcss", "git"],
      githubLink: "https://github.com/pdrohm/apollows",
      liveLink: "https://apollo-website.onrender.com/",
    },
  ];

  return (
    <div
      id="projects"
      className="relative flex justify-evenly flex-col items-center text-left  mx-auto z-1"
    >
      <h2 className="title-section top-0">
        {isEnglish ? ProjectsText.mainTitle.en : ProjectsText.mainTitle.br}
      </h2>

      <div className="relative flex z-20 flex-col">
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
        className="w-full absolute z-0 top-[20%] dark:bg-blue/10 bg-zinc-600/10 left-0 h-[500px] -skew-y-12"
      ></div>
    </div>
  );
}
