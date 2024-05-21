import React, { useState } from "react";

import img from "../../../../assests/images/img.png";
import ph1 from '../../../../assests/images/image 3.png'
import ph2 from '../../../../assests/images/ph2.png'
import ph3 from '../../../../assests/images/ph3.png'
import ph4 from '../../../../assests/images/ph4.png'
import ph5 from '../../../../assests/images/ph5.png'


function Gallery() {
  const [backdrop, setBackdrop] = useState(false);
  const imgs = [
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph1, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph3, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph4, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph1, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph3, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph4, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph1, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph3, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph4, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph1, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
   
  ];
  return (
    <>
      {backdrop && (
     <div
     className="absolute w-screen h-screen top-0 left-0 bg-black flex justify-center items-center z-40"
     onClick={() => { setBackdrop(false); }}
     style={{ opacity: 0.7 }} // Set opacity for the backdrop here
   >
     <img 
       src={img} 
       className="h-56 w-1/2 mt-40 z-50"
       style={{ opacity: 1 }} // Ensure full opacity for the image
       alt="Detailed View"
     />
   </div>
   
      )}
      <p className="py-7 text-gray-500 text-center text-xs">
        Yesterday 8:02 AM
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-2 mx-5 lg:mt-10 mt-20">
        {imgs.map((img, index) => {
          return (
            <div
              className="flex flex-col justify-center cursor-pointer"
              key={index}
              onClick={() => {
                setBackdrop(true);
              }}
            >
              <img
                className="lg:h-32 lg:w-32 h-48 w-48 rounded-lg mx-auto"
                src={img.img}
              />
              <p className=" font-semibold text-sm mx-auto">{img.name}</p>
              <p className="lg:ml-2  text-xs text-gray-500 mx-auto">
                {img.desc}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
