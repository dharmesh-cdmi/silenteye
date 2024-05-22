import React from 'react';
import './AppsRoutesHeader.css';
import { Link } from 'react-router-dom';

import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import Modal from '../Shared/Modal';
import Upgrade from '../Shared/Upgrade';

const AppsRoutesHeader = () => {

  return (
    <>
      {/* Navigations, search*/}
      <Modal>
      <div className="Apps-nav flex justify-between align-middle">
        {/* nav left*/}
        <div className="Apps-nav-left flex justify-center align-bottom">
          <button className="notNavLeftIcon shadow-lg ">
            <FaArrowLeftLong />
          </button>
          <span>Apps</span>
        </div>

        {/* nav right*/}
        <div className="Apps-nav-right flex justify-center items-center p-4">
          {/* Search */}
          <Modal.Toggle toggleName="Update">
          <span className="flex items-center appsNavRightSearch cursor-pointer shadow-lg ">
            <IoIosSearch />
            <input type="text" placeholder="Search Apps" />
          </span>
          </Modal.Toggle>

          {/* Export */}
          <Modal.Toggle toggleName="Update">
          <span className="flex items-center appsNavRightExportIcon cursor-pointer shadow-lg ">
            <TbFileExport />
            <span className="responsiveTitleHide">Export</span>
          </span>
          </Modal.Toggle>

          {/* Filter */}
          <Modal.Toggle toggleName="Update">
          <span className="flex items-center appsNavRightFilterIcon cursor-pointer shadow-lg ">
            <IoFilterSharp />
            <span className="responsiveTitleHide">Filter</span>
          </span>
          </Modal.Toggle>
          <Modal.Window windowName="Update">
                      <Upgrade/>
                    </Modal.Window>
        </div>
      </div>
      </Modal>

      <div className="grid lg:grid-cols-4 grid-cols-4 border-2 rounded-xl">
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
              <h3 className="font-semibold md:text-base text-xs">Installed Apps</h3>
              <p className="md:text-base text-xs">120 Apps</p>
            </div>
          </div>
        </Link>

        <Link to="/apps/uninstalledapp">
          <div className="md:mx-3 mx-1 my-1 border-r-2">
            <div className=" flex flex-col justify-center">
              <h3 className="font-semibold md:text-base text-xs">Uninstalled</h3>
              <p className=" md:text-base text-xs">14 Apps</p>
            </div>
          </div>
        </Link>

        <Link to="/apps/blockedapp">
          <div className="lastAppsbox md:mx-3 mx-1 my-1 ">
            <div className="flex flex-col  justify-start">
              <h3 className="font-semibold md:text-base text-xs">Blocked Apps</h3>
              <p className="md:text-base text-xs">2 Apps</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AppsRoutesHeader;
