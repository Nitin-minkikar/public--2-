import React, { useEffect, useRef } from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "../styles/highlightSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Highlights() {
  const highlightsData = [
    {
      name: "A/c Deluxe rooms",
      icon: "/images/icons/ac.webp",
      description: `Perfect for those seeking a blend of luxury and tranquility.`,
      img: "/images/ac_delux_highlight.webp",
    },
    {
      name: "Adventure Activities",
      icon: "/images/icons/adventure_activities_icon.webp",
      description: `Perfect for adventure seekers looking for an action-packed experience.`,
      img: "/images/adventure_activities_highlight.webp",
    },
    {
      name: "Swimming Pool",
      icon: "/images/icons/swimming_pool_icon.webp",
      description: `Take a refreshing dip in our spacious swimming pool`,
      img: "/images/swimming_pool_highlight.webp",
    },
    {
      name:"Pet friendly",
      icon: "/images/icons/pet_friendly_icon.webp",
      description: `A resort escape you and your pet will both love.`,
      img: "/images/pet_friendly_highlight.webp",
    },
    // {
    //   name: "Atv bike ride",
    //   coming_soon: true,
    //   icon: "/images/icons/atv_bike_ride_icon.webp",
    //   description: `Experience the thrill of off-road riding with our ATV bike rides`,
    //   img: "/images/atv_bike_highlight.webp",
    // },
    {
      name: "Sky Cycling",
      icon: "/images/icons/sky_cycling_icon.webp",
      description: `Pedal your way through the sky with our exciting sky cycle`,
      img: "/images/sky_cycling_highlight.webp",
    },

    {
      name: "team building",
      icon: "/images/icons/team_building_icon.webp",
      description: `Experience team bonding with our unique team-building adventures!`,
      img: "/images/team_building_highlight.webp",
    },
  ];

  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (swiperRef.current) {
          if (entry.isIntersecting) {
            swiperRef.current.autoplay.start();
          } else {
            swiperRef.current.autoplay.stop();
          }
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mt-7">
      <CommonHeading
        intro="Swimming Pool Resort in Bangalore"
        heading="Highlights"
      />

      <div
        className="pt-8 highlight_banner  w-11/12 mx-auto  disble_select"
        ref={containerRef}
      >
        <Swiper
          className="mb-5 lg:mb-10  p-10 relative"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1.2}
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class=' ${className} '>  </span>`;
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
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
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1224: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {highlightsData.map((ele) => (
            <SwiperSlide
              key={uuidv4()}
              className="shadow-lg capitalize lg:max-w-[350px] border-b-4 border-gold_c mb-14 lg:mb-20  bg-white"
            >
              <div>
                <div className="relative ">
                  <img
                    src={ele.img}
                    alt={ele.name}
                    loading="lazy"
                    fetchPriority="low"
                    className="w-full  h-[200px] select-none object-cover custom-clip"
                  />
                  <img
                    src={ele.icon}
                    className="absolute select-none left-0 right-0
	  bottom-[-20px] block w-[60px] mx-auto"
                    loading="lazy"
                    alt={ele.name}
                  />
                  {ele.coming_soon&&<div className="bg-yellow_c font-medium text-xl w-max font-anek_bangla_font px-2 absolute top-2 right-0"> Coming Soon</div>}
                </div>

                <div className="text-[#292929] text-center h-[160px] pt-8 pb-4 px-4">
                  <h2 className="text-2xl font-secondary_font ">
                    {" "}
                    {ele.name}{" "}
                  </h2>
                  <p className="leading-5 pt-3">{ele.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="hidden absolute -bottom-5 left-0 right-0 z-10 md:flex lg:w-2/5  text-[35px] justify-around items-center mx-auto my-5">
            {/* Left Arrow */}
            <div className="custom-prev-button cursor-pointer transition ease-in-out hover:scale-110">
              <GoArrowLeft />
            </div>

            {/* Right Arrow */}
            <div className="custom-next-button cursor-pointer transition ease-in-out hover:scale-110">
              <GoArrowRight />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Highlights;
