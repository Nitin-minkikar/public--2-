"use client"
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

function QuickWhatsapp() {
    
  const handleClick = () => {
    const formattedNumber = "+918867352400".replace(/\D/g, ""); // Remove non-digit characters
    const whatsappLink = `https://wa.me/${formattedNumber}`;

    window.open(whatsappLink, "_blank");
  };
    return (
        <div>
                  <div className="fixed top-[50%]  right-0 font-anek_bangla_font z-20">
        <div className="group flex items-center bg-green-700 p-2 pr-0 lg:pr-2 rounded-l-full ">
          <div className="bg-white w-max text-green-700 p-2 rounded-full lg:text-2xl ">
            <FaWhatsapp />
          </div>
          <div
            onClick={handleClick}
            className="pl-2 cursor-pointer group-hover:pr-2 font-medium  text-white select-none transition-all duration-1000 ease-in-out overflow-hidden max-w-0 group-hover:max-w-xs group-hover:pl-2"
          >
            Whatsapp
          </div>
        </div>
      </div>
        </div>
    );
}

export default QuickWhatsapp;