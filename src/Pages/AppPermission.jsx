import React from "react";
import Header from "../components/Shared/Header";
import youtube from "../../src/assests/images/NotificationSettings/youtube.png";
import Chrome from "../../src/assests/images/NotificationSettings/google.png";
import facebook from "../../src/assests/images/NotificationSettings/facebook.png";
import whatsapp from "../../src/assests/images/NotificationSettings/whatsapp.png";
import telegram from "../../src/assests/images/NotificationSettings/Telegram.png";
import messenger from "../../src/assests/images/NotificationSettings/messenger.png";
import gmail from "../../src/assests/images/NotificationSettings/gmail.png";
import { Table } from "../components/Shared/Table";
import More from "../assests/images/more.png";
import Button from "../components/Shared/Button";
import AppPermissions from "../components/AppPermissions/AppPermissions";
import Camera from "../components/AppPermissions/Camera";

const AllowedData = [
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
    icon: whatsapp,
    heading: "WhatsApp",
  },
  {
    id: "5",
    icon: telegram,
    heading: "Telegram",
  },
];

const DeniedData = [
  {
    id: "1",
    icon: messenger,
    heading: "Messenger",
  },
  {
    id: "2",
    icon: gmail,
    heading: "Gmail",
  },
];

const AppPermission = () => {
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <div className="main ps-3 pe-3 pt-4">
      <Header heading="App Permissions" />
      <div className="my-10">
        <Table className="border-[#DDDDDD] border-[1px] rounded-lg">
          <Table.Header className="font-[16px]">
             <Camera/>
          </Table.Header>
          <Table.Body>
            <Table className="  ">
              <Table.Header className="font-[16px] border-t-[0.5px] opacity-[50%]   border-[#DDDDDD]">
                 Allowed
              </Table.Header>
              <Table.Body>
                {AllowedData.map((AppPermission) => (
                  <AppPermissions
                    key={AppPermission.id}
                    AppPermission={AppPermission}
                  />
                ))}
              </Table.Body>
            </Table>
            <Table className="">
              <Table.Header className="font-[16px] border-t-[0.5px] opacity-[50%]  border-[#DDDDDD]">
                Denied
              </Table.Header>
              <Table.Body>
                {DeniedData.map((AppPermission) => (
                  <AppPermissions
                    key={AppPermission.id}
                    AppPermission={AppPermission}
                  />
                ))}
              </Table.Body>
            </Table>
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center mb-12">
        <Button
          onClick={viewMore}
          className="text-[18px]  drop-shadow-3xl font-medium px-[32px] custom-shadow  py-[10px] text-[#101828] text-center"
        >
          View More
          <img src={More} alt="more" className="ps-2" />
        </Button>
      </div>
    </div>
  );
};

export default AppPermission;
