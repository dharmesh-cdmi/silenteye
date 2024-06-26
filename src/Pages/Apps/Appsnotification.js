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
import whatsapp from "../../assests/images/SocialApps/whatsapp.png";
import gmail from "../../assests/images/gmail.svg";
import gsheet from "../../assests/images/sheet.svg";
import telegram from "../../assests/images/telegram.svg";
import twitch from "../../assests/images/SocialApps/twitch.png";
import discord from "../../assests/images/SocialApps/discord.png";
import hotspot from "../../assests/images/SocialApps/hotspot.png";

import vimeo from "../../assests/images/SocialApps/vimeo.png";
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
      <hr className="h-px  md:hidden bg-gray-200 border-0 " />

      {/* ====== NOTIFICATION ====== */}

      <section className="md:browserContainer md:border rounded-lg flex flex-col md:my-8">
        {/* Browser Header */}
        <div className="browserHeader appnotificationheader   border-slate-300 flex justify-between ">
          <h3 className="font-semibold text-lg md:text-xl">
            Hide Notifications (All apps)
          </h3>

          <Checkbox />
        </div>
        <hr className="h-px   bg-gray-200 border-0" />

        {/* Browser Header */}
        <div className="browseHistoryCon flex flex-col">
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={hotspot} className="h-10" />
                &nbsp; &nbsp; Mobile Hotspot
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={yt} />
                &nbsp; &nbsp; Youtube
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={crome} className="h-10" />
                &nbsp; &nbsp; Chrome
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={fb} className="h-10" />
                &nbsp; &nbsp; Facebook
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={msgngr} />
                &nbsp; &nbsp; Messenger
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol  flex ">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={whatsapp} className="h-10" />
                &nbsp; &nbsp; Whatsapp
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={gmail} className="h-10" />
                &nbsp; &nbsp; Gmail
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={gsheet} className="h-10" />
                &nbsp; &nbsp; Google Sheets
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold">
                <img src={telegram} className="h-10" /> &nbsp; &nbsp; Telegram
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>

          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold ">
                <img src={twitch} className="h-10" /> &nbsp; &nbsp; Twitch
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold ">
                <img src={discord} className="h-10" />
                &nbsp; &nbsp; Discord
              </h3>
            </div>
            <div className="browseHistoryDate Notificationsappsdataicon flex flex-col">
              <Checkbox />
            </div>
          </div>
          <div className="browseHistoryCol flex" style={{ border: "none" }}>
            <div className="browseHistoryDes notificationappdesicon flex flex-col">
              <h3 className="flex align-middle items-center font-semibold ">
                <img src={vimeo} className="h-10 w-10" />
                &nbsp; &nbsp; Vimeo
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
