import React from "react";
import Messages from "./components/Messages";
import Card from "../../UI/Card";
import LocationHead from "../../UI/HeaderTab";

function MessagesMain() {
  const headerData = {
    location: "Messages",
    placeHolder: "Search by Name or Phone Number",
  };
  return (
    <Card>
      <LocationHead data={headerData} />
      <Messages />
    </Card>
  );
}

export default MessagesMain;
