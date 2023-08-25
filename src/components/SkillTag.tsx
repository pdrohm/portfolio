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
          className="duration-350 h-16 w-16 rounded-full border border-gray-600 object-cover  filter transition ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
          src={tech.src}
          alt={`skill tag of ${tech.name}`}
        />
      ) : (
        <motion.img
          initial={{ opacity: 0, x: left ? -200 : 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="duration-350 h-16 w-16 rounded-full border border-gray-600 object-cover  filter transition ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
          src={tech.src}
          alt={`skill tag of ${tech.name}`}
        />
      )}

      <div className="absolute z-0 h-16 w-16 rounded-full opacity-0 transition duration-150 ease-in-out group-hover:bg-black/90 group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="text-xl font-semibold uppercase text-zinc-50">
            {tech.fullName}
          </p>
        </div>
      </div>
    </div>
  );
}
