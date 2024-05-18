import React from "react";
import moveBack from "../../assests/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../Shared/Button";
import exportIcon from "../../assests/images/Header/Export.png";
import filterIcon from "../../assests/images/Header/Filter.png";
import Search from "../Shared/Search";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";

const SocialAppsHeader = () => {
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
    <div className="flex lg:flex-row flex-col lg:justify-between  items-start  lg:items-center">
      <div className="item-one flex flex-row items-center ">
        <div
          className="image-wrapper p-[10px] shadow-[0px_0px_56px_0px_#00000014]   border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          <img src={moveBack} alt="move-Back" />
        </div>
        <span className="text-[20px]  text-[#000000] ps-3 font-[600]">
          Social Apps
        </span>
      </div>
      <div className="item-two flex lg:flex-row flex-col  lg:mt-0 mt-5">
        <div className="me-3">
          <Modal>
            <Modal.Toggle toggleName="search-Social">
              <Search onClick={handleSearch} placeholder="Search Apps" />
            </Modal.Toggle>
            <Modal.Window windowName="search-Social">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="flex flex-row  flex-wrap   sm:flex-nowrap  mt-3 lg:mt-0 items-center ">
          <div className="me-3">
            <Modal>
              <Modal.Toggle toggleName="export-social">
                <Button
                  onClick={exportKeyLogger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]  font-medium px-[12px]  py-[10px] text-[#101828] text-center"
                >
                  <img src={exportIcon} alt="export" className="pe-2" />
                  Export
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="export-social">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="me-3 sm:mt-0">
            <Modal>
              <Modal.Toggle toggleName="filter-social">
                <Button
                  onClick={filterKeyLooger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]  font-medium px-[12px] py-[10px] text-[#101828] text-center"
                >
                  <img src={filterIcon} alt="filter" className="pe-2" />
                  Filter
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="filter-social">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialAppsHeader;
