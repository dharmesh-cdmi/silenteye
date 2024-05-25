import React from "react";
import { Table } from "../components/Shared/Table";
import messenger from "../../src/assests/images/SavedPasswords/messenger.png"
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
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade"

const SavedPasswordsData = [
  [
    {
      id: "1",
      icon: messenger,
      heading: "messenger.com",
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
    <div className="main sm:ps-3 sm:pe-3 sm:pt-4">
      <Header heading="Saved Passwords"/>
      {SavedPasswordsData.map((SavedPasswordsData, index) => (
        <div key={index} className="sm:my-10 my-2">
          <Table className="sm:border-[#DDDDDD] sm:border-[1px] sm:rounded-lg">
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
        <div className="flex justify-center  mb-12 mt-3">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <Button
              onClick={viewMore}
              className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px]  py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};
