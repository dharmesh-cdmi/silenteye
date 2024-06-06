import { MdKeyboardBackspace } from "react-icons/md";
import exportIcon from "../../../assests/images/Header/Export.png";
import filterIcon from "../../../assests/images/Header/Filter.png";
import Button from "../../Shared/Button";
import { IoIosSearch } from "react-icons/io";
import Upgrade from "../../Shared/Upgrade";
import Modal from "../../Shared/Modal";
import deleteIcon from "../../../assests/images/Header/delete.png";
import { FaChevronDown } from "react-icons/fa";
import { useMoveBack } from "../../../hooks/useMoveBack";
import moveBack from '../../../assests/images/Header/arrow.png'

import Search from "../../Shared/Search";

const CallsHead = (props) => {
  const moveBacks = useMoveBack();

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
    <div className="flex md:flex-row  justify-between  items-start  md:items-center mx-2 md:mx-0 border-t lg:border-0">
      <div className="item-one flex flex-row items-center ">
      <div
          className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
          onClick={moveBacks}
        >
          <img src={moveBack} className="h-6 w-6 hidden md:block" alt="move-Back" />
        </div>
        <span className="text-[15px] md:text-[20px] text-black text-semibold mt-1.5  md:text-[#000000] md:ps-3 ps-1 font-[600]">
          {props.heading}
        </span>
      </div>
      <div className="item-two flex flex-row items-center md:mt-0 mt-1 ">
        {/* <div className="me-3 mx-auto md:w-80 hidden md:block">
          <Modal>
            <Modal.Toggle toggleName="searchcall">
            <Button
                onClick={exportKeyLogger}
                className="text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]  py-[10px] text-[#101828] text-center"
              >
                <img src={exportIcon} alt="export" className="pe-2 h-6 " />
                2024
              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="searchcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div> */}
    
        <div className="me-3 md:hidden ">
          <Modal>
            <Modal.Toggle toggleName="searchcall">
              <div className="flex">
                <p className="font-medium text-black ">2024</p>
                <FaChevronDown className="mt-1.5 ml-0.5 w-3 h-3" />
              </div>
            </Modal.Toggle>
            <Modal.Window windowName="searchcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="me-3 hidden md:block">
          <Modal>
            <Modal.Toggle toggleName="exportcall">
              <Button
                onClick={exportKeyLogger}
                className="text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]  py-[10px] text-[#101828] text-center"
              >
                2024
                <FaChevronDown className="mt-0.5 ml-1"/>

              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="exportcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="me-3 hidden md:block">
          <Modal>
            <Modal.Toggle toggleName="exportcall">
              <Button
                onClick={exportKeyLogger}
                className="text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]  py-[10px] text-[#101828] text-center"
              >

                Apr
                <FaChevronDown className="mt-0.5 ml-1"/>


              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="exportcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="me-3 hidden md:block">
          <Modal>
            <Modal.Toggle toggleName="exportcall">
              <Button
                onClick={exportKeyLogger}
                className="text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]  py-[10px] text-[#101828] text-center"
              >
                Month
                <FaChevronDown className="mt-0.5 ml-1"/>
              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="exportcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className="me-3 md:hidden ">
          <Modal>
            <Modal.Toggle toggleName="searchcall">
              <div className="flex ">
                <p className="font-medium text-black ">Apr</p>
                <FaChevronDown className="mt-1.5 ml-0.5 w-3 h-3" />
              </div>
            </Modal.Toggle>
            <Modal.Window windowName="searchcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>

        <div className="me-4 md:block hidden ">
          <Modal>
            <Modal.Toggle toggleName="filtercall">
              <Button
                onClick={filterKeyLooger}
                className=" md:text-[14px] xl:text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]    py-[10px] text-[#101828] text-center"
              >
                <img src={exportIcon} alt="export" className="pe-2 h-6 " />
                Export
              </Button>
              {/* <p className="">2024</p> */}
            </Modal.Toggle>
            <Modal.Window windowName="filtercall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className=" md:hidden ">
          <Modal>
            <Modal.Toggle toggleName="searchcall">
              <div className="flex">
                <p className="font-medium text-black">Month</p>
                <FaChevronDown className="mt-1.5 ml-0.5 w-3 h-3" />
              </div>
            </Modal.Toggle>
            <Modal.Window windowName="searchcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CallsHead;
