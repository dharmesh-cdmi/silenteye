import React from "react";

function SocialApp({SocialApps}) {
  const { id, heading, usage, icon } = SocialApps;

  return (
    <div className="flex flex-col  items-center justify-center">
          <img src={icon}  alt={`${icon}`} className="h-auto max-w-[100%]"  />
          <h1 className="text-[16px] font-medium text-[#000000] mt-1">{heading}</h1>
          <h2 className="text-[13px] font-medium text-[#000000]  opacity-[50%]">{usage}</h2>
    </div>

)}

export default SocialApp;
