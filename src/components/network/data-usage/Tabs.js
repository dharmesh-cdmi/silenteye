import React from "react";
import Switch from "../../../UI/Switch";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";


function Tabs() {
  return (
    <div className="lg:mx-4 mx-0 lg:mt-10 mt-4 lg:border-0 border-t">
      <section className="grid lg:grid-cols-4 grid-cols-1 lg:border-2 border-0 border-gray-50 rounded-xl ">
        <div className="py-2 px-2 lg:border border-b ">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <h3 className="font-semibold text-md">Network Limit</h3>
              </div>
              <div className="flex">
                <p className="text-gray-500 text-sm">Off</p>
              </div>
            </div>
            <div className="mt-3">
              <Switch />
            </div>
          </div>
        </div>
        <div className="py-2 px-2 lg:border border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <div>
                  <h3 className="font-semibold text-md">Wifi Network Limit</h3>
                  <p className="text-gray-500 text-sm">On</p>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <Switch />
            </div>
          </div>
        </div>

        <div className="py-2 px-2 lg:border border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex ">
                <AiOutlineDownload className="h-6 w-6" />
                <h3 className="font-semibold text-md">Downloaded</h3>
              </div>
              <p className=" text-sm">
                130.77 GB{" "}
                <span className="text-gray-500 text-xs">Data Uploaded</span>
              </p>
            </div>
          </div>
        </div>

        <div className="py-2 px-2 lg:border border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex ">
                <MdOutlineFileUpload className="h-6 w-6" />
                <h3 className="font-semibold text-md">Uploaded</h3>
              </div>
              <p className=" text-sm">
                130.77 GB{" "}
                <span className="text-gray-500 text-xs">Data Downloaded</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tabs;
