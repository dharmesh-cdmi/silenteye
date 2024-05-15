import BrowserHead from "../../components/BrowserHead/BrowserHead.js"
import "./ScreenTime.css"

import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"

import { IoAddOutline } from "react-icons/io5";

import ScreenTimeImage from "./screenTime.png"
import DataUsageImage from "./appUsage.png"

const ScreenTime =()=>{
  return(
    <>
    <BrowserHead />
    
    <section className="screenTimeWrapper flex">
    {/* LEFT SECTION */}
    <div className="screenTimeLeft flex">
    <img src={ScreenTimeImage} />
    </div>
    
    {/* RIGHT SECTION */}
    <div className="screenTimeRight flex flex-col">
    <h3>Recent Most Used Apps</h3>
    <img src={DataUsageImage} />
    </div>
    
    </section>
    <ExportBtn />
    </>
    )
}

export default ScreenTime;