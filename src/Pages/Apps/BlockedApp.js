import React, { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import AppsRoutesHeader from "../../components/AppsRoutesHeader/AppsRoutesHeader.js";

import { BlockedAppData } from "./AppsData/BlockedAppData.js";
import { BsWhatsapp } from "react-icons/bs";
import Whatsapp from "../../assests/images/SocialApps/whatsapp.png";

import Blogger from "../../assests/images/blogger.svg";

const BlockededApp = () => {
  const [appData, setAppData] = useState(BlockedAppData);

  return (
    <>
      <div className="Apps-container">
        <AppsRoutesHeader />

        <div className="appsComponentsContainer flex">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mt-4 md:mt-8 gap-[7px] md:gap-8">
            {appData && appData.length > 0 ? (
              appData.map((v, i) => (
                <div
                  key={i}
                  className="appBox mb-4 flex flex-col justify-center"
                >
                  <span className="appBoxicon">
                    {/* <span className="appBoxicon">{v.icon}</span> */}
                    <img
                      className="w-12 md:w-16 md:h-16 lg:w-20 lg:h-20 h-12 m-auto"
                      src={v.icon}
                      alt="img"
                    />
                  </span>
                  <div className="appBoxDes flex flex-col justify-center">
                    <h3 className="text-md font-semibold">{v.title}</h3>
                    <p className="text-slate-500 text-sm ">{v.size}</p>
                  </div>
                </div>
              ))
            ) : (
              <h3>Data Not Found</h3>
            )}
          </div>
        </div>
        <ExportBtn />
      </div>
    </>
  );
};

export default BlockededApp;
