import { useState } from "react";
import "./Notes.css";
import "../../components/BrowserHead/BrowserHead.css";
import { notesData } from "./Notes-data.js";
import { IoFilterSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { MdDeleteOutline, MdKeyboardDoubleArrowDown } from "react-icons/md";
import PageExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx";
import imgg from "../../assests/images/imgg.png";
import Convo from "../../components/messages/components/Convo";
import delet from "../../assests/images/delete.png";
import man from "../../assests/images/edit button.png";
import Tabs from "../../components/messages/components/Tabs";
import Card from "../../UI/Card";
import LocationHead from "../../UI/HeaderTab";

import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import { useMoveBack } from "../../hooks/useMoveBack.js";
import CallsHead from "../../components/Calls/CallsHead.jsx";
import Button from "../../components/Shared/Button.jsx";
import { Link } from "react-router-dom";

function Messages() {
  const moveBacks = useMoveBack();
  const [modal, setModal] = useState(false);
  const headerData = {
    location: "Messages",
    placeHolder: "Search by Name or Phone Number",
  };

  const msgData = [
    {
      name: "Housewarming party",
      text: "We are going to hold a rally on Saturday. Items to prepare. lemonade dispenserPicnic table clothExtra outdoor lights,e",
      icon: true,
    },
    {
      name: "Hawaii",
      text: "Things to bring, I am lonely and I amm looking for compa...",
    },
    {
      name: "Bike Wish List",
      text: "Little brother, I am lonely and I amm looking for compa...",
    },
    {
      name: "2-Feb Transaction",
      text: "200 - Ikea, 110 - Photography, 29 - WorkEx ",
    },
    {
      name: "Home renovation project",
      text: "Project timeline: 4 months",
      icon: true,
    },
  ];
  return (
    <Card>
      {/* NOTES HEADER */}

      <CallsHead heading="Notes" placeholder="Search Notes" />

      {/* " <LocationHead data={headerData} /> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 md:rounded-lg border-2 md:mx-4  border-gray-200 md:mt-10">
        <div className="">
          <p className="py-4 ps-3 text-lg font-bold border-b-2 hidden md:block">
            Recent Notes
          </p>
          <p className="py-4  ps-3 font-semibold border-b-2 md:hidden text-black/50">
            Recent Notes
          </p>
          <Link to="/notesprofile">
            <div className=" bg-gray-100 md:hidden flex py-4 border-b-2 cursor-pointer justify-between md:px-4">
              <div className="flex align-middle flex-col px-3 w-4/5">
                <h3 className="font-semibold text-xl ">
                  Mode of Transportation
                </h3>
                <p className="font-semibold text-black/50">
                  We are going to hold a rally on Satu...
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-base text-end mt-4 me-2 font-semibold ">
                  9:41 PM
                </p>
              </div>
            </div>
          </Link>
          <div className="hidden md:block ">
            <div className=" bg-gray-100 flex py-4 border-b-2 cursor-pointer justify-between md:px-4">
              <div className="flex align-middle flex-col px-3 w-4/5">
                <h3 className="font-semibold text-xl ">
                  Mode of Transportation
                </h3>

                <p className="font-semibold text-black/50 mx-1">
                  We are going to hold a rally on Saturday...
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-base text-end mt-4 me-2 font-semibold ">
                  9:41 PM
                </p>
              </div>
            </div>
          </div>
          {msgData.map((msg, index) => {
            return (
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <div className="flex py-4 border-b-2 cursor-pointer justify-between md:px-4">
                    <div className="flex align-middle flex-col px-3 w-4/5">
                      <h3 className="font-semibold text-xl ">{msg.name}</h3>

                      <div className="flex ">
                        {msg.icon === true && (
                          <span class="w-2 h-2 bg-[#007AFF] md:hidden rounded-full 1  mt-2"></span>
                        )}

                        <p className="md:hidden font-semibold mx-1 text-black/50">
                          {msg.text.slice(0, 30)}..
                        </p>
                      </div>

                      <div className="flex ">
                        {msg.icon === true && (
                          <span class="w-2 h-2 bg-[#007AFF] hidden md:block rounded-full 1  mt-2"></span>
                        )}

                        <p className="hidden md:block text-[17px] font-semibold text-black/50 mx-1">
                          {msg.text.slice(0, 50)}..
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500 text-base text-end mt-4 me-2 font-semibold ">
                        9:41 PM
                      </p>
                    </div>
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            );
          })}
        </div>
        <div className="border-l-2  hidden md:block">
          <div className="border-b-2 flex py-3 ps-3 align-middle  ">
            <div className="ml-3">
              <h3 className="font-bold text-2xl text-nowrap ">
                Mode Of Transportation
              </h3>
              <p className="text-slate-500 text-[17px] text-black/50 text-nowrap">
                Created:Yesterday 8:23 AM
              </p>
            </div>
            <div className="flex justify-end align-middle ml-44 mt-5">
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <img
                    src={man}
                    className="h-5 w-5 mr-3 cursor-pointer"
                    onClick={() => setModal(true)}
                  ></img>
                </Modal.Toggle>
                <Modal.Toggle toggleName="Update">
                  <img
                    src={delet}
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setModal(true)}
                  ></img>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </div>
          </div>
          <>
            <div className="text-center mt-4 text-slate-500 text-sm">
              Last Edit: Yesterday 8:23 AM
            </div>
            <div className="px-2 mt-3">
              <div className=" ">
                <div className="text-black     rounded-xl w-56 px-4 font-bold text-2xl text-nowrap">
                  Mode Of Transportation
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  We are going to hold a rally on Saturday.
                  <br /> Items to prepare:
                  <br />
                  lemonade dispenserPicnic table clothExtra outdoor
                  lights,elastic
                  <br /> balls and heavy toys, large refrigerators for drinks,
                  loudspeakers <br />
                  for music
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  Items to prepare
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  1.The Ulrick family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  2. The Tilmon family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  3.o'Malley
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  4. Swanson Family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  5. Lee's Family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  6. Shaw FamilyThe
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  7 Dean family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  8. The Roberts
                </div>

                <div className="text-black     rounded-xl w-56 px-4 font-bold text-xl text-nowrap"></div>
              </div>
            </div>
          </>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-semibold px-[32px]  py-[10px] text-[#101828] text-center">
              View More
              <MdKeyboardDoubleArrowDown size={18} />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </Card>
  );
}

export default Messages;
