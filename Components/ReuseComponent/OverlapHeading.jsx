import React from "react";
function OverlapHeading({ over, under }) {
  return (
    <div className="relative font-bold h-[65px]  font-anek_bangla_font  md:h-[60px] xl:h-[80px]  flex justify-center text-center items-end">
      <div className="absolute top-0   text-[32px] md:text-[35px] xl:text-[60px]  lg:w-[350px]   font-bold xl:w-[870px] mx-auto leading-[55px] md:leading-[50px] xl:leading-[65px]  	">
       <h2 className="overlaytext"> {under}</h2> 
      </div>
      <div className="text-[30px] md:text-[32px] relative z-2 text-[#3E3E3E]  lg:text-[35px] xl:text-[40px] font-medium">        
        {over}
      </div>
    </div>
  );
}

export default OverlapHeading;
