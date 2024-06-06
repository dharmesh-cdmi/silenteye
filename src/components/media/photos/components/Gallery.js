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
  const [idx,setIdx]=useState('')
  const imgs = [
    { img: img, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB",id:1 },
    { img: ph1, name: "nature-3076878.jpg", desc: "20.052024-422.64 KB",id:2 },
    { img: ph2, name: "nature-3076879.jpg", desc: "20.052024-422.64 KB",id:3 },
    { img: ph3, name: "nature-3076880.jpg", desc: "20.052024-422.64 KB",id:4 },
    { img: ph4, name: "nature-3076881.jpg", desc: "20.052024-422.64 KB",id:5 },
    { img: ph5, name: "nature-3076882.jpg", desc: "20.052024-422.64 KB",id:6 },
    { img: ph21, name: "nature-3076883.jpg", desc: "20.052024-422.64 KB",id:7 },
    { img: ph22, name: "nature-3076884.jpg", desc: "20.052024-422.64 KB",id:8 },
    { img: ph23, name: "nature-3076885.jpg", desc: "20.052024-422.64 KB",id:9 },
    { img: ph24, name: "nature-3076886.jpg", desc: "20.052024-422.64 KB",id:10 },
    { img: ph25, name: "nature-3076887.jpg", desc: "20.052024-422.64 KB",id:11 },
    { img: ph26, name: "nature-3076888.jpg", desc: "20.052024-422.64 KB",id:12 },
    { img: ph27, name: "nature-3076889.jpg", desc: "20.052024-422.64 KB",id:13 },
    { img: ph1, name: "nature-3076890.jpg", desc: "20.052024-422.64 KB",id:14 },
    { img: ph29, name: "nature-3076891.jpg", desc: "20.052024-422.64 KB",id:15 },
    { img: ph3, name: "nature-3076892.jpg", desc: "20.052024-422.64 KB",id:15 },
    { img: ph4, name: "nature-3076893.jpg", desc: "20.052024-422.64 KB",id:16 },
    { img: ph5, name: "nature-3076894.jpg", desc: "20.052024-422.64 KB",id:17 },
    { img: ph1, name: "nature-3076895.jpg", desc: "20.052024-422.64 KB",id:18 },
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
              className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full lg:left-1/4 left-2 lg:top-2/4 top-2/4"
              
            />
            <FaChevronRight
              className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full lg:right-1/4 right-3 lg:top-2/4 top-2/4"
            />
            <RxCross2
              className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full lg:right-36 right-10 cursor-pointer lg:top-24 top-10"
              onClick={() => {
                setBackdrop(false);
              }}
            />

            <img
              src={idx}
              className=" absolute h-72 lg:w-1/3 w-2/3 top-1/2 -translate-y-1/2   lg:left-1/3 left-1/2 -translate-x-1/2 mx-auto z-30 rounded-none "
              style={{ opacity: 1 }} // Ensure full opacity for the image
              alt="Detailed View"
            />
          </div>
        </>
      )}
      <p className="lg:py-7 pt-6 text-gray-500 text-center text-xs border-t lg:border-0 mt-2">
        Yesterday 8:02 AM
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-2 me-2 lg:ms-0 ms-2.5 lg:mt-10 mt-5">
        {imgs.map((img, index) => {
          return (
            <div
              className="flex flex-col justify-center cursor-pointer"
              key={index}
              onClick={() => {
                setBackdrop(true);
                setIdx(img.img)
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
