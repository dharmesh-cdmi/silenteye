import React from "react";
import Messages from "./components/Messages";
import Card from "../../UI/Card";
import LocationHead from "../../UI/HeaderTab";
import CallsHead from "../Calls/CallsHead";

function MessagesMain() {
  const headerData = {
    location: "Messages",
    placeHolder: "Search by Name or Phone Number",
  };
  return (
    <Card>
      <CallsHead
        heading={"Messages"}
        placeholder={"Search by Name or Phone Number"}
      />
      <Messages />
    </Card>
  );
}

export default MessagesMain;
