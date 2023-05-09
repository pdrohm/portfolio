import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
      className="flex relative flex-col items-center justify-evenly h-screen"
    >
      <div className="flex justify-center items-center">
        <h2 className="title-section">ABOUT</h2>
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
        <div className="flex flex-col items-center justify-center p-8 text-justify ">
          <h2 className="text-zinc-400 font-semibold text-4xl mb-12">
            Tech Journey
          </h2>
          <p>
            Im Pedro Henrique Marques, 23yo. I live in the South of Brazil, in a
            state called Santa Catarina. I work in the technology field since
            2019, starting as user support, having more contact with databases,
            and later as support for networks and digital security. Since the
            beginning of 2021, Ive been working with programming and had
            experiences with JavaScript, TypeScript, ReactJS, NodeJS, Git, HTML,
            CSS, React Native, Vue, PHP, Symfony, GraphQL, Redux, and other
            technologies and tools in the industry.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
