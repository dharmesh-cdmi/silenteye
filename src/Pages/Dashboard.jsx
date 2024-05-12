import React from "react";

import { FaRegImages, FaSignal, FaWifi } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import { IoDocumentTextOutline, IoMusicalNotesOutline } from "react-icons/io5";
import { LuFolderOpenDot } from "react-icons/lu";
import { TbGps } from "react-icons/tb";
import { TiBatteryHigh } from "react-icons/ti";
import { VscDiffAdded, VscFolderLibrary } from "react-icons/vsc";
import InfoCard from "../components/Cards/InfoCard";
import liveimg from "../assests/images/liveloca.png"



const Dashboard = () => {
  const DashIcons = [
    {
      icon: <FaWifi size={25} />,
      name: "Wifi",
      status: "On",
      link: "",
    },
    {
      icon: <FaSignal size={25} />,
      name: "Verizon",
      status: "On",
      link: "",
    },
    {
      icon: <TbGps size={25} />,
      name: "GPS",
      status: "On",
      link: "",
    },
    {
      icon: <TiBatteryHigh size={25} />,
      name: "Battery",
      status: "76%",
      link: "",
    },
    {
      icon: <LuFolderOpenDot size={25} />,
      name: "Device Storage",
      status: "64 GB",
      link: "",
    },
    {
      icon: <VscFolderLibrary size={25} />,
      name: "Free Space",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: <FiVideo size={25} />,
      name: "Videos",
      status: "12.57 GB",
      link: "",
    },
    {
      icon: <FaRegImages size={25} />,
      name: "Image",
      status: "4.57 GB",
      link: "",
    },
    {
      icon: <IoMusicalNotesOutline size={25} />,
      name: "Audio",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: <GrAppsRounded size={25} />,
      name: "Apps",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: <IoDocumentTextOutline size={25} />,
      name: "Documents",
      status: "8.78 GB",
      link: "",
    },
    {
      icon: <VscDiffAdded size={25} />,
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
  return (
    <>
      <div className="grid grid-cols-6 gap-4 mb-4">
        {DashIcons.map((data, i) => (
          <div
            className="flex items-center justify-center text-center mb-6"
            key={i}
          >
            <div className="m-auto cursor-pointer">
              <div className="flex items-center justify-center">
                {data.icon}
              </div>
              <h6 className="font-normal">{data.name}</h6>
              <p className="text-[#007AFF] font-light">{data.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
      
        <InfoCard title="Device Info" >
        <div className="rounded-lg py-1 bg-gray-100" >
        {DashInfo.map((info,i)=>(
          
            <ul key={i} className="grid grid-cols-2">
              <li className="p-1 px-2 font-medium">{info.name}</li>
              <li className="p-1 text-[#172A6E] font-semibold">{info.details}</li>
            </ul>
       
             ))} 
        </div>
        </InfoCard>
        <InfoCard title="Live Location" titleRight={<p className="text-blue-400">More</p>}>
        <div className="rounded-lg py-1 bg-gray-100" >
             <img src={liveimg} alt="img" className="object-contain" />
        </div>
        </InfoCard>
        <InfoCard title="Account Info "   >
        <div className="rounded-lg py-1 bg-gray-100" >
        {DashInfo.map((info,i)=>(
          
            <ul key={i} className="grid grid-cols-2">
              <li className="p-1 px-2 font-medium">{info.name}</li>
              <li className="p-1 text-[#172A6E] font-semibold">{info.details}</li>
            </ul>
       
             ))} 
        </div>
        </InfoCard>
   
      </div>
    </>
  );
};

export default Dashboard;
