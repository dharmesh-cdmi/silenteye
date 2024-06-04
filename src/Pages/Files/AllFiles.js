import React, { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import "./AllFiles.css";
import AllFilesHead from "../../components/AllFilesHead/AllFilesHead.js";
import file1 from "../../assests/images/file1.png";

import { AllFilesData } from "./AllFilesData/AllFilesData.js";
import { Link } from "react-router-dom";
import Modal from "../../components/Shared/Modal.jsx";
import Upgrade from "../../components/Shared/Upgrade.jsx";

const AllFiles = () => {
  const [appData, setAppData] = useState(AllFilesData);

  return (
    <>
      <Modal>
        <AllFilesHead headding="All Files" />
        <hr class="h-px md:hidden  mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="Apps-container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center md:justify-items-start">
            <div className="appBox flex flex-col justify-center mx-3 mb-3">
              <span className="appBoxicon relative">
                <input
                  type="checkbox"
                  className="h-4 w-4 absolute top-0 left-2 b"
                ></input>
                <Link to="/Files/downloads">
                  {" "}
                  <img
                    src={file1}
                    alt="Download"
                    className="md:h-20 h-[59px] w-20"
                  />
                </Link>
              </span>
              <div className="-my-3 text-sm  font-semibold text-center flex flex-col justify-center">
                <h3>Download</h3>
                <p className="text-slate-600 text-nowrap">29 items</p>
              </div>
            </div>
            {appData && appData.length > 0 ? (
              appData.map((v) => (
                <Modal.Toggle toggleName="Update">
                  <div
                    key={v.id}
                    className="appBox flex flex-col justify-center mx-3 mb-3"
                  >
                    <span className="appBoxicon relative">
                      <input
                        type="checkbox"
                        className="h-4 w-4 absolute top-0 left-2 b"
                      ></input>

                      <img
                        src={v.icon}
                        alt="Download"
                        className="md:h-20 h-[59px] w-20"
                      />
                    </span>
                    <div className="-my-3 text-sm  font-semibold text-center flex flex-col justify-center">
                      <h3>{v.title}</h3>
                      <p className="text-slate-600 text-nowrap">{v.size}</p>
                    </div>
                  </div>
                </Modal.Toggle>
              ))
            ) : (
              <h3>Data Not Found</h3>
            )}
          </div>
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
      <ExportBtn />
    </>
  );
};

export default AllFiles;
