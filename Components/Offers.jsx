import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Autoplay } from "swiper/modules";

function Offers() {
  const OffersImages = [
    "/images/offers/offer1.webp",
    "/images/offers/offer2_v1.webp",
  ];
  return (
    <div className="mt-8 w-11/12 mx-auto">
      <CommonHeading
        heading={`Unlock exclusive offers and discounts`}
        intro={"Special Offers"}
      />
      <div className="pt-5 w-full lg:w-10/12 mx-auto">
        <div className="">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {OffersImages.map((ele) => (
              <SwiperSlide key={uuidv4()}>
                <div className="overflow-hidden rounded-lg ">
                  <img
                    src={ele}
                    alt="offer"
                    loading="lazy"
                    className="w-full min-w-[300px]  min-h-[200px] lg:min-h-[280px] lg:max-h-[400px] bg-gray-300 object-cover duration-700 hover:scale-110"
                  />{" "}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Offers;
