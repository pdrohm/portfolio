import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ScrollContainer from "react-scroll-horizontal";

type Props = {};

export type company = {
  name: string;
  role: string;
  technologies: string[];
  duration: string;
  activities: string[];
  logo: string;
  companyIn: string;
};

export default function Experience({}: Props) {
  const companies: company[] = [
    {
      name: "Senai Soluções Digitais",
      role: "Mobile Developer",
      technologies: ["reactNative", "js", "ts"],
      duration: "12/2022 - actual work",
      activities: [
        "Worked on the development of a safety monitoring and management platform designed to enable real-time monitoring of worker safety in the field, ensure compliance with current OSH legislation, and prevent accidents, fines, and legal issues. Contributed to the migration of the project from Angular to React, implementing new features and ensuring code compatibility.",
        "As a Mobile Applications Responsible for the National Department team, was responsible for developing and maintaining mobile applications with React Native. Assisted in the publication of applications to both Apple Store and Play Store, and contributed to the development of various SENAI applications by implementing new features and addressing bugs. ",
      ],
      logo: "/senai.jpeg",
      companyIn:
        "https://www.linkedin.com/company/senai-solu%C3%A7%C3%B5es-digitais",
    },
    {
      name: "Innova Connect Sistemas",
      role: "Web Developer Jr",
      technologies: ["vue", "php", "postgres", "node"],
      duration: "05/2022 - 12/2022",
      activities: [
        "Contributed to multiple plataforms of a leading natural products distributor in Brazil, including sales systems, customer and salesman websites, using Vue, PHP and Node.js. I was responsible to develop a telesales platform for a supplements and nutraceuticals company within the group.",
      ],
      logo: "/innova.jpeg",
      companyIn: "https://www.linkedin.com/company/innovaconnect/",
    },
    {
      name: "Senai Soluções Digitais",
      role: "Web Developer Intern",
      technologies: ["symfony", "php", "react", "postgres"],
      duration: "06/2021 - 05/2022",
      activities: [
        "Completed an internship with the National Department, contributing to the development and planning of an internal team tool, which consisted of a Kanban board for task tracking, time management, sprint workflow and other funcionalities.",
      ],
      logo: "/senai.jpeg",
      companyIn:
        "https://www.linkedin.com/company/senai-solu%C3%A7%C3%B5es-digitais",
    },
    {
      name: "OSTEC Business Security",
      role: "Support Team - N1",
      technologies: ["linux", "freebsd"],
      duration: "10/2020 - 06/2021",
      activities: [
        "Worked as an N1 Support Analyst, responsible for analyzing network issues and vulnerabilities, firewall configurations, email systems, and website and program blocking through proxies and firewalls.",
      ],
      logo: "/ostec.jpeg",
      companyIn: "https://www.linkedin.com/company/ostec-security/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="experience"
      className="flex relative h-screen snap-center lg:flex-col md:flex-col flex-row max-w-full px-10 items-center justify-evenly mx-auto"
    >
      <h2 className="title-section lg:ml-10 md:ml-10">Experience</h2>
      <div className="w-full flex space-x-5 overflow-x-auto p-8 snap-x snap-mandatory lg:ml-8 scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-blue/90">
        {companies.map((company) => (
          <ExperienceCard key={company.name} company={company} />
        ))}
      </div>
    </motion.div>
  );
}
