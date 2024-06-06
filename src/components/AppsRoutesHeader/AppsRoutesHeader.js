import React, { useState } from "react";
import "./AppsRoutesHeader.css";
import { Link } from "react-router-dom";

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
import CallsHead from "../Calls/CallsHead";

const AppsRoutesHeader = () => {
  const [screen, setScreen] = useState(1);
  return (
    <>
      {/* Navigations, search*/}

      <CallsHead heading="Apps" placeholder="Search Notes" />
      <hr class="h-px mb-2 md:hidden bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <div className="grid md:grid-cols-4 grid-cols-3 md:my-8 md:mx-0 mx-2 border-2 border-t rounded-lg md:rounded-xl md:mt-6">
        <Link to="/apps/allapps">
          <div className="md:mx-3 mx-1 my-1 border-r-2 ">
            <div className=" flex flex-col justify-center">
              <h3 className="font-semibold md:text-base text-xs">All Apps</h3>
              <p className="md:text-base text-xs">134 Apps</p>
            </div>
          </div>
        </Link>

        <Link to="/apps/installedapp">
          <div className=" md:mx-3 mx-1 my-1 border-r-2">
            <div className=" flex flex-col justify-center">
              <h3 className="font-semibold md:text-base text-xs">
                Installed Apps
              </h3>
              <p className="md:text-base text-xs">120 Apps</p>
            </div>
          </div>
        </Link>

        <Link to="/apps/uninstalledapp">
          <div className="md:mx-3 mx-1 my-1 md:border-r-2">
            <div className=" flex flex-col justify-center">
              <h3 className="font-semibold md:text-base text-xs">
                Uninstalled
              </h3>
              <p className=" md:text-base text-xs">14 Apps</p>
            </div>
          </div>
        </Link>

        <Link to="/apps/blockedapp">
          <div className="lastAppsbox md:mx-3 mx-1 my-1 hidden md:block">
            <div className="flex flex-col  justify-start">
              <h3 className="font-semibold md:text-base text-xs">
                Blocked Apps
              </h3>
              <p className="md:text-base text-xs">2 Apps</p>
            </div>
          </div>
        </Link>
      </div>

      <hr class="h-px mt-2  md:hidden bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
};

export default AppsRoutesHeader;
