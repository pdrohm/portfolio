import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex flex-row justify-between sticky top-0  max-w-7xl mx-auto z-20 xl:items-center p-4">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -600,
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.6 }}
      >
        <SocialIcon
          className="mx-5"
          url="https://linkedin.com/in/pdrohm"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          className="mx-5"
          url="https://github.com/pdr0hm"
          bgColor="white"
          fgColor="black"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          className="mx-5"
          url="https://instagram.com/pdrohm"
          target="_blank"
          rel="noopener noreferrer"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 600,
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.6 }}
      >
        <Link href="#contact">
          <div className="cursor-pointer z-0">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-gray-400/75">
              Contact me
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
