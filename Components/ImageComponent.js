import React from "react";
// import { useInView } from "react-intersection-observer";
import { memo } from "react";

const ImageComponent = ({ img, index, serial, handleDisplayImage }) => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   rootMargin: "0px 0px 50px 0px",
  // });
  return (
    <div
      // ref={ref}
      key={index}
      className={`relative 
        ${index % 2 === 0 && index % 5 !== 0 ? "md:col-span-2" : ""}
        ${index % 3 === 0 ? "col-span-2 md:col-span-1" : ""}
        ${index==13 ? "md:col-span-2" : ""}
      rounded overflow-hidden`}
    >
      <img
        src={img}
        className="h-[250px] hover:cursor-pointer w-full lg:h-[350px] object-top bg-gray-300 hover:scale-110 hover:hue-rotate-15 duration-700 object-cover"
        alt={img}
        loading="lazy"
        onClick={() => handleDisplayImage(serial, index)}
      />
    </div>
  );
};

export default memo(ImageComponent);
