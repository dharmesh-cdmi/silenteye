import React from "react";
import Tabs from "./components/Tabs";
import Card from "../../../UI/Card";
import Table from "./components/Table";
import LocationHead from "../../../UI/HeaderTab";

function MobileMain() {
  const headerData = {
    location: "Mobile Network",
    placeHolder: "Search by App or Website Name",
  };

  return (
    <Card>
      <LocationHead data={headerData} />
      <Tabs />
      <Table />
    </Card>
  );
}

export default MobileMain;
