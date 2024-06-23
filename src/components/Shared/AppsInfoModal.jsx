import sim1 from "../../assests/images/DashControl/Verizon.png";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { useMoveBack } from "../../hooks/useMoveBack";
import Whatsapp from "../../assests/images/SocialApps/whatsapp.png";
import AppPermissions from "../AppPermissions/AppPermissions";
import { Table } from "./Table";
import AppInformation from "../../Pages/Apps/AppInformation";

const AppsInfoModal = () => {
  const moveBacks = useMoveBack();
  const AllowedData = [
    {
      id: "1",

      heading: "Youtube",
    },
    {
      id: "2",

      heading: "Chrome",
    },
    {
      id: "3",

      heading: "Facebook",
    },
    {
      id: "4",

      heading: "WhatsApp",
    },
    {
      id: "5",

      heading: "Telegram",
    },
  ];
  return (
    <div className=" w-[310px] md:w-[37rem] h-[448px]">
      <div className="flex py-2 border-b-[#DDDDDD] px-[16px]     border-b-[1px]">
        <div
          className="image-wrapper shadow me-2 mt-[2px]  p-[8px] mb-1  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          {/* <img src={moveBack} className="h-5" alt="move-Back" /> */}
          <MdOutlineKeyboardBackspace />
        </div>
        <div className="flex">
          <div className="flex-none w-8 mt-[2px]">
            <img src={Whatsapp} alt="img" className="object-contain h-8" />
          </div>
          <div className=" w-72 ps-2 mt-1">
            <p className="font-semibold text-xl text-gray-900">Whatsapp</p>
          </div>
        </div>
      </div>

      <div className="  overflow-y-auto h-96 my-4 mx-4 no-scrollbar">
        <AppInformation />
      </div>
    </div>
  );
};

export default AppsInfoModal;
