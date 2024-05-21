import React from "react";
import Tabs from "./Tabs";
import imgg from '../../../assests/images/imgg.png'

import delet from '../../../assests/images/delete.png'

import man from '../../../assests/images/man.png'
import Convo from "./Convo";

function Messages() {
  const msgData = [
    {
      name: "Riyah Zeik",
      text: "Little brother, I am lonely and I amm looking for compa...",
      active:true
    },

    {
      name: "Riyah Zeik",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
    {
      name: "Riyah Zeik",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
    {
      name: "Riyah Zeik",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
    {
      name: "Riyah Zeik",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
    {
      name: "Riyah Zeik",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 rounded-lg border-2 mx-4  border-gray-200 mt-10">
      <div className="">
        <p className="py-4 ps-3 font-semibold border-b-2 ">Recent Messages</p>
        {msgData.map((msg, index) => {
          return <Tabs msg={msg} img={imgg} />;
        })}
      </div>
      <div className="border-l-2 ">
        <div className="border-b-2 flex py-3 ps-3 align-middle  ">
          <img className="h-10 w-10 rounded-full mt-2 " src={imgg}></img>
          <div className="ml-3">
            <h3 className="font-bold text-xl text-nowrap ">Riyah Zoik</h3>
            <p className="text-slate-500 text-nowrap">(480) 555-0109</p>
          </div>
          <div className="flex justify-end align-middle ml-60 mt-5">
            <img src={man} className="h-5 w-5 mr-3"></img>
            <img src={delet} className="h-5 w-5"></img>
          </div>
        </div>
        <Convo />

      </div>
    </div>
  );
}

export default Messages;
