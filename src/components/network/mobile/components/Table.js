import React from "react";

function Table() {
  const contents = [
    { name: "Mobile Hotspot", data: "740 Mb",b:true },
    { name: "apple.com", data: "740 Mb" },
    { name: "Youtube", data: "740 Mb",b:true },
    { name: "youtube.com", data: "740 Mb" },
    { name: "Chrome", data: "740 Mb",b:true },
    { name: "google.com", data: "740 Mb" },
    { name: "Facebook", data: "740 Mb",b:true },
    { name: "facebook.com", data: "740 Mb" },
    { name: "Messenger", data: "740 Mb",b:true },
    { name: "twitter.com", data: "740 Mb" },
    { name: "WhatsApp", data: "740 Mb",b:true },
    { name: "wikipedia.org", data: "740 Mb" },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-10 mx-5 border rounded-lg mt-7">
      <div className="border-r-2 border-b-2 p-3  ">
        <p className="text-2xl font-bold">
          1.42 GB
          <span className=" ml-2 text-lg">of App Data used</span>
        </p>
        <p className="text-gray-500">Today</p>
      </div>
      <div className=" p-3 border-b-2 ">
        <p className="text-2xl font-bold">
          1.42 GB
          <span className=" ml-2 text-lg">of Website Data used</span>
        </p>
        <p className="text-gray-500">Today</p>
        
      </div>
      {contents.map((content, index) => {
        return(
          <div className={`p-2 flex align-middle border-b-2 ${content.b ?"border-r-2": ""}`} key={index}>
            <img className="h-12 w-12 rounded-full mr-3"></img>
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{content.name}</p>
              <p className="text-gray-500">{content.data}</p>
            </div>
          </div>
        )
        })}
    </div>
  );
}

export default Table;
