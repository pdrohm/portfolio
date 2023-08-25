import { FooterText } from "@/exports/Texts";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";

type Props = {};

export default function Footer({}: Props) {
  const { isEnglish } = useLanguage();

  return (
    <div className="flex h-auto flex-col bg-zinc-800 text-zinc-200 dark:bg-zinc-300 dark:text-zinc-900  ">
      <div className="md:2/3 mx-auto mb-10 flex flex-col items-center justify-between border-b-[1px] border-zinc-800 md:flex-row xl:w-2/3 xl:flex-row">
        <div className="flex h-72 flex-col items-center justify-center md:items-start xl:items-start">
          <h3 className="mb-5 text-start text-lg uppercase md:text-2xl xl:text-2xl">
            Pedro H. Marques
          </h3>
          <p className="xl:text-md  md:text-md h-5 w-96 text-sm">
            {isEnglish ? FooterText.paragraph.en : FooterText.paragraph.br}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start xl:items-start">
          <h3 className="mb-8 h-5 text-lg uppercase md:mb-8 md:text-2xl xl:mb-8 xl:text-2xl">
            {isEnglish ? FooterText.socials.en : FooterText.socials.br}
          </h3>
          <div className="mb-5 flex flex-row justify-start md:mb-0 xl:mb-0 ">
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
              <FaInstagram className="logo-socials hover:bg-[#da4467] hover:text-zinc-50" />
            </a>
            <a
              href="https://wa.link/6wde9g"
              target="_blank"
              className="container-socials"
            >
              <FaWhatsapp className="logo-socials hover:bg-[#12950b] hover:text-zinc-50" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-10 items-center justify-center">
        <p className="text-[11px]">
          {isEnglish ? FooterText.madeBy.en : FooterText.madeBy.br}
          <span className="underline">
            <a href="#home">Pedro H. Marques.</a>
          </span>
        </p>
      </div>
    </div>
  );
}
