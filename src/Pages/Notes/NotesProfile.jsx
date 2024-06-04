import "./Notes.css";
import "../../components/BrowserHead/BrowserHead.css";
import delet from "../../assests/images/delete.png";
import man from "../../assests/images/man.png";
import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import { useMoveBack } from "../../hooks/useMoveBack.js";
import { useState } from "react";
import Delete from "../../assests/images/delete.png";
import moveBack from "../../assests/images/Header/arrow.png";
import { BiSolidEdit } from "react-icons/bi";

const NotesProfile = () => {
  const moveBacks = useMoveBack();
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal>
        <div className="flex md:flex-row md:hidden justify-between  items-start  md:items-center mx-2 md:mx-0">
          <div className="item-one flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} alt="move-Back" className="h-6" />
            </div>
            <span className="text-[15px] md:text-[20px]  text-black/50 md:text-[#000000] md:ps-3 ps-1 font-[600]">
              Notes
            </span>
          </div>
          <div className="item-two flex flex-row items-center md:mt-0 ">
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <BiSolidEdit
                  className="text-slate-900  cursor-pointer"
                  size={22}
                />
              </div>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={Delete} alt />
              </div>
            </Modal.Toggle>
          </div>
        </div>
        <div className="border-l-2  ">
          <div className="border-b-2 flex py-3 ps-3 align-middle  ">
            <div className="ml-3">
              <h3 className="font-bold text-lg text-nowrap ">
                Mode Of Transportation
              </h3>
              <p className="text-slate-500 text-[14px] text-black/50 text-nowrap">
                Created:Yesterday 8:23 AM
              </p>
            </div>
          </div>
          <>
            <div className="text-center mt-4 text-slate-500 text-sm font-semibold">
              Last Edit: Yesterday 8:23 AM
            </div>
            <div className="px-2 mt-3">
              <div className=" ">
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  Items to prepare
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-medium text-lg text-nowrap">
                  We are going to rally on saturday
                </div>

                <div className="text-black     rounded-xl w-56 px-4 font-bold text-xl text-nowrap"></div>
              </div>
            </div>
          </>
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </>
  );
};

export default NotesProfile;
