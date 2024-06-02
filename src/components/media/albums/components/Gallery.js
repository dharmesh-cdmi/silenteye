import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import alb from "../../../../assests/images/album.png";
import alb2 from "../../../../assests/images/album2.png";
import alb3 from "../../../../assests/images/album3.png";

function Gallery() {
  const albums = [
    { img: alb, text: "Recents", desc: "1264 Photos, 164 Videos" },
    { img: alb2, text: "Recents", desc: "1264 Photos, 164 Videos" },
    { img: alb3, text: "Recents", desc: "1264 Photos, 164 Videos" },
    { img: alb, text: "Recents", desc: "1264 Photos, 164 Videos" },
    { img: alb2, text: "Recents", desc: "1264 Photos, 164 Videos" },
    { img: alb3, text: "Recents", desc: "1264 Photos, 164 Videos" },
    { img: alb3, text: "Recents", desc: "1264 Photos, 164 Videos" },
  ];
  return (
    <div className="mt-10 lg:mx-4 mx-0">
      <p className="lg:p-4 p-1 text-gray-500 text-md">My Albums</p>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 lg:mx-0  lg:mt-10 mt-5">
        {albums.map((album, index) => {
          return (
            <div className="flex flex-col justify-center" key={index}>
              <img
                className="lg:h-40 lg:w-40 h-44 w-48 rounded-lg mx-auto"
                src={album.img}
              ></img>
              <p className="text-sm text-center font-medium mt-2">
                {album.text}{" "}
              </p>
              <p className="text-xs text-gray-500 text-center">{album.desc} </p>
            </div>
          );
        })}
      </div>
      <p className="p-4 text-gray-600 mt-7 text-md ">Media Types</p>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 lg:mx-10 lg:mt-10 mt-5">
        {albums.splice(3).map((album, index) => {
          return (
            <div className="flex flex-col justify-center" key={index}>
              <img
                className="lg:h-40 lg:w-40 h-44 w-48 rounded-lg mx-auto"
                src={album.img}
              ></img>
              <p className="text-sm text-center font-medium mt-2">
                {album.text}{" "}
              </p>
              <p className="text-xs text-gray-500 text-center">{album.desc} </p>
            </div>
          );
        })}
      </div>
   
    </div>
  );
}

export default Gallery;
