import BrowserHead from "../../components/BrowserHead/BrowserHead.js";

import "./webFilter.css";

import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";

import { IoAddOutline } from "react-icons/io5";
import CallsHead from "../../components/Calls/CallsHead.jsx";

const WebFilter = () => {
  return (
    <>
      <CallsHead heading="Web Filters" placeholder="Search " />
      <hr class="h-px  bg-gray-200 border-0 "></hr>

      <section className="webFilterwrapper md:border rounded-lg md:p-4  flex flex-col md:my-6">
        <div className="webFilterContainer md:rounded-lg rounded-none flex flex-col">
          {/* Browser Header */}
          <div className="webFilterHeader flex justify-between">
            <h3 className="text-lg font-semibold">Disallowed filters</h3>
            <button>
              <IoAddOutline />
            </button>
          </div>

          {/* Browser  DATA COLUMNS */}
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold text-lg lg:text-lg ">
                https://www.facebook.com
              </h3>
              <div className="flex justify-between">
                <p className="text-black/50 font-normal">website blocked</p>
              </div>
            </div>
            <div className="browseHistoryDate flex flex-col ">
              <p className="text-slate-500 text-sm hidden md:block">
                May 21,2024 01:12 PM
              </p>
              <p className="text-slate-500 text-sm md:hidden mt-8">
                2019-10-17 02:25:09
              </p>
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold text-lg lg:text-lg ">Pen Vape</h3>
              <div className="flex justify-between">
                <p className="text-black/50 font-normal">website blocked</p>
              </div>
            </div>
            <div className="browseHistoryDate flex flex-col ">
              <p className="text-slate-500 text-sm hidden md:block">
                May 20, 2024 07:46 AM
              </p>
              <p className="text-slate-500 text-sm md:hidden mt-8">
                May 20, 2024 07:46 AM
              </p>
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold text-lg lg:text-lg ">
                https://www.apple.com
              </h3>
              <div className="flex justify-between">
                <p className="text-black/50 font-normal">website blocked</p>
              </div>
            </div>
            <div className="browseHistoryDate flex flex-col ">
              <p className="text-slate-500 text-sm hidden md:block">
                May 19, 2024 05:37 PM
              </p>
              <p className="text-slate-500 text-sm md:hidden mt-8">
                2019-10-17 02:25:09
              </p>
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold text-lg lg:text-lg ">Nudity</h3>
              <div className="flex justify-between">
                <p className="text-black/50 font-normal">Keyword blocked</p>
              </div>
            </div>
            <div className="browseHistoryDate flex flex-col ">
              <p className="text-slate-500 text-sm hidden md:block">
                May 19, 2024 12:24 PM
              </p>
              <p className="text-slate-500 text-sm md:hidden mt-8">
                2019-10-17 02:25:09
              </p>
            </div>
          </div>
        </div>
      </section>
      <ExportBtn />
    </>
  );
};

export default WebFilter;
