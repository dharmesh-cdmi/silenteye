import React, { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import AppsRoutesHeader from "../../components/AppsRoutesHeader/AppsRoutesHeader.js";

import { BlockedAppData } from "./AppsData/BlockedAppData.js";
import { BsWhatsapp } from "react-icons/bs";

import Blogger from "../../assests/images/blogger.svg";

const BlockededApp = () => {
  const [appData, setAppData] = useState(BlockedAppData);

  return (
    <>
      <div className="Apps-container">
        <AppsRoutesHeader />

        <div className="appsComponentsCon lg:ms-auto ms-5  flex">
          {appData && appData.length > 0 ? (
            appData.map((v) => (
              <div key={v.id} className="appBox flex flex-col justify-center">
                <span className="appBoxicon">{v.icon} </span>
                <div className="appBoxDes flex flex-col justify-center">
                  <h3>{v.title}</h3>
                  <p className="text-slate-600">{v.size}</p>
                </div>
              </div>
            ))
          ) : (
            <h3>Data Not Found</h3>
          )}
        </div>
        <ExportBtn />
      </div>
    </>
  );
};

export default BlockededApp;
