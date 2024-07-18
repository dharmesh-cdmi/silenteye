import React from "react";

import rect from "../../../assests/images/rect.png";
import i2 from "../../../assests/images/i2.png";
import i4 from "../../../assests/images/i4.png";
import i5 from "../../../assests/images/i5.png";
import i6 from "../../../assests/images/i6.png";
import gallery from "../../../assests/images/gallery.png";
import i51 from "../../../assests/images/i51.png";
import i52 from "../../../assests/images/i52.png";
import i53 from "../../../assests/images/i53.png";
import i61 from "../../../assests/images/i61.png";
import i62 from "../../../assests/images/i62.png";
import i63 from "../../../assests/images/i63.png";
import i71 from "../../../assests/images/i71.png";
import i72 from "../../../assests/images/i72.png";
import i73 from "../../../assests/images/i73.png";
import i81 from "../../../assests/images/i81.png";
import i82 from "../../../assests/images/i82.png";
import i83 from "../../../assests/images/i83.png";

function Gallery(props) {
  const images = [
    { src: rect },
    { src: i2 },
    { src: gallery, onClick: props.onClick },
    { src: i4 },
    { src: i5 },
    { src: i6 },
    { src: i51 },
    { src: i52 },
    { src: i53 },
    { src: i61 },
    { src: i62 },
    { src: i63 },
    { src: i71 },
    { src: i72 },
    { src: i73 },
    { src: i81 },
    { src: i82 },
    { src: i83 },
  ];
  return (
    <div>
      <div className="p-4 border-r-2">
        <h3 className="font-semibold text-lg lg:text-xl lg:text-gray-800 text-gray-500">
          Recent Captures
        </h3>
      </div>
      <div className="grid grid-cols-3">
        {images.map((img, idx) => {
          return <img className="border-2" src={img.src} key={idx} onClick={img.onClick} />;
        })}
      </div>
    </div>
  );
}

export default Gallery;
