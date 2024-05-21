import {useState} from "react"
import { Link } from 'react-router-dom';
import { useMoveBack } from "../../hooks/useMoveBack.js";
import "./Locationhead.css"

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

// FILES

const LocationHead=()=>{
const moveBacks = useMoveBack();
  return(
    <div className="Location-nav flex justify-between align-middle">
    {/* nav left*/}
    <div className="Location-nav-left flex justify-center align-bottom">
         <button onClick={moveBacks} className="notNavLeftIcon shadow-[0px_0px_56px_0px_#00000014] "><FaArrowLeftLong /></button>
       <span>Location</span>
    </div>
   
    {/* nav right*/}
  <div className="Location-nav-right flex justify-center items-center p-4">
      {/* Search */}
      <span className="flex items-center LocationNavRightSearch cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
        <IoIosSearch />
        <input type="text" placeholder="Search Location" />
      </span>

      {/* Export */}
      <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
        <TbFileExport />
        <span className="responsiveTitleHide">Export</span>
      </span>

      {/* Filter */}
      <span className="flex items-center LocationNavRightFilterIcon cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
        <IoFilterSharp />
        <span className="responsiveTitleHide">Filter</span>
      </span>
    </div>
    </div>
    )
}

export default LocationHead
