import { Link } from "react-router-dom";
import "./Location.css";
import LocationHead from "../../components/LocationHead/LocationHead.js";
import { LocationHistoryData } from "./LocationData/LocationHistoryData.js";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import { IoIosArrowDropright } from "react-icons/io";
import { FaWifi } from "react-icons/fa";

import Map from "../../assests/images/map.png";

const LocationHistory = () => {
  return (
    <div className="Location-wrapper">
      <div className="Location-container flex flex-col justify-center align-middle ">
        <LocationHead />

        {/*  LIVE LOCATION HEADER */}
        {/* <div className="locationHeader flex justify-center">
          <h3>Live Location</h3>
          <Link to="#">view more</Link>
        </div> */}

        {/*  LIVE LOCATION HISTORY HEADER */}
        <div className="LocationHistoryHead flex justify-start rounded-t-lg text-sm text-slate-500">
          <h3>Wifi Logger History</h3>
        </div>
        {/*  LIVE LOCATION HISTORY BODY */}
        <div className="LocationHistoryBody flex flex-col justify-start">
          {LocationHistoryData.length > 0 ? (
            LocationHistoryData.map((v, i) => (
              <div className="LocationHistoryCols flex gap-16 justify-start cursor-pointer border-r-2 border-l-2">
                <div className="locationhistoryImg" />
                <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
                  <p className="flex justify-start gap-4 text-slate-500 text-sm">
                    <span className="LiveCircleIcon" />
                    {v.des}
                  </p>
                  <p className="flex justify-start gap-4 text-slate-700  font-semibold text-lg">
                    <FaWifi />
                    {v.title}
                  </p>
                  <p className="flex justify-start gap-4 ml-0 text-sm text-slate-500 ">{v.date+ " 10:38 AM"}</p>
                </div>
              </div>
            ))
          ) : (
            <h3>no data found</h3>
          )}
        </div>

        <ExportBtn />
      </div>
    </div>
  );
};

export default LocationHistory;
