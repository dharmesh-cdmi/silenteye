import React, { useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import {
  IoIosArrowDown,
  IoIosArrowRoundUp,
  IoIosArrowUp,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import bell from "../assests/images/Bell.png";
import DeviceInfo, { NotificationInfo } from "./ToggleInfo";
import logo from "../assests/images/Logo.svg";

const Navbar = ({ isTabletMid, open, setOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  return (
    <>
      <nav
        style={{ width: "inherit" }}
        className="bg-white border-gray-300   border-b fixed  top-0 z-10"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto p-2 md:p-[1.8px]  md:px-9">
          <div className="md:hidden flex">
            <button
              data-collapse-toggle="mega-menu-full"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg   focus:outline-none  md:focus:ring-gray-200 "
              aria-controls="mega-menu-full"
              aria-expanded="false"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <IoCloseSharp className="text-black" />
              ) : (
                <RiMenu2Fill className="text-black" />
              )}
            </button>
            <img
              src={logo}
              className=" h-[1.5rem] object-cover mt-2"
              alt="logo"
            />
          </div>
          <div className="hidden md:block">
            <button
              data-collapse-toggle="mega-menu-full"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mega-menu-full"
              aria-expanded="false"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <RiMenu2Fill className="text-black" />
            </button>
          </div>
          <div className="flex gap-4 md:mt-2">
            <div className="hidden md:block">
              <button
                onClick={toggleModal}
                type="button"
                class="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2 text-center inline-flex items-center   me-2 mb-2"
              >
                <CiMobile3 />
                Ashly's Device
                <IoIosArrowDown
                  className={` ${showModal && "rotate-180"} duration-200 `}
                />
              </button>
              {/* <DeviceInfo/> */}
            </div>

            <div>
              <button
                onClick={toggleModal2}
                type="button"
                className="text-gray-900 bg-white  md:border border-gray-200  focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm py-[1.35rem] text-center inline-flex items-center  h-10  p-2.5"
              >
                <img className="w-5 h-5 rounded-full" src={bell} alt />

                <span className="sr-only">Notification</span>
              </button>
            </div>

            <button
              type="button"
              class="text-white active md:block hidden  focus:ring-4  font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-[.60rem]"
            >
              Try Now
            </button>
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full"
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt
              />
              <span className="bottom-[10px] left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white  rounded-full" />
            </div>
          </div>
        </div>
      </nav>

      {/* Device INfo Toogle */}
      {showModal && <DeviceInfo />}
      {/* Notification INfo Toogle */}
      {showModal2 && <NotificationInfo />}
    </>
  );
};

export default Navbar;
