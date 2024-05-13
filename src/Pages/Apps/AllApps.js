import {useState} from "react"
import { Link } from 'react-router-dom';
import "./AllApps.css"
import { useMoveBack } from "../../components/KeyLogger/hooks/useMoveBack.js";

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

// FILES
import TotalApps from "./TotalApps.js"
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.js"

const AllApps=()=>{
const moveBacks = useMoveBack();
  return(
      <div className="Apps-wrapper">
    <div className="Apps-container flex flex-col justify-center align-middle ">
   
       {/* Navigations, search*/}
    <div className="Apps-nav flex justify-between align-middle">
    {/* nav left*/}
    <div className="Apps-nav-left flex justify-center align-bottom">
         <button onClick={moveBacks} className="notNavLeftIcon"><FaArrowLeftLong /></button>
       <span>Apps</span>
    </div>
   
    {/* nav right*/}
  <div className="Apps-nav-right flex justify-center items-center p-4">
      {/* Search */}
      <span className="flex items-center appsNavRightSearch cursor-pointer">
        <IoIosSearch />
        <input type="text" placeholder="Search Apps" />
      </span>

      {/* Export */}
      <span className="flex items-center appsNavRightExportIcon cursor-pointer">
        <TbFileExport />
        <span className="responsiveTitleHide">Export</span>
      </span>

      {/* Filter */}
      <span className="flex items-center appsNavRightFilterIcon cursor-pointer">
        <IoFilterSharp />
        <span className="responsiveTitleHide">Filter</span>
      </span>
    </div>
    </div>

 {/* Apps Containers */}
  <TotalApps className="p-0" />
 
    </div>
    </div>
    )
}

export default AllApps