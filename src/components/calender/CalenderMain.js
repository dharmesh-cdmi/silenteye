import React from "react";
import Matrix from "./components/Matrix";
import Card from "../../UI/Card";
import Header from "./components/Header";
import CallsHead from "../Calls/CallsHead";

function CalenderMain() {
  const headerData = {
    location: "May, 2022",
    placeHolder: "Search Photos",
  };
  return (
    <Card>
      <CallsHead heading={"Calendar"} placeholder="Search" />
      <div className="md:hidden block">
        <Header data={headerData} />
      </div>
      <Matrix />
    </Card>
  );
}

export default CalenderMain;
