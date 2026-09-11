"use client"


import React, { useCallback, useEffect, useState } from "react";
import Link from 'next/link'
import { v4 as uuidv4 } from "uuid";
import "../styles/navbar.css";
import { usePathname } from "next/navigation";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navdata = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Activities",
      link: "/resorts-with-activities-in-bangalore",
    },

    {
      name: "Stay",
      link: "/best-resorts-in-nelamangala",
    },
    { name: "Day Outing", link: "/day-outing-resorts-in-bangalore" },
    {
      name: "Blogs",
    //  link: "/best-adventure-resorts",
    link:"/resorts-at-bangalore"
    },
    {
      name: "Gallery",
      link: "/resorts-from-bangalore",
    },
    { name: "About Us", link: "/best-resorts-in-Bangalore" },
    {
      name: "Contact Us",
      link: "/resort-near-by-bangalore",
    },
  ];
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div
        className={` fixed  w-full z-40 max-w-[1700px] ease-in-out duration-700 ${
          isOpen && "top-0"
        }  ${visible ? "top-0" : "-top-full"}`}
      >
        <div className=" text-white text-primary   bg-blue_c shadow-md z-40">
          <div className="flex items-center py-2 md:py-4 lg:py-0 justify-between w-[90%] mx-auto">
            <div className="lg:basis-1/4 xl:basis-4/12 ">
              <div className=" w-max">
                <Link href={"/"} onClick={closeMobileMenu}>
                  <img
                    className="w-[80px] md:w-[100px] lg:w-[90px] xl:w-[110px]"
                    src="/images/logo.webp"
                    alt="Starry Nights"
                  />{" "}
                </Link>
              </div>
            </div>
            <div className="lg:hidden">
              <div
                className={`hamburger  ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
              </div>{" "}
            </div>

            {navdata?.map((ele, index) => (
              <div key={uuidv4()} className="hidden lg:block">
                <Link href={ele.link} >
                  <div className={`${pathname===ele.link? "active" : ""} capitalize different font-light py-6 	px-2 text-sm xl:text-lg`}>
                    {" "}
                    {ele.name}
                  </div>
                </Link>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      {/* <!-- Responsive Menu --> */} {/* Mobile Drawer */}
      <div
        className={`bg-blue_c z-20 h-[100vh] fixed lg:hidden left-0 right-0 top-10 overflow-scroll text-white pt-[10%] transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navdata?.map((ele, index) => (
          <div
            key={uuidv4()}
            className="flex items-center my-6 ml-[20%] text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.293 4.293a1 1 0 011.414 1.414L5.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <Link href={ele.link} onClick={closeMobileMenu}>
              <div className="different">{ele.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
