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


export const SavedPassword = () => {
  const SavedPasswordsData = [
    [
      {
        id: "1",
        img: adope,
        heading: "adobe.com",
        identity: "Test123",
        password: "Testing4Pass@9900",
      },
      {
        id: "2",
        img: amazon,
        heading: "amazon.com",
        identity: "Test124",
        password: "Testing5Pass@9900",
      },
      {
        id: "3",
        img: dribble,
        heading: "dribbble.com",
        identity: "Test125",
        password: "Testing6Pass@9900",
      },
      {
        id: "4",
        img: ebay,
        heading: "ebay.com",
        identity: "Test126",
        password: "Testing7Pass@9900",
      },
      {
        id: "5",
        img: facebook,
        heading: "facebook.com",
        identity: "Test127",
        password: "Testing10Pass@9900",
      },
    ],

    [
      {
        id: "1",
        img: snapchat,
        heading: "Snapchat.com",
        identity: "Test128",
        password: "Testing11Pass@9900",
      },
      {
        id: "2",
        img: instagram,
        heading: "instagram.com",
        identity: "Test129",
        password: "Testing12Pass@9900",
      },
      {
        id: "3",
        img: apple,
        heading: "apple.com",
        identity: "Test130",
        password: "Testing12Pass@9900",
      },
    ],
  ];

  return (
    <div className="main">
      {SavedPasswordsData.map((SavedPasswordsData, index) => (
        <div key={index} className="my-10">
          <Table>
            <Table.Header className="font-[16px]">
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
    </div>
  );
};
