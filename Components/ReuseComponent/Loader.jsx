import React, { useState, useEffect } from "react";

function Loader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Hardcoded interval for 3 seconds total loading time
    const interval = 30; // Update every 30ms
    const timer = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      { <div className="bg-white flex justify-center h-[100vh] w-full items-center ">
        <div>
          <div className="relative inline-block overflow-hidden">
            {/* Transparent Layer */}
            <div className="absolute inset-0 bg-white opacity-50 animate-slide-away pointer-events-none"></div>
            <img
              src="/loader.webp"
              fetchpriority="high"
              className="block mx-auto min-h-[100px] object-contain lg:min-h-[120px] w-[100px] lg:w-[130px]"
              alt="Loading..."
            />
          </div>
          <p className="text-center text-xl lg:text-2xl font-semibold">{percentage}%</p>
        </div>
      </div>} </>
  );
}

export default Loader;
