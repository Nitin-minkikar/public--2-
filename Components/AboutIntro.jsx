import React from "react";

function AboutIntro() {
    return (
        <div className="pt-12 md:flex items-center justify-between  w-11/12 mx-auto">
            <div className="relative md:w-[48%] xl:w-[45%]">
                <img
                    src="/images/about_hero_intro.webp"
                    alt=""
                    className="h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-full mx-auto object-contain"
                />{" "}
                <img
                    src="/images/about.webp"
                    className="absolute animate-spin-slow	 -top-[50px] left-0 right-0 w-[150px] xl:w-[200px] mx-auto"
                    alt=""
                />
            </div>
            <div className="pt-8 md:w-[48%] xl:w-[54%] capitalize">
            <h2 className="text-gold_c text-lg lg:text-[15px] xl:text-xl flex items-start lg:items-center  font-light">
            {" "}
            <span className="w-14 mr-2 h-[2px] opacity-50 mt-3 lg:-mt-2 bg-gold_c"></span>{" "}
            Welcome to The Starry Nights
                </h2>
                <h1 className="text-blue_c font-secondary_font text-3xl  lg:text-2xl xl:text-5xl leading-8">The Best Resort in Bangalore for weekend getaway</h1>
                <p className="text-[#292929] font-light pt-8 text-lg leading-7 lg:text-lg xl:text-xl">
                Located just 28 km from Bangalore, off Magadi Road or Tumkur Road, The Starry Nights Adventure Resort is the ultimate destination for adventure, relaxation, and special events. Whether you're seeking a day outing resort in Bangalore, a serene escape for couples, or a venue for corporate events and weddings, The Starry Nights promises an extraordinary experience for all For a perfect blend of adventure, relaxation, and impeccable service, visit The Starry Nights – your go-to resort for corporate outings, team-building events, weddings, and unforgettable day outings. Experience why we are one of the best resorts in Bangalore!
                </p>
               
            </div>
        </div>
    );
}

export default AboutIntro;
