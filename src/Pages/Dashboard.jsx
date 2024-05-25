import React, { useState } from "react";

import { FaApple } from "react-icons/fa";

import { VscCallOutgoing } from "react-icons/vsc";
import InfoCard from "../components/Cards/InfoCard";
import liveimg from "../assests/images/liveloca.png";
import { MdKeyboardDoubleArrowDown, MdPhoneCallback } from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import YT from "../assests/images/yt.png";
import crome from "../assests/images/crome.png";
import mgngr from "../assests/images/msgngr.png";
import fb from "../assests/images/fb.png";
import graph from "../assests/images/graph2.png";
import whatsapp from "../assests/images/KeyLogger/whatsapp.png";
import apple from "../assests/images/apple2.png";
import cmath from "../assests/images/cymath2.png";
import robo from "../assests/images/robo2.png";
import photos from "../assests/images/KeyLogger/photos.png";
import location from "../assests/images/location.png";
import wifi from "../assests/images/dashboard/wifi.png";
import Apps from "../assests/images/dashboard/Apps.png";
import Network from "../assests/images/dashboard/Network.png";
import audio from "../assests/images/dashboard/audio.png";
import battery from "../assests/images/dashboard/battery.png";
import device from "../assests/images/dashboard/device storage.png";
import document from "../assests/images/dashboard/document.png";
import freespace from "../assests/images/dashboard/free space.png";
import gps from "../assests/images/dashboard/gps.png";
import image from "../assests/images/dashboard/image.png";
import other from "../assests/images/dashboard/other.png";
import video from "../assests/images/dashboard/video.png";
import { CiMobile3 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";
import Button from "../components/Shared/Button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [autoRenew, setAutoReNew] = useState(true);
  const [toggle, setToggle] = useState(false);
  const handletoggle = () => {
    setToggle(!toggle);
  };

  const DashIcons = [
    {
      icon: wifi,
      name: "Wifi",
      status: "On",
      link: "",
    },
    {
      icon: Network,
      name: "Verizon",
      status: "On",
      link: "",
    },
    {
      icon: gps,
      name: "GPS",
      status: "On",
      link: "",
    },
    {
      icon: battery,
      name: "Battery",
      status: "76%",
      link: "",
    },
    {
      icon: device,
      name: "Device Storage",
      status: "64 GB",
      link: "",
    },
    {
      icon: freespace,
      name: "Free Space",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: video,
      name: "Videos",
      status: "12.57 GB",
      link: "",
    },
    {
      icon: image,
      name: "Image",
      status: "4.57 GB",
      link: "",
    },
    {
      icon: audio,
      name: "Audio",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: Apps,
      name: "Apps",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: document,
      name: "Documents",
      status: "8.78 GB",
      link: "",
    },
    {
      icon: other,
      name: "Other",
      status: "2.34 GB",
      link: "",
    },
  ];
  const DashInfo = [
    {
      name: "Device Model",
      details: "iPhone 11",
    },
    {
      name: "Version",
      details: "15.1",
    },
    {
      name: "IMEI",
      details: "35473307256675X",
    },
    {
      name: "Last Updated",
      details: "Dec 28,2023 02:28",
    },
  ];
  const RecentCall = [
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Hewie Gamage",
      callIcon: <VscCallOutgoing />,
      callStatus: "outgoing",
      date: "21/05/2024",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Tommi Osayande",
      callIcon: <MdPhoneCallback />,
      callStatus: "missed",
      date: "21/05/2024",
    },
    ,
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Morty Zumalt",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "outgoing",
      date: "21/05/2024",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Sander Margotta",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "incoming",
      date: "21/05/2024",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Ramona Bea",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "incoming",
      date: "21/05/2024",
    },
  ];
  const RecentMessages = [
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Riyah Webflow",
      msg: "Little brother, I'm lonely and I'm looking for company. My Telegram ID: Tindf202",
      time: "9:41 am",
    },
    {
      img: "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png",
      name: "13654825",
      msg: "The Apple Id code is 125544. Dont share with",
      time: "9:41 am",
    },
    {
      img: "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png",
      name: "13654825",
      msg: "Your Tinder code is 815180 Don't share @tinder",
      time: "9:41 am",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "(319) 555-0115",
      msg: "Verfication code 759028, valid for 10 minutes",
      time: "9:41 am",
    },
    {
      img: "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png",
      name: "13654825",
      msg: "562963 SMS login verfication code, valid for ",
      time: "9:41 am",
    },
  ];
  const MostUsedApp = [
    {
      img: YT,
      name: "Youtube",
      bar: "70%",
      time: "10m",
    },
    {
      img: crome,
      name: "Chrome",
      bar: "55%",
      time: "9m",
    },
    {
      img: fb,
      name: "Facebook",
      bar: "40%",
      time: "8m",
    },
    {
      img: mgngr,
      name: "Messenger",
      bar: "35%",
      time: "7m",
    },
  ];
  const RecentAlert = [
    {
      img: whatsapp,
      name: "Justin Ryhss",
      des: "Do you want to go see a movie tonight?",
      time: "9:10 AM",
    },
    {
      img: location,
      name: "Asher is Out of Location",
      des: "Location Alert! GeoFencer.",
      time: "9:10 AM",
    },
    {
      img: YT,
      name: "Watch Now: TII News New Video ",
      des: "How you feel about new video?",
      time: "9:10 AM",
    },
    {
      img: mgngr,
      name: "Yoknin Yossee ",
      des: "Hey! How are you?",
      time: "9:10 AM",
    },
    {
      img: whatsapp,
      name: "Moon & Urus",
      des: "New Office Table Available Now!",
      time: "9:10 AM",
    },
  ];
  const RecentKeylogger = [
    {
      img: crome,
      name: "Chrome ",
      des: "Bookstores near me",
      time: "9:10 AM",
    },
    {
      img: photos,
      name: "Photos ",
      des: "should we meet up tomorrow before classes?",
      time: "9:10 AM",
    },
    {
      img: whatsapp,
      name: "WhatsApp ",
      des: "hey, how are you doing?",
      time: "9:10 AM",
    },
    {
      img: whatsapp,
      name: "WhatsApp ",
      des: "idk, maybe in an hour or so",
      time: "9:10 AM",
    },
    {
      img: mgngr,
      name: "Messenger ",
      des: "did she say anything to you? or dad?",
      time: "9:10 AM",
    },
  ];
  const RecentBrowserHistory = [
    {
      img: apple,
      name: "Apple ",
      des: "https://www.apple.com",
      time: "9:10 AM",
    },
    {
      img: fb,
      name: "Facebook ",
      des: "https://www.facebook.com",
      time: "9:10 AM",
    },
    {
      img: whatsapp,
      name: "WhatsApp ",
      des: "https://www.web.whatsapp.com",
      time: "9:10 AM",
    },
    {
      img: robo,
      name: "Roblox ",
      des: "https://www.roblox.com",
      time: "9:10 AM",
    },
    {
      img: cmath,
      name: "C Cymath ",
      des: "https://www.cymath.com",
      time: "9:10 AM",
    },
  ];

  return (
    <>
      <div className="md:hidden border-b mx-2 mb-2 rounded-lg pt-2 bg-gray-50 mt-20">
        <ul
          className="grid grid-cols-2  mb-2 cursor-pointer"
          onClick={handletoggle}
        >
          <li className=" mt-2 gap-2 flex font-medium  ">
            <CiMobile3 size={20} className="ms-2  mt-[0.15rem] " /> Ashly's
            Device
          </li>
          <li className="mt-2 flex flex-row-reverse text-[#172A6E]  sm:font-medium md:font-semibold">
            <button
              type="button"
              class=" font-medium text-base gap-1  text-[#172A6E]  focus:outline-none    text-center inline-flex items-center  me-2 "
            >
              <FaApple className="text-black " />
              iPhone 11
              <IoIosArrowDown className="flex justify-end" />
            </button>
          </li>
        </ul>
      </div>
      {toggle && (
        <div
          className="  mx-2  rounded-lg mb-6 cursor-pointer bg-gray-50"
          onClick={handletoggle}
        >
          <ul className="grid grid-cols-2  liborder ">
            <li className="pt-2 px-2 font-medium  "> Gerry's Device</li>
            <li className="pt-2 flex flex-row-reverse text-[#172A6E]  sm:font-medium md:font-semibold">
              <button
                type="button"
                class=" font-medium text-base gap-1  text-[#172A6E]  focus:outline-none    text-center inline-flex items-center  me-2 mb-2"
              >
                <FaApple className="text-black " />
                iPhone 13
              </button>
            </li>
          </ul>
          <ul className="grid grid-cols-2  liborder ">
            <li className="pt-2 px-2 font-medium  "> Akhil's Device</li>
            <li className="pt-2 flex flex-row-reverse text-[#172A6E]  sm:font-medium md:font-semibold">
              <button
                type="button"
                class=" font-medium text-base gap-1  text-[#172A6E]  focus:outline-none    text-center inline-flex items-center  me-2 mb-2"
              >
                Samsung 12
              </button>
            </li>
          </ul>
          <ul className="grid grid-cols-2   ">
            <li className="pt-2 px-2 font-medium  "> Gurdeep's Device</li>
            <li className="pt-2 flex flex-row-reverse text-[#172A6E]  sm:font-medium md:font-semibold">
              <button
                type="button"
                class=" font-medium text-base gap-1  text-[#172A6E]  focus:outline-none    text-center inline-flex items-center  me-2 mb-2"
              >
                <FaApple className="text-black " />
                iPhone 14 Pro
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 my-8 md:my-2 ">
        {DashIcons.map((data, i) => (
          <div
            className="flex items-center justify-center text-center mb-4 md:mb-6"
            key={i}
          >
            <div className="m-auto cursor-pointer">
              <div className="flex items-center justify-center">
                <img
                  className="w-6 h-6 md:w-8 md:h-8  m-auto"
                  src={data.icon}
                  alt
                />
              </div>
              <h6 className="text-[13px] md:text-[18px] weight-[500]">
                {data.name}
              </h6>
              <p className="text-[#007AFF] text-[12px] md:text-[16px] weight-[500]">
                {data.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8  mx:m-0 ">
        <InfoCard title="Device Info" className="mb-5 md:mb-0">
          <div className="rounded-lg py-1 bg-gray-50">
            {DashInfo.map((info, i) => (
              <ul key={i} className="grid grid-cols-2 liborder ">
                <li className="py-3 px-2 font-medium  ">{info.name}</li>
                <li className="py-3  text-[#172A6E]  sm:font-medium md:font-semibold">
                  {info.details}
                </li>
              </ul>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Live Location"
          titleRight={
            <p className="text-blue-400">
              <Link to="/location">View More</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div className="rounded-lg py-1 bg-gray-50">
            <img src={liveimg} alt="img" className="object-cover h-52 w-96" />
          </div>
        </InfoCard>
        <InfoCard title="Account Info " className="mb-5 md:mb-0">
          <div className="rounded-lg py-1 bg-gray-50">
            <ul className="grid grid-cols-2 place-content-between ">
              <li className="py-3 px-2 font-medium liborder">Membership</li>
              <li className="py-3 text-[#172A6E] font-semibold liborder text-end me-2">
                Premium
              </li>
              <li className="py-3 px-2 font-medium liborder">Duration</li>
              <li className="py-3 text-[#172A6E] liborder font-semibold text-end me-2">
                Yearly
              </li>
              <li className="p-1 px-2 font-medium liborder mt-2">Auto Renew</li>
              <li className="p-1 text-[#172A6E] liborder font-semibold text-end me-2">
                <label className={` toggle-switch mt-1`}>
                  <input
                    type="checkbox"
                    value={autoRenew}
                    onChange={() => setAutoReNew(!autoRenew)}
                  />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle" />
                  </div>
                </label>
              </li>
              <li className="py-3 px-2 font-medium liborder">Expiry Date</li>
              <li className="py-3 text-[#172A6E] liborder font-semibold text-end me-2">
                Dec 28,2024 2:28
              </li>
            </ul>
          </div>
        </InfoCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-0 mb-8  mx:m-0">
        <InfoCard
          title="Recent Calls"
          titleRight={
            <p className="text-blue-400">
              <Link to="/calls/callhistory">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          {RecentCall.map((info, i) => (
            <ul key={i} className="flex p-2 liborder ">
              <li className="flex-none w-14 pt-2">
                <img
                  className="w-10 h-10 rounded-full m-auto"
                  src={info.img}
                  alt
                />
              </li>
              <li className="p-1 flex-1 w-64 font-semibold">
                <div>
                  <p className="text-[16px] md:text-[18px] lg:text-[18px] xl:text-[24px] weight-[500]">
                    {info.name}
                  </p>
                  <div
                    className={`${
                      info.callStatus == "outgoing" && "text-gray-400"
                    } ${info.callStatus == "missed" && "text-red-600"} ${
                      info.callStatus == "incoming" && "text-green-600"
                    } flex `}
                  >
                    <p className="my-auto ">{info.callIcon}</p>
                    <p className="ps-1 text-[17px]  weight-[500]">
                      {info.callStatus}
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-4">
                {info.date}
              </li>
            </ul>
          ))}
        </InfoCard>
        <InfoCard
          title="Recent Messages"
          titleRight={
            <p className="text-blue-400">
              <Link to="/messages">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          {RecentMessages.map((info, i) => (
            <ul key={i} className="flex p-2 liborder">
              <li className="flex-none w-14 pt-2">
                <img
                  className="w-10 h-10 rounded-full m-auto"
                  src={info.img}
                  alt
                />
              </li>
              <li className="p-1 flex-1 w-64 font-semibold">
                <div>
                  <p className="text-[16px] md:text-[18px] lg:text-[18px] xl:text-[24px] weight-[500]">
                    {info.name}
                  </p>

                  <p className="ps-1 text-gray-400 lg:hidden xl:block text-[17px] weight-[500] ">
                    {info.msg.slice(0, 38)}..
                  </p>
                  <p className="ps-1 text-gray-400 lg:block hidden xl:hidden 2xl:hidden text-[17px] weight-[500] ">
                    {info.msg.slice(0, 20)}..
                  </p>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-4">
                {info.time}
              </li>
            </ul>
          ))}
        </InfoCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 md:gap-4 gap-0 mb-8 mx-4 mx:m-0">
        <div className="border border-slate-300 rounded-lg p-4 mb-5 md:mb-0">
          <h4 className="text-gray-400 text-lg font-normal">
            App Usage : Daily Average
          </h4>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">7h 24m</h1>
            <p className="text-gray-400">18% from last week</p>
          </div>
          <div>
            <img src={graph} alt="graph" />
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-blue-500">
                Productivity & Finance
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base font-medium">
                10h 49m
              </h1>
            </div>
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-cyan-600">
                Other
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                8h 32m
              </h1>
            </div>
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-orange-700">
                Social
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                5h 44m
              </h1>
            </div>
          </div>
        </div>

        <InfoCard
          title="Recent Most Used Apps"
          titleRight={
            <p className="text-blue-400">
              <Link to="/Apps/screentime">See All</Link>{" "}
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div className="rounded-lg p-2 bg-gray-50">
            {MostUsedApp.map((info, i) => (
              <div className="border-b border-slate-300">
                <ul key={i} className="flex  mb-2">
                  <li className="flex-none w-14 pt-2 border-none">
                    <img
                      className="w-10 h-10  m-auto"
                      src={info.img}
                      alt="logo"
                    />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold text-xl mt-2 text-gray-900 border-none">
                    <div>{info.name}</div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-4 border-none">
                    {info.time}
                  </li>
                </ul>
                <div className="w-full  rounded-full h-1.5 mb-2  mx-2">
                  <div
                    className="bg-gray-300 h-1.5 rounded-full "
                    style={{ width: info.bar }}
                  />
                </div>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 gap-0 mb-8 mx-4 mx:m-0">
        <InfoCard
          title="Recent Alert & Notifications"
          titleRight={
            <p className="text-blue-400">
              <Link to="/Alert&Notification/AllAllerts">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div>
            {RecentAlert.map((info, i) => (
              <div className="border-b border-slate-300">
                <ul key={i} className="flex ">
                  <li className="flex-none w-6 pt-2 border-none">
                    <img className="w-5 h-5 " src={info.img} alt="logo" />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold text-xl  text-gray-900 border-none">
                    <div>{info.name.slice(0, 20)}</div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold  text-sm border-none">
                    {info.time}
                  </li>
                </ul>

                <p className="text-sm pb-2 text-gray-400">{info.des}</p>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Recent KeyLogger"
          titleRight={
            <p className="text-blue-400">
              <Link to="/KeyLogger">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div>
            {RecentKeylogger.map((info, i) => (
              <div className="border-b border-slate-300">
                <ul key={i} className="flex ">
                  <li className="flex-none w-6 pt-2 border-none">
                    <img className="w-5 h-5 " src={info.img} alt="logo" />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold text-xl  text-gray-900 border-none">
                    <div>{info.name.slice(0, 25)}</div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold text-sm border-none">
                    {info.time}
                  </li>
                </ul>

                <p className="text-sm pb-2 text-gray-400">{info.des}</p>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Recent Browser Histroy"
          titleRight={
            <p className="text-blue-400">
              <Link to="/Browser/browserhistory">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div>
            {RecentBrowserHistory.map((info, i) => (
              <div className="border-b border-slate-300">
                <ul key={i} className="flex ">
                  <li className="flex-none w-6 pt-2 border-none">
                    <img className="w-5 h-5 " src={info.img} alt="logo" />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold text-xl  text-gray-900 border-none">
                    <div>{info.name.slice(0, 25)}</div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold text-sm border-none">
                    {info.time}
                  </li>
                </ul>

                <p className="text-sm pb-2 text-gray-400">{info.des}</p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
      <div className="flex justify-center mb-12">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px]  py-[10px] text-[#101828] text-center">
              View More
              <MdKeyboardDoubleArrowDown size={18} />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
