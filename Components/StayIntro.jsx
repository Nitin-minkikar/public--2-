import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay } from "swiper/modules";
import CommonHeading from "./ReuseComponent/CommonHeading";
import Link from "next/link";
import "../styles/highlightSwiper.css";

const StayIntro = () => {
  const stayPackages = [
    {
      title: "Deluxe AC Rooms",
      heading: "AC Deluxe Rooms",
      description: "Cool and comfortable, perfect for a peaceful stay — step into refreshing A/C rooms surrounded by nature, where soft breezes and tranquil views set the mood for total relaxation. Whether you're planning a weekend escape or a quiet weekday retreat, you'll wake up to birdsong and unwind under starlit skies. The Starry Nights Resort is where comfort meets calm, ensuring every moment feels like a serene getaway.",
      imageUrl: "/images/ac_delux_room.webp",
      occupency: "2",
      price: "3,500",
      icon: "/images/icons/delux_ac_room_gold.webp",
      wicon: "/images/icons/delux_ac_room_white.webp",
    },
    {
      title: "Premium Non-AC Rooms",
      heading: "Non-AC Premium Rooms",
      description: "Cozy and budget-friendly, with a natural breeze — our non-A/C rooms offer the perfect escape for nature lovers and budget travelers alike. Wake up to fresh air, scenic views, and the soothing sounds of the outdoors. Ideal for families, backpackers, or group getaways, these rooms combine simplicity with comfort. Enjoy a peaceful stay surrounded by greenery without stretching your budget. ",
      imageUrl: "/images/non_ac_premiun_room_v1.webp",
      occupency: "2 - 3",
      price: "3,000",
      icon: "/images/icons/premium_non_ac_gold.webp",
      wicon: "/images/icons/premium_non_ac_white.webp",
    },
    {
      title: "Family Room",
      heading: "Family Room",
      description:
        "Spacious and ideal for families, creating lasting memories — our family room comfortably accommodates up to six guests, making it perfect for quality time together. Whether it’s playing games, sharing meals, or enjoying adventures by day and stories by the campfire at night, every moment is designed for connection. Surrounded by nature, it’s the perfect setting for relaxation and bonding. ",
      imageUrl: "/images/family_room.webp",
      occupency: "6",
      price: "2,750",
      icon: "/images/icons/family_room_gold.webp",
      wicon: "/images/icons/family_room_white.webp",
    },
    {
      title: "Camping Tents",
      heading: "Camping Tents",
      description:
        "deal for nature lovers and adventurers, offering a unique outdoor experience — our cozy camping tents place you right in the heart of greenery, where every sunrise feels magical. From waking up to the sounds of birds to spending your day ziplining, sky cycling, and exploring rope courses, every moment is an adventure. Evenings come alive with campfires, music, and the starlit sky above.",
      imageUrl: "/images/camping_tents.webp",
      occupency: "2",
      price: "2,125",
      icon: "/images/icons/camping_tent_gold.webp",
      wicon: "/images/icons/camping_tent_white.webp",
      time:'Check in - 12:30 pM  check Out 11:00 AM'
    },
  ];
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
    <div className="w-11/12 pt-8  mx-auto capitalize" ref={containerRef}>
      <div className="text-center  py-4">
        <CommonHeading
          heading="Stay at the Best Resorts in Bangalore"
          intro={"Luxurious Stays in the Lap of Nature"}
        />
      </div>

      <div className="relative lg:w-11/12 mt-8   mx-auto text-light_black_c grid grid-cols-2  md:grid-cols-4 mb-4 md:mb-12">
        {stayPackages.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer font-anek_bangla_font text-base  pb-4 xl:text-2xl  uppercase text-center  ${
              index === activeIndex
                ? "border-b-2 border-yellow-500"
                : ""
            }`}
            onClick={() => handleMenuClick(index)}
          >
           
            <h2 className="px-2  pt-3">{item.title}</h2>
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
        {stayPackages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative   ml-auto rounded-2xl  md:flex items-center">
              <img
                src={item.imageUrl}
                alt={item.heading}
                className="w-full md:w-[300px] h-[300px] bg-gray-300 xl:w-[530px] xl:h-[510px] object-cover    object-center"
              />

              <div className="lg:pl-10 pt-5 lg:px-4 lg:pt-6 xl:pt-1 pb-8">
                <h1 className="font-secondary_font  text-3xl xl:text-5xl">
                  {" "}
                  {item.heading}
                </h1>
                <p className="pt-4 font-light xl:text-lg">{item.description}</p>
                <div className="flex items-center pt-3">
                  <img
                    src="/images/icons/room.webp"
                    className="w-[40px] lg:w-[60px] mt-2"
                    alt=""
                  />
                  <h3 className="pl-3 pt-2"> {item.occupency} SHARING</h3>
                </div>

                   {item.time&&<h3 className=" pt-3">
              {" "}
            {item.time}
            </h3>}
                <div className=" pt-3">
                  <h1 className="text-xs md:text-sm  ">PER HEAD</h1>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl  lg:-mt-1 leading-none font-semibold">
                    {" "}
                    Rs. {item.price}*{" "}
                    <span className="text-xs md:text-sm  md:-ml-2">+ GST </span>{" "}
                  </h1>
                </div>

                <div className="flex items-center mt-5 pt-3">
                  <div className="bg-[#231A7A] w-max rounded-full p-4">
                    <img
                      src="/images/icons/right-arrow.png"
                      className="w-[30px]  lg:w-[35px]  transform transition-transform duration-500 ease-in-out hover:translate-x-2"
                      alt=""
                    />
                  </div>
                  <button className="text-gold_c pl-4 text-xl hover:text-blue_c cursor-pointer"><Link href="/best-resorts-in-nelamangala"> Read More</Link> </button>
                </div>
              </div>

              <img
                src="/images/stay_intro_light_png.webp"
                className="absolute opacity-30 lg:opacity-100  bottom-2 w-[300px] lg:w-[350px] xl:w-[450px] right-3"
                alt=""
              />

         
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StayIntro;
