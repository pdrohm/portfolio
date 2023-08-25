import React from "react";
import { motion } from "framer-motion";
import SkillTag from "./SkillTag";
import { techsIcon } from "./TechsIcon";
import { useLanguage } from "../context/LanguageProvider";
import { SkillsText } from "@/exports/Texts";

type Props = {};

export default function Skills({}: Props) {
  const { isEnglish } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      id="skills"
      className=" flex flex-col relative snap-start xl:flex-row h-screen text-center justify-evenly items-center max-w-[2000px] xl:px-9 min-h-screen xl:space-y-0 mx-auto"
    >
      <h3 className="title-section top-40 lg:top-20 md:top-20">
        {isEnglish ? SkillsText.mainTitle.en : SkillsText.mainTitle.br}
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {techsIcon.map(
          (tech) =>
            tech.show && <SkillTag key={tech.name} tech={tech} left={true} />
        )}
      </div>
    </motion.div>
  );
}
