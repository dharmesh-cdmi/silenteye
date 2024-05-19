import React from "react";
import del from '../../../assests/images/delete.png'
import { FaWifi } from "react-icons/fa6";
import chrome from '.././../../assests/images/crome.png'


function DataTable() {
  const contents = [
    {
      name: "Home 5G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Youtube",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Chrome",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Facebook",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Messenger",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Whatsapp",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Gmail",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
  ];
  return (
    <div className="grid lg:grid-cols-6 grid-cols-6 mt-10 border rounded-lg lg:mx-4 mx-5">
      <p className="text-center text-gray-500 p-2 border-b-2">Name</p>
      <p className="text-center text-gray-500 p-2 border-b-2">Connected At</p>
      <p className="text-center text-gray-500 p-2 border-b-2">Usage Time</p>
      <p className="text-center text-gray-500 p-2 border-b-2">Latitude</p>
      <p className="text-center text-gray-500 p-2 border-b-2">Longitude</p>
      <p className="text-center text-gray-500 p-2 border-b-2">Action</p>

      {contents.map((content, index) => {
        return (
          <>
            <div className="flex py-4">
              <FaWifi className="h-5 w-5 ml-3 mt-1"/>
              <h3 className="font-semibold ml-2">Home 5G</h3>
            </div>
            <div className="flex justify-center py-4" >
              <p className="">{content.connected}</p>

            </div>
            <div className="flex justify-center py-4">
                <p className="">{content.usage}</p>
            </div>
            <div className="flex justify-center py-4">
                <p className="">{content.latitude}</p>
            </div>
            <div className="flex justify-center py-4">
                <p className="">{content.longitude}</p>
            </div>
            <div className="flex justify-center py-4">
                <img className="h-8 w-8" src={del} ></img>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default DataTable;
