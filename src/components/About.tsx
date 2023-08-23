import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageProvider";
import { AboutText } from "../exports/Texts";

type Props = {};

export default function About({}: Props) {
  const { isEngActive } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
      className="flex relative flex-col items-center justify-evenly h-screen bg-bg1 bg-cover"
    >
      <div className="flex justify-center items-center">
        <h2 className="title-section text-white">
          {" "}
          {isEngActive ? AboutText.mainTitle.en : AboutText.mainTitle.br}
        </h2>
      </div>
      <div className="flex flex-col  relative  text-center md:text-left md:flex-row max-w-6xl px-11 justify-evenly mx-auto items-center">
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="relative md:rounded-xl rounded-full mx-auto object-cover md:w-96 md:mr-20 md:h-96 w-44 h-44"
          src="/perfil.jpg"
          alt="PH Picture"
        />
        <div className="flex flex-col items-center justify-center p-8 text-justify bg-background rounded-xl  sm:mb-16">
          <h2 className="text-zinc-400 font-semibold text-4xl ">
            {isEngActive ? AboutText.title.en : AboutText.title.br}
          </h2>
          <p className="text-clip">{isEngActive ? AboutText.paragraph.en : AboutText.paragraph.br}</p>
        </div>
      </div>
    </motion.div>
  );
}
