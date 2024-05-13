import React, { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.js"
import AppsRoutesHeader from "../../components/AppsRoutesHeader/AppsRoutesHeader.js"

import { InstalledAppData } from "./AppsData/InstalledAppData.js";
import { BsWhatsapp } from "react-icons/bs";

const InstalledApp = () => {
  const [appData, setAppData] = useState(InstalledAppData);

  return (
    <>
    <div className="Apps-container">
     <AppsRoutesHeader />
     
      <div className="appsComponentsCon flex">
        {appData && appData.length > 0 ? (
          appData.map((v) => (
            <div key={v.id} className="appBox flex flex-col justify-center">
 <span className="appBoxicon">
              <span className="appBoxicon">
                {v.icon}
              </span>
 </span>
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

export default InstalledApp;
