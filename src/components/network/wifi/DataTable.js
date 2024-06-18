import React from "react";
import del from "../../../assests/images/delete.png";
import { FaWifi } from "react-icons/fa6";

import { CiClock1, CiLock } from "react-icons/ci";

import Modal from "../../Shared/Modal";
import Upgrade from "../../Shared/Upgrade";
import wi from "../../../assests/images/wif.png";
import wif from "../../../assests/images/wifi.png";
import { MdOutlineCastConnected,MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TbWorldLatitude } from "react-icons/tb";
import { TbWorldLongitude } from "react-icons/tb";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import Button from "../../Shared/Button";


import { IoMdTime } from "react-icons/io";

function DataTable() {
  const contents = [
    {
      name: "Home 5G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 65.643,
      longitude: -70.7128,
    },
    {
      name: "MacD 4G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "5d 12m 5s",
      latitude: 30.433,
      longitude: -79.153,
    },
    {
      name: "My House 11",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "6d 1m 17s",
      latitude: 12.875,
      longitude: -43.65,
    },
    {
      name: "Piper Lun",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "45m 5s",
      latitude: 32.658,
      longitude: -81.903,
    },
    {
      name: "Starbucks 5G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "7d 56m 23s",
      latitude: 46.8,
      longitude: -40.6553,
    },
    {
      name: "400 App",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "1d 34m 26s",
      latitude: 35.878,
      longitude: -40.2121,
    },
    {
      name: "Lemon Lake",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "8d 1m 9s",
      latitude: 32.7458,
      longitude: -67.232,
    },
    {
      name: "IOS Off",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: " 17m 18s",
      latitude: 40.7128,
      longitude: -87.343,
    },
  ];
  return (
    <>
      <div className="lg:hidden mt-1 px-1.5 ">
        <p className=" border-b text-gray-500">Wifi Network History</p>
        {contents.map((content) => {
          return (
            <div className="mt-4 border-b">
              <div className="flex justify-between ">
                <h3 className="text-md font-semibold text-start">
                  Hot Wifi 4G
                </h3>
                <div className="flex ">
                  <img src={wif} className="h-6 w-6" />
                  <CiLock className="w-6 h-6 mr-0.5 font-medium" />
                  <img src={del} className="h-6 w-6" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <MdOutlineCastConnected className="w-4 h-4 mt-1 mr-1 text-gray-500" />
                  <p className="text-gray-500">Connected</p>
                </div>
                <div className="flex">
                  <p>{content.connected}</p>
                  <p className="ml-2">{content.time}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <IoMdTime className="w-4 h-4 mt-1 mr-1 text-gray-500" />
                  <p className="text-gray-500">Usage Time</p>
                </div>
                <p>{content.usage}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <TbWorldLatitude className="w-4 h-4 mt-1 mr-1 text-gray-500" />

                  <p className="text-gray-500">Latitude</p>
                </div>
                <p>{content.latitude}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <TbWorldLongitude className="w-4 h-4 mt-1 mr-1 text-gray-500" />

                  <p className="text-gray-500">Longitude</p>
                </div>
                <p>{content.longitude}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:grid lg:grid-cols-6 grid-cols-6 mt-10 lg:border-2 border-b rounded-lg lg:mx-4 mx-0 hidden relative">
        <p className="text-center text-gray-500 p-2 border-b-2">Name</p>
        <div className="flex justify-center border-b-2">
          <span>
            <MdOutlineCastConnected className="mt-3 w-4 h-4  mr-1 text-gray-500" />
          </span>
          <p className="text-end text-gray-500 p-2 ">Connected At</p>
        </div>
        <div className="flex  justify-center border-b-2">
          <span>
            <IoMdTime className="mt-3 w-4 h-4  mr-1 text-gray-500" />
          </span>
          <p className="text-end text-gray-500 p-2 ">Usage Time</p>
        </div>
        <div className="flex  justify-center border-b-2">
          <span>
            <TbWorldLatitude className="mt-3 w-4 h-4  mr-1 text-gray-500" />
          </span>
          <p className="text-end text-gray-500 p-2 ">Latitude</p>
        </div>
        <div className="flex justify-center border-b-2">
          <span>
            <TbWorldLongitude className="mt-3 w-4 h-4  mr-1 text-gray-500" />
          </span>
          <p className="text-start text-gray-500 p-2 ">Longitude</p>
        </div>
        <p className="text-end pe-4 text-gray-500 p-2 border-b-2">Action</p>

        {contents.map((content, index) => {
          return (
            <>
              <Modal>
                <div className="flex py-4 border-b-2">
                  <FaWifi className="h-5 w-5 ml-3 mt-1" />
                  <h3 className="font-semibold ml-2">{content.name}</h3>
                </div>
                <div className="flex justify-center py-4 border-b-2">
                  <p className="font-medium">{content.connected}</p>
                </div>
                <div className="flex justify-center py-4 border-b-2">
                  <p className="font-medium">{content.usage}</p>
                </div>
                <div className="flex justify-center py-4 border-b-2">
                  <p className="font-medium">{content.latitude}</p>
                </div>
                <div className="flex justify-center py-4 border-b-2">
                  <p className="font-medium">{content.longitude}</p>
                </div>
                <Modal.Toggle toggleName="Update">
                  <div className="flex justify-end pe-5 py-4 cursor-pointer border-b-2">
                    <img className="h-8 w-8" src={del}></img>
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </>
          );
        })}
        <div className="flex justify-between py-3 ">
          <div className="flex ms-5 ">
            <div className="h-10 w-10 border-2 mr-2 rounded-lg text-gray-400 items-center mx-auto text-center pt-2">
              <FaChevronLeft className="w-4 h-4 mx-auto my-auto" />
            </div>
            <div className="h-10 w-10 border-2 mr-2 rounded-lg text-gray-900 bg-blue-50 border-blue-800 items-center mx-auto text-center pt-1.5">
              1
            </div>
            <div className="h-10 w-10 border-2 mr-2 rounded-lg text-gray-400 items-center mx-auto text-center pt-1.5">
              ...
            </div>
        
            <div className="h-10 w-10 border-2 rounded-lg text-gray-900 items-center mx-auto text-center pt-1.5 ">
              10
            </div>
            <div className="h-10 w-10 border-2 rounded-lg text-gray-400 items-center mx-auto text-center pt-2 ml-2 ">
              <FaChevronRight className="h-4 w-4 m-auto"/>
            </div>
          </div>
          <div className="absolute right-5 bottom-2 ">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px]  py-[10px] text-[#101828] text-center ">
              View More
              <MdKeyboardDoubleArrowDown size={18} />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
        </div>
      </div>
    </>
  );
}

export default DataTable;
