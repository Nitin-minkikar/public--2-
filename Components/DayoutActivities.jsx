import React, { useEffect, useState } from "react";
import OverlapHeading from "./ReuseComponent/OverlapHeading";
import CommonHeading from "./ReuseComponent/CommonHeading";







const Activities = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update `isMobile` based on the current window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 426);
    };

    // Initial check
    handleResize();

    // Add a resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup the listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:flex text-[#282828] font-anek_bangla_font gap-2 lg:gap-5 flex-wrap items-center justify-center text-center">
      {data?.map((ele, index) => (
        <div
          key={ele.name}
          className={`${ele?.left_border && "lg:border-r-2"} mt-4 ${
            index % 2 === 0 &&
            index !== data.length - 1 &&
            isMobile
              ? "border-r-2"
              : ""
          } px-6 lg:px-7 xl:px-10 lg:mt-10 xl:mt-16`}
        >
          <img
            src={ele.icon}
            alt={ele.name}
            className="h-[70px] lg:h-[60px] xl:h-[80px] object-contain mx-auto"
          />
          <h2 className="text-xl pt-2 lg:pt-4 lg:text-2xl xl:text-3xl">{ele.name}</h2>
        </div>
      ))}
    </div>
  );
};

function DayoutActivities() {
  const adventure_activities = [
    {
      name: "Zipline",
      icon: "/images/icons/zipline_gold.webp",
      left_border: true,
    },
    {
      name: "Sky Cycle",
      icon: "/images/icons/sky_cycle_gold.webp",
      left_border: true,
    },
    {
      name: "Low Rope Course",
      icon: "/images/icons/low_rope_course_gold.webp",
      left_border: true,
    },
    {
      name: "Archery",
      icon: "/images/icons/archery_gold.webp",
      left_border: true,
    },
    {
      name: "Tyre Wall Climbing",
      icon: "/images/icons/tyre_wall_climbing.webp",
    },
    {
      name: "Wall Climbing",
      icon: "/images/icons/wall_climbing_gold.webp",
      left_border: true,
    },

    {
      name: "ATV Bike Ride (Paid)",
      left_border: true,

      icon: "/images/icons/atv_bike_ride_gold.webp",
    },
    {
      name:"Lader Climbing",

         icon: "/images/icons/ladder_climbing.webp",
  
    }
  ];

  const outdoor_fun = [
    {
      name: "Swimming Pool",
      icon: "/images/icons/swimming_pool_gold.webp",
      left_border: true,
    },
    {
      name: "Rain Dance",
      icon: "/images/icons/rain_dance_gold.webp",
      left_border: true,
    },
    {
      name: "Cricket",
      icon: "/images/icons/cricket_gold.webp",
      left_border: true,
    },
    {
      name: "Volley Ball",
      icon: "/images/icons/volley_ball_gold.webp",
      left_border: true,
    },
    {
      name: "Badminton",
      icon: "/images/icons/badminton_gold.webp",
    },
  ];

  const indoor_games = [
    {
      name: "Table Tennis",
      icon: "/images/icons/table_tennis_gold.webp",
      left_border: true,
    },
    {
      name: "Chess",
      icon: "/images/icons/chess_gold.webp",
      left_border: true,
    },
    {
      name: "Carrom",
      icon: "/images/icons/carrom_gold.webp",
      left_border: true,
    },
    {
      name: "Ludo",
      icon: "/images/icons/ludo_gold.webp",
    },
  ];

  return (
    <div className="pt-10 w-11/12  mx-auto">
      <CommonHeading
        intro="Best Adventure & Fun"
        heading=" Top Resorts with Activities in Bangalore"
      />

      <div className="pt-6">
        <OverlapHeading
          over={"Adventure Activities"}
          under={"ADENTURE ACTIVITIES"}
        />

        <div className="pt-7">
          <Activities data={adventure_activities} />
        </div>
      </div>

      <div className="pt-20">
        <OverlapHeading over={"Outdoor Fun"} under={"OUTDOOR FUN"} />

        <div className="pt-7">
          <Activities data={outdoor_fun} />
        </div>
      </div>

      <div className="pt-20">
        <OverlapHeading over={"Indoor Games"} under={"INDOOR GAMES"} />

        <div className="pt-7">
          <Activities data={indoor_games} />
        </div>
      </div>
    </div>
  );
}

export default DayoutActivities;
