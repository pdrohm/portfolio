import React from "react";

import Link from "next/link";
import { useLanguage } from "../context/LanguageProvider";
import { BannerText } from "@/exports/Texts";
import { useWindowSize } from "@react-hook/window-size";
import NavList from "./NavList";

type Props = {};

export default function Header({}: Props) {
  const { isEnglish } = useLanguage();

  const [width] = useWindowSize();
  const isSmallScreen = width <= 700;

  return (
    <header className="sticky top-0 z-50 flex h-24 w-full flex-row items-center  justify-evenly bg-backgroundLight dark:bg-backgroundDark dark:text-zinc-200">
      <a href="#home">
        <div className="flex cursor-pointer items-end justify-evenly">
          <img src="./ph.png" className="w-12" alt="Logo of Pedro Picture" />
          <span className="ml-4 hidden sm:block">Pedro H. Marques</span>
        </div>
      </a>

      {!isSmallScreen ? (
        <div className="flex flex-row pt-6  ">
          <Link href="#home">
            <button className="nav-btn">
              {isEnglish ? BannerText.tabs.home.en : BannerText.tabs.home.br}
            </button>
          </Link>
          <Link href="#about">
            <button className="nav-btn">
              {isEnglish ? BannerText.tabs.about.en : BannerText.tabs.about.br}
            </button>
          </Link>

          <Link href="#experience">
            <button className="nav-btn">
              {isEnglish
                ? BannerText.tabs.experience.en
                : BannerText.tabs.experience.br}
            </button>
          </Link>

          <Link href="#skills">
            <button className="nav-btn">
              {isEnglish
                ? BannerText.tabs.skills.en
                : BannerText.tabs.skills.br}
            </button>
          </Link>

          <Link href="#projects">
            <button className="nav-btn">
              {isEnglish
                ? BannerText.tabs.projects.en
                : BannerText.tabs.projects.br}
            </button>
          </Link>

          <Link href="#contact">
            <button className="nav-btn">
              {isEnglish
                ? BannerText.tabs.contact.en
                : BannerText.tabs.contact.br}
            </button>
          </Link>
        </div>
      ) : (
        <NavList />
      )}
    </header>
  );
}
