import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { companies } from '@/exports/companies';
import ExperienceCard from './ExperienceCard';


function Experience() {
  return (
    <div className='h-screen flex items-center justify-center'>

    <Swiper
      spaceBetween={10}
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}

      
      
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400:{
          slidesPerView:1,
        },
        639: {
          slidesPerView: 2,
        },
        768:{
          slidesPerView:2,
        },
        1000:{
          slidesPerView:2,
        },
        1500:{
          slidesPerView:3
        },
        1700:{
          slidesPerView:3
        }
      }}

    >
     {companies.map((company, index) => (
      <SwiperSlide key={index}>
          <ExperienceCard key={company.name} company={company} />
      </SwiperSlide>
     ))}
    </Swiper>

    </div>
  )
}

export default Experience