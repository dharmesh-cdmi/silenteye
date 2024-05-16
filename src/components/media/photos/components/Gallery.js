import React from "react";

import img from "../../../../assests/images/img.png"

function Gallery() {
  const imgs = [
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
  ];
  return (
    <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-10 mx-5 lg:mt-10 mt-20">
      {imgs.map((img, index) => {
        return (
          <div className="flex flex-col justify-center">
            <img className="lg:h-32 lg:w-32 h-48 w-48 rounded-lg mx-auto" src={img.img} />
            <p className=" font-semibold text-sm mx-auto">{img.name}</p>
            <p className="lg:ml-2  text-xs text-gray-500 mx-auto">{img.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
