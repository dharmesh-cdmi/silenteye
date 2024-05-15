import React from "react";
import Header from "../components/Shared/Header";
import youtube from "../../src/assests/images/NotificationSettings/youtube.png";
import Chrome from "../../src/assests/images/NotificationSettings/google.png";
import facebook from "../../src/assests/images/NotificationSettings/facebook.png";
import messenger from "../../src/assests/images/NotificationSettings/messenger.png";
import whatsapp from "../../src/assests/images/NotificationSettings/whatsapp.png";
import gmail from "../../src/assests/images/NotificationSettings/gmail.png";
import sheets from "../../src/assests/images/NotificationSettings/Sheets.png";
import telegram from "../../src/assests/images/NotificationSettings/Telegram.png";
import { Table } from "../components/Shared/Table";
import NotificationSettings from "../components/NotificationSettings/NotificationSettings";
import More from "../assests/images/more.png";
import Button from "../components/Shared/Button";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade"

const NotificationSettingData = [
  {
    id: "1",
    icon: youtube,
    heading: "Youtube",
  },
  {
    id: "2",
    icon: Chrome,
    heading: "Chrome",
  },
  {
    id: "3",
    icon: facebook,
    heading: "Facebook",
  },
  {
    id: "4",
    icon: messenger,
    heading: "Messenger",
  },
  {
    id: "5",
    icon: whatsapp,
    heading: "WhatsApp",
  },
  {
    id: "6",
    icon: gmail,
    heading: "Gmail",
  },
  {
    id: "7",
    icon: sheets,
    heading: "Google Sheets",
  },
  {
    id: "8",
    icon: telegram,
    heading: "Telegram",
  },
];

const NotificationSetting = () => {
  const viewMore = () => {
    //View More Logic Here

  };
  return (
    <div className="main ps-3 pe-3 pt-4">
      <Header heading="Notification Settings" />
      <div className="my-10">
        <Table className="border-[#DDDDDD] border-[1px] rounded-lg">
          <Table.Header className="font-[16px] opacity-[50%]">
            Hide Notifications (All Apps)
          </Table.Header>
          <Table.Body>
              {NotificationSettingData.map((NotificationSetting) => (
                <NotificationSettings key={NotificationSetting.id} NotificationSetting={NotificationSetting} />
              ))}
            </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center mb-12">
      <Modal>
          <Modal.Toggle toggleName="viewMore-NotificationSettings">
            <Button
              onClick={viewMore}
              className="text-[18px]   drop-shadow-3xl  font-medium px-[32px] custom-shadow  py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-NotificationSettings">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
   
  );
};

export default NotificationSetting;
