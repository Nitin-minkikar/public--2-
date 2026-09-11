import React from 'react';
import { FiPhoneCall } from "react-icons/fi";


function QuickCall() {
    return (
        <div> <div className="fixed top-[42%] md:top-[44%] lg:top-[43%] xl:top-[40%] 2xl:top-[41%] right-0 z-20">
        {/* Call Button */}
        <div className="group flex font-anek_bangla_font items-center bg-blue_c p-2 pr-0 lg:pr-2 rounded-l-full">
          <div className="bg-white w-max text-blue_c p-2 rounded-full lg:text-2xl">
            <FiPhoneCall />
          </div>
          <div className="pl-2 group-hover:pr-2 cursor-pointer font-medium  text-white select-none transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:pl-2">
            {" "}
            <a href="tel:+91 8867352400"> +91 8867352400</a>
          </div>
        </div>
      </div>
            
        </div>
    );
}

export default QuickCall;