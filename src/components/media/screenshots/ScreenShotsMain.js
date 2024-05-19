import React from "react";
import Card from "../../../UI/Card";
import Gallery from "./components/Gallery";
import LocationHead from "../../../UI/HeaderTab";

function ScreenShotsMain() {
  const headerData = {
    location: "Screenshots",
    placeHolder: "Search Photos",
  };
  return (
    <Card>
      <LocationHead data={headerData} />
      <Gallery />
    </Card>
  );
}

export default ScreenShotsMain;
