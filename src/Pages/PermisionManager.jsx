import React from "react";
import Header from "../components/Shared/Header";
import sensor from "../assests/images/PermissionManager/sensors.png";
import calender from "../assests/images/PermissionManager/calender.png";
import call from "../assests/images/PermissionManager/call.png";
import camera from "../assests/images/PermissionManager/camera.png";
import contacts from "../assests/images/PermissionManager/contacts.png";
import location from "../assests/images/PermissionManager/location.png";
import microphone from "../assests/images/PermissionManager/microphone.png";
import activity from "../assests/images/PermissionManager/men.png";
import { Table } from "../components/Shared/Table";
import More from "../assests/images/more.png";
import Button from "../components/Shared/Button";
import PermissionManagers from "../components/PermissionManager/PermissionManagers";

const PermisionManagerData = [
  {
    id: "1",
    icon: sensor,
    heading: "Body Sensors",
    paragragh: "0 of 0 apps allowed",
  },
  {
    id: "2",
    icon: calender,
    heading: "Calendar",
    paragragh: "3 of 6 apps allowed",
  },
  {
    id: "3",
    icon: call,
    heading: "Call logs",
    paragragh: "4 of 7 apps allowed",
  },
  {
    id: "4",
    icon: camera,
    heading: "Camera",
    paragragh: "7 of 20 apps allowed",
  },
  {
    id: "5",
    icon: contacts,
    heading: "Contacts",
    paragragh: "12 of 36 apps allowed",
  },
  {
    id: "6",
    icon: location,
    heading: "Location",
    paragragh: "2 of 21 apps allowed",
  },
  {
    id: "7",
    icon: microphone,
    heading: "Microphone",
    paragragh: "9 of 45 apps allowed",
  },
  {
    id: "8",
    icon: activity,
    heading: "Physical activity",
    paragragh: "3 of 12 apps allowed",
  },
];

const PermisionManager = () => {
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <div className="main ps-3 pe-3 pt-4">
      <Header heading="Permission Manager" />
      <div className="my-10">
        <Table className="border-[#DDDDDD] border-[1px] rounded-lg">
          <Table.Header className="font-[16px] opacity-[50%]">
            All Permission
          </Table.Header>
          <Table.Body>
            {PermisionManagerData.map((PermisionManager) => (
              <PermissionManagers
                key={PermisionManager.id}
                PermisionManager={PermisionManager}
              />
            ))}
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

export default PermisionManager;
