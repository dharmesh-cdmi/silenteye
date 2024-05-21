import react from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbFileExport } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

import "../../../UI/LocationHeader.css"

const Header = (props) => {
  return (
    <div className="Location-nav flex justify-between align-middle mx-10 mt-28">
      <div className="Location-nav-left flex justify-center align-bottom">
        <button className="notNavLeftIcon border-2 p-2 rounded-md shadow-lg">
          <IoIosArrowRoundBack />
        </button>
        <span className="font-semibold text-lg">{props.data.location}</span>
      </div>

      <div className="Location-nav-right flex justify-center items-center p-4">
  

        <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg">
          <span className="responsiveTitleHide ">2024</span>
          <FaChevronDown className="h-3 w-3  font-medium" />

        </span>
        <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg">
          <span className="responsiveTitleHide ">Apr</span>
          <FaChevronDown className="h-3 w-3  font-medium" />
        </span>
        <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg">

          <span className="responsiveTitleHide ">Month</span>
          <FaChevronDown className="h-3 w-3 font-medium" />

        </span>

        <span className="flex items-center LocationNavRightFilterIcon cursor-pointer shadow-lg">
        <TbFileExport className="h-5 w-5  font-medium"/>
          <span className="responsiveTitleHide">Export</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
