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
        <AllFilesHead headding="All Files " />
        <hr class="h-px md:hidden  mb-4 bg-gray-200 border-0 "></hr>
        <div className="Apps-container mx-2">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center md:justify-items-start mb-10">
            <div className="appBox flex flex-col justify-center mx-3 mb-3">
              <span className="appBoxicon relative">
                <input
                  type="checkbox"
                  className="h-5 w-8 absolute top-0 left-[-1.5rem] md:left-12"
                ></input>
                <Link to="/Files/downloads">
                  {" "}
                  <img
                    src={file1}
                    alt="Download"
                    className="md:h-20 h-[80px] w-[80px]"
                  />
                </Link>
              </span>
              <div className="-my-3 text-sm  font-semibold text-center flex flex-col justify-center">
                <h3 className="text-base">Download</h3>
                <p className="text-slate-600 text-nowrap">323 items</p>
              </div>
            </div>
            {appData && appData.length > 0 ? (
              appData.map((v) => (
                <Modal.Toggle toggleName="Update">
                  <div
                    key={v.id}
                    className={`${
                      v.hide == true && "opacity-50"
                    } appBox flex flex-col justify-center mx-3 mb-3 `}
                  >
                    <span className="appBoxicon relative">
                      <input
                        type="checkbox"
                        className="h-5 w-8 absolute top-0 left-[-1.5rem] md:left-12 "
                      ></input>

                      <img
                        src={v.icon}
                        alt="Download"
                        className="md:h-20 h-[80px] w-20"
                      />
                    </span>
                    <div className="-my-3 text-sm  font-semibold text-center flex flex-col justify-center">
                      <h3 className="text-base">{v.title}</h3>
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
