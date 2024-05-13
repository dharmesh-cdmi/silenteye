import React from 'react'
import { GoAlert } from 'react-icons/go'
import { IoIosClose } from 'react-icons/io'

const Alert = () => {
  return (
    <>
<div id="alert-4" style={{width:"inherit"}} className="flex items-center z-20 mb-2 px-4 fixed top-16  pt-2 text-black  bg-[#FFEAB5] dark:bg-gray-800 " role="alert">
<GoAlert />

  <span className="sr-only">Info</span>
  <div className="ms-3 text-sm font-medium">
  This demo dashboard is for reference only, no activities can be performed here. <a href="#" className="font-semibold underline hover:no-underline">Upgrade to Unlock Full Access.</a>
  </div>
  <button type="button" className="ms-auto  text-black  bg-[#FFEAB5] focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-4" aria-label="Close">
    <span className="sr-only">Close</span>
    <IoIosClose />

  </button>
</div>

    </>
  )
}

export default Alert