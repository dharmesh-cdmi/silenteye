import React from "react";
import Button from "../../components/Shared/Button";
import diamond from "../../assests/images/diamond.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import moveBack from "../../assests/images/Header/arrow.png";
import sim1 from "../../assests/images/DashControl/Verizon.png";

const Verizon = () => {
  const moveBacks = useMoveBack();

  return (
    <div className="w-[37rem] h-[28rem]">
      <div className="flex py-4 border-b-[#DDDDDD] px-[16px]     border-b-[1px]">
        <div
          className="image-wrapper me-2  p-[8px]  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          <img src={moveBack} alt="move-Back" />
        </div>
        <div className="flex">
          <div className="flex-none w-8 mt-1">
            <img src={sim1} alt="img" className="object-contain h-8" />
          </div>
          <div className=" w-72 mt-1">
            <p className="font-semibold text-xl text-gray-900">
              Verizon (Sim 1)
            </p>
          </div>
        </div>
      </div>

      <div className="  overflow-y-auto h-96 mx-4 no-scrollbar">
        <div className="flex mt-10 justify-around">
          <div>
            <h4 className="font-[600] text-[20px]">
              Block Internet Connection
            </h4>
            <p className="font-[500] text-[15px]">
              This will block internet connection Permenantly
            </p>
          </div>
          <div className="mt-2">
            <button
              type="button"
              class="text-gray-900 font-[900] text-lg bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
              Permenant Block
            </button>
          </div>
        </div>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-[35rem] h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>
        <div>
            <h4 className="font-[600] text-[20px]">
              Block Internet Connection
            </h4>
            <p className="font-[500] text-[15px]">
              This will block internet connection Permenantly
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className=" w-[97] h-[89] bg-[#DDDDDD]/50 rounded-xl p-2">
                <p className="font-[500] text-[40px] m-auto text-center">20</p>
                <p className="font-[500] text-[17px] m-auto text-center">Hours</p>
            </div>
            <div className=" w-[97] h-[89] bg-[#DDDDDD]/50 rounded-xl p-2">
                <p className="font-[500] text-[40px] m-auto text-center">41</p>
                <p className="font-[500] text-[17px] m-auto text-center">Minutes</p>
            </div>
            <div className=" w-[97] h-[89] bg-[#DDDDDD]/50 rounded-xl p-2">
                <p className="font-[500] text-[40px] m-auto text-center">00</p>
                <p className="font-[500] text-[17px] m-auto text-center">Seconds</p>
            </div>

          </div>
          <div className="my-2 text-center">
            <button
              type="button"
              class="text-gray-900 font-[900] text-lg bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
              Permenant Block
            </button>
          </div>
      </div>
    </div>
  );
};

export default Verizon;
