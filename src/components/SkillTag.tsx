import React from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "@react-hook/window-size";

type Props = {
  left?: boolean;
  tech: Technology;
};

type Technology = {
  name: string;
  src: string;
  alt: string;
  fullName: string;
};

export default function SkillTag({ left, tech }: Props) {
  const [width] = useWindowSize();
  const isSmallScreen = width <= 640; // Small screens have a width of less than 640px

  return (
    <div className="group relative flex cursor-pointer">
      {isSmallScreen ? (
        <img
          className="border border-gray-600 rounded-full object-cover w-16 h-16 md:w-28  md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-350 ease-in-out"
          src={tech.src}
          alt={`skill tag of ${tech.name}`}        />
      ) : (
        <motion.img
          initial={{ opacity: 0, x: left ? -200 : 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border border-gray-600 rounded-full object-cover w-16 h-16 md:w-28  md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-350 ease-in-out"
          src={tech.src}
          alt={`skill tag of ${tech.name}`}    
        />
      )}

      <div className="rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-150 ease-in-out group-hover:bg-black/90 h-16 w-16 md:h-28 md:w-28 xl:w-32 xl:h-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-zinc-50 font-semibold text-xl uppercase">
            {tech.fullName}
          </p>
        </div>
      </div>
    </div>
  );
}
