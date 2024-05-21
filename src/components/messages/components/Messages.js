import React,{useState} from "react";
import Tabs from "./Tabs";
import imgg from '../../../assests/images/imgg.png'
// import ph1 from '../../../assests/images/ph1.png'
import ph2 from '../../../assests/images/ph2.png'
import ph3 from '../../../assests/images/ph3.png'
import ph4 from '../../../assests/images/ph4.png'
import ph5 from '../../../assests/images/ph5.png'


import delet from '../../../assests/images/delete.png'
import Modal from "../../Shared/Modal";

import man from '../../../assests/images/man.png'
import Upgrade from "../../Shared/Upgrade";
import Convo from "./Convo";

function Messages() {
  const [modal,setModal]=useState(false)
  
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
    <>
   
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
          <Modal>
            <Modal.Toggle toggleName="Update">
            <img src={man} className="h-5 w-5 mr-3 cursor-pointer" onClick={()=>setModal(true)}></img>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
            <img src={delet} className="h-5 w-5 cursor-pointer" onClick={()=>setModal(true)}></img>
            </Modal.Toggle>
              <Modal.Window windowName="Update">
                      <Upgrade/>
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
