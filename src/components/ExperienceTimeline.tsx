import { useLanguage } from "@/context/LanguageProvider";
import { companies } from "@/exports/companies";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { techsIcon } from "./TechsIcon";
import { ExperienceText } from "@/exports/Texts";
import { useTheme } from "@/context/ThemeProvider";

export default function ExperienceTimeline() {
  const { isEnglish } = useLanguage();
  const { isDarkMode } = useTheme();

  console.log("isDarkMode", isDarkMode);

  const title = isEnglish
    ? ExperienceText.mainTitle.en
    : ExperienceText.mainTitle.br;

  function openLink() {
    window.open(
      `https://www.linkedin.com/in/pdrohm/?section=experience`,
      "_blank",
    );
  }

  return (
    <div className="mt relative flex justify-center">
      <h2 className="title-section underline decoration-[#a1a1aa] underline-offset-8 ">
        {title}
      </h2>
      <div className="mt-24">
        <VerticalTimeline lineColor="rgb(161 161 170)" animate>
          {companies.map((company, i) => {
            const filteredIcons = techsIcon.filter((icon) =>
              company.technologies.includes(icon.name),
            );
            const language = isEnglish ? "en" : "br";
            const activities = company.activities[language];
            const role = company.role[language];

            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={
                  isDarkMode
                    ? {
                        background: "#3E4145",
                        color: "#D6D9DE",
                      }
                    : { background: "#D6D9DE", color: "rgb(36,36,36)" }
                }
                contentArrowStyle={{ borderRight: "7px solid #71717a" }}
                date={company.duration}
                dateClassName="dark:text-zinc-200 text-zinc-800 "
                iconStyle={{ background: "#71717a)", color: "#fff" }}
                icon={
                  <img
                    src={company.logo}
                    alt={`Picture of the ${company} logo`}
                    className="rounded-full"
                  />
                }
              >
                <div className="cursor-pointer" onClick={() => openLink()}>
                  <h3 className="vertical-timeline-element-title font-bold">
                    {role}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {company.name}
                  </h4>
                  <ul className="ml-7  list-disc space-y-3  text-sm leading-tight ">
                    {activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>

                  <div className=" mt-5 flex  items-center justify-center space-x-1 md:space-x-3">
                    {filteredIcons.map((icon) => (
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        key={icon.name}
                        className="h-10 w-10"
                      />
                    ))}
                  </div>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
