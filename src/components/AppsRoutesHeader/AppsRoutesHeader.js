import React from 'react';
import './AppsRoutesHeader.css';
import { Link } from 'react-router-dom';

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

const AppsRoutesHeader = () => {

  return (
    <>
      {/* Navigations, search*/}
      <div className="Apps-nav flex justify-between align-middle">
        {/* nav left*/}
        <div className="Apps-nav-left flex justify-center align-bottom">
          <button className="notNavLeftIcon shadow-[0px_0px_56px_0px_#00000014] ">
            <FaArrowLeftLong />
          </button>
          <span>Apps</span>
        </div>

        {/* nav right*/}
        <div className="Apps-nav-right flex justify-center items-center p-4">
          {/* Search */}
          <span className="flex items-center appsNavRightSearch cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
            <IoIosSearch />
            <input type="text" placeholder="Search Apps" />
          </span>

          {/* Export */}
          <span className="flex items-center appsNavRightExportIcon cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
            <TbFileExport />
            <span className="responsiveTitleHide">Export</span>
          </span>

          {/* Filter */}
          <span className="flex items-center appsNavRightFilterIcon cursor-pointer shadow-[0px_0px_56px_0px_#00000014] ">
            <IoFilterSharp />
            <span className="responsiveTitleHide">Filter</span>
          </span>
        </div>
      </div>

      <div className="appsRoutesHeader flex justify-center">
        <Link to="/apps/allapps">
          <div className="appsRoutesCons fi-appBox">
            <div className="appsRoutesCon flex flex-col justify-center">
              <h3>All Apps</h3>
              <p>134 Apps</p>
            </div>
          </div>
        </Link>

        <Link to="/apps/installedapp">
          <div className="appsRoutesCons">
            <div className="appsRoutesCon flex flex-col justify-center">
              <h3>Installed Apps</h3>
              <p>120 Apps</p>
            </div>
          </div>
        </Link>

        <Link to="/apps/uninstalledapp">
          <div className="appsRoutesCons">
            <div className="appsRoutesCon flex flex-col justify-center">
              <h3>Uninstalled</h3>
              <p>14 Apps</p>
            </div>
          </div>
        </Link>

        <Link to="/apps/blockedapp">
          <div className="appsRoutesCons lastAppsbox">
            <div className="appsRoutesCon flex flex-col justify-center">
              <h3>Blocked Apps</h3>
              <p>2 Apps</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AppsRoutesHeader;
