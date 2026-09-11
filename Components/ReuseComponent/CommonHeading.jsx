import React from "react"
import DOMPurify from 'dompurify';

function CommonHeading({ intro, heading, more ,intro_c="gold_c"}) {
 

  return (
    <div className="text-center relative z-10 w-11/12 mx-auto  capitalize">
      <img
        src="/images/int.webp"
        className="max-w-10 lg:max-w-14  select-none mb-2 mx-auto"
        alt='Best Resort in bangalore'
      /> 
      {intro && (
        <h5 className={`text-md  xl:text-lg text-${intro_c} max-w-[90%] md:max-w-[500px] xl:max-w-[700px] mx-auto md:pb-2`}>
          {" "}
          {intro}
        </h5>
      )}
      <h1
        className={`relative  leading-none text-blue_c  
           font-secondary_font md:max-w-[750px] mx-auto	text-3xl md:text-3xl lg:text-5xl `}
      >
        <p dangerouslySetInnerHTML={{ __html: heading }} />
      </h1>

      {more && (
        <h5
          className={` pt-2 max-w-[95vw] md:max-w-[40vw] mx-auto leading-tight text-xs md:text-md  xl:text-lg md:pt-2  font-medium  pb-1`}
        >
          {more}
        </h5>
      )}
    </div>
  );
}

export default CommonHeading;
