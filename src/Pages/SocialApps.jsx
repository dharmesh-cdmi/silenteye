import React from "react";
import SocialAppsHeader from "../components/SocialApps/SocialAppsHeader";
import instagram from "../../src/assests/images/SocialApps/Instagram.png";
import facebook from "../../src/assests/images/SocialApps/facebook.png";
import whatsapp from "../../src/assests/images/SocialApps/whatsapp.png";
import snapchat from "../../src/assests/images/SocialApps/snapchat.png";
import skype from "../../src/assests/images/SocialApps/skype.png";
import teams from "../../src/assests/images/SocialApps/Teams.png";
import viber from "../../src/assests/images/SocialApps/viber.png";
import tinder from "../../src/assests/images/SocialApps/tinder.png";
import slack from "../../src/assests/images/SocialApps/slack.png";
import discord from "../../src/assests/images/SocialApps/discord.png";
import gmail from "../../src/assests/images/SocialApps/gmail.png";
import outlook from "../../src/assests/images/SocialApps/outlook.png";
import telegram from "../../src/assests/images/SocialApps/telegram.png";
import signal from "../../src/assests/images/SocialApps/signal.png";
import hangout from "../../src/assests/images/SocialApps/hangouts.png";
import line from "../../src/assests/images/SocialApps/Line.png";
import kik from "../../src/assests/images/SocialApps/kik.png";
import tango from "../../src/assests/images/SocialApps/tango.png";
import kakao from "../../src/assests/images/SocialApps/kokao.png";
import hike from "../../src/assests/images/SocialApps/hike.png";
import imo from "../../src/assests/images/SocialApps/imo.png";
import zolo from "../../src/assests/images/SocialApps/zolo.png";
import twitter from "../../src/assests/images/SocialApps/twitter.png";
import messenger from "../../src/assests/images/SocialApps/messenger.png";
import SocialApp from "../components/SocialApps/SocialApp";
import Button from "../components/Shared/Button";
import More from "../assests/images/more.png";

const SocialAppsData = [
  {
    id: "1",
    heading: "Instagram",
    usage: "123.24 MB",
    icon: instagram,
  },
  {
    id: "2",
    heading: "Facebook",
    usage: "123.24 MB",
    icon: facebook,
  },
  {
    id: "3",
    heading: "WhatsApp",
    usage: "123.24 MB",
    icon: whatsapp,
  },
  {
    id: "4",
    heading: "Snapchat",
    usage: "123.24 MB",
    icon: snapchat,
  },
  {
    id: "5",
    heading: "Skype",
    usage: "123.24 MB ",
    icon: skype,
  },
  {
    id: "6",
    heading: "Teams",
    usage: "123.24 MB",
    icon: teams,
  },
  {
    id: "7",
    heading: "Viber",
    usage: "123.24 MB",
    icon: viber,
  },
  {
    id: "8",
    heading: "Tinder",
    usage: "123.24 MB",
    icon: tinder,
  },

  {
    id: "9",
    heading: "Slack",
    usage: "123.24 MB",
    icon: slack,
  },
  {
    id: "10",
    heading: "Discord",
    usage: "123.24 MB",
    icon: discord,
  },
  {
    id: "11",
    heading: "Gmail",
    usage: "123.24 MB",
    icon: gmail,
  },
  {
    id: "12",
    heading: "Outlook",
    usage: "123.24 MB",
    icon: outlook,
  },
  {
    id: "13",
    heading: "Telegram",
    usage: "123.24 MB",
    icon: telegram,
  },
  {
    id: "14",
    heading: "Signal",
    usage: "123.24 MB",
    icon: signal,
  },
  {
    id: "15",
    heading: "Hangouts",
    usage: "123.24 MB",
    icon: hangout,
  },
  {
    id: "16",
    heading: "Line",
    usage: "123.24 MB",
    icon: line,
  },
  {
    id: "17",
    heading: "Kik",
    usage: "123.24 MB",
    icon: kik,
  },
  {
    id: "18",
    heading: "Tango",
    usage: "123.24 MB",
    icon: tango,
  },
  {
    id: "19",
    heading: "KakaoTalk",
    usage: "123.24 MB",
    icon: kakao,
  },
  {
    id: "20",
    heading: "Hike",
    usage: "123.24 MB",
    icon: hike,
  },
  {
    id: "21",
    heading: "IMO",
    usage: "123.24 MB",
    icon: imo,
  },
  {
    id: "22",
    heading: "Zolo",
    usage: "123.24 MB",
    icon: zolo,
  },
  {
    id: "23",
    heading: "Twitter",
    usage: "123.24 MB",
    icon: twitter,
  },
  {
    id: "24",
    heading: "Messenger",
    usage: "123.24 MB",
    icon: messenger,
  },
];
const SocialApps = () => {
    const viewMore = () => {
        //View More Logic Here
    };

  return (
    <div className="main ps-3 pe-3 pt-4">
      <SocialAppsHeader />
      <ul className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 grid-cols-3   mt-10">
        {SocialAppsData.map((SocialApps, key) => (
          <li key={SocialApps.id} className="my-4">
            <SocialApp SocialApps={SocialApps} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-12 mb-12">
        <Button
          onClick={viewMore}
          className="text-[18px]   drop-shadow-3xl  font-medium px-[32px] custom-shadow  py-[10px] text-[#101828] text-center"
        >
          View More
          <img src={More} alt="more" className="ps-2" />
        </Button>
      </div>
    </div>
  );
};

export default SocialApps;
