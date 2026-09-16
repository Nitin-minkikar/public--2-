"use client";
import React from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css/free-mode";
//import "../styles/galleryintro.css";
import "swiper/css/pagination";
import Link from "next/link";
import CommonHeading from "./ReuseComponent/CommonHeading";
function GalleryIntro(props) {
  const images = [
    "/images/gallery/corporate8.webp",
    // "/images/gallery/swimming_pool_4.webp",
    // "/images/gallery/swimming_pool_5.webp",
    "/images/gallery/activities3.webp",
    // "/images/gallery/activities4.webp",
    "/images/gallery/activities5.webp",
    // "/images/gallery/activities6.webp",
    "/images/gallery/activities7.webp",
    "/images/gallery/corporate3.webp",
    "/images/gallery/corporate4.webp",
  ];
  return (
    <div className="mt-8 lg:mt-10 gallery_intro">
      <CommonHeading
        heading={"Explore the Magic Before You Arrive"}
        intro={"Memories @ The Starry Nights"}
      />
      <Swiper
        className="mt-8 border lg:mt-12"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + "</span>";
        //   },
        // }}
        loop={true}
        modules={[Autoplay, FreeMode, Pagination]}
        slidesPerView={1.2}
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1600: {
            spaceBetween: 10,
            slidesPerView: 5,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={uuidv4()} className="">
            <img
              src={image}
              alt="gallery"
              loading="lazy"
              className=" w-full h-[350px] bg-gray-300 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href={"/resorts-from-bangalore"} aria-label="Guest Reviews">
        <button className="text-gold_c  text-xl my-6 w-max mx-auto block cursor-pointer">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default GalleryIntro;
