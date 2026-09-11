import React from "react";

function Events(props) {
  return (
    <div className="bg-[#0E0D15] relative  text-white py-10 lg:py-24">
      <div className="lg:flex w-11/12 mx-auto  justify-between items-center relative z-10">
        <img
          src="/images/icons/upcoming.svg"
          className="w-12  hidden lg:block"
          alt=""
        />
        <div className="w-11/12 mx-auto lg:w-4/12 ">
          <h2 className="font-secondary_font text-4xl lg:leading-[70px] lg:text-6xl">
            {" "}
            Events Tailored To Perfection
          </h2>
          <p className="text-lg pt-1 font-light">
            Your Dream Event, Our Perfect Venue
          </p>
          <button className="bg-gold_c px-3  text-xl py-1 mt-5 text-white font-light font-anek_bangla_font">
            Read More
          </button>
        </div>
        <div className="w-11/12 mx-auto lg:w-6/12 md:flex  items-center md:gap-4 lg:gap-10   mt-5 lg:mt-0">
          <img
            src="/images/christmas.webp"
            className="w-full md:w-6/12 shadow-2xl mx-auto "
            alt="chirstmas party"
          />
          <img
            src="/images/new_year_party.webp"
            alt="new year party"
            className="mt-5 md:mt-0 w-full shadow-2xl md:w-6/12"
          />
        </div>
      </div>
      <img
        src="/images/icons/blue_oval.svg"
        className="absolute bottom-0 z-0 left-0 w-28 lg:w-[200px]"
        alt=""
      />
      <img
        src="/images/icons/right_blue_oval.svg"
        className="absolute top-0 z-0 right-0 w-28 lg:w-[200px]"
        alt=""
      />
    </div>
  );
}

export default Events;
