import React, { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import "./AllFiles.css";
import AllFilesHead from "../../components/AllFilesHead/AllFilesHead.js";

import { AllFilesData } from "./AllFilesData/AllFilesData.js";

const AllFiles = () => {
  const [appData, setAppData] = useState(AllFilesData);

  return (
    <>
      <AllFilesHead />
      <div className="Apps-container">
        <div className="flex-wrap flex">
          {appData && appData.length > 0 ? (
            appData.map((v) => (
              <div key={v.id} className="appBox flex flex-col justify-center mx-3 mb-3">
                <span className="appBoxicon relative">
                  <input type="checkbox" className="h-4 w-4 absolute top-0 left-2 b"></input>
                  <span className="w-16 h-16">{v.icon}</span>
                </span>
                <div className="-my-3 text-sm  font-semibold text-center flex flex-col justify-center">
                  <h3>{v.title}</h3>
                  <p className="text-slate-600 text-nowrap">{v.size}</p>
                </div>
              </div>
            ))
          ) : (
            <h3>Data Not Found</h3>
          )}
        </div>
      </div>
      <ExportBtn />
    </>
  );
};

export default AllFiles;
