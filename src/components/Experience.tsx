import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { companies } from "@/exports/companies";
import ExperienceCard from "./ExperienceCard";
import { ExperienceText } from "@/exports/Texts";
import { useLanguage } from "@/context/LanguageProvider";

function Experience() {
  const { isEnglish } = useLanguage();

  return (
    <div
      className="relative flex h-screen items-center justify-center"
      id="experience"
    >
      <h2 className="title-section">
        {" "}
        {isEnglish ? ExperienceText.mainTitle.en : ExperienceText.mainTitle.br}
      </h2>
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 2,
          },
          1500: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 3,
          },
        }}
      >
        {companies.map((company, index) => (
          <SwiperSlide key={index}>
            <ExperienceCard key={company.name} company={company} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Experience;
