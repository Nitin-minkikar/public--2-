import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import CommonHeading from "./ReuseComponent/CommonHeading";
import ImageComponent from "./ImageComponent";

function GalleryImageComponent({ handleDisplayImage, imageCategories }) {

  return (
    <div>
      {imageCategories.map((category, serial) => (
        <div key={uuidv4()}>
          <h1 className="py-6 text-center">
            <CommonHeading heading={category.heading} />
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {category.images.map((img, index) => (
              <ImageComponent
                key={uuidv4()}
                img={img}
                index={index}
                serial={serial}
                handleDisplayImage={handleDisplayImage}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(GalleryImageComponent);
