import React, { useState } from "react";
import Tabs from "./Tabs";
import imgg from "../../../assests/images/imgg.png";
// import ph1 from '../../../assests/images/ph1.png'
import rr from "../../../assests/images/rr.png";
import Oval from "../../../assests/images/Oval.png";
import ph4 from "../../../assests/images/ph4.png";
import ph5 from "../../../assests/images/ph5.png";

import delet from "../../../assests/images/delete.png";
import Modal from "../../Shared/Modal";

import man from "../../../assests/images/man.png";
import Upgrade from "../../Shared/Upgrade";
import Convo from "./Convo";

function Messages() {
  const [modal, setModal] = useState(false);

  const msgData = [
    {
      name: "Riyah Zeik",
      text: "Little brother, I am lonely and I am looking for compa...",
      pic: imgg,
      active: true,
      date:"9:41 AM"
    },

    {
      name: "13654825",
      text: "The apple id code is 125544. Do not share with anyo...",
      pic: Oval,
      date:"Monday"

    },
    {
      name: "(302) 555-0107",
      text: "You asekd Didi costumer service on January 04, 2...",
      pic: Oval,
      date:"Monday"

    },
    {
      name: "(316) 555-0117",
      text: "Your onlyfans code is 815180 Dont share @onylfans......",
      pic: rr,
      date:"10/12/2024"

    },
    {
      name: "(702) 555-1122",
      text: "I am fine, thank you",
      pic: Oval,
      date:"10/12/2024"

    },
    {
      name: "(319) 555-0115",
      text: "254242 SMS login verification code, valid for 5...",
      pic: Oval,
      date:"10/12/2024"
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 rounded-lg lg:border-2 border-0 lg:mx-0 mx-0  border-gray-200 lg:mt-10 mt-0">
        <div className="">
          <p className="py-4 ps-3 font-semibold lg:border-b-2 border-0 ">Recent Messages</p>
          {msgData.map((msg, index) => {
            return <Tabs msg={msg} />;
          })}
        </div>
        <div className="lg:border-l-2 border-0">
          <div className="border-b-2 flex py-3 ps-3 align-middle  ">
            <img className="h-10 w-10 rounded-full mt-2 " src={imgg}></img>
            <div className="ml-3">
              <h3 className="font-bold text-xl text-nowrap ">Riyah Zoik</h3>
              <p className="text-slate-500 text-nowrap">(480) 555-0109</p>
            </div>
            <div className="flex justify-end align-middle lg:ml-60 ml-32 mt-5">
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <img
                    src={man}
                    className="h-5 w-5 mr-3 cursor-pointer"
                    onClick={() => setModal(true)}
                  ></img>
                </Modal.Toggle>
                <Modal.Toggle toggleName="Update">
                  <img
                    src={delet}
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setModal(true)}
                  ></img>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </div>
          </div>
          <Convo />
        </div>
      </div>
    </>
  );
}

export default Messages;
