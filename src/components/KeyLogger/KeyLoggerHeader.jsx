import React from "react";
import moveBack from "../../assests/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../Shared/Button";
import deleteIcon from "../../assests/images/Header/delete.png";
import exportIcon from "../../assests/images/Header/Export.png";
import filterIcon from "../../assests/images/Header/Filter.png";
import Search from "../Shared/Search";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
import "./KeyLoggerHeader.css"

const KeyLoggerHeader = () => {
  const moveBacks = useMoveBack();
  const deleteKeyLogger = () => {
    //Logic for delete the keylogger here
  };
  const exportKeyLogger = () => {
    //Logic for export the keylogger here
  };

  const filterKeyLooger = () => {
    //Logic for filter the keyLogger here
  };

  const handleSearch = () => {
    //Export Logic here
  };

  return (
    <div className="flex xl:flex-row flex-col xl:justify-between  items-start  xl:items-center">
      <div className="item-one flex flex-row items-center ">
        <div
          className="image-wrappe shadow-[0px_0px_56px_0px_#00000014] r p-[10px]  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          <img src={moveBack} alt="move-Back" />
        </div>
        <span className="text-[20px]  text-[#000000] ps-3 font-[600]">
          KeyLogger
        </span>
      </div>
      <div className="item-two flex lg:flex-row flex-col   xl:mt-0 mt-5">
        <div className="me-3">
          <Modal>
            <Modal.Toggle toggleName="search-keylogger">
              <Search onClick={handleSearch} placeholder="Search"  />
            </Modal.Toggle>
            <Modal.Window windowName="search-keylogger">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="flex flex-row  flex-wrap   sm:flex-nowrap  mt-3 lg:mt-0 items-center ">
          <div className="me-3 ">
            <Modal>
              <Modal.Toggle toggleName="delete-keylogger">
                <Button
                  onClick={deleteKeyLogger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[12px]   py-[10px] text-[#101828] text-center"
                >
                  <img src={deleteIcon} alt="delete" className="pe-2" />
                  Deleted
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="delete-keylogger">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="me-3">
            <Modal>
              <Modal.Toggle toggleName="export-keylogger">
                <Button
                  onClick={exportKeyLogger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]  font-medium px-[12px]  py-[10px] text-[#101828] text-center"
                >
                  <img src={exportIcon} alt="export" className="pe-2" />
                  Export
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="export-keylogger">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="me-3 key-margin">
            <Modal>
              <Modal.Toggle toggleName="filter-keylogger">
                <Button
                  onClick={filterKeyLooger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[12px]   py-[10px] text-[#101828] text-center"
                >
                  <img src={filterIcon} alt="filter" className="pe-2" />
                  Filter
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="filter-keylogger">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyLoggerHeader;
