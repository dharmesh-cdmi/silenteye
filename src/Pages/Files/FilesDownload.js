import React, { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"
import "./AllFiles.css"
import AllFilesHead from "../../components/AllFilesHead/AllFilesHead.js"

import {DownloadFilesData} from "./AllFilesData/DownloadFileData.js";

const FilesDownload = () =>{
   const [appData, setAppData] = useState(DownloadFilesData);
   
  return(
    <>
    <AllFilesHead />
    <div className="Apps-container">
     
          <div className="appsComponentsCon flex">
        {appData && appData.length > 0 ? (
          appData.map((v) => (
            <div key={v.id} className="appBox flex flex-col justify-center downloadfilegap">
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
      </div>
      <ExportBtn />
    </>
    )
}

export default FilesDownload;