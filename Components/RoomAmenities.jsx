import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";

function RoomAmenities( {data,heading,intro}) {
  
  return (
    <div className="mt-8 w-11/12 mb-10 mx-auto">
      <CommonHeading
        heading={heading}
        intro={intro}
      />
      <div className="grid grid-cols-2 mt-10  gap-5 xl:gap-8 md:grid-cols-3 lg:grid-cols-5">
        {data?.map((ele) => (
          <div key={ele.name} className="border-2 border-gold_c py-2 px-2 lg:py-5 rounded-3xl">
            <img src={ele.icon} alt="" className="h-[70px] lg:h-[100px] object-contain mx-auto" />
            <h3 className="w-6 mx-auto h-[1px] mt-4 mb-6 rotate-90 bg-gold_c"></h3>
            <h2 className="text-center capitalize text-xl xl:text-2xl text-gold_c">{ele.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomAmenities;
