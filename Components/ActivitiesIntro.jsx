import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import OverlapHeading from "./ReuseComponent/OverlapHeading";

function ActivitiesIntro() {
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
          className="w-10/12 lg:w-4/12   mx-auto pt-5 md:pt-12"
          alt="adventure activities"
        />

        <img
          src="/images/outdoor_fun.webp"
          alt="outdoor fun"
          className="w-11/12 lg:w-8/12 mx-auto pt-10"
        />

        <img
          src="/images/atv_bike.webp"
          className="absolute bottom-[130px] lg:bottom-[290px] w-[140px] lg:w-[450px]"
          alt="atv bike"
        />
        <img
          src="/images/wall_climbing.webp"
          alt="wall climbing"
          className="absolute top-10 right-0 w-[110px] lg:w-[400px]"
        />
      </div>

      <div className="pt-5 md:pt-10 relative">
        <OverlapHeading over={"Indoor Games"} under={"INDOOR GAMES"} />
        <img
          src="/images/indoor_games_intro.webp"
          className="w-10/12 lg:w-4/12   mx-auto -mt-4"
          alt="indoor games"
        />

        <img
          src="/images/ludo.webp"
          alt=""
          className="absolute bottom-0 right-0 w-[80px] md:w-[150px] lg:w-[200px]"
        />
      </div>
    </div>
  );
}

export default ActivitiesIntro;
