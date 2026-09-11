"use client";
import BannerSlider from "../Components/BannerSlider";
import CompanyIntro from "../Components/CompanyIntro";
//import Offers from "../Components/Offers";
import Highlights from "../Components/Highlights";
import DayoutIntro from "../Components/DayoutIntro";
import StayIntro from "../Components/StayIntro";
 import ActivitiesIntro from "../Components/ActivitiesIntro";
 import GalleryIntro from "../Components/GalleryIntro";
 import Faq from "../Components/faq";
 import Events from "../Components/Events";
 import GuestReviews from "../Components/GuestReviews";
import Link from "next/link";

const Home = () => {
  const images = [
    {
      img: "/images/banners/banner_lg_5.webp",
      sm_image: "/images/banners/banner_sm_5.webp",
      md_image: "/images/banners/banner_md_5.webp",
    },
    {
      img: "/images/banners/banner_lg_6.webp",
      sm_image: "/images/banners/banner_sm_6.webp",
      md_image: "/images/banners/banner_md_6.webp",
    },
    {
      img: "/images/banners/banner_lg_1.webp",
      sm_image: "/images/banners/banner_sm_1.webp",
      md_image: "/images/banners/banner_md_1.webp",
    },{
      img: "/images/banners/banner_lg_2.webp",
      sm_image: "/images/banners/banner_sm_2.webp",
      md_image: "/images/banners/banner_md_2.webp",
    },{
      img: "/images/banners/banner_lg_3.webp",
      sm_image: "/images/banners/banner_sm_3.webp",
      md_image: "/images/banners/banner_md_3.webp",
    },{
      img: "/images/banners/banner_lg_4.webp",
      sm_image: "/images/banners/banner_sm_4.webp",
      md_image: "/images/banners/banner_md_4.webp",
    }
  ];
  const dayPackage = {
    name: "Morning Star Adventure",
    price: "Rs. 1099",
    time: "/images/day_package_time.webp",
    readmore: true,
    description: `Perfect for a quick adventure day outing near Bangalore, this package includes welcome drinks, lunch, and hi-tea snacks with adventure activities for both adults and kids. Ideal for family day outings or corporate team-building events at resorts near Magadi Road.`,
    inclusions: [
      {
        img: "/images/icons/drink.svg",
        name: "Welcome Drinks",
      },
      {
        img: "/images/icons/lunch.svg",
        name: "Lunch",
      },
      {
        img: "/images/icons/tea.svg",
        name: "Hi-tea Snacks",
      },
      {
        img: "/images/icons/activities.svg",
        name: "Activities",
      },
    ],
  };
  const fullDayPackage = {
    name: "Starry Day Escape",
    price: "Rs. 1299",
    readmore: true,
    time: "/images/full_day_package_time.webp",
    description: `Enjoy a full day of fun and adventure at one of the best adventure resorts in Bangalore. This package offers breakfast, lunch, hi-tea snacks, and outdoor activities. Perfect for those looking for a day outing at family-friendly resorts near Nelamangala.`,
    inclusions: [
      {
        img: "/images/icons/drink.svg",
        name: "Welcome Drinks",
      },
      {
        img: "/images/icons/breakfast.svg",
        name: "Breakfast",
      },
      {
        img: "/images/icons/lunch.svg",
        name: "Lunch",
      },
      {
        img: "/images/icons/tea.svg",
        name: "Hi-tea Snacks",
      },
      {
        img: "/images/icons/activities.svg",
        name: "Activities",
      },
    ],
  };
  return (
    <div>
      <BannerSlider images={images} /> <CompanyIntro />
      {/* <Offers /> */}
      <Highlights />
      <DayoutIntro dayPackage={dayPackage} fullDayPackage={fullDayPackage} />
      <StayIntro />
      <ActivitiesIntro />
      <div className="mt-8 relative">
            <img
              src="/images/blog_intro.webp"
              alt="Blog intro"
              className="min-h-[180px] object-cover"
            />
            <button className="text-yellow_c pl-4 md:text-xl font-light  absolute bottom-5  left-0 right-0 w-max mx-auto block cursor-pointer">
          <Link href="/resorts-at-bangalore" >   Read More</Link> 
            </button>
          </div>
      <GalleryIntro />
{/*      <Events />*/}
      <Faq />

      <GuestReviews />  
    </div>
  );
};

export default Home;
