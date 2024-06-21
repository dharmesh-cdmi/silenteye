import React from "react";
import { IoImageOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { PiFilmReelBold } from "react-icons/pi";
import photo from '../../../assests/images/imggg.png'
import vid from '../../../assests/images/videooo.png'
import frame from '../../../assests/images/Framee.png'


function Tabs() {
  const contents = [
    { title: "Total Photos (985.12k)", d1: "120.10 GB", d2: " of photos",comp:<img className="w-6 h-6 mt-0.5 mr-1" src={photo}/>
  },
    { title: "Total Videos (1.25k)", d1: "264.38 GB", d2: " of photos",comp:<img className="w-6 h-6 mt-0,5 mr-1" src={vid}/>
  },
    { title: "Recent Captures (124 files)", d1: "720.35 MB", d2: " in Last 24 Hrs",comp:<img className="w-6 h-6 mt-0.5 mr-1" src={frame} />
  },
  ];
  return (
    <div className="grid lg:grid-cols-3 lg:border-t-0 border-t-2 grid-cols-1 lg:border-2 rounded-lg mx-2 mt-2 lg:mt-10">
      {contents.map((content, index) => {
        return (
          <div key={index} className={`${content.d1==="720.35 MB" ? "lg:border-r-0 border-b-2" : "lg:border-r-2 border-b-2"} p-2`}>
            <div className=" flex">
              {content.comp}
              <h3 className="font-bold text-lg">{content.title}</h3>
            </div>
            <p className="text-md font-semibold">
              {content.d1}
              <span className="text-gray-600 font-normal text-base">{content.d2}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
