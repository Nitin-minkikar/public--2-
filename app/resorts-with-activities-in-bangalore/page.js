"use client";
import React from 'react';

import CommonHeading from "@/Components/ReuseComponent/CommonHeading";
import BannerSlider from '@/Components/BannerSlider';


const ActivitiesCard = ({ data }) => {
  return (
    <div className=" md:flex flex-wrap lg:w-11/12 xl:w-10/12 justify-center gap-8 mx-auto">
      {data?.map((ele) => (
        <div key={ele}>
          <img src={ele} alt={ele} className="w-11/12 mx-auto md:w-[200px] lg:w-[250px] xl:w-[350px] mt-4 " />{" "}
        </div>
      ))}
    </div>
  );
};

function Activities() {

    // useEffect(()=>{
    //     window.scrollTo(0,0)
    // },[])
  const images = [
    {
      img: "/images/banners/activities_lg_banner.webp",
      sm_image: "/images/banners/activities_sm_banner_v1.webp",
      md_image: "/images/banners/activities_md_banner.webp",
    },
  ];
  const activities = [
    "/images/zipline_activities.webp",
    "/images/sky_cycle_activities.webp",
    "/images/low_rope_course_activities.webp",
    "/images/archery_activities.webp",
    "/images/ladder_climbing_activities.webp",
    "/images/wall_climbing_activities.webp",
    "/images/tyre_wall_climbing_activities.webp",
    // "/images/atv_bike_ride_activities.webp",
  ];
  const outdoor_fun=[
    "/images/swimming_pool_activities.webp",
    "/images/rain_dance_activities.webp",
    "/images/cricket_activities_v1.webp",
    "/images/volley_ball_activities.webp",
    "/images/badminton_activities_v1.webp",
    "/images/bonfire_activities.webp"
  ]
  const indoor_games=[
    "/images/table_tennis_activities.webp",
    "/images/chess_activities.webp",
    "/images/carrom_activities.webp",

  ]
  return (
    <div>


      <BannerSlider images={images} />
      <div className="pt-12 relative">
        {" "}
        <CommonHeading
          heading={"Top Resorts with Activities in Bangalore"}
          intro={"Best Adventure & Fun"}
        />
        <div className="mt-4 lg:mt-10">
          <div className="relative font-bold h-[65px]  font-anek_bangla_font  md:h-[60px] xl:h-[80px]  flex justify-center text-center items-end">
            <div
              className={`absolute top-0   text-[32px] md:text-[35px] xl:text-8xl lg:w-[450px]   font-bold xl:w-[1070px]  mx-auto leading-[55px] md:leading-[50px] xl:leading-[65px] `}
            >
              <h2 className="activities_page_overlaytext">
                ADVENTURE ACTIVITIES{" "}
              </h2>
            </div>
            <div className="text-[30px] md:text-[32px] relative z-2 text-[#3E3E3E]  lg:text-[35px] xl:text-[40px] font-medium">
              Adventure Activities
            </div>
          </div>
        </div>
        <img src="/images/zipline_vector.webp" alt="zipline" className="absolute -top-4 left-0  w-[150px] md:w-[200px] lg:w-[300px] lg:-top-20 xl:w-[450px]" />
       <img src="/images/icons/adventure_activities_hero.webp" className="w-[50px] mt-4 mx-auto" alt="adventure activities" />
        <ActivitiesCard data={activities} />
      </div>



      <div className="pt-12 relative">
        {" "}
   
        <div className="mt-4 lg:mt-10">
          <div className="relative font-bold h-[65px]  font-anek_bangla_font  md:h-[60px] xl:h-[80px]  flex justify-center text-center items-end">
            <div
              className={`absolute top-0   text-[32px] md:text-[35px] xl:text-8xl lg:w-[450px]   font-bold xl:w-[1070px]  mx-auto leading-[55px] md:leading-[50px] xl:leading-[65px] `}
            >
              <h2 className="activities_page_overlaytext">
                OUTDOOR FUN{" "}
              </h2>
            </div>
            <div className="text-[30px] md:text-[32px] relative z-2 text-[#3E3E3E]  lg:text-[35px] xl:text-[40px] font-medium">
              Outdoor Fun
            </div>
          </div>
        </div>
        <img src="/images/atv_bike_from_right_side.webp" alt="atv bike" className="absolute top-8 right-0  w-[150px] md:w-[200px] lg:w-[300px] lg:top-[-250px] xl:w-[450px]" />
       <img src="/images/icons/outdoor_fun_hero.webp" className="w-[50px] mt-4 lg:mt-12 mx-auto" alt="adventure activities" />
        <ActivitiesCard data={outdoor_fun} />
      </div>




      <div className="pt-12 relative">

        <div className="mt-4 lg:mt-10">
          <div className="relative font-bold h-[65px]  font-anek_bangla_font  md:h-[60px] xl:h-[80px]  flex justify-center text-center items-end">
            <div
              className={`absolute top-0   text-[32px] md:text-[35px] xl:text-8xl lg:w-[450px]   font-bold xl:w-[1070px]  mx-auto leading-[55px] md:leading-[50px] xl:leading-[65px] `}
            >
              <h2 className="activities_page_overlaytext">
                INDOOR GAMES
              </h2>
            </div>
            <div className="text-[30px] md:text-[32px] relative z-2 text-[#3E3E3E]  lg:text-[35px] xl:text-[40px] font-medium">
              Indoor Games
            </div>
          </div>
        </div>
        <img src="/images/archery_hero.webp" alt="achery" className="absolute top-32 left-0  w-[100px] md:w-[200px] lg:w-[200px] lg:top-8 xl:w-[250px]" />
       <img src="/images/icons/indoor_games_hero.webp" className="w-[50px] mt-4 lg:mt-8 mx-auto" alt="Indoor games" />
        <ActivitiesCard data={indoor_games} />

        <img src="/images/ludo_activities.webp" alt="ludo"  className="w-11/12 md:w-5/12  lg:w-5/12 mx-auto mt-7"/>
      </div>







    </div>
  );
}

export default Activities;
