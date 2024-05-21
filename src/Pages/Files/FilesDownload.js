import React, { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import "./AllFiles.css";
import AllFilesHead from "../../components/AllFilesHead/AllFilesHead.js";

import { DownloadFilesData } from "./AllFilesData/DownloadFileData.js";
import Modal from "../../components/Shared/Modal.jsx";
import Upgrade from "../../components/Shared/Upgrade.jsx";

const FilesDownload = () => {
  const [appData, setAppData] = useState(DownloadFilesData);

  return (
    <>
      <AllFilesHead />
      <div className="Apps-container downloadFilesComponent justify-center">
        <div className=" flex downloadFilesComCon mx-10 flex-wrap">
          {appData && appData.length > 0 ? (
            appData.map((v) => (
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <div
                    key={v.id}
                    className="appBox    flex flex-col justify-center mr-3"
                  >
                    <span className="h-16 w-16">{v.icon}</span>
                    <div className="text-md text-center font-medium flex flex-col justify-center">
                      <h3>{v.title}</h3>
                      <p className="text-slate-600 text-xs">{v.size}</p>
                    </div>
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
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

export default FilesDownload;
