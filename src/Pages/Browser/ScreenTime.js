import { Link } from "react-router-dom";
import "../Browser/ScreenTime.css";
import "../../components/AppsRoutesHeader/AppsRoutesHeader.css";
import YT from "../../assests/images/yt.png";
import crome from "../../assests/images/crome.png";
import mgngr from "../../assests/images/msgngr.png";
import fb from "../../assests/images/fb.png";

import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";

import { IoAddOutline } from "react-icons/io5";

import ScreenTimeImage from "../Browser/screenTime.png";
import DataUsageImage from "../Browser/appUsage.png";

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

import Modal from "../../components/Shared/Modal.jsx";
import Upgrade from "../../components/Shared/Upgrade.jsx";
import CallsHead from "../../components/Calls/CallsHead.jsx";
import InfoCard from "../../components/Cards/InfoCard";
import graph from "../../assests/images/graph2.png";

const ScreenTime = () => {
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
  return (
    <>
      {/* Navigations, search*/}
      <CallsHead
        heading="Screen Time"
        // placeholder="Search by Name or Phone Number"
      />
      <hr class="h-px mb-4 md:hidden bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="grid grid-cols-1 md:grid-cols-1 md:my-8 lg:grid-cols-2 md:gap-4 gap-0 mb-8 mx:m-0">
        <div className="border border-slate-300 rounded-lg p-4 mb-5 md:mb-0  mx-4">
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
        <h2 className=" text-slate-400 md:hidden border-y py-3 px-4">
          Recent Most Used Apps
        </h2>
        <div className="md:border  md:border-slate-300 md:rounded-lg md:p-4 mb-5 md:mb-0">
          <div className="md:block hidden">
            <h2 className=" text-slate-400  ">Recent Most Used Apps</h2>
          </div>
          <section className={` shadow-blue-200 mx-auto w-[calc(100%-1rem)]  `}>
            <div className="capitalize flex justify-between flex-wrap items-center text-[16px] weight-[500]"></div>

            <div className="rounded-lg py-1 text-[18px] weight-[500]">
              <div className="rounded-lgs md:p-2 ">
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
                      <li className="p-1 text-[16px] md:text-[18px] text-[#172A6E] font-medium md:font-semibold pt-4 border-none">
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
            </div>
          </section>
        </div>
      </div>
      <ExportBtn />
    </>
  );
};

export default ScreenTime;
