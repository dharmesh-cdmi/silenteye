import { Link } from "react-router-dom";
import "./Location.css";
import LocationHead from "../../components/LocationHead/LocationHead.js";
import { LocationData } from "./LocationData/LocationData.js";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import { IoIosArrowDropright } from "react-icons/io";

import Map from "../../assests/images/map.png";

const Location = () => {
  return (
    <div className="Location-wrapper">
      <div className="Location-container flex flex-col justify-center align-middle ">

        {/*  LIVE LOCATION HEADER */}
        {/* <div className="locationHeader flex justify-center">
    <h3>Live Location</h3>
    <Link to="#">view more</Link>
    </div> */}
        <LocationHead />

        {/*  LIVE LOCATION MAP */}
        <div className="LocationMapCon flex justify-center">
          <img src={Map} alt={"map"} className="h-full" />
          {/* <Link><button className="LocationMapConBtn flex justify-center">Live Tracking <IoIosArrowDropright /></button></Link> */}
        </div>

        {/*  LIVE LOCATION HISTORY HEADER */}

        {/*  LIVE LOCATION HISTORY BODY */}
        <div className="LocationHistoryBody flex flex-col justify-start">
          {LocationData.length > 0 ? (
            LocationData.map((v, i) => (
              <div
                className="LocationHistoryCol flex flex-col justify-start cursor-pointer"
                style={{ padding: "1rem", borderBottom: "1.5px solid #d0d4dd" }}
              >
                <p className="flex justify-start gap-4">
                  <span className="LiveCircleIcon clear-starttext-md text-gray-500" />
                  {v.des}
                </p>
                <h3 className="text-lg mt-2">{v.title}</h3>
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

export default Location;
