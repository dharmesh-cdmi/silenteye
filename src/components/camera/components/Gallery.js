import React from "react";

import rect from "../../../assests/images/rect.png"
import i2 from "../../../assests/images/i2.png"
import i4 from "../../../assests/images/i4.png"
import i5 from "../../../assests/images/i5.png"
import i6 from "../../../assests/images/i6.png"
import gallery from "../../../assests/images/gallery.png";


function Gallery() {
  const images = [
    { src: rect },
    { src: i2 },
    { src: gallery },
    { src: i4 },
    { src: i5 },
    { src: i6 },
    { src: rect },
    { src: rect },
    { src: rect },
  ];
  return (
    <div>
      <div className="p-4 border-r-2">
        <h3 className="font-semibold text-lg lg:text-xl lg:text-gray-800 text-gray-500">Recent Captures</h3>
      </div>
      <div className="grid grid-cols-3">
        {images.map((img, idx) => {
          return <img className="border-2" src={img.src} key={idx}></img>;
        })}
        
      </div>

      
    </div>
  );
}

export default Gallery;
