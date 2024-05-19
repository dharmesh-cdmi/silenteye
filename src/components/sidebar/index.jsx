import { useEffect, useState } from "react";
import { useRef } from "react";
import  { SubMenu2 } from "./SubMenu";
import { motion } from "framer-motion";
import SubMenu from "./SubMenu"

// * React icons
import { IoLocationOutline } from "react-icons/io5";


import { SlSettings } from "react-icons/sl";

import { TbReportAnalytics } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assests/images/Logo.svg";
import logo2 from "../../assests/images/Logo-Symbol.png";
import Calendar from "../../assests/images/sideicon/Calendar.svg";
import Calls from "../../assests/images/sideicon/Calls.svg";
import Camera from "../../assests/images/sideicon/Camera.svg";
import Contacts from "../../assests/images/sideicon/Contacts.svg";
import DeviceControl from "../../assests/images/sideicon/Device Control.svg";
import  Home from "../../assests/images/sideicon/Home.svg";
import Media from "../../assests/images/sideicon/Media.svg";
import Messages from "../../assests/images/sideicon/Messages.svg";
import Network from "../../assests/images/sideicon/Network.svg";
import notes from "../../assests/images/sideicon/notes.svg";
import Apps from "../../assests/images/sideicon/Apps.svg";
import Browser from "../../assests/images/sideicon/Browser.svg";
import Files from "../../assests/images/sideicon/Files.svg";
import Location from "../../assests/images/sideicon/Location.svg";
import KeyLogger from "../../assests/images/sideicon/KeyLogger.svg";
import Shield from "../../assests/images/sideicon/Shield.png";
import Bell from "../../assests/images/sideicon/Bell.png";
import Export from "../../assests/images/sideicon/Export.png";
import Logout from "../../assests/images/sideicon/Logout.png";
import Chat from "../../assests/images/sideicon/Chat.png";
import Discord from "../../assests/images/sideicon/SideBar/Discord.png";
import FacebookMessenger from "../../assests/images/sideicon/SideBar/Facebook Messenger.png";
import Gmail from "../../assests/images/sideicon/SideBar/Gmail.png";
import GoogleChat from "../../assests/images/sideicon/SideBar/Google Chat.png";
import Hike from "../../assests/images/sideicon/SideBar/Hike.png";
import IMO from "../../assests/images/sideicon/SideBar/IMO.png";
import Instagram from "../../assests/images/sideicon/SideBar/Instagram.png";
import KIK from "../../assests/images/sideicon/SideBar/KIK.png";
import KakaoTalk from "../../assests/images/sideicon/SideBar/KakaoTalk.png";
import Line from "../../assests/images/sideicon/SideBar/Line.png";
import MicrosoftTeams from "../../assests/images/sideicon/SideBar/Microsoft Teams.png";
import Outlook from "../../assests/images/sideicon/SideBar/Outlook.png";
import Signal from "../../assests/images/sideicon/SideBar/Signal.png";
import Skype from "../../assests/images/sideicon/SideBar/Skype.png";
import Slack from "../../assests/images/sideicon/SideBar/Slack.png";
import Snapchat from "../../assests/images/sideicon/SideBar/Snapchat.png";
import Tango from "../../assests/images/sideicon/SideBar/Tango.png";
import Telegram from "../../assests/images/sideicon/SideBar/Telegram.png";
import Tiktok from "../../assests/images/sideicon/SideBar/Tiktok.png";
import Tinder from "../../assests/images/sideicon/SideBar/Tinder.png";
import Twitter from "../../assests/images/sideicon/SideBar/Twitter.png";
import Viber from "../../assests/images/sideicon/SideBar/Viber.png";
import Zolo from "../../assests/images/sideicon/SideBar/Zolo.png";
import whatsapp from "../../assests/images/sideicon/SideBar/whatsapp.png";

import { IoMdAdd } from "react-icons/io";
const Sidebar = ({ isTabletMid, open, setOpen }) => {
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
          width: "15.5rem",
          width: "15.5rem",
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






  const subMenusList1 = [
    {
      name: "Calls",
      icon: Calls,  
      subMenu: [
        {
          name: "Call History",
          link: "callhistory",
        },
        {
          name: "Live Call",
          link: false
        },
        {
          name: "Blocked Calls",
          link: "blockedcalls",
        },
        {
          name: "Forwarded Calls",
          link: "forwardedcalls",
        },
        {
          name: "Face Time",
          link: "facetime",
        },
        {
          name: "Live Face Time",
          link: false,
        },
      ],
      icon: Calls,  
      subMenu: [
        {
          name: "Call History",
          link: "callhistory",
        },
        {
          name: "Live Call",
          link: false
        },
        {
          name: "Blocked Calls",
          link: "blockedcalls",
        },
        {
          name: "Forwarded Calls",
          link: "forwardedcalls",
        },
        {
          name: "Face Time",
          link: "facetime",
        },
        {
          name: "Live Face Time",
          link: false,
        },
      ],
    },
    {
      name: "Contacts",
      icon: Contacts,     
      subMenu: [
        {
          name: "Contacts List",
          link: "contactslist",
        },
        {
          name: "Blocked Contacts",
          link: "blockedcontacts"
        },
     
      ],
    },
   
  ];
  const subMenusList2 = [
   
    {
      name: "network",
      icon: Network,     
      subMenu: [
        {
          name: "Mobile Network",
          link: "mobile-network",
        },
        {
          name: "Wifi Network",
          link: "wifi-network"
        },
        {
          name: "Data Usage",
          link: "data-usage",
        },       
     
      ],
    },
    {
      name: "Camera",
      icon: Camera,     
      subMenu: [
        {
          name: "Front Camera",
          link: false,
        },
        {
          name: "Back Camera",
          link: false
        },
        {
          name: "Video Camera",
          link: false,
        },
        {
          name: "All Captures",
          link: "",
        },
       
     
      ],
    },
    {
      name: "media",
      icon: Media,     
      subMenu: [
        {
          name: "Photos",
          link: "photos",
        },
        {
          name: "Videos",
          link: "videos",
        },
        {
          name: "Screenshots",
          link: "screenshots",
        },
        {
          name: "Albums",
          link: "albums",
          
        },
        {
          name: "Screen Recordings",
          link: false,
         

        },
        {
          name: "Recently Deleted",
          link: false,
         

        },
        {
          name: "Hidden",
          link: false,
        },
       
     
      ],
    },
   
  ];


  const subMenusList3 = [    
    {
      name: "Apps",
      icon: Apps,     
      subMenu: [
        {
          name: "All Apps",
          link: "allapps",
        },
        {
          name: "Installed App",
          link: "installedapp"
        },
        {
          name: "Uninstalled App",
          link: "uninstalledapp",
        },
        {
          name: "Blocked App",
          link: "blockedapp"
        },
        {
          name: "App Notifications",
          link: "appnotifications"
        },
        {
          name: "Screen Time",
          link: "screentime"
        },
        {
          name: "Login & Passwords",
          link: "loginpasswords"
        },
     
      ],
    },
    {
      name: "Browser",
      icon: Browser,     
      subMenu: [
        {
          name: "Browser History",
          link: "browserhistory",
        },
        {
          name: "Web Filters",
          link: "webfilters"
        },
        {
          name: "Blocked Websites",
          link: "blockedwebsites",
        },
        {
          name: "Bookmarked Websites",
          link: "bookmarkedwebsites"
        },
        {
          name: "Incognito Tabs",
          link: "incognitotabs"
        },
        {
          name: "Data Usage",
          link: "datausage"
        },
        {
          name: "Screen Time",
          link: "screentime"
        },
     
      ],
    },
    {
      name: "Files",
      icon: Files,     
      subMenu: [
        {
          name: "All Files",
          link: "allfiles",
        },
        {
          name: "Recent Files",
          link: "recentfiles"
        },
        {
          name: "Downloads",
          link: "downloads",
        },
        {
          name: "Documents",
          link: "documents",
        },
        {
          name: "Recently Deleted",
          link: "recentlydeleted",
        },
       
     
      ],
    },
    {
      name: "Location",
      icon: Location,     
      subMenu: [
        {
          name: "Live Location",
          link: "livelocation",
        },
        {
          name: "Location History",
          link: "locationhistory"
        },
        {
          name: "GeoFence",
          link: "geofrence",
        },
        {
          name: "Wifi Logger",
          link: "wifilogger",
        },
       
     
      ],
    },
   
  ];
  const subMenusList4 = [
   
    {
      name: "Privacy&Security",
      icon: Shield,     
      subMenu: [
        {
          name: "Saved Passwords",
          link: "SavedPassword",
        },
        {
          name: "App Permissions",
          link: "AppPermisions"
        },
        {
          name: "Saved Payment Methods",
          link: "Payment",
        },       
     
      ],
    },
    {
      name: "Alert&Notification",
      icon: Bell,     
      subMenu: [
        {
          name: "All Alert & Notification",
          link: "AllAllerts",
        },
        {
          name: "Blocked/Hidden Notification",
          link: false
        },
        {
          name: "Notification Setting",
          link: "NotificationSettings",
        },
        {
          name: "Intant Alerts",
          link: "InstantAlerts",
        },
       
     
      ],
    },
   
   
  ];
  const subMenusList5 = [
   
    {
      name: "SocialApps",
      icon: Chat, 
      link:"SocialApps",    
      subMenu: [
        {
          name: "WhatsApp",
          link: false,
          icon: whatsapp,
        },
        {
          name: "Facebook ",
          name2:"Messenger",
          link: false,
          icon: FacebookMessenger,
        },
        {
          name: "Twitter",
          link: false,
          icon: Twitter,
        },
        {
          name: "Tiktok",
          link: false,
          icon: Tiktok,
        },
        {
          name: "Telegram",
          link: false,
          icon: Telegram,
        },
        {
          name: "Skype",
          link: false,
          icon: Skype,
        },
        {
          name: "Microsoft ",
          name2:"Teams",
          link: false,
          icon: MicrosoftTeams,
        },
        {
          name: "Viber",
          link: false,
          icon: Viber,
        },
        {
          name: "Tinder",
          link: false,
          icon: Tinder,
        },
        {
          name: "Instagram",
          link: false,
          icon: Instagram,
        },
        {
          name: "Snapchat",
          link: false,
          icon: Snapchat,
        },
        {
          name: "Slack",
          link: false,
          icon: Slack,
        },
        {
          name: "Discord",
          link: false,
          icon: Discord,
        },
        {
          name: "Gmail",
          link: false,
          icon: Gmail,
        },
        {
          name: "Outlook",
          link: false,
          icon: Outlook,
        },
        {
          name: "Signal",
          link: false,
          icon: Signal,
        },
        {
          name: "Google Chat",
          link: false,
          icon: GoogleChat,
        },
        {
          name: "Line",
          link: false,
          icon: Line,
        },
        {
          name: "KIK",
          link: false,
          icon: KIK,
        },
        {
          name: "Tango",
          link: false,
          icon: Tango,
        },
        {
          name: "Kakao Talk",
          link: false,
          icon: KakaoTalk,
        },
        {
          name: "Hike",
          link: false,
          icon: Hike,
        },
        {
          name: "IMO",
          link: false,
          icon: IMO,
        },
        {
          name: "Zolo",
          link: false,
          icon: Zolo,
        },
           
     
      ],
    },
 
   
   
  ];
  return (
    <div className="h-screen fixed left-0 ">
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
        <div className="flex justify-center gap-2.5 font-medium border-b pt-[1.12rem] md:py-[1.12rem]  border-slate-300">
         {open ? <img src={logo} className=" h-[2rem] w-[10rem] object-cover" width={60} alt="logo" /> : <img src={logo2} width={38} alt="logo" className="md:py-[0.25rem]"  />} 
        
          
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

          <ul className="whitespace-pre liborder border-t text-[18px] weight-[500] no-scrollbar  mt-2 md:mt-0 flex flex-col   font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[75%] h-[90%]">
            <li className="liborder">
              <NavLink to={"/"} className="link ">
         
              <img
                  className="h-5 "
                  src={Home}
                  alt
                />

                Dashboard
                
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/devicecontrol"} className="link">
              <img
                  className="h-5 "
                  src={DeviceControl}
                  alt
                />
                Device Control
              </NavLink>
            </li>

            
              <div className="  border-slate-300 ">
                {subMenusList1?.map((menu,i) => (
                  <div key={i} className="flex flex-col  ">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
           
            <li className="liborder">
              <NavLink to={"/messages"} className="link">
              <img
                  className="h-5 "
                  src={Messages}
                  alt
                />
                Messages
              </NavLink>
            </li>
           
              <div className="  border-slate-300 ">
                {subMenusList2?.map((menu,i) => (
                  <div key={i} className="flex flex-col  ">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
         
              <li className="liborder">
              <NavLink to={"/calendar"} className="link">
              <img
                  className="h-5 "
                  src={Calendar}
                  alt
                />
                Calendar
              </NavLink>
            </li>
            {/* NOTES */}
            <li className="liborder">
              <NavLink to={"/notes"} className="link">
              <img
                  className="h-5  "
                  src={notes}
                  alt
                />
                Notes
              </NavLink>
            </li>
            <div className="  border-slate-300 ">
                {subMenusList3?.map((menu,i) => (
                  <div key={i} className="flex flex-col  ">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            <li className="liborder">
              <NavLink to={"/KeyLogger"} className="link">
                <img
                  className="h-5 "
                  src={KeyLogger}
                  alt
                />
                KeyLogger
              </NavLink>
            </li>
            <div className="  border-slate-300 ">
                {subMenusList4?.map((menu,i) => (
                  <div key={i} className="flex flex-col  ">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            {/* <li className="liborder">
              <NavLink to={"/SavedPassword"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Saved Passwords
              </NavLink>
            </li> */}

<div className="  border-slate-300 ">
                {subMenusList5?.map((menu,i) => (
                  <div key={i} className="flex flex-col  ">
                    <SubMenu2 data={menu} />
                  </div>
                ))}
              </div>

         
            <li className="liborder">
              <NavLink to={"/Export"} className="link">
                <img
                  className="h-5 "
                  src={Export}
                  alt
                />
                Data Export
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"/logout"} className="link">
              <img
                  className="h-5 "
                  src={Logout}
                  alt
                />
                Logout
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
