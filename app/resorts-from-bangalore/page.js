"use client";

import GalleryImageComponent from "@/Components/GalleryImageComponent";
import React, { useState, useCallback, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imageCategories = [
  {
    heading: "Stay",

    images:[
      "/images/gallery/stay1.webp",
      "/images/gallery/stay2.webp",
      "/images/gallery/stay3.webp",
      "/images/gallery/stay4.webp",
      "/images/gallery/stay5.webp",
      "/images/gallery/stay6.webp",
   
      "/images/gallery/stay8.webp",
    ]
  },

  {
    heading: "Swimming Pool",
  
     images: [
      "/images/gallery/swimming_pool_6.webp",
      "/images/gallery/swimming_pool_2.webp",
      "/images/gallery/swimming_pool_3.webp",
      "/images/gallery/swimming_pool_4.webp",
      "/images/gallery/swimming_pool_5.webp",
      "/images/gallery/swimming_pool_7.webp",
      "/images/gallery/swimming_pool_1.webp",
    ],
  },
  {
    heading: "Activities",
  
    images:[
      "/images/gallery/activities1.webp",
      "/images/gallery/activities2.webp",
      "/images/gallery/activities3.webp",
      "/images/gallery/activities4.webp",
      "/images/gallery/activities5.webp",
      // "/images/gallery/activities6.webp",
      "/images/gallery/activities7.webp",
      "/images/gallery/activities8.webp",
      "/images/gallery/activities9.webp",
      "/images/gallery/activities10.webp",
      "/images/gallery/activities11.webp",
      "/images/gallery/activities12.webp",
      "/images/gallery/activities13.webp",
      "/images/gallery/activities14.webp",
      "/images/gallery/activities15.webp",
      "/images/gallery/activities16.webp",
      "/images/gallery/activities17.webp",
    ]
  },

 {
  heading:"Corporate Events",
  images: [
    "/images/gallery/corporate1.webp",
    "/images/gallery/corporate2.webp",
    "/images/gallery/corporate3.webp",
    "/images/gallery/corporate4.webp",
    "/images/gallery/corporate5.webp",
    "/images/gallery/corporate6.webp",
    "/images/gallery/corporate7.webp",
  ],

 },
  {
    heading: "Restuarant",
    images: [
      "/images/restaurant6.webp",
      "/images/restaurant2.webp",
      "/images/restaurant3.webp",
      "/images/restaurant4.webp",
      "/images/restaurant5.webp",

      "/images/restaurant8.webp",
      "/images/restaurant1.webp",
    ],
  },
];

function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState({
    serial: null,
    index: null,
  });
  const [openModal, setOpenModal] = useState(false);

  const handleDisplayImage = useCallback((serial, index) => {
    setCurrentIndex({ serial, index });
    setOpenModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex.serial !== null && currentIndex.index !== null) {
      const nextIndex =
        (currentIndex.index + 1) %
        imageCategories[currentIndex.serial].images.length;
      setCurrentIndex({ ...currentIndex, index: nextIndex });
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex.serial !== null && currentIndex.index !== null) {
      const prevIndex =
        (currentIndex.index -
          1 +
          imageCategories[currentIndex.serial].images.length) %
        imageCategories[currentIndex.serial].images.length;
      setCurrentIndex({ ...currentIndex, index: prevIndex });
    }
  }, [currentIndex]);

  const getImageUrl = useCallback(() => {
    if (currentIndex.serial !== null && currentIndex.index !== null) {
      return imageCategories[currentIndex.serial].images[currentIndex.index];
    }
    return "";
  }, [currentIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <div className="pt-14 lg:pt-20 w-11/12 mx-auto">
      <GalleryImageComponent
        imageCategories={imageCategories}
        handleDisplayImage={handleDisplayImage}
      />

      {openModal && currentIndex.index !== null && currentIndex.serial !== null && (
        <Lightbox
          open={openModal}
          close={handleClose}
          index={currentIndex.index}
          slides={
            imageCategories[currentIndex.serial]?.images?.map((src) => ({ src })) || []
          }
        />
      )}
    </div>
  );
}

export default GalleryPage;
