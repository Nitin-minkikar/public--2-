import React, { useCallback, useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { v4 as uuidv4 } from "uuid";
import { IoMdAdd } from "react-icons/io";

function StayCard({ item }) {
  const [currentIndex, setCurrentIndex] = useState(null); // Track the current image index
  const [openModal, setOpenModal] = useState(false); // Track if the modal is open

  // Open modal and set current image index
  const handleDisplayImage = useCallback((index) => {
    setCurrentIndex(index);
    setOpenModal(true);
  }, []);

  // Close modal and reset index
  const handleClose = useCallback(() => {
    setOpenModal(false);
    setCurrentIndex(null);
  }, []);

  // Navigate to the next image
  const handleNext = useCallback(() => {
    if (currentIndex !== null && item.images.length > 0) {
      const nextIndex = (currentIndex + 1) % item.images.length;
      setCurrentIndex(nextIndex);
    }
  }, [currentIndex, item.images.length]);

  // Navigate to the previous image
  const handlePrev = useCallback(() => {
    if (currentIndex !== null && item.images.length > 0) {
      const prevIndex = (currentIndex - 1 + item.images.length) % item.images.length;
      setCurrentIndex(prevIndex);
    }
  }, [currentIndex, item.images.length]);

  // Get the current image URL
  const getImageUrl = useCallback(() => {
    if (currentIndex !== null) {
      return item.images[currentIndex];
    }
    return "";
  }, [currentIndex, item.images]);

  // Prevent body scrolling when the modal is open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <div className="mb-5 xl:mb-10 relative text-center lg:flex justify-between items-stretch">
      {item.time && (
        <h3 className="bg-yellow_c z-10 lg:text-2xl font-anek_bangla_font absolute top-0 right-4 rounded-b-lg px-4 xl:px-6 xl:py-2 text-black font-medium py-1 w-max">
          {item.time}
        </h3>
      )}
      <img
        src={item.imageUrl}
        className="w-full lg:w-[45%] object-cover bg-gray-300 h-[400px] md:h-[500px] lg:min-h-[550px] lg:h-auto"
        alt={item.heading}
      />

      <div className="lg:w-[54%] xl:w-[53%] lg:flex lg:flex-col-reverse">
        <div className="grid grid-cols-3 gap-3 my-3 lg:my-0 lg:mt-3">
          {item?.images?.map((ele, index) => (
            <div
              key={uuidv4()}
              className="relative cursor-zoom-in"
              onClick={() => handleDisplayImage(index)}
            >
              <img
                src={ele}
                alt=""
                className="w-full h-[100px] md:h-[150px] lg:h-[130px] xl:h-[200px] 2xl:h-[260px] object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
                <h3 className="text-white opacity-100 text-4xl">
                  <IoMdAdd />
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue_c px-4 xl:px-10 py-10 text-white relative">
          <img
            src="/images/stay_intro_light_png.webp"
            alt="tp"
            className="absolute right-4 w-[250px] md:w-[400px] lg:w-[300px] bottom-4"
          />

          <img
            src="/images/int.webp"
            className="max-w-20 lg:max-w-28 select-none mb-2 mx-auto"
            alt="Best Resort in Bangalore"
          />
          <h3 className="text-sm">Adventure Awaits Under The Stars</h3>
          <h2 className="font-secondary_font text-2xl md:text-3xl lg:text-5xl pt-2">
            {item.heading}
          </h2>
          <p className="pt-2">{item.description}</p>
          <div className="flex items-center font-anek_bangla_font w-max gap-4 text-yellow_c mb-8 mx-auto">
            <div className="w-[50px] h-[2px] price_head mt-7 bg-yellow_c" />
            <div className="mt-5 text-start">
              <h1 className="text-xs md:text-sm">PER HEAD</h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl lg:-mt-1 leading-none font-semibold">
                Rs. {item.price}{" "}
                <span className="text-xs md:text-sm md:-ml-2">+ GST</span>
              </h1>
            </div>
            <div className="w-[50px] h-[2px] mt-7 price_tail bg-yellow_c" />
          </div>

          {item.inclusions.map((ele) => (
            <div
              key={uuidv4()}
              className="flex items-center gap-4 mt-2 text-start"
            >
              <img
                src={ele.icon}
                className="w-10 md:w-14 lg:w-8"
                alt={ele.name}
              />
              <h2 className="text-lg">{ele.name}</h2>
            </div>
          ))}
        </div>
      </div>

      {openModal && currentIndex !== null && (
        <Lightbox
          mainSrc={getImageUrl()}
          nextSrc={item.images[(currentIndex + 1) % item.images.length]}
          prevSrc={item.images[(currentIndex - 1 + item.images.length) % item.images.length]}
          onCloseRequest={handleClose}
          onMovePrevRequest={handlePrev}
          onMoveNextRequest={handleNext}
        />
      )}
    </div>
  );
}

export default StayCard;
