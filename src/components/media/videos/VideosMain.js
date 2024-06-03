import React from "react";
import Card from "../../../UI/Card";
import Gallery from "./Gallery";
import LocationHead from "../../../UI/HeaderTab";
import CallsHead from "../../Calls/CallsHead";
import Modal from "../../Shared/Modal";
import Upgrade from "../../Shared/Upgrade";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function VideosMain() {
  const headerData = {
    location: "Videos",
    placeHolder: "Search Videos",
  };
  return (
    <Card>
     <CallsHead heading={"Videos"} placeholder={"Search Videos"} />
      <Gallery />
      <Modal>
        <Modal.Toggle toggleName="Update">
          <div className="flex justify-center align middle my-10  ">
            <button className="mx-auto border-2 shadow-lg px-5 py-1.5 rounded-lg flex ">
              View More
              <MdKeyboardDoubleArrowDown className="mt-1 h-4 w-4" />
            </button>
          </div>
        </Modal.Toggle>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </Card>
  );
}

export default VideosMain;
