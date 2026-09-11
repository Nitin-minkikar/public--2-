"use client"
import React from "react";
import BannerSlider from "@/Components/BannerSlider";
import CommonHeading from "@/Components/ReuseComponent/CommonHeading";
import AboutIntro from "@/Components/AboutIntro";

function AboutUs() {
  const images = [
    {
      img: "/images/banners/starry_nights_lg_banner.webp",
      sm_image: "/images/banners/starry_nights_sm_banner_v1.webp",
      md_image: "/images/banners/starry_nights_md_banner.webp",
    },
  ];
  return (
    <div>

      <BannerSlider images={images} />

      <AboutIntro />

      <div className="bg-blue_c mt-8 pt-6 pb-14 lg:pb-20 lg:pt-10 about-us-page_clip-path">
        <CommonHeading
          heading={`<div class='text-white'> Why Choose The Starry Nights ? </div>`}
          intro={
            "One of the Top Resorts Near By Bangalore for a Perfect Weekend Getaway"
          }
        />

        <img
          src="/images/why.webp"
          alt="why us"
          className="w-[300px] lg:w-[450px] mb-4 mx-auto"
        />
        <h3 className="pt-5 capitalize w-11/12 mx-auto md:w-8/12 lg:w-8/12 lg:text-xl text-white text-center md:pb-7 lg:pb-12 ">
          “As one of the best resorts near Bangalore, we offer a wide array of
          experiences tailored to meet the needs of individuals, families,
          corporates, and couples. With our proximity to Tavarekere,
          Nelamangala, and Peenya Industrial Area, we're an ideal choice for a
          day outing from Bangalore or a multi-day adventure”
        </h3>
      </div>

      <div className="w-11/12 mx-auto mt-7 lg:mt-14">
        <div className="capitalize">
          <h2 className="font-secondary_font text-[#011948]  border-l-4 pl-2 md:border-l-8 border-yellow_c text-2xl md:text-3xl lg:text-4xl">
            {" "}
            Accommodations
          </h2>
          <ul className="list-disc pl-5 mt-4 leading-5 md:text-lg lg:text-xl text-[#292929]">
            <li>
              08 AC Rooms (2 Sharing): Comfortable and cool, designed for a
              peaceful stay.
            </li>

            <li className="pt-2">
              04 Non-AC Rooms (2 Sharing): Cozy and budget-friendly, offering a
              natural retreat.
            </li>

            <li className="pt-2">
              01 Family Room (6 Sharing): Spacious and perfect for family
              getaways.{" "}
            </li>

            <li className="pt-2">
              15 Camping Tents (2 Sharing): For those who love camping in
              Bangalore, enjoy a unique outdoor experience under the stars.
            </li>
          </ul>
        </div>

        <div className="capitalize mt-5">
          <h2 className="font-secondary_font text-[#011948]  border-l-4 pl-2 md:border-l-8 border-yellow_c text-2xl md:text-3xl lg:text-4xl">
            {" "}
            Activities for All
          </h2>
          <ul className="list-disc pl-5 mt-4 leading-5 md:text-lg lg:text-xl text-[#292929]">
            <li>
              At The Starry Nights, we are proud to be one of the best resorts
              in Bangalore with activities and night stay options. Whether
              you're looking for a day outing resort in Bangalore or planning a
              weekend stay, we offer a range of activities like swimming pool,
              rain dance, 15+ adventure activities, sky cycling, bonfires, and
              more, ensuring that there’s something for everyone.
            </li>
          </ul>
        </div>

        <div className="capitalize mt-5">
          <h2 className="font-secondary_font text-[#011948]  border-l-4 pl-2 md:border-l-8 border-yellow_c text-2xl md:text-3xl lg:text-4xl">
            {" "}
            Resort Highlights
          </h2>
          <ul className="list-disc pl-5 mt-4 leading-5 md:text-lg lg:text-xl text-[#292929]">
            <li>
              <span className="font-medium"> Day Outing : </span> We are one of
              the top resorts in Bangalore for day outings, offering a variety
              of activities like swimming, rope courses, and bonfires for group
              events or family outings.
            </li>

            <li className="pt-2">
              <span className="font-medium"> Night Stay : </span> Enjoy a
              peaceful evening under the stars with our night stay options,
              making us one of the best night stay resorts in Bangalore.
            </li>

            <li className="pt-2">
              <span className="font-medium">
                {" "}
                Resorts Outside of Bangalore :{" "}
              </span>{" "}
              Experience a tranquil environment away from the city's hustle, yet
              close enough for a quick getaway.
            </li>

            <li className="pt-2">
              Couples & Families: A romantic getaway or a family retreat—our
              resort offers the ideal mix of adventure and relaxation for all.{" "}
            </li>

            <li className="pt-2">
              <h3 className="font-medium">Corporate Outings & Team Building</h3>
              If you’re planning a corporate outing or team-building activities,
              The Starry Nights is equipped with exciting options such as
              ziplining, rope courses, ATV rides, and more. Our resort is
              designed to enhance collaboration, communication, and camaraderie,
              making us one of the top resorts in Bangalore for team-building
              events.{" "}
            </li>
            <li className="pt-2">
              <h3 className="font-medium">Event & Wedding Venues</h3>
              Looking for the perfect wedding venues in Bangalore or a place to
              host a memorable event? Our expansive grounds and scenic backdrops
              provide the ideal setting for any special occasion. Whether it's a
              corporate event, family celebration, or your dream wedding, we’ve
              got you covered.{" "}
            </li>
            <li className="pt-2">
              <h3 className="font-medium">Location</h3>
              Conveniently located off Magadi road, near Nelamangala and the
              Peenya Industrial Area, The Starry Nights is the perfect quick
              escape for those searching for resorts outside of Bangalore.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
