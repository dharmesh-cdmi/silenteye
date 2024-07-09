import React, { useState } from "react";
import { GoAlert } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

const Alert = () => {
  return (
    <>
      <div
        id="alert-4"
        style={{ width: "inherit" }}
        className=" items-center  border-t top-[59px] md:top-[66px]  z-10 mb-2 px-2 md:px-4 fixed   pt-2 text-black  bg-[#FFEAB5] py-2 "
        role="alert"
      >
        <div className="flex md:mx-3 gap-2 md:gap-0">
          <div className="mt-2 md:mt-0">
          <GoAlert className="mt-[3px] h-4 w-4"/>
          </div>

          <span className="sr-only">Info</span>
          <div className="md:ms-3  text-[13px] md:text-base font-medium">
            This demo dashboard is for reference only, no activities can be
            performed here.{" "}
            <a
              href="#"
              className="font-semibold underline hover:no-underline text-[#172A6E]"
            >
              Upgrade to Unlock Full Access.
            </a>
          </div>
          {/* <button
            type="button"
            className="ms-auto  text-black  bg-[#FFEAB5] focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#alert-4"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <IoIosClose />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Alert;
