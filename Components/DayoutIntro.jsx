import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import PackageIntro from "./ReuseComponent/PackageIntro";

function DayoutIntro({dayPackage,fullDayPackage}) {
 
  return (
    <div className="bg-gradient-to-b from-[#33217A] mt-9 to-[#000047] py-10 relative">
      <div className="text-white w-11/12 mx-auto">
        <CommonHeading
          intro={"A Day of Fun, Adventure, and Unwinding"}
          intro_c="white"
          heading={`<span class='text-white'> Best Day Outing Resorts in Bangalore</span>`}
        />
        <div className="lg:w-7/12 pt-8 lg:pt-5">
          <PackageIntro data={dayPackage} />
          <div className="w-full bg-white h-[1px] opacity-35 my-6" />

          <PackageIntro data={fullDayPackage} />
        </div>
      </div>

      <img src="/images/star.webp" className="absolute top-[150px] lg:top-[200px] lg:w-7/12 ml-auto right-0  " alt="" />
      <img src="/images/cartoon.webp" className="absolute w-[150px]  opacity-30 lg:opacity-100 lg:w-[400px] bottom-0 right-0" alt="" />
    </div>
  );
}

export default DayoutIntro;
