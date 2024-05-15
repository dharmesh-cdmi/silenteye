import {Link} from "react-router-dom"
import "./Location.css"
import LocationHead from "../../components/LocationHead/LocationHead.js"
import {LocationHistoryData} from "./LocationData/LocationHistoryData.js"
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"
import { IoIosArrowDropright } from "react-icons/io";
import { FaWifi } from "react-icons/fa";

import Map from "../../assests/images/map.png"

const LocationHistory =()=>{
  return(
       <div className="Location-wrapper">
    <div className="Location-container flex flex-col justify-center align-middle ">
    <LocationHead />
    
    {/*  LIVE LOCATION HEADER */}
    <div className="locationHeader flex justify-center">
    <h3>Live Location</h3>
    <Link to="#">view more</Link>
    </div>
    
    {/*  LIVE LOCATION HISTORY HEADER */}
    <div className="LocationHistoryHead flex justify-start">
    <h3>Wifi Logger History</h3>
    </div>
    {/*  LIVE LOCATION HISTORY BODY */}
    <div className="LocationHistoryBody flex flex-col justify-start">
    {LocationHistoryData.length > 0 ?
      LocationHistoryData.map((v, i)=>(
    <div className="LocationHistoryCols flex gap-16 justify-start cursor-pointer">
    <div className="locationhistoryImg" />
    <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
    <p className="flex justify-start gap-4"><span className="LiveCircleIcon" />
    {v.des}</p>
    <p className="flex justify-start gap-4 text-slate-700"><FaWifi />
    {v.title}</p>
     <p className="flex justify-start gap-4">{v.date}</p>
    </div>
    </div>
       )) : (
         <h3>no data found</h3>
         )
    }
    </div>
    
    <ExportBtn />
    </div>
    </div>
    )
}

export default LocationHistory;