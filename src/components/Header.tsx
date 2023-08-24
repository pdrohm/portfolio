import React from "react";

import Link from "next/link";
import { useLanguage } from "../context/LanguageProvider";
import { BannerText } from "@/exports/Texts";
import { useWindowSize } from "@react-hook/window-size";
import NavList from "./NavList";

type Props = {};

export default function Header({}: Props) {
  const { isEngActive } = useLanguage();

  const [width] = useWindowSize();
  const isSmallScreen = width <= 700;

  console.log("width", width);

  return (
    <header className="flex flex-row justify-evenly sticky top-0 w-full z-50 items-center  dark:bg-backgroundDark bg-backgroundLight dark:text-zinc-200 h-24">
      <a href="#home">
        <div className="flex items-end justify-evenly cursor-pointer">
          <img src="./ph.png" className="w-12" />
          <span className="ml-4 hidden sm:block">Pedro H. Marques</span>
        </div>
      </a>

      {!isSmallScreen ? (
        <div className="pt-6 flex flex-row  ">
          <Link href="#home">
            <button className="nav-btn">
              {isEngActive ? BannerText.tabs.home.en : BannerText.tabs.home.br}
            </button>
          </Link>
          <Link href="#about">
            <button className="nav-btn">
              {isEngActive
                ? BannerText.tabs.about.en
                : BannerText.tabs.about.br}
            </button>
          </Link>

          <Link href="#experience">
            <button className="nav-btn">
              {isEngActive
                ? BannerText.tabs.experience.en
                : BannerText.tabs.experience.br}
            </button>
          </Link>

          <Link href="#skills">
            <button className="nav-btn">
              {isEngActive
                ? BannerText.tabs.skills.en
                : BannerText.tabs.skills.br}
            </button>
          </Link>

          <Link href="#projects">
            <button className="nav-btn">
              {isEngActive
                ? BannerText.tabs.projects.en
                : BannerText.tabs.projects.br}
            </button>
          </Link>

          <Link href="#contact">
            <button className="nav-btn">
              {isEngActive
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
