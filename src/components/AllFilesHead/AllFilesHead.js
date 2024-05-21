import {useState} from "react"
import { Link } from 'react-router-dom';
import { useMoveBack } from "../../hooks/useMoveBack.js";
import "./AllFilesHead.css"

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

// FILES
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"

const AllFilesHead=()=>{
const moveBacks = useMoveBack();
  return(
    <div className="Browser-nav flex justify-between align-middle">
    {/* nav left*/}
    <div className="Browser-nav-left flex justify-center align-bottom">
         <button onClick={moveBacks} className="notNavLeftIcon shadow-[0px_0px_56px_0px_#00000014]"><FaArrowLeftLong /></button>
       <span>Files</span>
    </div>
   
    {/* nav right*/}
  <div className="Browser-nav-right flex justify-center items-center p-4">
      {/* Search */}
      <span className="flex items-center BrowserNavRightSearch cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
        <IoIosSearch />
        <input type="text" placeholder="Search Browser" />
      </span>

      {/* Delete */}
      <span className="flex items-center BrowserNavRightExportIcon cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
        <MdDeleteOutline className="text-red-600" />
        <span className="responsiveTitleHide">Delete</span>
      </span>
      
      {/* Export */}
      <span className="flex items-center BrowserNavRightExportIcon cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
        <TbFileExport />
        <span className="responsiveTitleHide">Export</span>
      </span>

      {/* Filter */}
      <span className="flex items-center BrowserNavRightFilterIcon cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
        <IoFilterSharp />
        <span className="responsiveTitleHide">Filter</span>
      </span>
    </div>
    </div>
    )
}

export default AllFilesHead;
