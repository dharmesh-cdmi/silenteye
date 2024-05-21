import React from "react";

function Tabs() {
  const contents = [
    { title: "Total Photos (985.12 k)", d1: "120.10 GB", d2: " of photos" },
    { title: "Total Photos (985.12 k)", d1: "120.10 GB", d2: " of photos" },
    { title: "Total Photos (985.12 k)", d1: "120.10 GB", d2: " of photos" },
  ];
  return (
    <div className="grid grid-cols-3 border rounded-lg mx-10 mt-10">
      {contents.map((content, index) => {
        return (
          <div key={index} className="border-r-2 p-2">
            <div className=" flex">
              <img className="w-3 h-3 mr-3"></img>
              <h3 className="font-semibold">{content.title}</h3>
            </div>
            <p className="text-sm font-semibold">
              {content.d1}
              <span className="text-gray-600 font-normal">{content.d2}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
