import { Link } from "react-router-dom";
import "./Location.css";
import "./geoFrence.css";
import LocationHead from "../../components/LocationHead/LocationHead.js";
import { LocationGeofrenceData } from "./LocationData/LocationHistoryData.js";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import { IoIosArrowDropright } from "react-icons/io";
import { FaWifi } from "react-icons/fa";

import Map from "../../assests/images/map.png";
import CallsHead from "../../components/Calls/CallsHead.jsx";

const GeoFrence = () => {
  return (
    <div className="Location-wrapper">
      <div className="Location-container flex flex-col justify-center align-middle ">
        <CallsHead heading="Geo Fence" placeholder="Search " />
        <hr class="h-px md:hidden bg-gray-200 border-0 dark:bg-gray-700"></hr>

        {/* <div className="geoTopBtns flex">
   <Link to={"#"}><button className="active">All</button></Link>
   <Link to={"#"}><button>Today</button></Link>
   <Link to={"#"}><button>Yesterday</button></Link>
   <Link to={"#"}><button>Last 7 Day</button></Link>
   </div> */}
        {/* GEOFRENCE CONTAINERS */}
        <div className="geoFrenceContainer flex">
          {/* GEOFRENCE LEFT CONTAINERS */}
          <div className="geoFrenceConLeft flex flex-col justify-start">
            <div className="geoLeftDes flex flex-col">
              <h3 className="text-slate-500 text-base font-medium">
                GeoFrence History
              </h3>
            </div>
            <div className="geoLeftBtns flex">
              <Link to={"#"}>
                <button className="active text-slate-500">All</button>
              </Link>
              <Link to={"#"}>
                <button className=" text-slate-500">Today</button>
              </Link>
              <Link to={"#"}>
                <button className=" text-slate-500">Yesterday</button>
              </Link>
              <Link to={"#"}>
                <button className=" text-slate-500">Last 7 Day</button>
              </Link>
            </div>

            {/*  LIVE LOCATION HISTORY BODY */}
            <div className="LocationHistoryBody flex flex-col justify-start">
              {LocationGeofrenceData.length > 0 ? (
                LocationGeofrenceData.map((v, i) => (
                  <div className="LocationHistoryCols flex gap-16 justify-start cursor-pointer">
                    <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
                      <p className="flex justify-start gap-4 text-slate-500">
                        <span className="LiveCircleIcon iconBlue" />
                        {v.des}
                      </p>
                      <h3 className="text-lg  font-bold">{v.title}</h3>
                      <p className="flex justify-start gap-4 text-slate-500 text-sm">
                        {v.date + " 10:45 AM"}{" "}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h3>no data found</h3>
              )}
            </div>
          </div>

          {/* GEOFRENCE RIGHT CONTAINERS */}

          <div className="geoFrenceConRight pt-1 flex flex-col justify-center">
            <div className=" flex ms-4 pt-[.3rem] justify-start items-center gap-4 md:hidden  font-semibold">
              <Link to={"#"}>
                <button className="active text-black/50 py-1 px-3 rounded">
                  All
                </button>
              </Link>
              <Link to={"#"}>
                <button className=" text-black/50">Today</button>
              </Link>
              <Link to={"#"}>
                <button className=" text-black/50">Yesterday</button>
              </Link>
              <Link to={"#"}>
                <button className=" text-black/50">Last 7 Day</button>
              </Link>
            </div>
            <hr class="h-px my-2 md:hidden bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="md:p-2  pb-2 flex flex-col">
              <h3 className=" text-black/50 mx-3 text-base font-medium">
                Location History
              </h3>
            </div>

            <div className="geoRightMap hidden md:block" />
            <div className="geoRightMap2 md:hidden" />

            <div className="LocationHistoryCols flex gap-16 justify-start cursor-pointer">
              <div className="locationhistoryImg ml-2" />
              <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
                <p className="flex justify-start text-slate-500 text-sm">
                  <span className="LiveCircleIcon  mr-2 text-[18px] font-medium" />
                  41.3130335
                </p>
                <h3 className="font-semibold text-lg">S Mainsp</h3>
                <p className="flex justify-start text-slate-500 text-sm font-medium">
                  Mon, May 2024 10:45 AM
                </p>
              </div>
            </div>
          </div>
        </div>
        <ExportBtn />
      </div>
    </div>
  );
};

export default GeoFrence;
