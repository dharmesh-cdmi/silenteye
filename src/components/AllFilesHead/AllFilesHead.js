import { useState } from "react";
import { Link } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack.js";
import "./AllFilesHead.css";
import Modal from "../Shared/Modal.jsx";
import Upgrade from "../Shared/Upgrade.jsx";

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

// FILES
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";

const AllFilesHead = () => {
  const moveBacks = useMoveBack();
  return (
    <div className="Browser-nav flex justify-between align-middle">
    {/* nav left*/}
    <div className="Browser-nav-left flex justify-center align-bottom">
         <button onClick={moveBacks} className="notNavLeftIcon shadow-lg"><FaArrowLeftLong /></button>
       <span>Files</span>
    </div>
   
    {/* nav right*/}
  <div className="Browser-nav-right flex justify-center items-center p-4">
      {/* Search */}
      <span className="flex items-center BrowserNavRightSearch cursor-pointer shadow-lg ">
        <IoIosSearch />
        <input type="text" placeholder="Search Browser" />
      </span>

      {/* Delete */}
      <span className="flex items-center BrowserNavRightExportIcon cursor-pointer shadow-lg ">
        <MdDeleteOutline className="text-red-600" />
        <span className="responsiveTitleHide">Delete</span>
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
  );
};

export default AllFilesHead;
