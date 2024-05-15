import React from "react";
import Card from "../../../UI/Card";
import Gallery from "./Gallery";
import LocationHead from "../../../UI/HeaderTab";

function VideosMain() {
  const headerData = {
    location: "Videos",
    placeHolder: "Search Videos",
  };
  return (
    <Card>
      <LocationHead data={headerData} />

      <Gallery />
    </Card>
  );
}

export default VideosMain;
