import React from "react";
import { Table } from "../components/Shared/Table";
import KeyLoggers from "../components/KeyLogger/KeyLoggers";
import google from "../../src/assests/images/KeyLogger/google.png";
import photos from "../../src/assests/images/KeyLogger/photos.png";
import whatsapp from "../../src/assests/images/KeyLogger/whatsapp.png";
import Messenger from "../../src/assests/images/KeyLogger/messenger.png";
import instagram from "../../src/assests/images/KeyLogger/instagram.png"
import snapchat from "../../src/assests/images/KeyLogger/snapchat.png"
const keyloggerData = [
  [
    {
      id: "1",
      img: google,
      heading: "Chrome",
      subheading: "Bookstores near me",
      time: "09:10 AM",
    },
    {
      id: "2",
      img: photos,
      heading: "Photos",
      subheading: "should we meet up tomorrow before classes?",
      time: "08:58 AM",
    },
    {
      id: "3",
      img: whatsapp,
      heading: "WhatsApp",
      subheading: "hey, how are you doing?",
      time: "08:44 AM",
    },
    {
      id: "4",
      img: whatsapp,
      heading: "WhatsApp",
      subheading: "idk, maybe in an hour or so",
      time: "08:43 AM",
    },
    {
      id: "5",
      img: Messenger,
      heading: "Messenger",
      subheading: "did she say anything to you? or dad?",
      time: "08:21 AM",
    },
  ],
  [
    {
      id: "1",
      img: snapchat,
      heading: "Snapchat",
      subheading: "nice pic",
      time: "11:38 PM",
    },
    {
      id: "2",
      img: instagram,
      heading: "Instagram",
      subheading: "just don't tell anyone",
      time: "11:32 PM",
    },
    {
      id: "3",
      img: whatsapp,
      heading: "Chrome",
      subheading: "what is my ip address",
      time: "11:31 PM",
    },
    {
      id: "4",
      img: instagram,
      heading: "Instagram",
      subheading: "I thought you already talked to her",
      time: "11:28 PM",
    },
    {
      id: "5",
      img: Messenger,
      heading: "Twitter",
      subheading: "Hey,Posting New Today",
      time: "11:25 PM",
    },
  ],
];

function KeyLogger() {
  return (
    <div className="main">
    {keyloggerData.map((keyloggerData, index) => (
      <div key={index} className="my-10">
        <Table>
          <Table.Header className="font-[16px]">
            Monday, {index + 11} Jan, 2023
          </Table.Header>
          <Table.Body>
            {keyloggerData.map((keyLogger) => (
              <KeyLoggers key={keyLogger.id} keyLogger={keyLogger} />
            ))}
          </Table.Body>
        </Table>
      </div>
    ))}
  </div>
  );
}

export default KeyLogger;
