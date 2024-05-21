import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import BrowserHead from "../../components/BrowserHead/BrowserHead.js";

import { FaApple,FaFacebook,FaWhatsapp } from "react-icons/fa";

import "./Browser.css";

const BrowseHistory = () => {
  return (
    <>
      <BrowserHead />

      <section className="browserContainer flex flex-col">
        <div className="browseHistoryCon flex flex-col">
          <h3 className="border-b-2 w-full p-3 text-sm text-slate-500">
            Today, 12 Jan 2024
          </h3>

          <div className="browseHistoryCol  flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-bold text-md flex">
                <span className="mr-1">
                  <FaApple />
                </span>
                Apple
              </h3>
              <p className="text-sm text-slate-500">https://www.apple.com</p>
            </div>
            <div className="browseHistoryDate flex flex-col">
              <p className="text-sm text-slate-500">09:10 AM</p>
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold text-md flex">
                <span className="mr-1">
                  <FaFacebook />
                </span>
                Facebook
              </h3>
              <p className="text-sm text-slate-500">https://www.apple.com</p>
            </div>
            <div className="browseHistoryDate flex flex-col">
              <p className="text-sm text-slate-500">09:10 AM</p>
            </div>
          </div>
          <div className="browseHistoryCol flex ">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold text-md flex">
                <span className="mr-1">
                  <FaWhatsapp />
                </span>
                Whatsapp
              </h3>
              <p className="text-sm text-slate-500">https://www.apple.com</p>
            </div>
            <div className="browseHistoryDate flex flex-col">
              <p className="text-sm text-slate-500">09:10 AM</p>
            </div>
          </div>
          <div className="browseHistoryCol flex ">
            <div className="browseHistoryDes ">
              <h3 className="font-semibold text-md flex">
                <span className="mr-1">
                  <FaApple />
                </span>
                Roblox
              </h3>
              <p className="text-sm text-slate-500">https://www.apple.com</p>
            </div>
            <div className="browseHistoryDate flex flex-col">
              <p className="text-sm text-slate-500">09:10 AM</p>
            </div>
          </div>
        </div>
      </section>
      <ExportBtn />
    </>
  );
};

export default BrowseHistory;
