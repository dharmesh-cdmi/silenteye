import React from "react";
import InfoCard from "../../components/Cards/InfoCard";
import Checkbox from "../../components/Shared/Checkbox";
import graph from "../../assests/images/graph2.png";
import whatsapp from "../../assests/images/SocialApps/whatsapp.png";
import Upgrade from "../../components/Shared/Upgrade";
import Delete from "../../assests/images/delete.png";
import exportIcon from "../../assests/images/Header/Export.png";
import filterIcon from "../../assests/images/Header/Filter.png";

import { useMoveBack } from "../../hooks/useMoveBack";
import moveBack from "../../assests/images/Header/arrow.png";
import Modal from "../../components/Shared/Modal";
import Button from "../../components/Shared/Button";

const AppInformation = () => {
  const moveBacks = useMoveBack();

  return (
    <div>
      <Modal>
        <div className="flex border-b md:flex-row md:hidden justify-between mb-2  items-start  md:items-center  md:mx-0">
          <div className="item-one flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} alt="move-Back" className="md:h-6 h-5" />
            </div>
            <img src={whatsapp} className="h-6" alt="" />
            <span className="text-[15px] md:text-[20px]  text-black/50 md:text-[#000000] md:ps-3 ps-1 font-[600]">
              Whatsapp
            </span>
          </div>
          <div className=" flex flex-row items-center mt-1 md:mt-0 me-2 ">
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={Delete} alt />
              </div>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={exportIcon} alt />
              </div>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={filterIcon} alt />
              </div>
            </Modal.Toggle>
          </div>
        </div>
        <InfoCard title="Control" className="mb-8 ">
          <div className="rounded-lg py-1 bg-gray-50">
            <ul className="grid grid-cols-2 place-content-between ">
              <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
                Block App
              </li>
              <li className="p-1 mt-1 text-[#172A6E] liborder text-base md:text-lg  font-semibold text-end me-2">
                <Checkbox />
              </li>
              <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
                Hide from Home Screen
              </li>
              <li className="p-1 mt-1 text-[#172A6E] liborder text-base md:text-lg  font-semibold text-end me-2">
                <Checkbox />
              </li>
              <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
                Hide Notification
              </li>
              <li className="p-1 text-[#172A6E] liborder text-base md:text-lg  font-semibold text-end me-2">
                <label className={` toggle-switch mt-1`}>
                  <input type="checkbox" checked />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle" />
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </InfoCard>
        <InfoCard title="Info" className="mb-8 ">
          <div className="rounded-lg py-1 bg-gray-50">
            <ul className="grid grid-cols-2 place-content-between ">
              <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
                Category
              </li>
              <li className="p-1 text-[#172A6E]  px-2 font-medium liborder text-end text-base md:text-lg  mt-2">
                Social
              </li>
              <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
                Age
              </li>
              <li className="p-1 text-[#172A6E]  px-2 font-medium liborder text-end text-base md:text-lg  mt-2">
                12+
              </li>
              <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
                Status
              </li>
              <li className="p-1 text-[#172A6E]  px-2 font-medium liborder text-end text-base md:text-lg  mt-2">
                Installed
              </li>
              <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
                Developer
              </li>
              <li className="p-1 text-[#172A6E]  px-2 font-medium liborder text-end text-base md:text-lg  mt-2">
                WhatsApp Inc.
              </li>
            </ul>
          </div>
        </InfoCard>
        <InfoCard title="Screen Time" className="mb-4 ">
          <div className="border border-slate-300 rounded-lg p-4 mb-5 md:mb-0">
            <h4 className="text-gray-400 text-lg font-normal">
              Today 13 January
            </h4>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">7m</h1>
              {/* <p className="text-gray-400">18% from last week</p> */}
            </div>
            <div>
              <img src={graph} alt="graph" />
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-blue-500">
                  Productivity & Finance
                </h1>
                <h1 className=" lg:text-xl md:text-lg text-base font-medium">
                  10h 49m
                </h1>
              </div>
              <div>
                <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-cyan-600">
                  Other
                </h1>
                <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                  8h 32m
                </h1>
              </div>
              <div>
                <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-orange-700">
                  Social
                </h1>
                <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                  5h 44m
                </h1>
              </div>
            </div>
          </div>
        </InfoCard>
        <div className="rounded-lg  bg-gray-50 mx-2 my-4">
          <ul className="grid grid-cols-2 place-content-between ">
            <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
              Daily Average
            </li>
            <li className="p-1 text-[#172A6E]  px-2 font-medium liborder text-end text-base md:text-lg  mt-2">
              31m
            </li>
            <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
              Notifications
            </li>
            <li className="p-1 text-[#172A6E]  px-2 font-medium text-end liborder text-base md:text-lg  mt-2">
              11
            </li>
          </ul>
        </div>
        <InfoCard title="Usage Limits" className="mb-8 ">
          <div className="rounded-lg py-1 bg-gray-50">
            <ul className="grid grid-cols-2 place-content-between ">
              <li className="p-1 px-2 font-medium liborder text-base md:text-lg  mt-2">
                Daily Usage Limit
              </li>
              <li className="p-1 text-[#172A6E]  px-2 font-medium text-end liborder text-base md:text-lg  mt-2">
                10 min
              </li>
            </ul>
          </div>
        </InfoCard>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AppInformation;
