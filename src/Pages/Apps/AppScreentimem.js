import { Link } from 'react-router-dom';
import "../Browser/ScreenTime.css"
import "../../components/AppsRoutesHeader/AppsRoutesHeader.css"

import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"

import { IoAddOutline } from "react-icons/io5";

import ScreenTimeImage from "../Browser/screenTime.png"
import DataUsageImage from "../Browser/appUsage.png"

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

import Modal from '../../components/Shared/Modal.jsx';
import Upgrade from '../../components/Shared/Upgrade.jsx';

const Appsscreentime =()=>{
  return(
    <>
  {/* Navigations, search*/}
      <div className="Apps-nav flex justify-between align-middle">
        {/* nav left*/}
        <div className="Apps-nav-left flex justify-center align-bottom">
          <button className="notNavLeftIcon shadow-lg">
            <FaArrowLeftLong />
          </button>
          <span>Apps</span>
        </div>

        {/* nav right*/}
        <div className="Apps-nav-right flex justify-center items-center p-4">
          {/* Search */}
          <span className="flex items-center appsNavRightSearch cursor-pointer shadow-lg">
            <IoIosSearch />
            <input type="text" placeholder="Search Apps" />
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
          <span className="flex items-center appsNavRightFilterIcon cursor-pointer shadow-lg">
            <IoFilterSharp />
            <span className="responsiveTitleHide">Filter</span>
          </span>
        </div>
      </div>
    
    <section className="screenTimeWrapper flex">
    {/* LEFT SECTION */}
    <div className="screenTimeLeft flex">
    <img src={ScreenTimeImage} />
    </div>
    
    {/* RIGHT SECTION */}
    <div className="screenTimeRight flex flex-col">
    <h3>Recent Most Used Apps</h3>
    <img src={DataUsageImage} />
    </div>
    
    </section>
    <ExportBtn />
    </>
    )
}

export default Appsscreentime;
