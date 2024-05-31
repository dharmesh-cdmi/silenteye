import React, { useState } from "react";

import img from "../../../../assests/images/img.png";
import ph1 from "../../../../assests/images/image 3.png";
import ph2 from "../../../../assests/images/ph2.png";
import ph3 from "../../../../assests/images/ph3.png";
import ph4 from "../../../../assests/images/ph4.png";
import ph5 from "../../../../assests/images/ph5.png";
import { RxCross2 } from "react-icons/rx";

// import ph2 from "../../../../assests/images/ph2.png";
import ph21 from "../../../../assests/images/DashControl/ph2.1.png";
import ph22 from "../../../../assests/images/DashControl/ph2.2.png";
import ph23 from "../../../../assests/images/DashControl/ph2.3.png";
import ph24 from "../../../../assests/images/DashControl/ph2.4.png";
import ph25 from "../../../../assests/images/DashControl/ph2.5.png";

import ph26 from "../../../../assests/images/DashControl/ph2.6.png";
import ph27 from "../../../../assests/images/DashControl/ph2.7.png";
import ph29 from "../../../../assests/images/DashControl/ph2.9.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// import ph22 from '../../../../assests/images/ph2.2.png'
// import ph23 from '../../../../assests/images/ph2.3.png'
// import ph24 from '../../../../assests/images/ph2.4.png'
// import ph25 from '../../../../assests/images/ph2.5.png'

function Gallery() {
  const [backdrop, setBackdrop] = useState(false);
  const imgs = [
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph1, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph3, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph4, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph21, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph22, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph23, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph24, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph25, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph26, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph27, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph1, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph29, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph3, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph4, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ph1, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
  ];
  return (
    <>
      {backdrop && (
        <>
          <div
            className="absolute w-screen h-screen top-0 left-0 bg-black flex justify-center items-center z-20"
            onClick={() => {
              setBackdrop(false);
            }}
            style={{ opacity: 0.7 }} // Set opacity for the backdrop here
          ></div>

          <div className="">
            <FaChevronLeft
              className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full left-1/4"
              style={{ top: "21rem" }}
            />
            <FaChevronRight
              className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full right-1/4"
              style={{ top: "21rem" }}
            />
            <RxCross2
              className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full right-36 cursor-pointer"
              style={{ top: "7rem" }}
              onClick={() => {
                setBackdrop(false);
              }}
            />

            <img
              src={img}
              className=" absolute h-72 lg:w-1/3 lg:left-1/3 left-10 mx-auto z-30 rounded-none"
              style={{ opacity: 1 }} // Ensure full opacity for the image
              alt="Detailed View"
            />
          </div>
        </>
      )}
      <p className="lg:py-7 pt-6 text-gray-500 text-center text-xs">
        Yesterday 8:02 AM
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-2 mx-0 lg:mt-10 mt-5">
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
                className="lg:h-32 lg:w-32 h-44 w-48 rounded-lg mx-auto"
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
