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
      className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] snap-start flex-col items-center justify-evenly text-center xl:flex-row xl:space-y-0 xl:px-9"
    >
      <h3 className="title-section top-40 md:top-20 lg:top-20">
        {isEnglish ? SkillsText.mainTitle.en : SkillsText.mainTitle.br}
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {techsIcon.map(
          (tech) =>
            tech.show && <SkillTag key={tech.name} tech={tech} left={true} />,
        )}
      </div>
    </motion.div>
  );
}
