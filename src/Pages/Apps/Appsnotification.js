import { Link } from "react-router-dom";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import "../Browser/Browser.css";
import "../../components/AppsRoutesHeader/AppsRoutesHeader.css";
import "./AppNotification.css";

import { IoAddOutline } from "react-icons/io5";

import ScreenTimeImage from "../Browser/screenTime.png";
import DataUsageImage from "../Browser/appUsage.png";

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { FaApple } from "react-icons/fa";

import switchIcon from "./Switch.png";

import snapchaticon from "../../assests/images/snapchat.svg";
import telegramiconIcon from "../../assests/images/telegram.svg";
import tiktokicon from "../../assests/images/tiktok.svg";
import tindericon from "../../assests/images/tinder.svg";
import twittericon from "../../assests/images/twitter.svg";
import yt from "../../assests/images/yt.png";
import crome from "../../assests/images/crome.png";
import fb from "../../assests/images/fb.png";
import msgngr from "../../assests/images/msgngr.png";

import Modal from "../../components/Shared/Modal.jsx";
import Upgrade from "../../components/Shared/Upgrade.jsx";
import CallsHead from "../../components/Calls/CallsHead.jsx";
import Checkbox from "../../components/Shared/Checkbox.jsx";

const Appsnotification = () => {
  return (
    <>
      {/* Navigations, search*/}
      <CallsHead heading="Apps Notifications" placeholder="Search Notes" />
      <hr class="h-px  md:hidden bg-gray-200 border-0 dark:bg-gray-700" />

      {/* ====== NOTIFICATION ====== */}

      <section className="md:browserContainer md:border rounded-lg flex flex-col md:my-8">
        {/* Browser Header */}
        <div className="browserHeader appnotificationheader   border-slate-300 flex justify-between ">
          <h3 className="font-semibold text-lg md:text-xl">
            Hide Notifications (All apps)
          </h3>

          <Checkbox />
        </div>
        <hr class="h-px   bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Browser Header */}
        <div className="browseHistoryCon flex flex-col">
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <span className="mr-3 w-10 ms-2 ">
                  <img src={yt} />
                </span>
                Youtube
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <span className="mr-3 w-10 ms-2">
                  <img src={crome} className="h-10" />
                </span>
                Chrome
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <span className="mr-3 w-10 ms-2">
                  <img src={fb} className="h-10" />
                </span>
                Facebook
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <span className="mr-3 w-10 ms-2">
                  <img src={msgngr} />
                </span>
                Messenger
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <span className="mr-3">
                  <img src={snapchaticon} className="h-10" />
                </span>
                Snapchat
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <span className="mr-3">
                  <img src={telegramiconIcon} className="h-10" />
                </span>
                Telegram
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <span className="mr-3">
                  <img src={tiktokicon} className="h-10" />
                </span>
                Tiktok
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <span className="mr-3">
                  <img src={tindericon} className="h-10" />{" "}
                </span>
                Tinder
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold ">
                <span className="mr-3">
                  <img src={twittericon} className="h-10" />{" "}
                </span>
                Twitter
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
        </div>
      </section>
      <ExportBtn />
    </>
  );
};

export default Appsnotification;
