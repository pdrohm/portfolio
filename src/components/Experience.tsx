import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ScrollContainer from "react-scroll-horizontal";
import { useLanguage } from "../context/LanguageProvider";
import { ExperienceText } from "@/exports/Texts";
import { companies } from "@/exports/companies";

type Props = {};

export default function Experience({}: Props) {
  const { isEngActive } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="experience"
      className="flex relative h-screen snap-center lg:flex-col md:flex-col flex-row max-w-full px-10 items-center justify-evenly mx-auto mt-10"
    >
      <h2 className="title-section lg:ml-10 md:ml-10 top-2">
        {isEngActive
          ? ExperienceText.mainTitle.en
          : ExperienceText.mainTitle.br}
      </h2>
      <div className="w-full flex space-x-5 overflow-x-auto p-8 snap-x snap-mandatory lg:ml-8 scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-blue/90 xl:mt-5 md:mt-5">
        {companies.map((company) => (
          <ExperienceCard key={company.name} company={company} />
        ))}
      </div>
    </motion.div>
  );
}
