import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";
import { BannerText } from "@/exports/Texts";

type Props = {};

export default function Banner({}: Props) {
  const { isEnglish } = useLanguage();

  const [text, count] = useTypewriter({
    words: isEnglish ? BannerText.wordsWriter.en : BannerText.wordsWriter.br,
    loop: true,
    delaySpeed: 2200,
  });

  return (
    <div
      id="home"
      className="relative flex h-screen flex-col items-center justify-start space-y-8 overflow-hidden text-center md:justify-center xl:justify-center"
    >
      <div className="absolute  bottom-32 flex h-14 w-64 flex-row items-center justify-evenly rounded-md bg-zinc-700/20 md:left-0 md:h-64 md:w-14 md:flex-col md:rounded-l-none md:rounded-r-md xl:left-0 xl:top-96 xl:h-64 xl:w-14  xl:rounded-l-none xl:rounded-r-md">
        <a href="https://www.linkedin.com/in/pdrohm/" target="_blank">
          <FaLinkedin className="logo-socials hover:text-[#0D62BC]" />
        </a>
        <a href="https://github.com/pdrohm" target="_blank">
          <FaGithub className="logo-socials hover:text-black" />
        </a>
        <a href="https://www.instagram.com/pdrohm/" target="_blank">
          <FaInstagram className="logo-socials hover:bg-[#da4467] hover:text-zinc-50" />
        </a>
        <a href="https://wa.link/6wde9g" target="_blank">
          <FaWhatsapp className="logo-socials hover:bg-[#12950b] hover:text-zinc-50" />
        </a>
      </div>
      <img
        className="relative mx-auto h-56 w-56 rounded-full object-cover md:h-64 md:w-64 lg:h-72 lg:w-72"
        src="./ph.png"
        alt="Pedro Henrique Picture"
      />
      <div>
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-zinc-700 dark:text-zinc-400 xl:text-lg">
          {isEnglish ? BannerText.role.en : BannerText.role.br}
        </h2>
        <h2 className="scroll-px-10 text-3xl lg:text-5xl">
          <span className="mr-4 text-zinc-800 dark:text-zinc-200">{text}</span>
          <Cursor cursorColor="#0d80bf" />
        </h2>
      </div>
    </div>
  );
}
