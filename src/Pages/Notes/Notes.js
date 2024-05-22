import {useState} from 'react'
import "./Notes.css"
import "../../components/BrowserHead/BrowserHead.css"
import {notesData} from "./Notes-data.js"
import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import PageExportBtn from '../../components/pageExportBtn/PageExportBtn.jsx';
import imgg from "../../assests/images/imgg.png";
import Convo from "../../components/messages/components/Convo";
import delet from "../../assests/images/delete.png";
import man from "../../assests/images/man.png";
import Tabs from "../../components/messages/components/Tabs";
import Card from "../../UI/Card";
import LocationHead from "../../UI/HeaderTab";

import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import { useMoveBack } from "../../hooks/useMoveBack.js";

function Messages() {
  const moveBacks = useMoveBack();
  const [modal, setModal] = useState(false);
  const headerData = {
    location: "Messages",
    placeHolder: "Search by Name or Phone Number",
  };

  const msgData = [
    {
      name: "Recent Rally",
      text: "We are going to rally on saturday...",

      active: true,
    },
    {
      name: "Hawaii",
      text: "Things to bring, I am lonely and I amm looking for compa...",
    },
    {
      name: "Bike Wish List",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
    {
      name: "Hawaii",
      text: "Things to bring, I am lonely and I amm looking for compa...",
    },
    {
      name: "Bike Wish List",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
    {
      name: "Bike Wish List",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
  
  ];
  return (
    <Card>
   {/* NOTES HEADER */}
    <div className="Browser-nav flex justify-between align-middle">
    {/* nav left*/}
    <div className="Browser-nav-left flex justify-center align-bottom">
         <button onClick={moveBacks} className="notNavLeftIcon shadow-lg "><FaArrowLeftLong /></button>
       <span>Notes</span>
    </div>
   
    {/* nav right*/}
  <div className="Browser-nav-right flex justify-center items-center p-4">
      {/* Search */}
      <span className="flex items-center BrowserNavRightSearch cursor-pointer shadow-lg ">
        <IoIosSearch />
        <input type="text" placeholder="Search Notes" />
      </span>

      {/* Export */}
          <Modal>
           <Modal.Toggle toggleName="Upgrade">
      <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg ">
        <TbFileExport />
        <span className="responsiveTitleHide">Export</span>
      </span>
         </Modal.Toggle>
          <Modal.Window windowName="Upgrade">
            <Upgrade />
          </Modal.Window>
          </Modal>

      {/* Filter */}
      <span className="flex items-center BrowserNavRightFilterIcon cursor-pointer shadow-lg ">
        <IoFilterSharp />
        <span className="responsiveTitleHide">Filter</span>
      </span>
    </div>
    </div>
    
   {/* " <LocationHead data={headerData} /> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 rounded-lg border-2 mx-4  border-gray-200 mt-10">
        <div className="">
          <p className="py-4 ps-3 font-semibold border-b-2 ">Recent Notes</p>
          {msgData.map((msg, index) => {
            return (
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <div
                    className={` ${
                      msg.active ? "bg-gray-200" : ""
                    } flex py-4 border-b-2 cursor-pointer `}
                  >
                    <div className="flex align-middle flex-col px-3">
                      <h3 className="font-semibold">{msg.name}</h3>
                      <p className="">{msg.text}</p>
                    </div>
                    <p className="text-gray-500 text-end mt-4">9:41 PM</p>
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            );
          })}
        </div>
        <div className="border-l-2 ">
          <div className="border-b-2 flex py-3 ps-3 align-middle  ">
            <div className="ml-3">
              <h3 className="font-bold text-xl text-nowrap ">Mode Of Transportation</h3>
              <p className="text-slate-500 text-nowrap">Created:Yesterday 8:23 AM</p>
            </div>
            <div className="flex justify-end align-middle ml-44 mt-5">
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
          <>
      <div className="text-center text-slate-500 text-sm">Last Edit: Yesterday 8:23 AM</div>
      <div className="px-2 mt-3">
        <div className=" ">
          <div className="text-black     rounded-xl w-56 px-4 font-bold text-xl text-nowrap">
          Mode Of Transportation
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          Items to prepare
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-medium text-md text-nowrap">
          We are going to rally on saturday
          </div>
          <div className="text-black     rounded-xl w-56 px-4 font-bold text-xl text-nowrap">
          </div>
         
     
        </div>
      </div>
    </>
        </div>
      </div>
    </Card>
  );
}

export default Messages;
