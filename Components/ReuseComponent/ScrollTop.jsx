"use client"
import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

function ScrollTop(props) {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos > 350);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [visible]);
  
  
    const handleToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
        <div>
               {visible && (
        <div
          onClick={handleToTop}
          className="border z-30 fixed bottom-4 transition-all hover:scale-110 duration-1000 left-5 border-black p-2 text-2xl rounded-full"
        >
          <MdKeyboardDoubleArrowUp />
        </div>
      )}
        </div>
    );
}

export default ScrollTop;