import React from "react";
import Gallery from "./components/Gallery";
import Card from "../../../UI/Card";
import LocationHead from "../../../UI/HeaderTab";
import CallsHead from "../../Calls/CallsHead";
import Modal from "../../Shared/Modal";
import Upgrade from "../../Shared/Upgrade";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function mediaMain() {
  return (
    <Card>
       <CallsHead
        heading={"Photos"}
        placeholder={"Search Photos"}
      />
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

export default mediaMain;
