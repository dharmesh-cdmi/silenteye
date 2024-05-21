import React from "react";

import del from "../../../assests/images/delete.png";
import gallery from "../../../assests/images/gallery.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import Upgrade from "../../Shared/Upgrade";
import Modal from "../../Shared/Modal";

function Image() {
  return (
    <div>
      <div className="flex justify-between align-middle p-3 border-b-2">
        <div className="flex justify-start flex-col">
          <h3 className="font-semibold text-xl">3076877.jpg</h3>
          <div className="flex">
            <img className="w-2 h-2"></img>
            <p className="text-gray-500">2.4 MB</p>
          </div>
          <div className="flex">
            <img className="w-2 h-2"></img>
            <p className="text-gray-500">Tue,May 21,2024 01:12 PM</p>
          </div>
        </div>
        <div className="flex align-middle">
          <Modal>
            <Modal.Toggle toggleName="Update">
              <img className="h-6 w-6 mt-5 cursor-pointer" src={del}></img>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <MdOutlineFileDownload className="h-6 w-6 mt-5 ml-2 cursor-pointer" />
            </Modal.Toggle>

            <Modal.Toggle toggleName="Update">
              <FiUpload className="h-6 w-6 mt-5 ml-2 cursor-pointer" />
            </Modal.Toggle>
            <Modal.Window windowName="Update">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="relative">
        <img src={gallery} className="object-cotain"></img>
        <div className="h-16 w-16 absolute bg-white opacity-90 rounded-full left-96">
          dssd
        </div>
      </div>
    </div>
  );
}

export default Image;
