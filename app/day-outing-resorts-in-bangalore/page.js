"use client";

import BannerSlider from "@/Components/BannerSlider";
import DayoutIntro from "@/Components/DayoutIntro";
import Inclusions from "@/Components/Inclusions";
import DayoutActivities from "@/Components/DayoutActivities";

function Dayout() {
  const images = [
    {
      img: "/images/banners/stay_lg_banner.webp",
      sm_image: "/images/banners/stay_sm_banner_v1.webp",
      md_image: "/images/banners/stay_md_banner.webp",
    },
  ];

  const menuItems = [

    {
      title: "Welcome Drink",
      heading: "Welcome Drink",
      description:
        "Start your adventure with refreshing welcome drinks, served as soon as you arrive to help you unwind and recharge.",
      imageUrl: "/images/welcome_drink.webp",
      icon: "/images/icons/welcome_drink_inc.svg",
    },
    {
      title: "Breakfast",
      heading: "Buffet Breakfast",
      menu: {
        heading: "BREAKFAST MENU",
        items: `Idli, Vada, Karabath, Kesiribath, Samber, Chutney, Bread-jam, Boiled Egg, Coffee-Tea.
`,
      },
      description:
        " Start your day with a hearty buffet breakfast, offering a wide range of dishes to energize you for a day full of adventure and excitement. ",
      imageUrl: "/images/buffet_breakfast.webp",
      icon: "/images/icons/buffet_breakfast_inc.svg",
    },
    {
      title: "Lunch",
      heading: "Buffet Lunch",
      menu: {
        heading: "LUNCH MENU",
        items: `Veg- Soup, Salad, Pickle, Curd, Papad, Indian Bread, Veg Starter, Veg Curry, Flavoured Rice, White Rice, Rasam, and Sweet with ice cream.
Non-Veg- Starter, fish gravy, egg gravy, Biriyani.
`,
      },
      description:
        "Enjoy a delicious buffet lunch featuring a variety of dishes, perfect for refueling after a morning of adventure and fun.",
      imageUrl: "/images/buffet_lunch.webp",
      icon: "/images/icons/buffet_lunch_inc.svg",
    },
  
    {
      title: "Hi Tea Snacks",
      heading: "Tea/Coffee with Snacks",
      menu: {
        heading: "HI TEA SHACKS MENU",
        items: `Tea, Coffee, Mixed Bajji`,
      },
      description:
        "Indulge in a delightful assortment of hi-tea snacks, a perfect mid-day treat to recharge during your day out.",
      imageUrl: "/images/tea_snak.webp",
      icon: "/images/icons/tea_inc.svg",
    },
    {
      title: "Activities",
      heading: "Activities",
      description:
        "Get ready for a day packed with exciting activities, including ziplining, swimming, archery, and much more to keep the adventure going!",
      imageUrl: "/images/activities.webp",
      icon: "/images/icons/activities_inc.svg",
    },
  ];

  const dayPackage = {
    name: "Morning Star Adventure",
    adults: "Rs. 1099",
    kids:"Rs. 660",
    time:'/images/day_package_time.webp',
    readmore: false,
    description: `Perfect for a quick adventure day outing near Bangalore, this package includes welcome drinks, lunch, and hi-tea snacks with adventure activities for both adults and kids. Ideal for family day outings or corporate team-building events at resorts near Magadi Road.
`,
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
    adults: "Rs. 1299",
    kids:"Rs. 779",
    readmore: false,
    time:'/images/full_day_package_time.webp',
    description: `Enjoy a full day of fun and adventure at one of the best adventure resorts in Bangalore. This package offers breakfast, lunch, hi-tea snacks, and outdoor activities. Perfect for those looking for a day outing at family-friendly resorts near Nelamangala. `,
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
    <div className="">

      <BannerSlider images={images} />

      {/* Dayout intro */}
      <div className="pt-12 md:flex items-center justify-between  w-11/12 mx-auto">
        <div className="relative md:w-[48%] xl:w-[45%]">
          <img
            src="/images/dayouting_hero.webp"
            alt=""
            className="h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-full mx-auto object-contain"
          />{" "}
        </div>
        <div className="pt-8 md:w-[48%] xl:w-[54%] capitalize">
          <h2 className="text-gold_c text-lg lg:text-[15px] xl:text-xl flex items-start lg:items-center  font-light">
            {" "}
            <span className="w-14 mr-2 h-[2px] opacity-50 mt-3 lg:-mt-2 bg-gold_c"></span>{" "}
            Family and Corporate Day Outing Packages with Adventure Activities
          </h2>
          <h1 className="text-blue_c font-secondary_font text-3xl  lg:text-2xl xl:text-5xl leading-8">
            The Starry Nights: Best Day Outing Resorts in Bangalore
          </h1>
          <p className="text-[#292929] pt-8 font-light text-lg leading-7 lg:text-base xl:text-xl">
            At The Starry Nights, one of  <span className="font-normal"> the top day outing resorts in
            Bangalore, </span> we offer exciting packages perfect for a  <span className="font-normal">  day of adventure
            and relaxation. </span>  Our  <span className="font-normal">  Morning Star Adventure </span> includes welcome drinks,
            a delicious lunch, and adventure activities, making it ideal for
            families or corporate team-building events. If you're looking for a
            more immersive experience,   <span className="font-normal">  Our Starry Day Escape </span> includes
            breakfast, lunch, and a range of outdoor activities for a fun-filled
            day. These packages are perfect for those seeking  <span className="font-normal">  resorts in
            Bangalore for day outings,</span> combining adventure and comfort for a
            memorable experience.
          </p>
        </div>
      </div>

      <DayoutIntro dayPackage={dayPackage} fullDayPackage={fullDayPackage}/>
      <Inclusions menuItems={menuItems} />
       <DayoutActivities/>
    </div>
  );
}

export default Dayout;
