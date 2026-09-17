"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/CustomSwiper.css";
import "swiper/css/effect-fade";
import { v4 as uuidv4 } from "uuid";

import {
  Pagination,
  Autoplay,
  EffectFade,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

function BannerSlider({ images }) {


  return (
    <div className="homepage_banner pt-[45px] md:pt-[65px] lg:pt-0 relative">
   
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        keyboard={true}
        effect={"fade"}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class=' ${className} '>  </span>`;
          },
        }}
        modules={[Mousewheel, Autoplay, Keyboard, EffectFade, Pagination]}
      >
        {images?.map((ele, index) => (
          <SwiperSlide key={uuidv4()}>
            <div className="w-full banner_oval_mask  max-h-[1000px] md:max-h-[700px] object-cover   lg:max-h-[1000px] ">
              <picture className="block w-full">
                <source
                  media="(min-width: 1024px)"
                  srcSet={ele.img}
                  fetchPriority="high"
                />
                <source
                  media="(min-width: 766px)"
                  srcSet={ele.md_image}
                  fetchPriority="high"
                />
                <source
                  media="(max-width: 765px)"
                  srcSet={ele.sm_image}
                  fetchPriority="high"
                />
                <img
                  src={ele.img}
                  alt="Banner"
                  fetchPriority={index < 1 ? "high" : "low"}
                  className="w-full h-full bg-gray-300  min-h-[450px] md:min-h-[500px]
                     xl:min-h-[600px] object-cover"
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
