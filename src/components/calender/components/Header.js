import react from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbFileExport } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import Upgrade from "../../Shared/Upgrade";
import Modal from "../../Shared/Modal";

import "../../../UI/LocationHeader.css";

const Header = (props) => {
  return (
    <div className="Location-nav flex justify-between align-middle lg:mr-10 mr-0">
      <div className="Location-nav-left flex justify-center align-bottom">
        <button className="notNavLeftIcon border-2 p-2 rounded-md shadow-lg">
          <IoIosArrowRoundBack />
        </button>
        <span className="font-semibold lg:text-lg text-sm ">{props.data.location}</span>
      </div>

      <div className="Location-nav-right flex justify-center items-center p-4">
        <Modal>
          <Modal.Toggle toggleName="Update">
            <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg">
              <span className="responsiveTitleHide ">2024</span>
              <FaChevronDown className="h-3 w-3  font-medium" />
            </span>
          </Modal.Toggle>
          <Modal.Toggle toggleName="Update">
            <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg">
              <span className="responsiveTitleHide ">Apr</span>
              <FaChevronDown className="h-3 w-3  font-medium" />
            </span>
          </Modal.Toggle>
          <Modal.Toggle toggleName="Update">
            <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg">
              <span className="responsiveTitleHide ">Month</span>
              <FaChevronDown className="h-3 w-3 font-medium" />
            </span>
          </Modal.Toggle>

          <Modal.Toggle toggleName="Update">
            <span className="flex items-center LocationNavRightFilterIcon cursor-pointer shadow-lg">
              <TbFileExport className="h-5 w-5  font-medium" />
              <span className="responsiveTitleHide">Export</span>
            </span>
          </Modal.Toggle>
          <Modal.Window windowName="Update">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
