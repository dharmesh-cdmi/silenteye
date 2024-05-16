import react from "react";
import "./LocationHeader.css";
import { IoIosArrowRoundBack, IoIosSearch } from "react-icons/io";
import { TbFileExport } from "react-icons/tb";
import { IoFilterSharp } from "react-icons/io5";


const LocationHead = (props) => {
  return (
    <div className="Location-nav flex justify-between align-middle lg:mx-10 mx-2 mt-28">
      <div className="Location-nav-left flex justify-center align-bottom">
        <button className="notNavLeftIcon border-2 p-2 rounded-md shadow-lg">
          <IoIosArrowRoundBack />
        </button>
        <span className="font-semibold text-lg">{props.data.location}</span>
      </div>

      <div className="Location-nav-right flex justify-center items-center p-4">
        <span className="flex items-center LocationNavRightSearch cursor-pointer shadow-lg lg:w-80 w-10">
            <IoIosSearch className="h-7 w-7 "/>
          <input type="text" className="w-full" placeholder={props.data.placeHolder} />
        </span>

        <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg">
            <TbFileExport className="h-6 w-6  font-medium"/>
          <span className="responsiveTitleHide ">Export</span>
        </span>

        <span className="flex items-center LocationNavRightFilterIcon cursor-pointer shadow-lg">
        <IoFilterSharp className="h-6 w-6  font-medium"/>
          <span className="responsiveTitleHide">Filter</span>
        </span>
      </div>
    </div>
  );
};

export default LocationHead;
