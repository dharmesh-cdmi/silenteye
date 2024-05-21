import BrowserHead from '../../components/BrowserHead/BrowserHead.js'

import "./ScreenTime.css"

import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"

import { IoAddOutline } from "react-icons/io5";

import ScreenTimeImage from "./screenTime.png"
import DataUsageImage from "./appUsage.png"

const ScreenTime =()=>{
  return(
    <>
    <BrowserHead />
    
    <section className="grid md:grid-cols-2 grid-cols-1 gap-7 mx-10">
    {/* LEFT SECTION */}
    <div className="flex">
    <img src={ScreenTimeImage} className='h-96 w-96' />
    </div>
    
    {/* RIGHT SECTION */}
    <div className=" border-2 rounded-xl flex flex-col">
    <h3 className='text-sm p-2 text-slate-500'>Recent Most Used Apps</h3>
    <img src={DataUsageImage} className='h-72 ' />
    </div>
    
    </section>
    <ExportBtn />
    </>
    )
}

export default ScreenTime;