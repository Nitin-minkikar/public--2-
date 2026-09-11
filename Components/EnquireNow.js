"use client";
import React, { useEffect, useState } from "react";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import Form from "./ReuseComponent/Form";

function EnquireNow() {
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed  cursor-pointer bottom-3 right-2 bg-blue_c  text-white  text-3xl md:text-4xl p-2 md:p-3 z-10 rounded-full"
      >
        {isOpen ? <IoMdCloseCircle /> : <BiSolidMessageRoundedDots />}
      </div>
      {isOpen && (
        <div className="fixed bottom-16 md:bottom-4 z-20 px-4 md:pl-6 py-5 bg-white right-0  md:right-20">
          <Form label_bg="white" setIsOpen={setIsOpen} quickform={true} />
        </div>
      )}
    </div>
  );
}

export default EnquireNow;
