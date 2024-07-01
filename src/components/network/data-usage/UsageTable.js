import React from "react";
import Switch from "../../../UI/Switch";
import whatsapp from '../../../assests/images/SocialApps/whatsapp.png'
import messenger from '../../../assests/images/SocialApps/messenger.png'
import facebook from '../../../assests/images/SocialApps/facebook.png'
import youtube from '../../../assests/images/yt.png'
import crome from '../../../assests/images/crome.png'
import wif from '../../../assests/images/wif.png'
import sheet from '../../../assests/images/sheet.png'
import gmail from '../../../assests/images/gmaill.png'


function UsageTable() {
  const contents = [
    { name: "Mobile Hotspot", img: wif },
    { name: "Youtube", img: youtube },
    { name: "Chrome", img: crome },
    { name: "Facebook", img: facebook },
    { name: "Messenger", img: messenger },
    { name: "WhatsApp", img: whatsapp },
    { name: "Google Sheets", img: sheet },
    { name: "Gmail", img: gmail },
  ];
  return (
    <div className="grid grid-cols-1 lg:border-2 border-0 lg:mx-4 mx-0 lg:mt-9 mt-3 rounded-xl">
      {contents.map((content, index) => {
        return (
          <div className={`flex align-middle justify-between lg:p-4 py-4 px-2  border-b ${ content.name==="Gmail" ? "lg:border-b-0" :"lg:border-b-2"} `}>
            <div className="flex">
              <img className="w-8 h-8 rounded-lg mr-3" src={content.img}></img>
              <h3 className="text-lg font-semibold mt-1">{content.name}</h3>
            </div>
            <Switch />
          </div>
        );
      })}
    </div>
  );
}

export default UsageTable;
