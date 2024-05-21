import { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import AppsRoutesHeader from "../../components/AppsRoutesHeader/AppsRoutesHeader.js";

import { AllAppsData } from "./AppsData/AllAppsData.js";

import { BsWhatsapp } from "react-icons/bs";
// ICONS
import blogger from "../../assests/images/blogger.svg";
import calendar from "../../assests/images/calendar.svg";
import crome from "../../assests/images/crome.svg";

const TotalApps = () => {
  const [appData, setAppData] = useState(AllAppsData);
  return (
    <>
      <div className="Apps-container">
        <AppsRoutesHeader />

        <div className="appsComponentsContainer flex">
          <div className="appsComponentsCon flex">
            {appData && appData.length > 0 ? (
              appData.map((v, i) => (
                <div key={i} className="appBox flex flex-col justify-center">
                  <span className="appBoxicon">
                    <span className="appBoxicon">{v.icon}</span>
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
        </div>

        <ExportBtn />
      </div>
    </>
  );
};

export default TotalApps;
