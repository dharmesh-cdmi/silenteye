import React from "react";
import moveBack from "../../assests/images/Header/arrow.png";
import { useMoveBack } from "../KeyLogger/hooks/useMoveBack";
import Button from "../Shared/Button";
import deleteIcon from "../../assests/images/Header/delete.png";
import exportIcon from "../../assests/images/Header/Export.png";
import filterIcon from "../../assests/images/Header/Filter.png";

const DeviceControlHead = () => {
    const moveBacks = useMoveBack();
    
    const exportKeyLogger = () => {
      //Logic for export the keylogger here
    };
  
    const filterKeyLooger = () => {
      //Logic for filter the keyLogger here
    };
    return (
      <div className="flex md:flex-row flex-col md:justify-between  items-start  md:items-center">
        <div className="item-one flex flex-row items-center ">
          <div
            className="image-wrapper p-[10px]  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
            onClick={moveBacks}
          >
            <img src={moveBack} alt="move-Back" />
          </div>
          <span className="text-[20px]  text-[#000000] ps-3 font-[600]">
            KeyLogger
          </span>
        </div>
        <div className="item-two flex flex-row items-center md:mt-0 mt-4">
          <div className="me-3">
           
<form className=" mx-auto md:w-80">   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
  </div>
</form>


          </div>
          <div className="me-3">
            <Button
              onClick={exportKeyLogger}
              className="text-[18px] font-medium px-[12px]  py-[10px] text-[#101828] text-center"
            >
               <img src={exportIcon} alt="export" className="pe-2"/>
              Export
            </Button>
          </div>
  
          <div className="me-3">
            <Button
              onClick={filterKeyLooger}
              className="text-[18px] font-medium px-[12px]  py-[10px] text-[#101828] text-center"
            >
              <img src={filterIcon} alt="delete" className="pe-2"/>
              Filter
            </Button>
          </div>
        </div>
      </div>
    );
}

export default DeviceControlHead