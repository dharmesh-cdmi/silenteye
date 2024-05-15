import {useState} from 'react'
import "./Notes.css"
import {notesData} from "./Notes-data.js"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
 import { MdDeleteOutline } from "react-icons/md";
import PageExportBtn from '../../components/pageExportBtn/PageExportBtn.jsx';


const Notes = () => {
  const [data, setData]=useState("");
  const [selectedData, setSelectedData]=useState("");
  
  const selecteData =(i)=>{
    setSelectedData(notesData[i])
  }
  
  return (
    <div className="notes-wrapper">
    <div className="notes-container flex flex-col justify-center align-middle ">
   
       {/* Navigations, search*/}
    <div className="notes-nav flex justify-between align-middle">
    {/* nav left*/}
    <div className="notes-nav-left flex justify-center align-bottom">
         <button className="notNavLeftIcon"><FaArrowLeftLong /></button>
       <span>Notes</span>
    </div>
   
    {/* nav right*/}
  <div className="notes-nav-right flex justify-center items-center p-4">
      {/* Search */}
      <span className="flex items-center noteNavRightSearch cursor-pointer">
        <IoIosSearch />
        <input type="text" placeholder="Search Notes" />
      </span>

      {/* Export */}
      <span className="flex items-center noteNavRightExportIcon cursor-pointer">
        <TbFileExport />
        <span className="responsiveTitleHide">Export</span>
      </span>

      {/* Filter */}
      <span className="flex items-center noteNavRightFilterIcon cursor-pointer">
        <FaGripLines />
        <span className="responsiveTitleHide">Filter</span>
      </span>
    </div>
    </div>
    
    {/* notes components container */}
   
    
<PageExportBtn />

    </div>
    </div>
  )
}

export default Notes