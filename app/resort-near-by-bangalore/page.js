"use client"
import React, { useEffect } from "react";
import BannerSlider from "@/Components/BannerSlider";
import CommonHeading from "@/Components/ReuseComponent/CommonHeading";
import Form from "@/Components/ReuseComponent/Form";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Faq from "@/Components/faq";

function Contact(props) {
  const images = [
    {
      img: "/images/contact_us_lg_banner.webp",
      sm_image: "/images/contact_us_sm_banner.webp",
      md_image: "/images/contact_us_md_banner.webp",
    },
  ];

  
  return (
    <div>

      <BannerSlider images={images} />

      <div className="relative">
        <img
          src="/images/contact_us_page_tree.webp"
          className="absolute right-0 w-[100px] md:w-[150px] lg:-top-20 lg:w-[280px]"
          alt=""
        />

        <div className="pt-8 w-11/12 mx-auto ">
          <CommonHeading
            heading={"Contact The Starry Nights"}
            intro={
              "One of the Top Resorts Near By Bangalore for a Perfect Weekend Getaway"
            }
          />
          <h2 className="capitalize text-center  lg:w-3/5 lg:text-xl pt-4  mx-auto">
            Looking for the best weekend resorts near Bangalore? Get in touch
            with us for all your booking needs and queries. Our resorts near by
            Bangalore offer the perfect blend of adventure, comfort, and
            relaxation for an unforgettable escape!
          </h2>
        </div>
        <div className="bg-[#EBEBEB]  mt-8 py-14 lg:mt-20">
          <div className="w-11/12 mx-auto">
            <div className="lg:flex justify-around   capitalize  items-start">
              <div className="lg:w-[50%]">
                <h2 className="text-3xl font-secondary_font lg:text-5xl ">
                  {" "}
                  Get In Touch
                </h2>
                <h3 className="pt-3 text-xl font-light ">
                  Planning a getaway to one of the top weekend resorts near
                  Bangalore? Reach out to The Starry Nights for inquiries,
                  bookings, or more information about our exciting activities
                  and accommodations. We are your ideal resort near by Bangalore
                  for adventure and relaxation!
                </h3>
                <div className="mt-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-gold_c text-2xl text-white p-3 font-anek_bangla_font w-max rounded-full">
                      <FaMapMarkedAlt />
                    </div>
                    <div>
                      <h2 className="font-medium text-lg">Address</h2>
                      <h3 className="font-light lg:w-4/5">
                        {" "}
                        Ravuthanahalli, kithanahalli post Dasanapura Hobli,
                        Bangalore North,Bangalore 562130{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center py-3 gap-3">
                    <div className="bg-gold_c text-2xl text-white p-3 font-anek_bangla_font w-max rounded-full">
                      <FaPhoneVolume />
                    </div>
                    <div>
                      <h2 className="font-medium text-lg">Phone Number</h2>
                      <h3 className="font-light lg:w-4/5 whitespace-nowrap">
                        +91 8867352400 +91 8867392400
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gold_c text-2xl text-white p-3 font-anek_bangla_font w-max rounded-full">
                      <MdEmail />
                    </div>
                    <div>
                      <h2 className="font-medium text-lg">E-mail</h2>
                      <h3 className="font-light lg:w-4/5">
                        bookings.starrynights@gmail.com
                      </h3>
                    </div>
                  </div>

                  <h1 className="font-medium border-t-2 pt-10 text-xl md:text-lg mt-3 md:pt-4">
                    {" "}
                    Follow Us :
                  </h1>

                  <div className="flex text-gold_c w-max    items-center   py-1">
                    <a
                      href="https://www.instagram.com/thestarrynightsresort/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <div
                        className="hover:scale-110  ease-in duration-300 text-xl
                 md:text-lg mr-2 w-max p-2 rounded-full bg-white "
                      >
                        <FaInstagram />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/thestarrynightsresort"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <div
                        className="hover:scale-110  ease-in duration-300 text-xl md:text-lg mr-2
                 w-max p-2 rounded-full bg-white"
                      >
                        <FaFacebookF />
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/@thestarrynightsresort"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        className="hover:scale-110  ease-in duration-300 text-xl
                 md:text-lg mr-2 w-max p-2 rounded-full bg-white "
                      >
                        <FaYoutube />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-[40%] bg-white px-7 py-10 mt-10 lg:mt-0">
                <Form label_bg="white" />
              </div>
            </div>
          </div>
        </div>
        {/* Google Map */}

        <div className="my-7 w-11/12 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2211566771107!2d77.42530997410393!3d13.021583913782383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3b593f0b369d%3A0x27708cbbf4a52d2c!2sThe%20Starry%20Nights!5e0!3m2!1sen!2sin!4v1733316338394!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Faq />
      </div>
    </div>
  );
}

export default Contact;
