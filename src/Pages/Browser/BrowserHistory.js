import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"
import BrowserHead from '../../components/BrowserHead/BrowserHead.js'


import { FaApple } from "react-icons/fa";

import "./Browser.css"

const BrowseHistory =()=>{
  return(
    <>
    <BrowserHead />
    
    <section className="browserContainer flex flex-col">
    {/* Browser Header */}
    <div className="browserHeader flex justify-start">
    <h3>Monday, 12 Jan 2024</h3>
    </div>
    
    {/* Browser Header */}
    <div className="browseHistoryCon flex flex-col">
    
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes flex flex-col">
    <h3><span><FaApple /></span>Apple</h3>
    <p>https://www.apple.com</p>
    </div>
    <div className="browseHistoryDate flex flex-col">
    <p>09:10 AM</p>
    </div>
    </div>
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes flex flex-col">
    <h3><span><FaApple /></span>Apple</h3>
    <p>https://www.apple.com</p>
    </div>
    <div className="browseHistoryDate flex flex-col">
    <p>09:10 AM</p>
    </div>
    </div>
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes flex flex-col">
    <h3><span><FaApple /></span>Apple</h3>
    <p>https://www.apple.com</p>
    </div>
    <div className="browseHistoryDate flex flex-col">
    <p>09:10 AM</p>
    </div>
    </div>
    <div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes flex flex-col">
    <h3><span><FaApple /></span>Apple</h3>
    <p>https://www.apple.com</p>
    </div>
    <div className="browseHistoryDate flex flex-col">
    <p>09:10 AM</p>
    </div>
    </div>
    
    </div>
    
    </section>
    <ExportBtn />
    </>
    )
}

export default BrowseHistory;