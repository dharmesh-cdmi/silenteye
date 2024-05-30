import React from "react";
import moveBack from "../../assests/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../Shared/Button";
import exportIcon from "../../assests/images/Header/Export.png";
import filterIcon from "../../assests/images/Header/Filter.png";
import Search from "../Shared/Search";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
import searchIcon from "../../assests/images/magnify.png"


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
    <div className="flex flex-row  justify-between items-start  border-b-[0.5px] py-[8px] px-[8px] border-[#DDDDDD] sm:border-[0px] ">
      <div className="item-one flex flex-row items-center">
        <div
          className="image-wrappe sm:shadow-[0px_0px_56px_0px_#00000014] p-[10px] sm:border-[#D0D5DD] sm:border-[1px] cursor-pointer  rounded-[8px] "
          onClick={moveBacks}
        >
          <img src={moveBack} alt="move-Back" />
        </div>
        <span className="text-[20px]   text-[#000000]  opacity-[50%] sm:opacity-[100%]  sm:ps-3 ps-1 sm:font-[600] font-[500]">
          Social Apps
        </span>
      </div>
      <div className="item-two flex flex-row  mt-0 ">
        <div className="me-3 xl:block hidden">
          <Modal>
            <Modal.Toggle toggleName="search-Social">
              <Search onClick={handleSearch} placeholder="Search Apps" />
            </Modal.Toggle>
            <Modal.Window windowName="search-Social">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="sm:me-3 me-2 sm:hidden block">
        <Modal>
            <Modal.Toggle toggleName="search-keylogger">
              <Button
                className="text-[18px] shadow-[0px_0px_56px_0px_#00000014] font-medium sm:px-[12px] p-[8px]  sm:py-[10px] text-[#101828] text-center"
              >
                <img src={searchIcon} alt="delete" className="sm:pe-2" />
                <span className="hidden sm:block">Deleted</span>
              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="search-keylogger">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
          <div className="sm:me-3 me-2">
            <Modal>
              <Modal.Toggle toggleName="export-social">
                <Button
                  onClick={exportKeyLogger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]  font-medium sm:px-[12px] p-[8px]  sm:py-[10px] text-[#101828] text-center"
                >
                  <img src={exportIcon} alt="export" className="sm:pe-2" />
                  <span className="hidden sm:block">Export</span>
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="export-social">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="sm:me-3 me-2 sm:mt-0">
            <Modal>
              <Modal.Toggle toggleName="filter-social">
                <Button
                  onClick={filterKeyLooger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]  font-medium sm:px-[12px] p-[8px]  sm:py-[10px] text-[#101828] text-center"
                >
                  <img src={filterIcon} alt="filter" className="sm:pe-2" />
                  <span className="hidden sm:block">Filter</span>                
                  </Button>
              </Modal.Toggle>
              <Modal.Window windowName="filter-social">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
      </div>
    </div>
  );
};

export default SocialAppsHeader;
