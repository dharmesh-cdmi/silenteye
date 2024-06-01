import React from "react";
import Tabs from "./Tabs";
import Card from "../../../UI/Card";
import DataTable from "./DataTable";
import LocationHead from "../../../UI/HeaderTab";
import Modal from '../../Shared/Modal'
import Upgrade from '../../Shared/Upgrade'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import CallsHead from "../../Calls/CallsHead";
import Button from '../../Shared/Button'

function WifiMain() {
  return (
    <Card>
       <CallsHead
        heading={"Wifi Network"}
        placeholder={"Search by Wifi Name"}
      />
      <Tabs />
      <DataTable />
      <div className="flex justify-center mb-12">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px]  py-[10px] text-[#101828] text-center mt-7">
              View More
              <MdKeyboardDoubleArrowDown size={18} />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </Card>
  );
}

export default WifiMain;
