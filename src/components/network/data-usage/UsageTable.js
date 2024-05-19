import React from "react";
import Switch from "../../../UI/Switch";
import whatsapp from '../../../assests/images/SocialApps/whatsapp.png'
import messenger from '../../../assests/images/SocialApps/messenger.png'
import facebook from '../../../assests/images/SocialApps/facebook.png'
import youtube from '../../../assests/images/yt.png'
import crome from '../../../assests/images/crome.png'

function UsageTable() {
  const contents = [
    { name: "Mobile Hotspot", img: "" },
    { name: "WhatsApp", img: whatsapp },
    { name: "Youtube", img: youtube },
    { name: "Chrome", img: crome },
    { name: "Facebook", img: facebook },
    { name: "Messenger", img: messenger },
    { name: "Gmail", img: crome },
  ];
  return (
    <div className="grid grid-cols-1 border lg:mx-4 mx-5 mt-9 rounded-xl">
      {contents.map((content, index) => {
        return (
          <div className="flex align-middle justify-between p-4 border ">
            <div className="flex">
              <img className="w-8 h-8 rounded-full mr-3" src={content.img}></img>
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