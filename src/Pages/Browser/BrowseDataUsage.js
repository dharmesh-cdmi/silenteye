import "./browseDataUsage.css";
import BrowserHead from "../../components/BrowserHead/BrowserHead.js";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";

import { FaApple } from "react-icons/fa";
import CallsHead from "../../components/Calls/CallsHead.jsx";
import facebook from "../../assests/images/SocialApps/facebook.png";
import yt from "../../assests/images/SocialApps/yt.png";
import google from "../../assests/images/SocialApps/Google.png";
import twitter from "../../assests/images/SocialApps/twitter.png";

const BrowseDataUsage = () => {
  return (
    <>
      <CallsHead heading="Data Usage" placeholder="Search " />

      <section className="browserContainer  flex flex-col md:my-6">
        <div className="p-4 w-full md:rounded-t-md rounded-none border border-slate-200   ">
          <h3 className="flex font-semibold text-lg">
            <span className="text-2xl font-extrabold">102 MB</span>&nbsp; of
            Website data used
          </h3>
          <p className="text-black/50">Today</p>
        </div>

        <div className="browseHistoryCon flex flex-col md:border-b-md">
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
          <div className="browseHistoryCol flexStartData ms-2  flex">
            <div className="browseHistoryDate flex flex-col">
              <img className="w-10 h-10  m-auto" src={yt} alt />
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Youtube</h3>
              <p className="text-slate-500">140.28 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData  flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <img
                  className="w-10 h-10 rounded-full m-auto"
                  src={google}
                  alt
                />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Google</h3>
              <p className="text-slate-500">140.99 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData ms-2  flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <img
                  className="w-10 h-10 rounded-full m-auto"
                  src={facebook}
                  alt
                />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Facebook</h3>
              <p className="text-slate-500">140.12 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData ms-2  flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <img
                  className="w-10 h-10 rounded-full m-auto"
                  src={twitter}
                  alt
                />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Twitter</h3>
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
