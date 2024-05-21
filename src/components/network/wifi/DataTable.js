import React from "react";
import del from '../../../assests/images/delete.png'

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
      name: "Home 5G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Home 5G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Home 5G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Home 5G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
    {
      name: "Home 5G",
      connected: "Tue, May 21,2024",
      time: "10:48 PM",
      usage: "2d 45m 12s",
      latitude: 40.7128,
      longitude: 40.7128,
    },
  ];
  return (
    <div className="grid lg:grid-cols-6 grid-cols-6 mt-10 border rounded-lg lg:mx-10 mx-5">
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
              <img className="w-8 h-8 ml-2"></img>
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
