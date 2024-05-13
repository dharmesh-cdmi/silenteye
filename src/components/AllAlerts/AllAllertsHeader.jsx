import React from "react";
import moveBack from "../../assests/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../Shared/Button";
import exportIcon from "../../assests/images/Header/Export.png";
import settingIcon from "../../assests/images/AllAlerts/settings.png";
import Search from "../Shared/Search";

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
    <div className="flex lg:flex-row flex-col lg:justify-between  items-start  lg:items-center">
      <div className="item-one flex flex-row items-center ">
        <div
          className="image-wrapper p-[10px]  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
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
          <Search onClick={handleSearch} placeholder="Search" />
        </div>
        <div className="flex flex-row  flex-wrap   sm:flex-nowrap  mt-3 lg:mt-0 items-center ">
          <div className="me-3">
            <Button
              onClick={exportAllAlerts}
              className="text-[18px] drop-shadow-2xl font-medium px-[12px] custom-shadow   py-[10px] text-[#101828] text-center"
            >
              <img src={exportIcon} alt="export" className="pe-2" />
              Export
            </Button>
          </div>

          <div className="me-3 sm:mt-0">
            <Button
              onClick={settingsAllAlerts}
              className="text-[18px] drop-shadow-2xl font-medium px-[12px] custom-shadow   py-[10px] text-[#101828] text-center"
            >
              <img src={settingIcon} alt="setting" className="pe-2" />
              Setting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAllertsHeader;
