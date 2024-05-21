import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({isTabletMid,open,setOpen}) => {
  return (
    <nav style={{width:"inherit"}} className="bg-white border-gray-300 dark:border-gray-600 dark:bg-gray-900  border-b fixed  top-0 z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-[8.8px]  md:px-9">
       <div className="md:hidden">
       <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
          // onClick={() => {
          //   setOpen(!open);
          // }}
        >
          <span className="sr-only">Open main menu</span>
         {open ?<IoCloseSharp  className="text-black"/> :<RiMenu2Fill className="text-black" />} 
          
        </button>
       </div>
        <div className="hidden md:block">
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <RiMenu2Fill className="text-black" />
        </button>
        </div>
        <div className="flex gap-4">
         <div className="hidden md:block">
         <button
            type="button"
            class="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
          >
            <CiMobile3 />

            Ashly's Device
            <IoIosArrowDown />

            
          </button>
         </div>

          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center  h-10  p-2"
          >
            <IoMdNotificationsOutline />

            <span className="sr-only">Notification</span>
          </button>

          <button
            type="button"
            class="text-white active md:block hidden hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Try Now
          </button>
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt
            />
            <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
