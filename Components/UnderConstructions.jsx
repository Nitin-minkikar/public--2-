import React from "react";

function UnderConstructions() {
  return (
    <div className="flex  place-items-center text-center h-screen justify-center ">
      <div>
        <img
          src="logo.png"
          alt="Starry Nights"
          className="mx-auto w-[70%] lg:w-[40%] "
        />
        {/* <h1 className="text-3xl  mt-5 font-bold text-gray-600 font-['Marcellus'] lg:text-5xl ">
          {" "}
          Coming Soon
        </h1> */}

        <img className="w-64 lg:w-80  mx-auto" src="https://www.cadena.co.in/img/animation_jsons/coming.gif" alt="" />
      </div>
    </div>
  );
}

export default UnderConstructions;
