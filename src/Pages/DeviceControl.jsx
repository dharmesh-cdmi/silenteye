import React from "react";
import DeviceControlHead from "../components/DeviceControl/DeviceControlHead";
import data from "../assests/images/DashControl/Frame.png";
import sim1 from "../assests/images/DashControl/Verizon.png";
import sim2 from "../assests/images/DashControl/T-Mobile.png";
import fram1 from "../assests/images/DashControl/Frame-1.png";
import fram2 from "../assests/images/DashControl/Frame-2.png";
import fram3 from "../assests/images/DashControl/Frame-3.png";
import fram4 from "../assests/images/DashControl/Frame-4.png";
import fram5 from "../assests/images/DashControl/Frame-5.png";
import fram6 from "../assests/images/DashControl/Frame-6.png";
import fram7 from "../assests/images/DashControl/Frame-7.png";
import devices from "../assests/images/DashControl/Device.png";
import menu from "../assests/images/DashControl/Menu.png";
import menu1 from "../assests/images/DashControl/Menu1.png";
import menu2 from "../assests/images/DashControl/Menu_2.png";
import switc from "../assests/images/DashControl/Switch.png";
import safemode from "../assests/images/DashControl/safemode.png";
import frame87 from "../assests/images/DashControl/Frame 87.png";
import { IoIosArrowDown, IoIosCall } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";
import CallsHead from "../components/Calls/CallsHead";
import Verizon from "../components/Shared/Verizon";
import Modal from "../components/Shared/Modal";
import FilterTegModal from "../components/Shared/FilterTegModal";

const DeviceControl = () => {
  return (
    <div>
      <CallsHead heading="Device Control" placeholder="Search " />

      <div className="border rounded-xl my-8">
        <div className="flex p-4 border-b">
          <div>
            <img src={data} alt="img" className="object-contain mt-2" />
          </div>
          <div className="mx-2">
            <p className="font-semibold text-xl text-gray-900">
              Block Internet Connection
            </p>
            <p className="text-sm font-medium text-gray-400">
              Prevents internet access on the target device.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 ">
          <div className="p-4 border-r">
            <div className="flex ">
              <div className="flex-none w-8">
                <img src={sim1} alt="img" className="object-contain h-8" />
              </div>
              <div className=" w-72">
                <p className="font-semibold text-xl text-gray-900">
                  Verizon (Sim 1)
                </p>
              </div>
              <div className="flex-1 w-15 text-end me-2">
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <div className="toggle-switch-background">
                        <div className="toggle-switch-handle" />
                      </div>
                    </label>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Verizon />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
            <div className="flex ">
              <div className="flex-none w-4 mt-2 m-auto">
                <p className="text-sm font-medium text-gray-400 ">
                  <IoIosCall />
                </p>
              </div>
              <div className="flex-1 w-64 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  +1 (800) 917-0481
                </p>
              </div>
              <div className="flex-1 w-32 text-end me-2 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  Blocked for 3 hours
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex ">
              <div className="flex-none w-8">
                <img src={sim2} alt="img" className="object-contain h-8" />
              </div>
              <div className=" w-72">
                <p className="font-semibold text-xl text-gray-900">
                  T-Mobile (Sim 2)
                </p>
              </div>
              <div className="flex-1 w-15 text-end me-2">
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <label className="toggle-switch">
                      <input type="checkbox" checked />
                      <div className="toggle-switch-background">
                        <div className="toggle-switch-handle" />
                      </div>
                    </label>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Verizon />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
            <div className="flex ">
              <div className="flex-none w-4 mt-2 m-auto">
                <p className="text-sm font-medium text-gray-400 ">
                  <IoIosCall />
                </p>
              </div>
              <div className="flex-1 w-64 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  +1 (800) 917-0481
                </p>
              </div>
              <div className="flex-1 w-32 text-end me-2 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  Internet Live
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl my-8">
        <div className="flex p-4 border-b">
          <div>
            <img src={fram1} alt="img" className="object-contain mt-2" />
          </div>
          <div className="mx-2">
            <p className="font-semibold text-xl text-gray-900">
              Block Mobile Network
            </p>
            <p className="text-sm font-medium text-gray-400">
              Disables mobile network connectivity
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 ">
          <div className="p-4 border-r">
            <div className="flex ">
              <div className="flex-none w-8">
                <img src={fram2} alt="img" className="object-contain h-8" />
              </div>
              <div className=" w-72">
                <p className="font-semibold ms-2 text-xl text-gray-900">
                  Wifi Network
                </p>
              </div>
              <div className="flex-1 w-15 text-end me-2">
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <label className="toggle-switch">
                      <input type="checkbox" checked />
                      <div className="toggle-switch-background">
                        <div className="toggle-switch-handle" />
                      </div>
                    </label>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Verizon />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
            <div className="flex ">
              {/* <div className="flex-none w-4 mt-2 m-auto">
                <p className="text-sm font-medium text-gray-400 ">
                  <IoIosCall />
                </p>
              </div> */}
              <div className=" w-52 md:w-70 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  Disables Wifi network / WLan network connectivity
                </p>
              </div>
              <div className="flex-1 w-48 md:w-30 text-end me-2 mt-1">
                <p className="text-sm  font-medium text-gray-400 ">
                  Active Network
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex ">
              <div className="flex-none w-8">
                <img src={fram3} alt="img" className="object-contain h-8 " />
              </div>
              <div className=" w-72">
                <p className="font-semibold ms-2 text-xl text-gray-900">
                  SIMs Network
                </p>
              </div>
              <div className="flex-1 w-15 text-end me-2">
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle" />
                  </div>
                </label>
              </div>
            </div>
            <div className="flex ">
              <div className=" w-52 md:w-70 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  Disables Wifi network / WLan network connectivity
                </p>
              </div>
              <div className="flex-1 w-48 md:w-30 text-end me-2 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  No Network for 3 h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-xl my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 ">
          <div className="flex p-4">
            <div>
              <img src={fram4} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2">
              <p className="font-semibold text-xl text-gray-900">
                Remotely Lock or Unlock Device
              </p>
              <p className="text-sm font-medium text-gray-400">
                Securely control device access.
              </p>
            </div>
            <div className="w-20 md:hidden ">
              <img src={devices} alt="img" className="object-contain mt-2" />
            </div>
          </div>
          <div className="flex p-4 justify-end">
            <div className="w-14 h-14  hidden md:block">
              <img src={devices} alt="img" className="object-contain mt-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 ">
          <div className="flex p-4">
            <div>
              <img src={fram5} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2">
              <p className="font-semibold text-xl text-gray-900">
                Real-Time Screen Sharing
              </p>
              <p className="text-sm font-medium text-gray-400">
                Collaborate instantly with live screen sharing.
              </p>
            </div>
          </div>
          <div className="flex p-4 md:justify-end justify-center">
            <div>
              <button
                type="button"
                class="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
              >
                <CiMobile3 size={30} />
                View Live Screen
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-0 ">
          <div className="flex p-4 col-span-2">
            <div>
              <img src={fram6} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2 w-70">
              <p className="font-semibold text-xl text-gray-900">
                Live Microphone Access for Listening to Surroundings
              </p>
              <p className="text-sm font-medium text-gray-400">
                Listen to the device's surroundings in real-time.
              </p>
            </div>
          </div>
          <div className="flex p-4 md:justify-end justify-center">
            <div>
              <img src={menu} alt="img" className="object-contain h-12" />
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-0 ">
          <div className="flex p-4 col-span-2">
            <div>
              <img src={fram7} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2 w-70">
              <p className="font-semibold text-xl text-gray-900">
                Silently Record All or Specific Video Calls
              </p>
              <p className="text-sm font-medium text-gray-400">
                Record video calls discreetly
              </p>
            </div>
            <img
              src={switc}
              alt="img"
              className="object-contain h-12 md:hidden block"
            />
          </div>
          <div className="flex p-4  justify-center md:justify-end">
            <div className="md:flex ">
              <img
                src={menu2}
                alt="img"
                className="object-contain ps-3 md:ps-0 h-28 md:h-12"
              />
              <img src={menu1} alt="img" className="object-contain h-12" />
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <img
                    src={switc}
                    alt="img"
                    className="object-contain h-12 hidden md:block cursor-pointer"
                  />
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Verizon />
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl my-8">
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <div className="flex p-4 col-span-2">
            <div>
              <img
                src={frame87}
                alt="img"
                className="object-contain mt-2 sm:w-24"
              />
            </div>
            <div className="mx-2 w-70">
              <div className="flex ">
                <div>
                  <p className="font-semibold text-xl text-gray-900">
                    Filter harmful content on Device{" "}
                    <div className="hidden md:block">
                     
                      <Modal>
                <Modal.Toggle toggleName="Update">
                <button
                        type="button"
                        class="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                      >
                        <AiFillEdit />
                        Edit Filters
                      </button>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                 <FilterTegModal/>      
                         </Modal.Window>
              </Modal>
                    </div>
                  </p>
                </div>
                <img
                  src={safemode}
                  alt="img"
                  className="object-contain h-12 block md:hidden"
                />
              </div>
              <p className="text-sm font-medium text-gray-400">
                Social Media Content Filter
              </p>
              <div className="flex flex-wrap gap-2">
                <span class="bg-blue-100 text-slate-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Nudity
                </span>
                <span class="bg-blue-100 text-slate-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Hate
                </span>
                <span class="bg-blue-100 text-slate-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Violence
                </span>
                <span class="bg-blue-100 text-slate-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Self-harm
                </span>
                <span class="bg-blue-100 text-slate-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Bullying/Harassment
                </span>
                <span class="bg-[#172A6E] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  +25 More Tags
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-4 mt-4 justify-end">
            <div>
              <img
                src={safemode}
                alt="img"
                className="object-contain h-12 hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceControl;
