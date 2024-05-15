import React from "react";
import Tabs from "./Tabs";
import Card from "../../../UI/Card";
import DataTable from "./DataTable";
import LocationHead from "../../../UI/HeaderTab";

function WifiMain() {
  const headerData = {
    location: "Wifi Network",
    placeHolder: "Search by Wifi Name",
  };
  return (
    <Card>
      <LocationHead data={headerData} />
      <Tabs />
      <DataTable />
    </Card>
  );
}

export default WifiMain;
