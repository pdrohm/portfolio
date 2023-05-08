import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";

type Props = {};

export default function Banner({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello! I'm PH.",
      "Web Developer.",
      "Mobile Developer.",
      "Brazilian, 23 yo.",
    ],
    loop: true,
    delaySpeed: 2200,
  });

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log("systemTheme", systemTheme);
  console.log("theme", theme);

  return (
    <div
      id="banner"
      className="h-screen relative flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-start"
    >
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32 z-30"
      >
        Toggle Mode
      </button>

      <Image
        className="relative rounded-full mx-auto object-cover lg:w-72 lg:h-72 md:w-64 md:h-64 w-56 h-56"
        src="https://media.licdn.com/dms/image/C4E03AQGKgOnvNAB2bw/profile-displayphoto-shrink_800_800/0/1663100488547?e=1687996800&v=beta&t=Dxnait8Z9vLjGtHdVBPfYuZdL_ug8yr0Ek15GHtRaWY"
        alt="PH Picture"
        width={300}
        height={300}
      />
      <div>
        <h2 className="text-sm uppercase text-zinc-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h2 className="text-3xl lg:text-4xl scroll-px-10">
          <span className="mr-4">{text}</span>
          <Cursor cursorColor="#0d80bf" />
        </h2>
        <div className="pt-6">
          <Link href="#about">
            <button className="banner-btn">About</button>
          </Link>

          <Link href="#experience">
            <button className="banner-btn">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="banner-btn">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="banner-btn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
