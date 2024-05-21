import React from "react";
import Switch from "../../../UI/Switch";

function UsageTable() {
  const contents = [
    { name: "Mobile Hotspot", img: "" },
    { name: "Mobile Hotspot", img: "" },
    { name: "Mobile Hotspot", img: "" },
    { name: "Mobile Hotspot", img: "" },
    { name: "Mobile Hotspot", img: "" },
  ];
  return (
    <div className="grid grid-cols-1 border lg:mx-10 mx-5 mt-9 rounded-xl">
      {contents.map((content, index) => {
        return (
          <div className="flex align-middle justify-between p-4 border ">
            <div className="flex ">
              <img className="w-8 h-8 rounded-full mr-3"></img>
              <h3 className="text-lg font-semibold mt-1">Mobile Hotspot</h3>
            </div>
            <Switch />
          </div>
        );
      })}
    </div>
  );
}

export default UsageTable;
