import React from "react";
import moveBack from "../../assests/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../Shared/Button";
import filterIcon from "../../assests/images/Header/Filter.png";
import historyicon from "../../assests/images/Export/history.png";
import backupicon from "../../assests/images/Export/backup.png";


const ExportHeader = ({heading}) => {
  const moveBacks = useMoveBack();
 
  const history = () => {
    //Logic for export the keylogger here

  };

  const backup = () => {
    //Logic for filter the keyLogger here

  };

  

  return (
    <div className="flex sm:flex-row  flex-col  justify-between  items-start   sm:items-center">
      <div className="item-one flex flex-row items-center ">
        <div
          className="image-wrapper p-[10px]  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          <img src={moveBack} alt="move-Back" />
        </div>
        <span className="text-[20px]  text-[#000000] ps-3 font-[600]">
            Data Export
        </span>
      </div>
       
     <div className="item-two flex flex-row sm:mt-0  mt-3">
        <div className="me-3">
          <Button
            onClick={history}
            className="text-[18px] drop-shadow-2xl font-medium px-[12px] custom-shadow   py-[10px] text-[#101828] text-center"
          >
            <img src={historyicon} alt="export" className="pe-2" />
            History
          </Button>
        </div>

        <div className="me-3 sm:mt-0">
          <Button
            onClick={backupicon}
            className="text-[18px] drop-shadow-2xl font-medium px-[12px] custom-shadow   py-[10px] text-[#101828] text-center"
          >
            <img src={filterIcon} alt="delete" className="pe-2" />
            Backup
          </Button>
        </div>
        </div>
    </div>
  );
};

export default ExportHeader;
