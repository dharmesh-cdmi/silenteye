import React from "react";


import s from '../../../../assests/images/ss.png'
import s2 from '../../../../assests/images/ss2.png'

import ss2 from '../../../../assests/images/sss2.png'
import ss3 from '../../../../assests/images/ss3.png'
import ss4 from '../../../../assests/images/ss4.png'
import ss5 from '../../../../assests/images/ss5.png'
import ss6 from '../../../../assests/images/sss5.png'




function Gallery() {
  const imgs = [
    {
      img: s,
      name: "nature-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: s2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ss2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ss3, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },

    {
      img: ss4,
      name: "nature-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: ss5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
  ];

  const imgs2= [
    {
      img: ss6,
      name: "nature-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: s2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ss2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ss3, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },

    {
      img: ss4,
      name: "nature-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: ss5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
  ];
  return (
    <div className="lg:mt-10 mt-0">
      <p className="pt-6 lg:py-7 text-gray-500 text-center text-xs">Today 8:02 AM</p>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-5 mx-0 lg:mt-10 mt-5 ">
        {imgs.map((img, index) => {
          return (
            <div className="flex flex-col justify-center" key={index}>
              <img className="lg:h-32 lg:w-32 h-44 w-48 rounded-lg mx-auto" src={img.img} />
              <p className=" font-semibold text-sm mx-auto">{img.name}</p>
              <p className="lg:ml-4 text-xs text-gray-500 mx-auto">{img.desc}</p>
            </div>
          );
        })}
      </div>
      <p className="lg:py-7 pt-6 text-gray-500 text-center text-xs">
        Yesterday 8:02 AM
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-5 mx-0 lg:mt-10 mt-5 ">
        {imgs2.map((img, index) => {
          return (
            <div className="flex flex-col justify-center" key={index}>
              <img className="lg:h-32 lg:w-32 h-44 w-48 rounded-lg mx-auto" src={img.img} />
              <p className=" font-semibold text-sm mx-auto">{img.name}</p>
              <p className="lg:ml-4 text-xs text-gray-500 mx-auto">{img.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
