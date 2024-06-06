import React from "react";
import moveBack from "../../assests/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../Shared/Button";
import exportIcon from "../../assests/images/Header/Export.png";
import settingIcon from "../../assests/images/AllAlerts/settings.png";
import Search from "../Shared/Search";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
import searchIcon from "../../assests/images/magnify.png";

const AllAllertsHeader = () => {
  const moveBacks = useMoveBack();

  const exportAllAlerts = () => {
    //Logic for export the keylogger here
  };

  const settingsAllAlerts = () => {
    //Logic for filter the keyLogger here
  };

  const handleSearch = () => {
    //Export Logic here
  };

  return (
    <div className="flex flex-row  justify-between items-start  py-[8px]   sm:border-[0px]">
      <div className="item-one flex flex-row items-center ">
        <div
          className="image-wrappe sm:shadow-[0px_0px_56px_0px_#00000014]  p-[10px]  sm:border-[#D0D5DD] sm:border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          <img src={moveBack} alt="move-Back" className="h-[18px] md:h-6" />
        </div>
        <span className="text-[20px]   text-[#000000]  opacity-[50%] sm:opacity-[100%]  sm:ps-3 ps-1 sm:font-[600] font-[500]">
          Alert & Notifications
        </span>
      </div>
      <div className="item-two flex flex-row  mt-0 ">
        <div className="me-3 hidden xl:block">
          <Modal>
            <Modal.Toggle toggleName="search-allAlert">
              <Search onClick={handleSearch} placeholder="Search" />
            </Modal.Toggle>
            <Modal.Window windowName="search-allAlert">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="sm:me-3 me-2 sm:hidden block">
          <Modal>
            <Modal.Toggle toggleName="search-keylogger">
              <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium sm:px-[12px] p-[8px]  sm:py-[10px] text-[#101828] text-center">
                <img
                  src={searchIcon}
                  alt="delete"
                  className="sm:pe-2 h-[18px] md:h-6"
                />
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
            <Modal.Toggle toggleName="export-allAlert">
              <Button
                onClick={exportAllAlerts}
                className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium sm:px-[12px] p-[8px]  sm:py-[10px] text-[#101828] text-center"
              >
                <img
                  src={exportIcon}
                  alt="export"
                  className="sm:pe-2 h-[18px] md:h-6"
                />
                <span className="hidden sm:block">Export</span>
              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="export-allAlert">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="sm:me-3 me-2 sm:mt-0">
          <Modal>
            <Modal.Toggle toggleName="export-allAlert">
              <Button
                onClick={settingsAllAlerts}
                className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]  font-medium sm:px-[12px] p-[8px]  sm:py-[10px] text-[#101828] text-center"
              >
                <img
                  src={settingIcon}
                  alt="setting"
                  className="sm:pe-2 h-[18px] md:h-6"
                />
                <span className="hidden sm:block">Setting</span>
              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="export-allAlert">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AllAllertsHeader;
