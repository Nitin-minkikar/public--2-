import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import OverlapHeading from "./ReuseComponent/OverlapHeading";

function StayActivities() {
  return (
    <div className="pt-8">
      <CommonHeading
        heading={" Top Resorts with Activities in Bangalore"}
        intro={"Best Adventure & Fun"}
      />
      <div className="pt-4">
        <OverlapHeading
          over={"Adventure Activities"}
          under={"ADVENTURE ACTIVITIES"}
        />
      </div>
      <div className="relative">
        <img
          src="/images/adventure_activities.webp"
          className="w-10/12 lg:w-4/12   mx-auto pt-12"
          alt="adventure activities"
        />

        <div className="mt-8 ">
          <OverlapHeading  over={'Outdoor Fun'} under={'OUTDOOR FUN'}/>
          <img
            src="/images/stay_outdor_fun.webp"
            alt="outdoor fun"
            className="w-10/12 lg:w-4/12 mt-4  mx-auto "
          />
        </div>

        <img
          src="/images/archery_hero.webp"
          className="absolute bottom-[220px] lg:bottom-[290px] w-[80px] lg:w-[400px]"
          alt="archery"
        />
        <img
          src="/images/zipline_hero.webp"
          alt="zipline"
          className="absolute top-[10px]  lg:-top-20 right-0 w-[110px] lg:w-[400px]"
        />
      </div>

      <div className="pt-12 relative">
        <OverlapHeading over={"Indoor Games"} under={"INDOOR GAMES"} />
        <img
          src="/images/indoor_games_intro.webp"
          className="w-10/12 lg:w-4/12   mx-auto -mt-4"
          alt="indoor games"
        />

        <img
          src="/images/table_tenis_hero.webp"
          alt=""
          className="absolute bottom-0 right-0 w-[100px] md:w-[150px] lg:w-[250px]"
        />
      </div>
    </div>
  );
}

export default StayActivities;
