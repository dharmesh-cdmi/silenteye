import React from "react";
import { Table } from "../components/Shared/Table";
import adope from "../../src/assests/images/SavedPasswords/adope.png"
import amazon from "../../src/assests/images/SavedPasswords/amazon.png"
import dribble from "../../src/assests/images/SavedPasswords/dribble.png"
import ebay from "../../src/assests/images/SavedPasswords/ebay.png"
import facebook from "../../src/assests/images/SavedPasswords/facebook.png"
import snapchat from "../../src/assests/images/SavedPasswords/snapchat.png"
import instagram from "../../src/assests/images/SavedPasswords/instagram.png"
import apple from "../../src/assests/images/SavedPasswords/apple.png"
import SavedPasswords from "../components/SavedPasswords/SavedPasswords";
import Header from "../components/Shared/Header";
import Button from "../components/Shared/Button";
import More from "../assests/images/more.png";

const SavedPasswordsData = [
  [
    {
      id: "1",
      icon: adope,
      heading: "adobe.com",
      identity: "Test123",
      password: "Testing4Pass@9900",
    },
    {
      id: "2",
      icon: amazon,
      heading: "amazon.com",
      identity: "Test124",
      password: "Testing5Pass@9900",
    },
    {
      id: "3",
      icon: dribble,
      heading: "dribbble.com",
      identity: "Test125",
      password: "Testing6Pass@9900",
    },
    {
      id: "4",
      icon: ebay,
      heading: "ebay.com",
      identity: "Test126",
      password: "Testing7Pass@9900",
    },
    {
      id: "5",
      icon: facebook,
      heading: "facebook.com",
      identity: "Test127",
      password: "Testing10Pass@9900",
    },
  ],
  [
    {
      id: "1",
      icon: snapchat,
      heading: "Snapchat.com",
      identity: "Test128",
      password: "Testing11Pass@9900",
    },
    {
      id: "2",
      icon: instagram,
      heading: "instagram.com",
      identity: "Test129",
      password: "Testing12Pass@9900",
    },
    {
      id: "3",
      icon: apple,
      heading: "apple.com",
      identity: "Test130",
      password: "Testing12Pass@9900",
    },
  ],

];

export const SavedPassword = () => {


 
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <div className="main ps-3 pe-3 pt-4">
      <Header heading="Saved Passwords"/>
      {SavedPasswordsData.map((SavedPasswordsData, index) => (
        <div key={index} className="my-10">
          <Table className="border-[#DDDDDD] border-[1px] rounded-lg">
            <Table.Header className="font-[16px] opacity-[50%]">
              Monday, {index + 11} Jan, 2023
            </Table.Header>
            <Table.Body>
              {SavedPasswordsData.map((SavedPassword) => (
                  <SavedPasswords  SavedPassword={SavedPassword} key={SavedPassword.id}   />
              ))}
            </Table.Body>
          </Table>
        </div>
      ))}
      <div className="flex justify-center mb-12">
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
