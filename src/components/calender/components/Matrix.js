import React, { useEffect } from "react";

function Matrix() {
  const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const i = Array.from({ length: 35 }, (_, index) => index + 1);

  const schedules = [
    {
      time: "10:00-13:00",
      main: "Design new UX flow from micheal",
      desc: "Starts from screen 16",
    },
    {
      time: "10:00-13:00",
      main: "Design new UX flow from micheal",
      desc: "Starts from screen 16",
    },
    {
      time: "10:00-13:00",
      main: "Design new UX flow from micheal",
      desc: "Starts from screen 16",
    },
    {
      time: "10:00-13:00",
      main: "Design new UX flow from micheal",
      desc: "Starts from screen 16",
    },
  ];

  return (
    <div className="mt-10 mx-10">
      <div className="grid grid-cols-7 rounded-xl border">
        {days.map((day, idx) => {
          return (
            <p className="p-3 text-gray-500 text-medium border " key={idx}>
              {day}
            </p>
          );
        })}
        {i.map((num, index) => {
          return (
            <div className="p-2 pb-5 border" key={index}>
              {num % 32}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 rounded-xl border mt-9">
        {schedules.map((schedule, index) => {
          return (
            <div className="p-4 flex flex-col border">
              <p className="text-gray-500 text-sm">
                <span className="px-2 mr-2  rounded-full bg-blue-950 font-normal"></span>
                {schedule.time}
              </p>
              <p className="text-lg font-medium ">{schedule.main}</p>
              <p className="text-gray-500 text-sm ">{schedule.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center align middle my-10  ">
        <button className="mx-auto border-2 shadow-lg px-5 py-1.5 rounded-lg">View More</button>
      </div>
    </div>
  );
}

export default Matrix;
