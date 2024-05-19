import React from 'react'
import Switch from '../../../UI/Switch'
import { CiLock } from "react-icons/ci";
import { FaWifi } from "react-icons/fa6";
import { AiOutlineDownload } from "react-icons/ai";
import del from '../../../assests/images/delete.png'



function Tabs() {
  return (
    <div className="lg:mx-4 mx-5 mt-10">
      <section className="grid lg:grid-cols-4 grid-cols-1 border-2 border-gray-50 rounded-xl ">
        <div className="py-2 px-2 border-r-2">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <h3 className="font-semibold text-md">Wifi Network</h3>
              </div>
              <div className="flex">
                <p className="text-gray-500 text-sm">Off</p>
              </div>
            </div>
            <div className="mt-3 ">
            <Switch/>
            </div>
          </div>
        </div>
        <div className="py-2 px-2 border-r-2">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <img className="h-8 w-8"></img>
                <div>
                <h3 className="font-semibold text-lg">Home 5G</h3>
                <p className="text-gray-400 text-sm">Connected</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex ">
            <CiLock className='w-6 h-6 mr-0.5 font-medium' />
              <FaWifi className='w-6 h-6 mr-0.5'  />
              <img src={del}  className='h-6 w-6'/>
            </div>
          </div>
        </div>
        <div className="py-2 px-2 border">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex ">
                <AiOutlineDownload className="h-6 w-6" />
                <h3 className="font-semibold text-md">Uploaded</h3>
              </div>
              <p className=" text-sm">
                130.77 GB
                <span className="text-gray-500 text-xs">Data Uploaded</span>
              </p>
            </div>
          </div>
        </div>

        <div className="py-2 px-2 border">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex ">
                <AiOutlineDownload className="h-6 w-6" />
                <h3 className="font-semibold text-md">Downloaded</h3>
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
  )
}

export default Tabs