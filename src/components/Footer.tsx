import { FooterText } from "@/exports/Texts";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";

type Props = {};

export default function Footer({}: Props) {
  const { isEngActive } = useLanguage();

  return (
    <div className="flex bg-zinc-800 dark:bg-zinc-300 text-zinc-200 dark:text-zinc-900 h-auto flex-col  ">
      <div className="flex xl:flex-row md:flex-row flex-col border-b-[1px] items-center justify-between mx-auto border-zinc-800 mb-10 xl:w-2/3 md:2/3">
        <div className="h-72 flex flex-col xl:items-start md:items-start items-center justify-center">
          <h3 className="text-start xl:text-2xl md:text-2xl text-lg mb-5 uppercase">
            Pedro H. Marques
          </h3>
          <p className="h-5  xl:text-md md:text-md text-sm w-96">
            {isEngActive ? FooterText.paragraph.en : FooterText.paragraph.br}
          </p>
        </div>

        <div className="flex flex-col items-center xl:items-start md:items-start">
          <h3 className="xl:text-2xl md:text-2xl text-lg xl:mb-8 md:mb-8 mb-8 uppercase h-5">
            {isEngActive ? FooterText.socials.en : FooterText.socials.br}
          </h3>
          <div className="flex flex-row justify-start xl:mb-0 md:mb-0 mb-5 ">
            <a
              href="https://www.linkedin.com/in/pdrohm/"
              target="_blank"
              className="container-socials"
            >
              <FaLinkedin className="logo-socials hover:text-[#0D62BC]" />
            </a>
            <a
              href="https://github.com/pdrohm"
              target="_blank"
              className="container-socials"
            >
              <FaGithub className="logo-socials hover:text-black" />
            </a>
            <a
              href="https://www.instagram.com/pdrohm/"
              target="_blank"
              className="container-socials"
            >
              <FaInstagram className="logo-socials hover:text-zinc-50 hover:bg-[#da4467]" />
            </a>
            <a
              href="https://wa.link/6wde9g"
              target="_blank"
              className="container-socials"
            >
              <FaWhatsapp className="logo-socials hover:text-zinc-50 hover:bg-[#12950b]" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-10">
        <p className="text-[11px]">
          {isEngActive ? FooterText.madeBy.en : FooterText.madeBy.br}
          <span className="underline">
            <a href="#home">Pedro H. Marques.</a>
          </span>
        </p>
      </div>
    </div>
  );
}
