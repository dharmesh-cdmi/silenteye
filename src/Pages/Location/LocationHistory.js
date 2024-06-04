import { Link } from "react-router-dom";
import "./Location.css";
import LocationHead from "../../components/LocationHead/LocationHead.js";
import { LocationHistoryData } from "./LocationData/LocationHistoryData.js";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import { IoIosArrowDropright } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import liveimg from "../../assests/images/Live Location.png";
import liveimg2 from "../../assests/images/liveloca2.png";

import Map from "../../assests/images/map.png";
import InfoCard from "../../components/Cards/InfoCard.jsx";
import CallsHead from "../../components/Calls/CallsHead.jsx";
import { GoDotFill } from "react-icons/go";

const LocationHistory = () => {
  const locationhistory = [
    {
      name: "38.0530192 -102.1243321 ",
      des: "S Main St",
      time: "Mon,May 21, 2024 11:36 AM",
    },
    {
      name: "38.0530192 -102.1243321 ",
      des: "S Main St",
      time: "Mon,May 21, 2024 11:36 AM",
    },
    {
      name: "38.0530192 -102.1243321 ",
      des: "S Main St",
      time: "Mon,May 21, 2024 11:36 AM",
    },
  ];
  return (
    <>
      <CallsHead heading="Location history" placeholder="Search Location" />
      <hr class="h-px my-2 md:hidden bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <InfoCard
        title="Live Location"
        titleRight={
          <p className="text-blue-400">
            <Link to="/location">View More</Link>
          </p>
        }
        className="mb-5 md:mb-0 md:mt-8"
      >
        <div className="rounded-lg py-1 bg-gray-50 hidden md:block">
          <img src={liveimg} alt="img" className="object-fill " />
        </div>
        <div className="rounded-lg py-1 bg-gray-50 md:hidden">
          <img src={liveimg2} alt="img" className="object-cover h-52 w-96" />
        </div>
      </InfoCard>
      <section className="browserContainer md:p-4  flex flex-col md:my-6">
        <div className="browseHistoryCon md:rounded-md flex flex-col">
          <h3 className="border-b-2 w-full p-3 text-sm text-slate-500">
            Location History
          </h3>
          <div className="w-full ">
            {locationhistory.map((info, i) => (
              <div className="border-b md:border-slate-300 px-2">
                <ul key={i} className="flex ">
                  <li className="flex-none w-6 pt-2 border-none">
                    <GoDotFill className=" text-green-500" />
                  </li>
                  <li className=" text-sm pb-2  text-gray-400 ">
                    <div className="mt-[6px]">{info.name.slice(0, 25)}</div>
                  </li>
                </ul>
                <p className=" flex-1 w-64 font-semibold text-lg md:text-xl text-gray-900 border-none">
                  {info.des}
                </p>
                <p className="text-sm pb-2 text-gray-400">{info.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationHistory;
