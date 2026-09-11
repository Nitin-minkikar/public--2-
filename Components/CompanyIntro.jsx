import React from "react";

function CompanyIntro() {
    return (
        <div className="pt-12 md:flex items-center justify-between  w-11/12 mx-auto">
            <div className="relative md:w-[48%] xl:w-[45%]">
                <img
                    src="/images/home_hero.webp"
                    alt="Starry Nights Best Resorts in Bangalore"
                    loading="lazy"
                    className="h-[300px] md:h-[350px]  lg:h-[400px] xl:h-[450px] w-full mx-auto object-contain"
                />{" "}
                <img
                    src="/images/about.webp"
                    className="absolute animate-spin-slow	 -top-[50px] left-0 right-0 w-[150px] xl:w-[200px] mx-auto"
                    alt="starry nights about"
                    loading="lazy"
                />
            </div>
            <div className="pt-8 md:w-[48%] xl:w-[54%] capitalize">
            <h2 className="text-gold_c text-lg lg:text-[15px] xl:text-xl flex items-start lg:items-center  font-light">
            {" "}
            <span className="w-14 mr-2 h-[2px] opacity-50 mt-3 lg:-mt-2 bg-gold_c"></span>{" "}
                    Adventure Awaits Under the Stars
                </h2>
                <h1 className="text-blue_c font-secondary_font text-3xl  lg:text-2xl xl:text-5xl leading-8">The Starry Nights: Best resorts in Bangalore</h1>
                <p className="text-[#292929]  font-light pt-8 text-lg leading-7 lg:text-lg xl:text-xl">
                    Discover The Starry Nights, one of the top day outing resorts in
                    Bangalore, where adventure meets luxury. Perfect for corporate team
                    outings, family vacations, or a relaxing getaway, our resort offers
                    exciting adventure camps near Bangalore, world-class facilities, and a
                    refreshing swimming pool. Nestled in nature, it is one of the best
                    resorts in Bangalore for families or corporates seeking memorable
                    experiences.{" "}
                </p>
                <button className="bg-gold_c mt-5 font-anek_bangla_font hover:bg-blue_c duration-500 text-white text-xl px-4 py-2 font-anek-b rounded-full">
                Discover More
                </button>
            </div>
        </div>
    );
}

export default CompanyIntro;
