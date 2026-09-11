import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function PackageIntro({ data }) {
  return (
    <div className="relative mt-5 z-10">
      <div className=" md:flex w-max flex-row-reverse items-center gap-4">
        <img src={data.time} className="w-[200px] pb-3 md:pb-0" alt="" />
        <h1 className="text-3xl md:text-3xl  lg:text-4xl font-secondary_font pb-2">
          {data.name}
        </h1>
      </div>
      <p className="lg:max-w-[70%] pt-3">{data.description}</p>

      <div
        className={`lg: flex items-center lg:max-w-[65%] whitespace-nowrap	 pt-5 gap-1 md:gap-3`}
      >
        {data?.price ? (
          <div className="bg-yellow_c   font-anek_bangla_font w-max text-black rounded-full hover:bg-white duration-700 transition-all px-3 pl-5 md:pl-5 xl:pl-5 xl:pr-2 py-2">
            <div className="w-max mx-auto flex items-center justify-between">
              <div>
                <h1 className="text-xs md:text-sm  	md:font-semibold">
                  PER HEAD
                </h1>
                <h1 className="text-xl lg:text-3xl  lg:-mt-2 leading-none font-bold">
                  {" "}
                  {data.price}*{" "}
                  <span className="text-xs md:text-sm  md:-ml-2 font-semibold">
                    +GST{" "}
                  </span>{" "}
                </h1>
              </div>

              <div className="bg-blue_c rounded-full p-2 ml-3">
                <img
                  src="/images/icons/right-arrow.png"
                  className="w-[15px] md:w-[20px] lg:w-[30px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-yellow_c flex items-center font-anek_bangla_font w-max pl-2  text-black rounded-full  ">
              <div className="w-max mx-auto flex items-center px-3 md:pl-5 xl:pl-5 xl:pr-2 py-2 justify-between">
                <div>
                  <h1 className="text-xs md:text-sm  	md:font-semibold">
                   ADULTS
                  </h1>
                  <h1 className="text-xl lg:text-3xl  lg:-mt-2 leading-none font-bold">
                    {" "}
                    {data.adults}*{" "}
                    <span className="text-xs md:text-sm  md:-ml-2 font-semibold">
                      +GST{" "}
                    </span>{" "}
                  </h1>
                </div>
              </div>
              <div className="w-max mx-auto bg-white pr-4 px-3 md:pl-5 xl:pl-5 xl:pr-4 py-2 rounded-full flex items-center justify-between">
                <div>
                  <h1 className="text-xs md:text-sm  	md:font-semibold">
                    KIDS
                  </h1>
                  <h1 className="text-xl lg:text-3xl  lg:-mt-2 leading-none font-bold">
                    {" "}
                    {data.kids}*{" "}
                    <span className="text-xs md:text-sm  md:-ml-2 font-semibold">
                      +GST{" "}
                    </span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
        {data.readmore && (
          <div className="text-xl   font-anek_bangla_font text-yellow_c font-light px-2 py-2 flex justify-center items-center">
            <Link
              href={"/day-outing-resorts-in-bangalore"}
              aria-label="Read more about day outings in Ramanagara"
            >
              <button>Read More </button>
            </Link>
          </div>
        )}
      </div>

      <h3 className="text-yellow_c pt-3"> Includes : </h3>
      <div className="flex lg:max-w-[85%] flex-wrap gap-3 pt-2">
        {data.inclusions.map((ele) => (
          <div
            key={uuidv4()}
            className="flex justify-between items-center gap-2"
          >
            <img src={ele.img} alt={ele.name} />
            <p className="text-xl lg:text-base">{ele.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageIntro;
