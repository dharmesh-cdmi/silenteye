import { Link } from 'react-router-dom';
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"
import "../Browser/Browser.css"
import "../../components/AppsRoutesHeader/AppsRoutesHeader.css"
import "./AppNotification.css"

import { IoAddOutline } from "react-icons/io5";

import ScreenTimeImage from "../Browser/screenTime.png"
import DataUsageImage from "../Browser/appUsage.png"

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { FaApple } from "react-icons/fa";

import switchIcon from "./Switch.png"

import snapchaticon from "../../assests/images/snapchat.svg";
import telegramiconIcon from "../../assests/images/telegram.svg";
import tiktokicon from "../../assests/images/tiktok.svg";
import tindericon from "../../assests/images/tinder.svg";
import twittericon from "../../assests/images/twitter.svg";

const Appsnotification = () =>{
  return(
    <>
     {/* Navigations, search*/}
      <div className="Apps-nav flex justify-between align-middle">
        {/* nav left*/}
        <div className="Apps-nav-left flex justify-center align-bottom">
          <button className="notNavLeftIcon">
            <FaArrowLeftLong />
          </button>
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
    
    {/* ====== NOTIFICATION ====== */}
    
        <section className="browserContainer flex flex-col">
    {/* Browser Header */}
    <div className="browserHeader appnotificationheader flex justify-between">
    <h3>Hide Notifications of (All apps)</h3>
    
    <img src={switchIcon} />
    </div>
    
    {/* Browser Header */}
    <div className="browseHistoryCon flex flex-col">
    
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes notificationappdesicon flex flex-col">
    <h3><span><img src={snapchaticon} /> </span>Snapchat</h3>
    </div>
    <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
 <img src={switchIcon} />
    </div>
    </div>
    
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes notificationappdesicon flex flex-col">
    <h3><span><img src={telegramiconIcon} /> </span>Telegram</h3>
    </div>
    <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
 <img src={switchIcon} />
    </div>
    </div>
    
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes notificationappdesicon flex flex-col">
    <h3><span><img src={tiktokicon} /> </span>Tiktok</h3>
    </div>
    <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
 <img src={switchIcon} />
    </div>
    </div>
    
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes notificationappdesicon flex flex-col">
    <h3><span><img src={tindericon} /> </span>Tinder</h3>
    </div>
    <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
 <img src={switchIcon} />
    </div>
    </div>
    
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes notificationappdesicon flex flex-col">
    <h3><span><img src={twittericon} /> </span>Twitter</h3>
    </div>
    <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
 <img src={switchIcon} />
    </div>
    </div>
    
    </div>
    
    </section>
    <ExportBtn />
    </>
    )
}

export default Appsnotification