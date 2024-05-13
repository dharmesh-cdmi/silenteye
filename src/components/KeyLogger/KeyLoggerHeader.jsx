import React from "react";
import moveBack from "../../assests/images/Header/arrow.png";
import { useMoveBack } from "./hooks/useMoveBack";
import Button from "../Shared/Button";
import deleteIcon from "../../assests/images/Header/delete.png";
import exportIcon from "../../assests/images/Header/Export.png";
import filterIcon from "../../assests/images/Header/Filter.png";

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
  return (
    <div className="flex md:flex-row flex-col md:justify-between  items-start  md:items-center">
      <div className="item-one flex flex-row items-center ">
        <div
          className="image-wrapper p-[10px]  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          <img src={moveBack} alt="move-Back" />
        </div>
        <span className="text-[20px]  text-[#000000] ps-3 font-[600]">
          KeyLogger
        </span>
      </div>
      <div className="item-two flex flex-row items-center md:mt-0 mt-4">
        <div className="me-3">


        </div>
        <div className="me-3">
          <Button
            onClick={deleteKeyLogger}
            className="text-[18px] font-medium px-[12px]  py-[10px] text-[#101828] text-center"
          >
            <img src={deleteIcon} alt="delete" className="pe-2" />
            Deleted
          </Button>
        </div>
        <div className="me-3">
          <Button
            onClick={exportKeyLogger}
            className="text-[18px] font-medium px-[12px]  py-[10px] text-[#101828] text-center"
          >
            <img src={exportIcon} alt="export" className="pe-2" />
            Export
          </Button>
        </div>

        <div className="me-3">
          <Button
            onClick={filterKeyLooger}
            className="text-[18px] font-medium px-[12px]  py-[10px] text-[#101828] text-center"
          >
            <img src={filterIcon} alt="delete" className="pe-2" />
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyLoggerHeader;
