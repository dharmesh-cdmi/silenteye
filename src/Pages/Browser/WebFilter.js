import BrowserHead from "../../components/BrowserHead/BrowserHead.js";

import "./webFilter.css";

import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";

import { IoAddOutline } from "react-icons/io5";
import CallsHead from "../../components/Calls/CallsHead.jsx";

const WebFilter = () => {
  return (
    <>
      <CallsHead heading="Web Filters" placeholder="Search " />

      <section className="webFilterwrapper md:p-4  flex flex-col md:my-6">
        <div className="webFilterContainer md:rounded-lg rounded-none flex flex-col">
          {/* Browser Header */}
          <div className="webFilterHeader flex justify-between">
            <h3 className="text-lg font-semibold">Disallowed filters</h3>
            <button>
              <IoAddOutline />
            </button>
          </div>

          {/* Browser  DATA COLUMNS */}
          <div className="browseHistoryCol  flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold lg:text-lg text-sm">
                https://www.apple.com
              </h3>
              <p>website blocked</p>
            </div>
            <div className="browseHistoryDate flex flex-col">
              <p className="text-slate-500 text-sm">May 13, 09:10 AM</p>
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold lg:text-lg text-sm">
                https://www.facebook.com
              </h3>
              <p>website blocked</p>
            </div>
            <div className="browseHistoryDate flex flex-col">
              <p className="text-slate-500 text-sm">May 13, 09:10 AM</p>
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold lg:text-lg text-sm">Pen Vape</h3>
              <p>website blocked</p>
            </div>
            <div className="browseHistoryDate flex flex-col">
              <p className="text-slate-500 text-sm">May 13, 09:10 AM</p>
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold lg:text-lg text-sm">Pen Vape</h3>
              <p>website blocked</p>
            </div>
            <div className="browseHistoryDate flex flex-col">
              <p className="text-slate-500 text-sm">May 13, 09:10 AM</p>
            </div>
          </div>
        </div>
      </section>
      <ExportBtn />
    </>
  );
};

export default WebFilter;
