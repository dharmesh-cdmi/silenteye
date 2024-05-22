import "./browseDataUsage.css";
import BrowserHead from "../../components/BrowserHead/BrowserHead.js";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";

import { FaApple } from "react-icons/fa";

const BrowseDataUsage = () => {
  return (
    <>
      <BrowserHead />

      <section className="browserContainer flex flex-col">
        <div className="browserHeader border-t-2 border-l-2 border-r-2 border-slate-200 border-b-0 rounded-t-lg ">
          <h3 className="flex font-semibold text-lg">
            <span>2.40 GB</span> of Website data used{" "}
          </h3>
          <p>Today</p>
        </div>

        <div className="browseHistoryCon flex flex-col">
          <div className="browseHistoryCol flexStartData flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <FaApple />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">apple.com</h3>
              <p className="text-slate-500">140.87 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData flex flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <FaApple />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">apple.com</h3>
              <p className="text-slate-500">140.28 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData flex flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <FaApple />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">apple.com</h3>
              <p className="text-slate-500">140.99 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData flex flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <FaApple />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">apple.com</h3>
              <p className="text-slate-500">140.12 MB</p>
            </div>
          </div>
        </div>
      </section>
      <ExportBtn />
    </>
  );
};

export default BrowseDataUsage;
