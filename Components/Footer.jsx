import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" mt-10 pt-10">

      <div className="bg-white p-4">
        <div className="text-center lg:w-10/12 mx-auto   lg:text-start lg:flex items-center lg:justify-between">
          <div className="lg:w-7/12">
            <h2 className="font-medium text-2xl"> Approved By</h2>
            <p className="text-lg xl:text-[20px]">
              The Starry Nights Resort – An Approved Karnataka Tourism destination, offering a perfect escape into nature with luxury and adventure. Experience the best resort near Bangalore for a magical and memorable stay!
            </p>
          </div>
          <div>
            <img
              src="/images/karnataka-tourism-logo.png"
              alt="karnataka tourism"
              className="w-[140px] lg:w-[200px] xl:w-[230px] ml-auto mx-auto"
            />
          </div>
        </div></div>
      {/* <div className="flex bg-white  w-[90%] lg:w-[85%] rounded-t-xl shdow  mx-auto px-5 py-5 md:py-1 lg:py-2  items-center justify-between">
        <div className="text-sm lg:text-xl font-medium basis-4/5  lg:basis-2/5 ">
          Properties Hosted By Vivacious Destinations{" "}
        </div>
        <div className="basis-1/2">
          <img
            loading="lazy"
            src="/images/vivacious_logo.webp"
            alt="Vivacious_logo"
            className="w-3/5 lg:w-1/5 ml-auto"
          />
        </div>
      </div> */}

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <a href="https://www.tuskervalley.in/" target="_blank" 
        rel="noreferrer">
          {" "}
          <img src="/images/explore_sakleshpur.webp"   fetchpriority="low" alt="Tusker valley" />
        </a>
       
        <a href="https://www.rangitaranga.in/" target="_blank" 
        rel="noreferrer">
          <img src="/images/explore_chikmagalur.webp"   fetchpriority="low" alt="Rangi taranga" />
        </a>
        <a href="https://www.campfirecircle.in/" target="_blank" 
        rel="noreferrer">
          <img src="/images/explore_ramnagara.webp"    fetchpriority="low" alt="Campfire Circle" />
        </a>{" "}
        <a href="https://coffeesafari.in/" target="_blank" 
        rel="noreferrer">
          <img src="/images/explore_rangitaranga.webp"   fetchpriority="low" alt="Coffee safari" />
        </a>
      </div> */}
      <div className=" bg-blue_c">
        <div className="block w-11/12 lg:w-10/12  mx-auto font-light pt-8   text-white">

          <div
            className=" lg:flex justify-between 
         mx-auto  md:text-start md:text-sm lg:text-[15px] 	"
          >
            <div className="lg:w-5/12  lg:flex items-center ">
              <img
                src="/images/footer_logo.png"
                alt="Starry Nights"
                loading="lazy"
                className="w-4/5 md:w-2/5 lg:w-full    p-2 mx-auto "
              />
            </div>
            <div className="lg:w-2/5 lg:pl-3">
              <h1 className="text-2xl   md:text-xl pt-2  md:p-0 font-semibold">
                About Us
              </h1>
              <div className="flex items-center w-max max-auto pb-3  justify-between">
                <div className="w-[15px] md:w-[20px]   bg-yellow_c h-[3px] "></div>

                <div className="w-[30px] md:w-[35px]  bg-gold_c h-[3px] "></div>
              </div>

              <p>
                Welcome to The Starry Nights Located just 25 km from Bangalore, on Kanakapura Road, Bengaluru.
              </p>
              <h1 className="font-medium text-xl md:text-lg pt-3 md:pt-4">
                {" "}
                Resources
              </h1>
              <div className="w-[40px] md:text-sm lg:text-[15px]  md:w-[3vw]  md:mx-0 mb-3 bg-gold_c h-[2px] "></div>
              <div className="capitalize ">
                <h2 className="pt-1  hover:text-blue-400  ">

                  <Link href={'/day-outing-resorts-in-bangalore'}> day outing resorts bangalore </Link>
                </h2>
                <h2 className="pt-1  hover:text-blue-400  ">
                  <Link href="/best-resorts-in-nelamangala">  night stay resorts in bangalore</Link>
                </h2>

                <h2 className="pt-1  hover:text-blue-400  ">
                  <Link href={'/day-outing-resorts-in-bangalore'}>  resorts close to bangalore </Link>
                </h2>
                <h2 className="pt-1  hover:text-blue-400  ">  <Link href="/best-resorts-in-nelamangala">  resorts in bangalore</Link></h2>
                <h2 className="pt-1  hover:text-blue-400  "> <Link href="/resorts-with-activities-in-bangalore"> resort with activities in bangalore</Link> </h2>
              </div>
            </div>

            <div className="lg:w-5/12  font-normal lg:pl-6">
              <h1 className="text-2xl   md:text-xl  pt-2 md:p-0 font-semibold">
                Get In Touch
              </h1>
              <div className="flex items-center w-max max-auto pb-3  justify-between">
                <div className="w-[15px] md:w-[20px]   bg-yellow_c h-[3px] "></div>

                <div className="w-[30px] md:w-[35px]  bg-gold_c h-[3px] "></div>
              </div>
              <p className="font-normal">
                <span className="font-medium"> M : </span>{" "}
                <a href="tel:+918867352400">+91 8867352400</a> /{" "}
                <a href="tel:8867392400">+91 8867392400</a>
              </p>
              {/* <p className="pt-1">
              <span className="font-medium"> Corporate Enquires : </span>
              <a href="tel:7998787111 ">+91 7998787111 </a>
            </p> */}

              <p className="py-1 font-normal">
                {" "}
                <span className="font-medium"> Email : </span>
                <a href="mailto:bookings.starrynights@gmail.com">
                  bookings.starrynights@gmail.com
                </a>{" "}
              </p>

              <p>
                {" "}
                <span className="font-medium"> Address : </span>
                <a href="https://maps.app.goo.gl/hN8AuMZbfMe99Hfi8">
                  Sy no 165/6 Nettigere, Bolare Post , Uttarahalli Hobli, Kanakapura Main Road Bangalore South, Bangalore, 560116{" "}
                </a>{" "}
              </p>

              <h1 className="font-medium text-xl md:text-lg pt-3 md:pt-4">
                {" "}
                Follow Us
              </h1>

              <div className="w-[40px] md:text-sm lg:text-[15px]  md:w-[3vw]  md:mx-0 mb-3 bg-gold_c h-[2px] "></div>

              <div className="flex text-blue_c w-max    items-center   py-1">
                <a
                  href="https://www.instagram.com/thestarrynightsresort"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div
                    className="hover:scale-110  ease-in duration-300 text-base
               mr-2 w-max p-2 rounded-full bg-[#f5f5f5] "
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
                    className="hover:scale-110  ease-in duration-300 text-base  mr-2
                 w-max p-2 rounded-full bg-[#f5f5f5] "
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
                    className="hover:scale-110  ease-in duration-300 text-base
         mr-2 w-max p-2 rounded-full bg-[#f5f5f5] "
                  >
                    <FaYoutube />
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:w-2/12 lg:pl-3   whitespace-nowrap	">
              <h1 className="  text-2xl md:text-xl font-semibold pt-3 lg:pt-0">
                Consumer Policy
              </h1>
              <div className="flex items-center w-max max-auto pb-3  justify-between">
                <div className="w-[15px] md:w-[20px]   bg-yellow_c h-[3px] "></div>

                <div className="w-[30px] md:w-[35px]  bg-gold_c h-[3px] "></div>
              </div>
              <div className="  font-normal  ">
                <h1 className=" hover:text-blue-400  w-max  md:mx-0">
                  {" "}
                  <Link href="/cancellation-reschedules-refunds-policy"> Cancellation & Refunds </Link>
                </h1>{" "}
                <h1 className="pt-1  hover:text-blue-400 w-max md:mx-0">
                  {" "}
                  <Link href="/privacy-policy"> Privacy Policy </Link>{" "}
                </h1>
                <h1 className="pt-1  hover:text-blue-400 w-max  md:mx-0">
                  {" "}
                  <Link href="/terms-of-use"> Terms Of Use </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end mt-4 md:mt-[-170px] xl:mt-[-200px]">
          <div className=" border-t  md:border-none font-light text-sm lg:w-[77%] lg:ml-[5%] mx-auto md:whitespace-nowrap	 md:mt-5  pt-2 pb-2 ">
            <div className="md:flex  justify-evenly	items-center  text-white  text-center 	 ">
              <div className="w-full hidden md:block h-[1px] bg-[#BBB9D0] opacity-50">
                {" "}
              </div>

              <p className="md:pl-2 text-yellow_c">
                {" "}
                {/* ©  {new Date().getFullYear()} The Starry Nights All rights
                reserved */}
                ©  2026 - 2028 The Starry Nights All rights reserved
              </p>
            </div>{" "}
          </div>
          <img
            src="/images/footer_star.webp"
            className="hidden md:block w-[200px] xl:w-[250px] mr-4"
            alt=""
          />{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
