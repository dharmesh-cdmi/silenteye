import { MdKeyboardBackspace } from "react-icons/md";
import exportIcon from "../../assests/images/Header/Export.png";
import filterIcon from "../../assests/images/Header/Filter.png";
import { useMoveBack } from "../KeyLogger/hooks/useMoveBack";
import Button from "../Shared/Button";
import { IoIosSearch } from "react-icons/io";

const CallsHead = (props) => {
  const moveBacks = useMoveBack();

  const exportKeyLogger = () => {
    //Logic for export the keylogger here
  };

  const filterKeyLooger = () => {
    //Logic for filter the keyLogger here
  };
  return (
    <div className="flex md:flex-row  justify-between  items-start  md:items-center mx-2 md:mx-0">
      <div className="item-one flex flex-row items-center ">
        <div
          className="image-wrapper p-[10px]  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          <MdKeyboardBackspace />
        </div>
        <span className="text-[15px] md:text-[20px]   text-[#000000] ps-3 font-[600]">
         {props.heading}
        </span>
      </div>
      <div className="item-two flex flex-row items-center md:mt-0 mt-[4px]">
        <div className="me-3 mx-auto md:w-80">
          <span className="flex items-center noteNavRightSearch cursor-pointer">
            <IoIosSearch />
            <input type="text" placeholder={props.placeholder} />
          </span>
        </div>
        <div className="me-3 hidden md:block">
          <Button
            onClick={exportKeyLogger}
            className="text-[18px] font-medium px-[6px]  py-[4px] text-[#101828] text-center"
          >
            <img src={exportIcon} alt="export" className="pe-2" />
            Export
          </Button>
        </div>
        <div className="me-3 md:hidden ">
          <Button
            onClick={exportKeyLogger}
            className="text-[18px] font-medium px-[6px]  py-[4px] text-[#101828] text-center"
          >
            <img src={exportIcon} alt="export" className="pe-2" />
           
          </Button>
        </div>

        <div className="me-3 hidden md:block">
          <Button
            onClick={filterKeyLooger}
            className="text-[18px] font-medium px-[6px]  py-[4px] text-[#101828] text-center"
          >
            <img src={filterIcon} alt="delete" className="pe-2" />
            Filter
          </Button>
        </div>
        <div className="me-3 md:hidden ">
          <Button
            onClick={filterKeyLooger}
            className="text-[18px] font-medium px-[6px]  py-[4px] text-[#101828] text-center"
          >
            <img src={filterIcon} alt="delete" className="pe-2" />
           
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallsHead;
