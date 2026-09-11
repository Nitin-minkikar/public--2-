import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import Link from "next/link";
 
function GalleryIntro() {
  return (
    <div className="mt-7 w-11/12 mx-auto">
      <CommonHeading
        heading={"Explore the Magic Before You Arrive"}
        intro={"Memories @ The Starry Nights"}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-2 lg:gap-4 ">
        <div className="col-span-2 overflow-hidden">
          <img
            src="/images/swimming_pool.webp"
            alt=""
            loading="lazy"
            className="w-full bg-gray-300 min-h-[250px] object-center hover:scale-110 duration-700 object-cover h-full"
          />{" "}
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/wall_climbing_gallery.webp"
            alt=""
            loading="lazy"
            className="w-full bg-gray-300 min-h-[250px] object-center hover:scale-110 duration-700 object-cover h-full"
          />{" "}
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/rain_dance.webp"
            alt=""
            loading="lazy"
            className="w-full bg-gray-300 min-h-[250px] object-center hover:scale-110 duration-700 object-cover h-full"
          />{" "}
        </div>

        <div className="col-span-2 md:col-span-1 overflow-hidden">
          <img
            src="/images/outdoor_park.webp"
            alt=""
            loading="lazy"
            className="w-full bg-gray-300 min-h-[250px] object-center hover:scale-110 duration-700 object-cover h-full"
          />{" "}
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/low_rope_gallery.webp"
            alt=""
            loading="lazy"
            className="w-full bg-gray-300 min-h-[250px] object-center hover:scale-110 duration-700 object-cover h-full"
          />{" "}
        </div>

        <div className="md:col-span-2 overflow-hidden">
          <img
            src="/images/ac_big_room.webp"
            alt=""
            loading="lazy"
            className="w-full bg-gray-300 min-h-[250px] object-center hover:scale-110 duration-700 object-cover h-full"
          />{" "}
        </div>
 
      </div>

      <Link href={"/resorts-from-bangalore"}
       aria-label="Guest Reviews">
      <button className="text-gold_c pl-4 text-xl my-4 w-max mx-auto block cursor-pointer">Read More</button>

      </Link>
    </div>
  );
}

export default GalleryIntro;
