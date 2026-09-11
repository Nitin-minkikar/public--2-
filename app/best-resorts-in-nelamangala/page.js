"use client"

import BannerSlider from "@/Components/BannerSlider";
import RoomAmenities from "@/Components/RoomAmenities";
import StayPackages from "@/Components/StayPackages";
import StayActivities from "@/Components/StayActivities";
import Inclusions from "@/Components/Inclusions";

function Stay() {
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
        "Start your day with a hearty buffet breakfast, offering a wide range of dishes to energize you for a day full of adventure and excitement. ",
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
      title: "Dinner",
      heading: "Buffet Dinner",
      menu: {
        heading: "DINNER MENU",
        items: `Veg- Soup, Salad, Pickle, Curd, Papad, Indian Bread, Veg Starter, Veg Curry, Flavoured Rice, White Rice, Rasam, and Sweet with ice cream.
Non-Veg- Fish Starter,Chicken curry, chicken Biriyani`,
      },
      description:
        "End your day with a hearty buffet dinner, offering a wide selection of flavors to satisfy every palate.",
      imageUrl: "/images/buffet_dinner.webp",
      icon: "/images/icons/buffet_dinner_inc.svg",
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
      title: "Stay",
      heading: "Stay",
      description:
        "Relax in comfort with our range of accommodation options, from deluxe rooms to camping tents, designed for a peaceful and memorable stay.",
      imageUrl: "/images/stay.webp",
      icon: "/images/icons/stay_inc_v1.svg",
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

  const Room_Amenities = [
    {
      name: "Smart tv",
      icon: "/images/icons/smart_tv.webp",
    },
    {
      name: "hot water kettle",
      icon: "/images/icons/hot_kettle.webp",
    },
    {
      name: "toiletries",
      icon: "/images/icons/toiletries.webp",
    },
    {
      name: "Wi-Fi",
      icon: "/images/icons/wifi.webp",
    },
    {
      name: "wordrobe",
      icon: "/images/icons/wordrobe.webp",
    },
  ];

  const Resort_Fecilities = [
    {
      name: "House-Keeping Services",
      icon: "/images/icons/clean.webp",
    },
    {
      name: "Swimming Pool",
      icon: "/images/icons/swimming_pool.webp",
    },
    {
      name: "Hot Water Facility",
      icon: "/images/icons/hot_water.webp",
    },
    {
      name: "Campfire",
      icon: "/images/icons/campfire.webp",
    },
    {
      name: "Room Services",
      icon: "/images/icons/room_services.webp",
    },
  ];

 
    return (
    <div> 
 
      <BannerSlider images={images} />
      {/* Stay intro */}
      <div className="pt-12 md:flex items-center justify-between  w-11/12 mx-auto">
        <div className="relative md:w-[48%] xl:w-[45%]">
          <img
            src="/images/stay_hero_img.webp"
            alt=""
            className="h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-full mx-auto object-contain"
          />{" "}
        </div>
        <div className="pt-8 md:w-[48%] xl:w-[54%] capitalize">
          <h2 className="text-gold_c text-lg lg:text-[15px] xl:text-xl flex items-start lg:items-center  font-light">
            {" "}
            <span className="w-14 mr-2 h-[2px] opacity-50 mt-3 lg:-mt-2 bg-gold_c"></span>{" "}
            Best Stay Options at One of the Top Resorts Near Bangalore
          </h2>
          <h1 className="text-blue_c font-secondary_font text-3xl  lg:text-2xl xl:text-5xl leading-8">
            Accommodation and Tariff at The Starry Nights
          </h1>
          <p className="text-[#292929] font-light pt-8 text-lg leading-7 lg:text-base xl:text-xl">
            At The Starry Nights, one of the best resorts in{" "}
            <span className="font-normal"> Nelamangala,</span> we offer a
            variety of accommodation options to suit your needs. Choose from our{" "}
            <span className="font-normal"> Deluxe AC Rooms </span> for a cool
            and comfortable stay, or opt for
            <span className="font-normal"> the Premium Non-AC Rooms </span> that
            provide a{" "}
            <span className="font-normal">
              {" "}
              cozy, budget-friendly experience.{" "}
            </span>{" "}
            For families, our spacious Family Room is perfect for creating
            lasting memories. If you're a nature lover, enjoy an outdoor
            adventure in our{" "}
            <span className="font-normal"> Camping Tents, </span> ideal for a
            unique stay under the stars. It's the perfect choice for those
            looking for resorts near Bangalore for a night stay
          </p>
        </div>
      </div>

      <RoomAmenities
        data={Room_Amenities}
        heading={"Amenities in the Room"}
        intro={"Relax in comfort with modern amenities"}
      />

      <StayPackages />

      <Inclusions menuItems={menuItems} />

      <StayActivities />

      <RoomAmenities
        data={Resort_Fecilities}
        heading={"Facilities in the Resort"}
        intro={
          "Enjoy top-notch facilities that combine adventure, relaxation, and fun"
        }
      />
    </div>
  );
}

export default Stay;
