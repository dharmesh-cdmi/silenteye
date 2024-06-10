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
  
    </Card>
  );
}

export default WifiMain;
