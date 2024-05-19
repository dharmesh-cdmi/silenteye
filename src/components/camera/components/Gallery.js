import React from "react";

import rect from "../../../assests/images/rect.png"

function Gallery() {
  const images = [
    { src: rect },
    { src: rect },
    { src: rect },
    { src: rect },
    { src: rect },
    { src: rect },
    { src: rect },
    { src: rect },
    { src: rect },
  ];
  return (
    <div>
      <div className="p-4 border-r-2">
        <h3 className="font-semibold text-xl">Recent Captures</h3>
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
