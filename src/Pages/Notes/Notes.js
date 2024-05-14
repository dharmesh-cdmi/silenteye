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
    <div className="notes-compCon flex justify-center align-middle ">
    {/* notes components left */}
    <div className="notes-compCon-left flex flex-col">

    <div className="notCompLeftHeader flex flex-col justify-center align-middle  p-4">
       Recente Notes
    </div>
    {notesData.length > 0 ?
    notesData.map((v ,i)=>(
        <div className="notCompLeftCols flex  justify-between align-middle  p-4" key={i} onClick={(e)=>selecteData(i)}>
    <div className="notCompLeftColsDes">
       <h3>{v.title}</h3>
       <p>{v.description.length > 25 ? v.description.substr(0, 25) + " ..." : ""}</p>
    </div>
       <span>{v.date}</span>
    </div>
      ))
    :(
      <h3>No data Found</h3>
      )}

    </div>
    {/* notes components right */}
    <div className="notes-compCon-right flex flex-col justify-center align-middle ">
    
        <div className="notCompRightHeader flex  justify-center align-middle p-4">
        {selectedData &&(
    <div className="notCompRightHeaderDes">
       <h3>{selectedData.title}</h3>
       <p>craeted: {selectedData.date}</p>
    </div>
          )}
       <span className="notCompRightHeaderDesIcons flex">
       <IoCreateOutline className="cursor-pointer" />
       <MdDeleteOutline className="NoteDeleteIconBin cursor-pointer" />
       </span>
    </div>
    
    {selectedData && (
        <div className="notDescriptionCon flex flex-col p-4">
    <div className="notDescriptionTitle flex">
    <p>last edited : {selectedData.date}</p>
    </div>
    <div className="notDescription flex flex-col">
    <h3>{selectedData.title}</h3>
    <p>{selectedData.description}</p>
    </div>
    </div>
      )}
    
    </div>
    </div>
    
<PageExportBtn />

    </div>
    </div>
  )
}

export default Notes