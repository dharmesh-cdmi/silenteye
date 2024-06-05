import React,{useState} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import vi from './vi.png'

import v from "../../../assests/images/vid.png";
import v2 from "../../../assests/images/vid2.png";
import ph2 from '../../../assests/images/ph2.png'
import ph3 from '../../../assests/images/ph3.png'
import ph4 from '../../../assests/images/ph4.png'


import v1 from '../.././../assests/images/vid2.1.png'
import v22 from '../.././../assests/images/vid2.2.png'
import v3 from '../.././../assests/images/vid2.3.png'
import v4 from '../.././../assests/images/vid2.4.png'
import v5 from '../.././../assests/images/vid2.5.png'

import v6 from '../.././../assests/images/vid2.6.png'
import v7 from '../.././../assests/images/vid2.7.png'
import v8 from '../.././../assests/images/vid2.8.png'
import v9 from '../.././../assests/images/vid2.9.png'




function Gallery() {
  const [backdrop, setBackdrop] = useState(false);
  const [idx,setIdx]=useState('')
  const vids = [
    { vid: v, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v2, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v22, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v3, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v4, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v6, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v7, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v8, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v9, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v5, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },
    { vid: v4, name: "nature-3076877.jpg", desc: "20.052024-422.64 KB" },


  ];
  return (
    <>
      {backdrop && (
        <>
          <div
            className="absolute w-screen h-screen top-0 left-0 overflow-hidden bg-black flex justify-center items-center z-20"
            onClick={() => {
              setBackdrop(false);
            }}
            style={{ opacity: 0.7 }} // Set opacity for the backdrop here
          ></div>

          <div className="">
        
            <RxCross2
              className="bg-gray-300 absolute h-12 w-12  p-2  z-50  rounded-full lg:right-36 right-10 cursor-pointer lg:top-16 top-10"
              onClick={() => {
                setBackdrop(false);
              }}
            />

            <img
              src={vi}
              className=" absolute lg:h-full h-2/4 lg:w-full w-full lg:left-2/4 -translate-x-1/2  left-2/4 mx-auto z-30 rounded-none top-2/4 -translate-y-1/2 "
              style={{ opacity: 1 }} // Ensure full opacity for the image
              alt="Detailed View"
            />
          </div>
        </>
      )}
      <p className=" pt-6 lg:py-7 text-gray-500 text-center text-xs lg:border-0  border-t  ">
        Yesterday 8:02 AM
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 lg:ms-0 ms-2.5 gap-6 lg:me-0 me-2.5  lg:mx-2 mx-0 lg:mt-10 mt-5">
        {vids.map((vid, index) => {
          return (
            <div className="flex flex-col justify-center cursor-pointer" key={index}  onClick={() => {
              setBackdrop(true);
              setIdx(vid.vid)
            }}>
              <img
                className="lg:h-32 lg:w-32 h-44 w-48 rounded-lg mx-auto"
                src={vid.vid}
              />
              <p className=" font-semibold text-sm mx-auto">{vid.name}</p>
              <p className="lg:ml-2 text-xs text-gray-500 mx-auto">
                {vid.desc}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
