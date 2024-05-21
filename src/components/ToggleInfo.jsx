import apple from "../assests/images/apple3.png";
import apple2 from "../assests/images/apple2.png";
import { TbDeviceMobilePlus } from "react-icons/tb";
import fram1 from "../assests/images/DashControl/Frame-1.png";
import Frame from "../assests/images/nav/Frame.png";
import fram_1 from "../assests/images/nav/Frame-1.png";
import fram2 from "../assests/images/nav/Frame-2.png";
import fram4 from "../assests/images/nav/Frame-4.png";

import { CiMobile3 } from "react-icons/ci";

export function NotificationInfo(props) {
  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className=" fixed top-[4.8rem] md:right-52 border shadow  z-50 flex justify-center  items-center bg-white rounded-lg"
      style={{ zIndex: 9999 }} // Adjust z-index here
    >
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto">
        <div >
          {/* Modal header */}
          <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
             Notification <span class="bg-[#34C759] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">3 New</span>
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only" >Close modal</span>
            </button>
          </div>
           {/* Main Content */}
          <div className="flex p-1 md:p-2 border-b  md:w-[466px]">
            <div>
              <img src={Frame} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2 w-72">
              <p className="font-semibold text-xl text-gray-900">Low Battery</p>
              <p className="text-sm font-medium text-gray-400">
                Battery is Low on Device iPhone 11
              </p>
            </div>
            <p className="text-sm font-medium text-gray-400 ps-[3.25rem] mt-4">
                9:20 AM 
              </p>
          </div>
          <div className="flex p-3 border-b w-80 md:w-[466px]">
            <div>
              <img src={fram4} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2 w-72">
              <p className="font-semibold text-xl text-gray-900">
                Offline Status
              </p>
              <p className="text-sm font-medium text-gray-400">
                Device goes on offline on 21 Feb, 2024
              </p>
            </div>
            <p className="text-sm font-medium text-gray-400 ps-[3.25rem] mt-4">
                9:00 AM 
              </p>
          </div>
          <div className="flex p-3 border-b w-80 md:w-[466px]">
            <div>
              <img src={fram_1} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2 w-72">
              <p className="font-semibold text-xl text-gray-900">App Access</p>
              <p className="text-sm font-medium text-gray-400">
                Instagram is Opened
              </p>
            </div>
            <p className="text-sm font-medium text-gray-400 ps-[3.25rem] mt-4">
                8:20 AM 
              </p>
          </div>
          <div className="flex p-3 border-b opacity-50 w-80 md:w-[466px]">
            <div>
              <img src={fram2} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2 w-72">
              <p className="font-semibold text-xl text-gray-900">Geofence Updates</p>
              <p className="text-sm font-medium text-gray-400">
                Device is gone outside of range area
              </p>
            </div>
            <p className="text-sm font-medium text-gray-400 ps-[3.25rem] mt-4">
                7:20 AM 
              </p>
          </div>
          <div className="flex p-3 border-b opacity-50 w-80 md:w-[466px]">
            <div>
              <img src={Frame} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2 w-72">
              <p className="font-semibold text-xl text-gray-900">Low Battery</p>
              <p className="text-sm font-medium text-gray-400">
               Battery is Low on Device: iPhone 11
              </p>
            </div>
            <p className="text-sm font-medium  text-gray-400 ps-[3.25rem] mt-4">
               20/02/2024
              </p>
          </div>
          <div className="flex p-3 border-b opacity-50 w-80 md:w-[466px]">
            <div>
              <img src={fram4} alt="img" className="object-contain mt-2" />
            </div>
            <div className="mx-2 w-72">
              <p className="font-semibold text-xl text-gray-900">Offline Status</p>
              <p className="text-sm font-medium text-gray-400">
               Device goes on offline on 21Feb, 2024, 8:49 AM
              </p>
            </div>
            <p className="text-sm font-medium text-gray-400 ps-[3.25rem] mt-4">
               20/02/2024
              </p>
          </div>

          {/* Modal footer */}
          <div className="flex flex-row-reverse items-end p-2 border-t border-gray-200 rounded-b ">
            <button
              data-modal-hide="static-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
             Mark all as read
            </button>
            <button
              data-modal-hide="static-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
             Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const DeviceInfo = () => {
  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className=" fixed top-[4.8rem] right-72 border shadow  z-50 flex justify-center  items-center bg-white rounded-lg"
      style={{ zIndex: 9999 }} // Adjust z-index here
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#172A6E] text-left p-6 rounded-lg text-white flex justify-center items-center flex-col">
            <CiMobile3 />
            <p>Ashly's Device</p>
            <p className="text-base font-thin">(303) 555-0105</p>
            <div className="flex gap-2">
              <img className="w-4 h-4 rounded-full mt-1" src={apple} alt />
              <p>iPhone 11</p>
            </div>
          </div>
          <div className="bg-gray-100 text-left p-6 rounded-lg  flex justify-center items-center flex-col">
            <CiMobile3 />
            <p>Keyu's Device</p>
            <p>(303) 555-0105</p>
            <div className="flex gap-2">
              <img className="w-4 h-4 rounded-full mt-1" src={apple2} alt />
              <p>iPhone 12</p>
            </div>
          </div>
          <div className="bg-gray-100 text-left p-6 rounded-lg  flex justify-center items-center flex-col">
            <CiMobile3 />
            <p>Enter NickName</p>
            <p>Target Device</p>
            <div className="flex gap-2">
              <img className="w-4 h-4 rounded-full mt-1" src={apple2} alt />
              <p>iPhone 12 Pro</p>
            </div>
          </div>
          <div className="bg-gray-100 text-left p-6 rounded-lg  flex justify-center items-center flex-col">
            <TbDeviceMobilePlus />
            <p>Add Device</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceInfo;