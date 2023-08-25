import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageProvider";
import { AboutText } from "../exports/Texts";

type Props = {};

export default function About({}: Props) {
  const { isEnglish } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
      className="relative flex h-screen flex-col items-center justify-center bg-bg1 bg-cover"
    >
      <div className="flex items-center justify-center">
        <h2 className="title-section text-white">
          {isEnglish ? AboutText.mainTitle.en : AboutText.mainTitle.br}
        </h2>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-evenly px-11 text-center md:text-left lg:flex-row">
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-4 h-44 w-44 rounded-full object-cover md:h-60 md:w-60 lg:mb-0 lg:mr-20 lg:h-96 lg:w-96 lg:rounded-xl"
          src="/perfil.jpg"
          alt="PH Picture"
        />
        <div className="flex flex-col items-center justify-center rounded-xl bg-backgroundLight p-8 text-justify dark:bg-backgroundDark  ">
          <h2 className="text-md font-semibold text-zinc-800 dark:text-zinc-300 md:text-3xl ">
            {isEnglish ? AboutText.title.en : AboutText.title.br}
          </h2>
          <p className="text-clip text-sm text-zinc-950 dark:text-zinc-100 md:text-lg">
            {isEnglish ? AboutText.paragraph.en : AboutText.paragraph.br}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
