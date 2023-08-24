import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";
import { BannerText } from "@/exports/Texts";

type Props = {};

export default function Banner({}: Props) {
  const { isEngActive } = useLanguage();

  const [text, count] = useTypewriter({
    words: isEngActive ? BannerText.wordsWriter.en : BannerText.wordsWriter.br,
    loop: true,
    delaySpeed: 2200,
  });

  return (
    <div
      id="home"
      className="h-screen relative flex flex-col space-y-8 items-center xl:justify-center md:justify-center justify-start text-center overflow-hidden"
    >
      <div className="bg-zinc-700/20  xl:w-14 xl:h-64 md:w-14 md:h-64 absolute xl:left-0 md:left-0 xl:top-96 bottom-28 h-14 w-64 flex xl:flex-col md:flex-col items-center justify-evenly xl:rounded-r-md md:rounded-r-md rounded-md xl:rounded-l-none md:rounded-l-none">
        <a href="https://www.linkedin.com/in/pdrohm/" target="_blank">
          <FaLinkedin className="logo-socials hover:text-[#0D62BC]" />
        </a>
        <a href="https://github.com/pdrohm" target="_blank">
          <FaGithub className="logo-socials hover:text-black" />
        </a>
        <a href="https://www.instagram.com/pdrohm/" target="_blank">
          <FaInstagram className="logo-socials hover:text-zinc-50 hover:bg-[#da4467]" />
        </a>
        <a href="https://wa.link/6wde9g" target="_blank">
          <FaWhatsapp className="logo-socials hover:text-zinc-50 hover:bg-[#12950b]" />
        </a>
      </div>
      <img
        className="relative rounded-full mx-auto object-cover lg:w-72 lg:h-72 md:w-64 md:h-64 w-56 h-56"
        src="./ph.png"
        alt="Pedro Henrique Picture"
      />
      <div>
        <h2 className="text-sm xl:text-lg uppercase text-zinc-700 dark:text-zinc-400 pb-2 tracking-[15px]">
          {isEngActive ? BannerText.role.en : BannerText.role.br}
        </h2>
        <h2 className="text-3xl lg:text-5xl scroll-px-10">
          <span className="mr-4 dark:text-zinc-200 text-zinc-800">{text}</span>
          <Cursor cursorColor="#0d80bf" />
        </h2>
      </div>
    </div>
  );
}
