import BrowserHead from '../../components/BrowseHead/BrowserHead.js'
import "./webFilter.css"

import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"

import { IoAddOutline } from "react-icons/io5";

const WebFilter =()=>{
  return(
    <>
    <BrowserHead />
    
    <section className="webFilterwrapper flex flex-col">
    <div className="webFilterContainer flex flex-col">
    {/* Browser Header */}
    <div className="webFilterHeader flex justify-between">
    <h3>Disallowed filters</h3>
     <button><IoAddOutline /></button>
    </div>
    
    {/* Browser  DATA COLUMNS */}
<div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes flex flex-col">
    <h3>https://www.apple.com</h3>
    <p>website blocked</p>
    </div>
    <div className="browseHistoryDate flex flex-col">
    <p>May 13, 09:10 AM</p>
    </div>
    </div>
<div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes flex flex-col">
    <h3>https://www.apple.com</h3>
    <p>website blocked</p>
    </div>
    <div className="browseHistoryDate flex flex-col">
    <p>May 13, 09:10 AM</p>
    </div>
    </div>
<div className="browseHistoryCol flex flex">
    <div className="browseHistoryDes flex flex-col">
    <h3>https://www.apple.com</h3>
    <p>website blocked</p>
    </div>
    <div className="browseHistoryDate flex flex-col">
    <p>May 13, 09:10 AM</p>
    </div>
    </div>
    
    </div>
    </section>
    <ExportBtn />
    </>
    )
}

export default WebFilter;