import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Autoplay } from "swiper/modules";
function GuestReviews() {
  const reviews = [
    {
      name: "Manju T",
      review:`Great location, beautiful surrounding atmosphere, great staff. Most friendly and helpful receptionist and staff ever, lovely and great first impression of resort. Everything about the resort was exceptional. It was clean, stylish, roomy with excellent service in where we had dinner. Food was good and great value for money and service was attentive and efficient. Room itself was well equipped and comfortable. I was very pleased with my stay. I hope to be back for a longer visit in the future`
    },
    {
      name: "Vasanth N S",
      review:`Today went for day out new resort new experience staffs are friendly rooms are very heygenic food was awesome and pool was so cool little improvement required in activity (somemore activities must be added ) totally Good stay and best price
`
    },
    {
      name: "Chandan M",
      review:`Great location to visit in  Weekend for Family and Friends ,Food was so hygienic and staying was to good and completely Clean and stylish  ,Friends can Enjoy with Fire camp ,Best package for Entertainment and Priceworthy  ,must visit
`
    },
    {
      name: "Kiran Kumar",
      review: `Budget friendly resort awesome nature view and best week end place more adventurous and nice place for enjoyment family and friends
`
    },
    {
      name: "Sk Nusrat",
      review: `The place is very good, we enjoyed a lot and the food was also very good, it was very tasty and And we played the game very well our family enjoyed a lot.
`
    },
    {
      name: "Mahesh Marakala",
      review: `Resort is very good garden area swming pool rooms games nice food is nice
`
    },
    {
      name: "Rubal S baidya",
      review: `The starry Nights  Bangalore Very nice and resort and very very nice an room and food n garden swimming pool very very nice Resort🥰`
    },
  ];
  function truncateIntro(intro) {
    let truncated = "";
    const words = intro.split(" ");
    for (let word of words) {
      if ((truncated + word).length > 250) break;
      truncated += word + " ";
    }
    return truncated.trim() + (truncated.length < intro.length ? "..." : "");
  }

  return (
    <div className="mt-10 w-11/12 mx-auto">
      <CommonHeading
        intro={"Your Dream Event, Our Perfect Venue"}
        heading="Guest Testimonials"
      />
      <Swiper
        className="mt-10"
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {reviews.map((ele) => (
          <SwiperSlide
            key={uuidv4()}
            className="bg-white capitalize  shadow py-7 text-center px-6"
          >
            <div className="lg:h-[350px] xl:h-[320px]">
              <img
                src="/images/icons/quotation.png"
                className="w-10 mb-3 mx-auto"
                alt="quote"
              />
              <h3 className="text-[#3D3D3D] font-light">
                {truncateIntro(ele.review)}
              </h3>
              <div className="w-[30px] h-[5px] mt-5 bg-[#FBCA05] mx-auto rounded-md"></div>

              <div className="bg-blue_c text-white shadow-inner font-anek_bangla_font text-3xl rounded-full w-[60px] h-[60px] mt-5 flex items-center justify-center mx-auto">
                {ele.name.charAt(0)}
              </div>
              <h2 className="text-[#3D3D3D] pt-2">{ele.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GuestReviews;
