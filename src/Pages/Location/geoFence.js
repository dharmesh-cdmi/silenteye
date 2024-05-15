import {Link} from "react-router-dom"
import "./Location.css"
import "./geoFrence.css"
import LocationHead from "../../components/LocationHead/LocationHead.js"
import {LocationGeofrenceData} from "./LocationData/LocationHistoryData.js"
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"
import { IoIosArrowDropright } from "react-icons/io";
import { FaWifi } from "react-icons/fa";

import Map from "../../assests/images/map.png"

const GeoFrence =()=>{
  return(
       <div className="Location-wrapper">
    <div className="Location-container flex flex-col justify-center align-middle ">
    <LocationHead />
       <div className="geoTopBtns flex">
   <Link to={"#"}><button className="active">All</button></Link>
   <Link to={"#"}><button>Today</button></Link>
   <Link to={"#"}><button>Yesterday</button></Link>
   <Link to={"#"}><button>Last 7 Day</button></Link>
   </div>
    {/* GEOFRENCE CONTAINERS */}
   <div className="geoFrenceContainer flex">
   
    {/* GEOFRENCE LEFT CONTAINERS */}
   <div className="geoFrenceConLeft flex flex-col justify-center">
   <div className="geoLeftDes flex flex-col">
   <h3>GeoFrence History</h3>
   </div>
   <div className="geoLeftBtns flex">
   <Link to={"#"}><button className="active">All</button></Link>
   <Link to={"#"}><button>Today</button></Link>
   <Link to={"#"}><button>Yesterday</button></Link>
   <Link to={"#"}><button>Last 7 Day</button></Link>
   </div>
   
   {/*  LIVE LOCATION HISTORY BODY */}
    <div className="LocationHistoryBody flex flex-col justify-start">
    {LocationGeofrenceData.length > 0 ?
      LocationGeofrenceData.map((v, i)=>(
    <div className="LocationHistoryCols flex gap-16 justify-start cursor-pointer">
    <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
    <p className="flex justify-start gap-4"><span className="LiveCircleIcon iconBlue" />
    {v.des}</p>
    <h3>{v.title}</h3>
     <p className="flex justify-start gap-4">{v.date}</p>
    </div>
    </div>
       )) : (
         <h3>no data found</h3>
         )
    }
    </div>
   
   </div>
   
    {/* GEOFRENCE RIGHT CONTAINERS */}
   <div className="geoFrenceConRight flex flex-col justify-center">
     <div className="geoRightDes flex flex-col">
   <h3>GeoFrence History</h3>
   </div>
   <div className="geoRightMap" />

<div className="LocationHistoryCols flex gap-16 justify-start cursor-pointer">
    <div className="locationhistoryImg ml-2" />
    <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
    <p className="flex justify-start"><span className="LiveCircleIcon" />
    41.3130335</p>
    <h3>S Mainsp</h3>
     <p className="flex justify-start">Mon, May 2024</p>
    </div>
    </div>

   </div>
   
    </div>
    <ExportBtn />
    </div>
    </div>
    )
}

export default GeoFrence;