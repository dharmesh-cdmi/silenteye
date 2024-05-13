import React from "react";

const KeyLoggers = ({ keyLogger }) => {
  const { id, img, heading, subheading, time } = keyLogger;
  return (
    <div className="flex flex-row justify-between p-[16px] border-[0.5px] border-[#DDDDDD]">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <img src={img} alt="google" className=" h-auto max-w-[100%]" />
          <h1 className="ms-2 text-[20px] text-[#000000]  font-[600]">
            {heading}
          </h1>
        </div>
        <span className="text-[14px] opacity-[50%] text-[#000000] font-medium">
          {subheading}
        </span>
      </div>
      <span className="text-[14px] font-medium  opacity-[50%] text-[#000000]">
        {time}
      </span>
    </div>
  );
};

export default KeyLoggers;
