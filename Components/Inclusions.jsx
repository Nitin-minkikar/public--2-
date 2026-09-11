import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay } from "swiper/modules";
import CommonHeading from "./ReuseComponent/CommonHeading";


const Inclusions = ({menuItems}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

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
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className=" md:w-10/12  mx-auto capitalize"
      ref={containerRef}
    >
      <div className="text-center  py-4">
       <CommonHeading heading="Inclusions" intro={'The Starry Nights, one of the top day outing resorts in Bangalore'} />

      </div>

      <div className="relative text-light_black_c flex flex-wrap justify-center gap-2 mb-4 mt-4 md:mb-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer font-secondary_font text-xl font-medium py-2 px-4 ${
              index === activeIndex ? "bg-gold_c text-white" : "bg-gray-200"
            }`}
            onClick={() => handleMenuClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay]}
      
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="lg:flex p-4 text-light_black_c justify-between items-end bg-gray-100">
              <div className="lg:w-1/2 md:pr-4">
                <img src={item.icon} alt={item.title} />

                <h2 className="text-3xl lg:text-5xl py-2 font-secondary_font ">
                  {item.heading}
                </h2>
                <div className="h-1 border-b-2 border-[#989696] mb-2 w-11/12"></div>
                <p className="text-lg font-light text-[#2A2A2A]">{item.description}</p>

                {item.menu && (
                  <div className="pt-3 pb-2 text-lg font-light text-[#2A2A2A]">
                    <div
                      id="menu_heading"
                      className="pl-3 pr-7 font-anek_bangla_font  bg-[#FBCA05]  flex items-center justify-center text-[#353535] font-medium  md:text-lg "
                    >
                      {item.menu.heading}
                    </div>
                    <p className="pt-2 text-light_black_c text-base md:text-lg">
                      {item.menu.items}
                    </p>
                  </div>
                )}
              </div>
              <div className="lg:w-1/2">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full rounded-l-full pt-4 lg:pt-0 object-cover"
                />
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Inclusions;
