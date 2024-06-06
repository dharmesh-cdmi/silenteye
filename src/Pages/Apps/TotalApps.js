import { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import AppsRoutesHeader from "../../components/AppsRoutesHeader/AppsRoutesHeader.js";

import { AllAppsData } from "./AppsData/AllAppsData.js";

// ICONS

import Whatsapp from "../../assests/images/SocialApps/whatsapp.png";
import Modal from "../../components/Shared/Modal.jsx";
import Upgrade from "../../components/Shared/Upgrade.jsx";
import FilterModal from "../../components/Shared/FilterModal.jsx";
import AppsInfoModal from "../../components/Shared/AppsInfoModal.jsx";
import AppModal from "../../components/Shared/AppModal.jsx";
import { Link } from "react-router-dom";
import CallsHead from "../../components/Calls/CallsHead.jsx";
import InstalledApp from "./InstalledApp.js";
import UnstalledApp from "./UnstalledApp.js";
import BlockededApp from "./BlockedApp.js";

const TotalApps = () => {
  const [appData, setAppData] = useState(AllAppsData);
  const [screen, setScreen] = useState(1);
  const handleScreen = (val) => {
    setScreen(val);
  };

  return (
    <>
      <div className="Apps-container">
        <CallsHead heading="Apps" placeholder="Search Notes" />
        <hr class="h-px mb-2 md:hidden bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <ul class=" text-sm font-medium text-center md:mt-10 text-gray-500 rounded-lg shadow flex overflow-x-auto md:w-full .no-scrollbar ">
          <li class="w-[9rem] md:w-full " onClick={() => handleScreen(1)}>
            <a
              href="#"
              className={`${
                screen == 1 && "bg-[#E9EBFF]"
              } inline-block w-full p-2 text-gray-900  border-r border-gray-200 rounded-s-lg`}
              aria-current="page"
            >
              <div className=" flex flex-col justify-center text-left md:px-4">
                <h3 className="font-semibold md:text-base text-xs w-24 md:w-32 lg:w-44 xl:w-full">
                  All Apps
                </h3>
                <p className="md:text-base text-xs">134 Apps</p>
              </div>
            </a>
          </li>
          <li class="w-[9rem] md:w-full " onClick={() => handleScreen(2)}>
            <a
              href="#"
              className={`${
                screen == 2 && "bg-[#E9EBFF]"
              } inline-block w-full p-2 text-gray-900  border-r border-gray-200 `}
            >
              <div className=" flex flex-col justify-center text-left md:px-4">
                <h3 className="font-semibold md:text-base text-xs w-24 md:w-32 lg:w-44 xl:w-full">
                  Installed Apps
                </h3>
                <p className="md:text-base text-xs">120 Apps</p>
              </div>
            </a>
          </li>
          <li class="w-[9rem] md:w-full " onClick={() => handleScreen(3)}>
            <a
              href="#"
              className={`${
                screen == 3 && "bg-[#E9EBFF]"
              } inline-block w-full p-2 text-gray-900  border-r border-gray-200 `}
            >
              <div className=" flex flex-col justify-center text-left md:px-4">
                <h3 className="font-semibold md:text-base text-xs w-24 md:w-32 lg:w-44 xl:w-full">
                  Uninstalled Apps
                </h3>
                <p className="md:text-base text-xs">14 Apps</p>
              </div>
            </a>
          </li>
          <li class="w-[9rem] md:w-full " onClick={() => handleScreen(4)}>
            <a
              href="#"
              className={`${
                screen == 4 && "bg-[#E9EBFF]"
              } inline-block w-full p-2 text-gray-900  border-r border-gray-200 rounded-e-lg`}
            >
              <div className=" flex flex-col justify-center text-left md:px-4">
                <h3 className="font-semibold md:text-base text-xs w-24 md:w-32 lg:w-44 xl:w-full">
                  Blocked Apps
                </h3>
                <p className="md:text-base text-xs">2 Apps</p>
              </div>
            </a>
          </li>
        </ul>

        <hr class="h-px mt-2  md:hidden bg-gray-200 border-0 dark:bg-gray-700" />
        {screen === 1 && (
          <div className="appsComponentsContainer flex">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mt-4 md:mt-8 gap-[7px] md:gap-8">
              <div className=" md:hidden">
                <Link to="/apps/appinformation">
                  <div className="appBox mb-4 flex flex-col justify-center">
                    <span className="appBoxicon">
                      <img
                        className="w-12 md:w-16 md:h-16 lg:w-20 lg:h-20 h-12 m-auto"
                        src={Whatsapp}
                        alt="img"
                      />
                    </span>
                    <div className="appBoxDes flex flex-col justify-center">
                      <h3 className="text-md font-semibold">Whatsapp</h3>
                      <p className="text-slate-500 text-sm ">145.76mb</p>
                    </div>
                  </div>
                </Link>
              </div>
              <AppModal>
                <AppModal.Toggle toggleName="Update">
                  <div className="hidden md:block">
                    <div className="appBox mb-4 flex flex-col justify-center">
                      <span className="appBoxicon">
                        <img
                          className="w-12 md:w-16 md:h-16 lg:w-20 lg:h-20 h-12 m-auto"
                          src={Whatsapp}
                          alt="img"
                        />
                      </span>
                      <div className="appBoxDes flex flex-col justify-center">
                        <h3 className="text-md font-semibold">Whatsapp</h3>
                        <p className="text-slate-500 text-sm ">145.76mb</p>
                      </div>
                    </div>
                  </div>
                </AppModal.Toggle>
                <AppModal.Window windowName="Update">
                  <AppsInfoModal />
                </AppModal.Window>
              </AppModal>
              {appData && appData.length > 0 ? (
                appData.map((v, i) => (
                  <Modal>
                    <Modal.Toggle toggleName="Upgrade">
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
                    </Modal.Toggle>
                    <Modal.Window windowName="Upgrade">
                      <Upgrade />
                    </Modal.Window>
                  </Modal>
                ))
              ) : (
                <h3>Data Not Found</h3>
              )}
            </div>
          </div>
        )}
        {screen === 2 && <InstalledApp />}
        {screen === 3 && <UnstalledApp />}
        {screen === 4 && <BlockededApp />}

        <ExportBtn />
      </div>
    </>
  );
};

export default TotalApps;
