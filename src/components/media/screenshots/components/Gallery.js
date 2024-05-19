import React from "react";


import s from '../../../../assests/images/ss.png'
import s2 from '../../../../assests/images/ss2.png'



function Gallery() {
  const imgs = [
    {
      img: s,
      name: "nature-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: s2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: s, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: s2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },

    {
      img: s,
      name: "nature-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: s2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
  ];
  return (
    <div className="mt-10">
      <p className="py-7 text-gray-500 text-center text-xs">Today 8:02 AM</p>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-2 mx-5 lg:mt-10 mt-20 ">
        {imgs.map((img, index) => {
          return (
            <div className="flex flex-col justify-center" key={index}>
              <img className="lg:h-32 lg:w-32 h-48 w-48 rounded-lg mx-auto" src={img.img} />
              <p className=" font-semibold text-sm mx-auto">{img.name}</p>
              <p className="lg:ml-4 text-xs text-gray-500 mx-auto">{img.desc}</p>
            </div>
          );
        })}
      </div>
      <p className="py-7 text-gray-500 text-center text-xs">
        Yesterday 8:02 AM
      </p>
    </div>
  );
}

export default Gallery;
