import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { LuFileSymlink } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { VscFiles } from "react-icons/vsc";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { PiDevicesLight } from "react-icons/pi";
import { MdOutlineCall } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assests/images/logo.PNG";
const Sidebar = ({isTabletMid,open,setOpen}) => {

  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "3.5rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "15.5rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "3.5rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Calls",
      icon: MdOutlineCall ,
      menus: ["callhistory", "livecall", "blockedcalls", "forwardedcalls","facetime","livefacetime"],
    },
    {
      name: "Contacts",
      icon: IoMdContacts ,
      menus: ["contactslist", "blockedcontacts",],
    },
    {
      name: "Apps",
      icon: TbReportAnalytics,
      menus: ["allapps", "installedapp", "uninstalledapp", "blockedapp"],
    },
    {
      name: "Location",
      icon: IoLocationOutline,
      menus: ["livelocation", "locationhistory", "geofrence"],
    },
     {
       name: "Browser",
       icon: GoBrowser,
       menus: ["browseHistory", "datausage", "webfilter", "screentime"],
     },
  ];

  return (
    <div className="h-screen fixed left-0  ">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen  bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999]  max-w-[16rem] border-r-2 border-solid  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300">
          <img src={logo} width={60} alt="logo" />
          <span className="text-xl whitespace-pre">Silent Eye</span>
        </div>

        <div className="flex flex-col  h-full ">
          {open && (
            <div className="mx-3 hidden md:block">
              <p className="text-base text-left font-medium">demo@domain.com</p>
              <p className=" text-left tsecondary text-sm font-normal">
                Updated: Apr 24 2024 16:30:22 
              </p>
              <button
                type="button"
                className="text-white my-2  bg-[#172A6E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center me-2 mb-2 w-full"
              >
                <IoMdAdd className="mx-2" />
                Add Devices
              </button>
            </div>
          )}

          <ul className="whitespace-pre liborder  no-scrollbar text-[0.9rem] py-2 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li className="liborder">
              <NavLink to={"/"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/devicecontrol"} className="link">
                <PiDevicesLight size={23} className="min-w-max" />
                Device Control 
              </NavLink>
            </li>

            {(open || isTabletMid) && (
              <div className=" py-2 border-slate-300 ">
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1 ">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li className="liborder">
              <NavLink to={"/stroage"} className="link">
                <HiOutlineDatabase size={23} className="min-w-max" />
                Messages
              </NavLink>
            </li>
           
            {/* NOTES */}
            <li className="liborder">
              <NavLink to={"/notes"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Notes
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/KeyLogger"} className="link">
                <SlSettings size={23} className="min-w-max" />
                KeyLogger
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/SavedPassword"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Saved Passwords
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/SocialApps"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Social Apps
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/AllAllerts"} className="link">
                <SlSettings size={23} className="min-w-max" />
                All Allerts & Notifications
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/NotificationSettings"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Notification Setting
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/InstantAlerts"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Instant Alerts
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/AppPermisions"} className="link">
                <SlSettings size={23} className="min-w-max" />
                 App Permissions
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/PermisionManager"} className="link">
                <SlSettings size={23} className="min-w-max" />
                 Permission Manager
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/Export"} className="link">
                <SlSettings size={23} className="min-w-max" />
                 Data Export
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/Payment"} className="link">
                <SlSettings size={23} className="min-w-max" />
                  Saved Payment Methods
              </NavLink>
            </li>

          </ul>
        </div>
        {/* <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div> */}
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
