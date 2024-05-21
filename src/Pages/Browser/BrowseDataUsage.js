import "./browseDataUsage.css"
import BrowserHead from "../../components/BrowseHead/BrowserHead.js";

import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"

import { FaApple } from "react-icons/fa";

const BrowseDataUsage =()=>{
  return(
    <>
    <BrowserHead />
    
    <section className="browserContainer flex flex-col">
    {/* Browser Header */}
    <div className="browserHeader flex justify-start">
    <h3 className="flex"><span>702 MB</span> of website data used today</h3>
    </div>
    
    {/* Browser Header */}
    <div className="browseHistoryCon flex flex-col">
    
    <div className="browseHistoryCol flexStartData flex flex">
        <div className="browseHistoryDate flex flex-col">
    <span><FaApple /></span>
    </div>
    <div className="browseHistoryDes flex flex-col">
    <h3>apple.com</h3>
    <p>140 MB</p>
    </div>
    </div>
    <div className="browseHistoryCol flexStartData flex flex">
        <div className="browseHistoryDate flex flex-col">
    <span><FaApple /></span>
    </div>
    <div className="browseHistoryDes flex flex-col">
    <h3>apple.com</h3>
    <p>140 MB</p>
    </div>
    </div>
    <div className="browseHistoryCol flexStartData flex flex">
        <div className="browseHistoryDate flex flex-col">
    <span><FaApple /></span>
    </div>
    <div className="browseHistoryDes flex flex-col">
    <h3>apple.com</h3>
    <p>140 MB</p>
    </div>
    </div>
    <div className="browseHistoryCol flexStartData flex flex">
        <div className="browseHistoryDate flex flex-col">
    <span><FaApple /></span>
    </div>
    <div className="browseHistoryDes flex flex-col">
    <h3>apple.com</h3>
    <p>140 MB</p>
    </div>
    </div>
    
    </div>
    
    </section>
    <ExportBtn />
    </>
    )
}

export default BrowseDataUsage;