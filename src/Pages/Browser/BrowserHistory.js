import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import BrowserHead from "../../components/BrowserHead/BrowserHead.js";

import { FaApple, FaFacebook, FaWhatsapp } from "react-icons/fa";
import fb from "../../assests/images/fb.png";
import whatsapp from "../../assests/images/KeyLogger/whatsapp.png";
import apple from "../../assests/images/apple2.png";
import cmath from "../../assests/images/cymath2.png";
import yt from "../../assests/images/youtube.svg";

import robo from "../../assests/images/robo2.png";
import buzz from "../../assests/images/SocialApps/SilentEye-DemoDashboard/17.Browser/image 5-1.png";
import yahoo from "../../assests/images/SocialApps/SilentEye-DemoDashboard/17.Browser/image 5.png";
import akc from "../../assests/images/SocialApps/compressify/akc.png";
import wiki from "../../assests/images/SocialApps/compressify/wiki.png";

import "./Browser.css";
import CallsHead from "../../components/Calls/CallsHead.jsx";

const BrowseHistory = () => {
  const RecentBrowserHistory = [
    {
      img: apple,
      name: "Apple ",
      des: "https://www.apple.com",
      time: "09:10 AM",
    },
    {
      img: fb,
      name: "Facebook ",
      des: "https://www.facebook.com",
      time: "08:58 AM",
    },
    {
      img: whatsapp,
      name: "WhatsApp ",
      des: "https://www.web.whatsapp.com",
      time: "08:44 AM",
    },
    {
      img: robo,
      name: "Roblox ",
      des: "https://www.roblox.com",
      time: "08:43 AM",
    },
    {
      img: cmath,
      name: "C Cymath ",
      des: "https://www.cymath.com",
      time: "08:21 AM",
      noline: true,
    },
  ];
  const RecentBrowserHistory2 = [
    {
      img: yahoo,
      name: "Yahoo ",
      des: "https://www.yahoo.com",
      time: "11:38 PM",
    },
    {
      img: buzz,
      name: "BuzzFeed ",
      des: "https://www.buzzfeed.com",
      time: "11:32 PM",
    },
    {
      img: akc,
      name: "AKC ",
      des: "https://www.akc.org",
      time: "11:31 PM",
    },
    {
      img: wiki,
      name: "Wikipedia ",
      des: "https://www.wikipedia.com",
      time: "11:28 PM",
    },
    {
      img: yt,
      name: "Youtube ",
      des: "https://www.cymath.com",
      time: "11:25 PM",
      noline: true,
    },
  ];
  return (
    <>
      <CallsHead heading="Browser History" placeholder="Search " />
      <hr class="h-px  md:hidden bg-gray-200 border-0 "></hr>
      <section className="browserContainer md:border rounded-lg   flex flex-col md:my-6">
        <div className="browseHistoryCon md:rounded-lg flex flex-col">
          <h3 className="border-b-2 w-full p-3 text-base text-slate-500">
            Today, 12 Jan 2024
          </h3>
          <div className="w-full ">
            {RecentBrowserHistory.map((info, i) => (
              <div
                className={`${
                  info.noline == true ? "" : "border-b"
                } py-2 border-slate-300 px-4`}
              >
                <ul key={i} className="flex ">
                  <li className="flex-none w-6 pt-2 border-none">
                    <img className="w-5 h-5 " src={info.img} alt="logo" />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold text-lg md:text-xl text-gray-900 border-none">
                    <div>{info.name.slice(0, 25)}</div>
                  </li>
                  <li className="p-1 text-gray-400 font-medium mt-2 md:font-semibold text-sm border-none">
                    {info.time}
                  </li>
                </ul>

                <p className="text-sm pb-2 text-gray-400">{info.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="browserContainer md:border rounded-lg  mt-6 flex flex-col md:my-6">
        <div className="browseHistoryCon md:rounded-lg flex flex-col">
          <h3 className="border-b-2 w-full p-3 text-base text-slate-500">
            Monday , 20 May 2024
          </h3>
          <div className="w-full ">
            {RecentBrowserHistory2.map((info, i) => (
              <div
                className={`${
                  info.noline == true ? "" : "border-b"
                } py-2 border-slate-300 px-4`}
              >
                <ul key={i} className="flex ">
                  <li className="flex-none w-6 pt-2 border-none">
                    <img className="w-5 h-5 " src={info.img} alt="logo" />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold text-lg md:text-xl text-gray-900 border-none">
                    <div>{info.name.slice(0, 25)}</div>
                  </li>
                  <li className="p-1 text-gray-400 font-medium md:font-semibold text-sm border-none">
                    {info.time}
                  </li>
                </ul>

                <p className="text-sm pb-2  text-gray-400">{info.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExportBtn />
    </>
  );
};

export default BrowseHistory;
