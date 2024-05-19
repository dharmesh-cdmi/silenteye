import React from "react";
import { IoImageOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { PiFilmReelBold } from "react-icons/pi";


function Tabs() {
  const contents = [
    { title: "Total Photos (985.12 k)", d1: "120.10 GB", d2: " of photos",comp:<IoImageOutline className="mr-2 mt-1" />
  },
    { title: "Total Photos (985.12 k)", d1: "120.10 GB", d2: " of photos",comp:<IoVideocamOutline className="mr-2 mt-1" />
  },
    { title: "Total Photos (985.12 k)", d1: "120.10 GB", d2: " of photos",comp:<PiFilmReelBold className="mr-2 mt-1" />
  },
  ];
  return (
    <div className="grid grid-cols-3 border rounded-lg mx-10 mt-10">
      {contents.map((content, index) => {
        return (
          <div key={index} className="border-r-2 p-2">
            <div className=" flex">
              {content.comp}
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
