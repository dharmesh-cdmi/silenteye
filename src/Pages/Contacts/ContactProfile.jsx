import React from "react";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineMailOutline,
  MdPhoneCallback,
} from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import CallsHead from "../../components/Calls/CallsHead";
import callicon from "../../assests/images/calls/call-fill.png";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoIosCall, IoIosMailOpen } from "react-icons/io";
import { BsCurrencyDollar, BsPersonAdd } from "react-icons/bs";
import { RiDeleteBin6Line, RiUserForbidLine } from "react-icons/ri";
import { IoMicOutline, IoVideocamOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { CgRemove } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import Modal from "../../components/Shared/Modal";
import Upgrade from "../../components/Shared/Upgrade";
import Delete from "../../assests/images/delete.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import moveBack from "../../assests/images/Header/arrow.png";
import dp1 from "../../assests/images/profile/dp (1).png";
import dp2 from "../../assests/images/profile/dp (2).png";
import dp3 from "../../assests/images/profile/dp (3).png";
import dp4 from "../../assests/images/profile/dp (4).png";
import dp5 from "../../assests/images/profile/dp (5).png";
import dp6 from "../../assests/images/profile/dp (6).png";
import dp7 from "../../assests/images/profile/dp (7).png";

export function BlockedContactProfile() {
  const moveBacks = useMoveBack();

  return (
    <>
      <Modal>
        <div className="flex md:flex-row md:hidden justify-between  items-start  md:items-center mx-2 md:mx-0 ">
          <div className="item-one flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} alt="move-Back" className="h-6" />
            </div>
            <span className="text-[15px] md:text-[20px]   text-black/50 md:ps-3 ps-1 font-[600]">
              Blocked Contacts
            </span>
          </div>
          <div className="item-two flex flex-row items-center md:mt-0 mt-[2px] ">
            <Modal.Toggle toggleName="Update">
              <div className=" md:hidden ">
                <button
                  type="button"
                  class="text-white gap-2 bg-red-500  border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                >
                  <RiUserForbidLine />
                  Unblock
                </button>
              </div>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={Delete} alt />
              </div>
            </Modal.Toggle>
          </div>
        </div>

        <div className="border-t md:border-r ">
          {/* head */}
          <div className="text-lg font-bold p-2 ">
            <ul className="flex p-2  ">
              <li className="flex-none w-20 pt-2 border-none">
                <img
                  className="w-20 h-20 rounded-full m-auto"
                  src={dp5}
                  alt="img"
                />
              </li>
              <li className="p-1 flex-1 w-64 font-semibold border-none">
                <div>
                  <p className="text-lg">Alice Gamage</p>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <VscCallOutgoing />
                    </p>
                    <p className="ps-1">(308) 555-0121</p>
                  </div>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <IoIosMailOpen className="text-gray-400" />
                    </p>
                    <p className="ps-1 text-sm">hewiegamage@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-4 border-none hidden md:block">
                <div className="flex gap-2 mt-6">
                  <Modal.Toggle toggleName="Update">
                    <BsPersonAdd
                      className="text-slate-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-6 rounded-full m-auto cursor-pointer"
                      src={Delete}
                      alt
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          {/* body */}
          <div className="overflow-y-scroll h-[calc(100%-8rem)] no-scrollbar">
            <div className="grid grid-cols-5  p-2 divide-x border-b">
              <div className=" mx-auto">
                <div className="flex gap-2 p-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <AiOutlineMessage
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Message</p>
                </div>
              </div>
              <div className=" mx-auto">
                <div className="flex gap-2 p-1 flex-col md:flex-row ">
                  <Modal.Toggle toggleName="Update">
                    <IoIosCall
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Call</p>
                </div>
              </div>
              <div className=" mx-auto">
                <div className="flex gap-2 p-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <IoVideocamOutline
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Facetime</p>
                </div>
              </div>
              <div className=" mx-auto">
                <div className="flex gap-2 p-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <MdOutlineMailOutline
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Mail</p>
                </div>
              </div>
              <div className=" mx-auto ">
                <div className="flex gap-2 p-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <BsCurrencyDollar
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Pay</p>
                </div>
              </div>
            </div>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Mobile</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-0117</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">business</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-4578</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2  liborder">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">home</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 478-0117</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">business</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(417) 555-4578</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>

            <div className="flex p-2 justify-between">
              <div aria-label="Page navigation example">
                <div className="hidden md:block">
                  <ul class="inline-flex -space-x-px text-base h-10 ">
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                      >
                        <FaArrowLeft />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                      >
                        ...
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                      >
                        10
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                      >
                        <FaArrowRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="m-auto md:m-0">
                <Modal.Toggle toggleName="Update">
                  <button
                    type="button"
                    class="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center  me-2 mb-2"
                  >
                    <MdKeyboardDoubleArrowDown size={30} />
                    View More
                  </button>
                </Modal.Toggle>
              </div>
            </div>
          </div>
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </>
  );
}
const ContactProfile = () => {
  const moveBacks = useMoveBack();

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
            <span className="text-[15px] md:text-[20px]   text-black/50 md:ps-3 ps-1 font-[600]">
              Contacts
            </span>
          </div>
          <div className="item-two flex flex-row items-center md:mt-0  mt-[2px]">
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <BsPersonAdd
                  className="text-slate-900 cursor-pointer"
                  size={20}
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

        <div className="border-t md:border-r ">
          {/* head */}
          <div className="text-lg font-bold p-2 ">
            <ul className="flex p-2  ">
              <li className="flex-none w-20 pt-2 border-none">
                <img
                  className="w-20 h-20 rounded-full m-auto"
                  src={dp5}
                  alt="img"
                />
              </li>
              <li className="p-1 flex-1 w-64 font-semibold border-none">
                <div>
                  <p className="text-lg">Alice Gamage</p>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <VscCallOutgoing />
                    </p>
                    <p className="ps-1">(308) 555-0121</p>
                  </div>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <IoIosMailOpen className="text-gray-400" />
                    </p>
                    <p className="ps-1 text-sm">hewiegamage@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-4 border-none hidden md:block">
                <div className="flex gap-2 mt-6">
                  <Modal.Toggle toggleName="Update">
                    <BsPersonAdd
                      className="text-slate-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-6 rounded-full m-auto cursor-pointer"
                      src={Delete}
                      alt
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          {/* body */}
          <div className="overflow-y-scroll h-[calc(100%-8rem)] no-scrollbar">
            <div className="grid grid-cols-5  p-2 divide-x border-b">
              <div className=" mx-auto">
                <div className="flex gap-2 p-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <AiOutlineMessage
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Message</p>
                </div>
              </div>
              <div className=" mx-auto">
                <div className="flex gap-2 p-1 flex-col md:flex-row ">
                  <Modal.Toggle toggleName="Update">
                    <IoIosCall
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Call</p>
                </div>
              </div>
              <div className=" mx-auto">
                <div className="flex gap-2 p-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <IoVideocamOutline
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Facetime</p>
                </div>
              </div>
              <div className=" mx-auto">
                <div className="flex gap-2 p-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <MdOutlineMailOutline
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Mail</p>
                </div>
              </div>
              <div className=" mx-auto ">
                <div className="flex gap-2 p-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <BsCurrencyDollar
                      size={25}
                      className="m-auto h-5 md:h-auto cursor-pointer"
                    />
                  </Modal.Toggle>
                  <p className="text-sm md:font-medium">Pay</p>
                </div>
              </div>
            </div>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Mobile</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-0117</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">business</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-4578</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Mobile</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-0117</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">business</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-4578</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2  liborder">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">home</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 478-0117</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">business</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(417) 555-4578</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-red-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>

            <div className="flex p-2 justify-between">
              <div aria-label="Page navigation example">
                <div className="hidden md:block">
                  <ul class="inline-flex -space-x-px text-base h-10 ">
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                      >
                        <FaArrowLeft />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                      >
                        ...
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                      >
                        10
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                      >
                        <FaArrowRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="m-auto md:m-0">
                <Modal.Toggle toggleName="Update">
                  <button
                    type="button"
                    class="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center  me-2 mb-2"
                  >
                    <MdKeyboardDoubleArrowDown size={30} />
                    View More
                  </button>
                </Modal.Toggle>
              </div>
            </div>
          </div>
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </>
  );
};

export default ContactProfile;
