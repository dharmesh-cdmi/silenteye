import React from "react";
import CallsHead from "../../components/Calls/CallsHead";
import { FiEdit } from "react-icons/fi";
import { MdKeyboardDoubleArrowDown, MdPhoneCallback } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiPhoneMissedCall } from "react-icons/hi";
import { VscCallOutgoing } from "react-icons/vsc";
import callicon from "../../assests/images/calls/Frame.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "../../components/Shared/Modal";
import Upgrade from "../../components/Shared/Upgrade";
import Delete from "../../assests/images/delete.png";
import edit from "../../assests/images/calls/edit.png";
import Oval1 from "../../assests/images/profile/Oval-1.png";
import Oval2 from "../../assests/images/profile/Oval-2.png";
import Oval3 from "../../assests/images/profile/Oval-3.png";
import Oval4 from "../../assests/images/profile/Oval-4.png";
import Oval5 from "../../assests/images/profile/Oval-5.png";
import Oval6 from "../../assests/images/profile/Oval-6.png";
import Oval7 from "../../assests/images/profile/Oval-7.png";
import Oval from "../../assests/images/profile/Oval.png";
import Checkbox from "../../components/Shared/Checkbox";

const ForwardCalls = () => {
  const forwordcalldata = [
    {
      img: Oval,
      name: "Hewie Gamage",
      mobile: "(201) 555-0124",
      callIcon: <VscCallOutgoing />,
      callStatus: "outgoing",
      date: "21/05/2024",
      time: "3:58 AM",
      duration: "00:12:32",
    },
    {
      img: Oval1,
      name: "Tommi Osayande",
      mobile: "(308) 555-0192",
      callIcon: <MdPhoneCallback />,
      callStatus: "incoming",
      date: "22/05/2024",
      time: "10:15 AM",
      duration: "00:08:45",
    },
    {
      img: Oval2,
      name: "Ramona Bea",
      mobile: "(702) 555-0763",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "23/05/2024",
      time: "1:30 PM",
      duration: "00:20:18",
    },
    {
      img: Oval3,
      name: "Sara Smith",
      mobile: "(212) 555-0345",
      callIcon: <VscCallOutgoing />,
      callStatus: "outgoing",
      date: "24/05/2024",
      time: "5:45 PM",
      duration: "00:15:03",
    },
    {
      img: Oval4,
      name: "John Doe",
      mobile: "(615) 555-0887",
      callIcon: <MdPhoneCallback />,
      callStatus: "incoming",
      date: "25/05/2024",
      time: "8:20 AM",
      duration: "00:09:57",
    },
    {
      img: Oval5,
      name: "Emily Johnson",
      mobile: "(832) 555-0629",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "26/05/2024",
      time: "11:55 PM",
      duration: "00:25:40",
    },
  ];

  return (
    <div>
      <CallsHead
        heading="Forwarded Calls"
        placeholder="Search by Name or Phone Number"
      />
      <Modal>
        <div className="md:border md:rounded-xl px-4 md:mx-0 border-t md:my-8">
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="md:border-r liborder ">
              <div className="p-2">
                <div className="flex">
                  <div className="text-sm font-medium ">
                    <p>Always Forward</p>
                    <p className="text-gray-300">Off</p>
                  </div>

                  <div className="flex-1 text-end mt-2">
                    <Checkbox />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:border-r liborder ">
              <div className="text-sm font-medium p-2">
                <p>When Busy</p>
                <p className="text-gray-300">Forward to +91 98989 98989</p>
              </div>
            </div>
            <div className="md:border-r liborder ">
              <div className="text-sm font-medium p-2">
                <p>When unanswered</p>
                <p className="text-gray-300">Forward to +91 98989 98989</p>
              </div>
            </div>
            <div className="">
              <div className="text-sm font-medium p-2">
                <p>When unreachable</p>
                <p className="text-gray-300">Forward to +91 98989 98989</p>
              </div>
            </div>
            <div className="mx-2 ">
              <Modal.Toggle toggleName="Update">
                {/* <button
                  type="button"
                  class="text-gray-900 gap-2 mt-2 w-full md:w-24  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm  md:pl-[1rem] py-1 text-center inline-flex items-center  me-2 mb-2"
                >
                  <FiEdit size={30} />
                  Edit
                </button> */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    class="inline-flex justify-center  text-gray-900 h-full  md:border-0 border bg-white md:border-l  w-full hover:bg-gray-100   font-medium rounded-xl text-sm px-16 py-3 md:py-5 text-center  items-center  me-2 mb-2"
                  >
                    <img className=" h-5 mx-2 cursor-pointer" src={edit} alt />
                    Edit
                  </button>
                </div>
              </Modal.Toggle>
            </div>
          </div>
        </div>

        <div className=" overflow-x-auto shadow-md rounded-lg border ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 whitespace-nowrap">
            <thead className="text-xs text-gray-700 uppercase border-b ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {forwordcalldata.map((calldata, i) => (
                <tr className=" border-b font-medium " key={i}>
                  <td className="px-6 pt-4">
                    <div className="flex ">
                      <div class="flex-none w-14 h-14 ">
                        <img
                          className="w-10 h-10 rounded-full m-auto"
                          src={calldata.img}
                          alt
                        />
                      </div>
                      <div class="mt-3   ">{calldata.name}</div>
                    </div>
                  </td>
                  <td className="px-6 pt-4">
                    <div className="flex">
                      <img
                        className="w-4 h-4 m-1 rounded-full "
                        src={callicon}
                        alt
                      />
                      {calldata.mobile}
                    </div>
                  </td>
                  <td className="px-6 pt-4">
                    <div
                      className={`${
                        calldata.callStatus == "outgoing" && "text-gray-400"
                      } ${calldata.callStatus == "missed" && "text-red-600"} ${
                        calldata.callStatus == "incoming" && "text-green-600"
                      } flex `}
                    >
                      <p className="my-auto ">{calldata.callIcon}</p>
                      <p className="ps-1">{calldata.callStatus}</p>
                    </div>
                  </td>
                  <td className="px-6 pt-4">
                    {calldata.date}
                    <br />
                    {calldata.time}
                  </td>
                  <td className="px-6 pt-4">{calldata.duration}</td>
                  <td className="px-6 pt-4">
                    <Modal.Toggle toggleName="Update">
                      <div>
                        <img className="h-6 cursor-pointer" src={Delete} alt />
                      </div>
                    </Modal.Toggle>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav
            className="flex items-center pb-2 px-2 flex-column flex-wrap md:flex-row justify-between pt-4  "
            aria-label="Table navigation"
          >
            <div aria-label="Page navigation example ">
              <div className="hidden md:block">
                <ul class="inline-flex -space-x-px text-base h-10 ">
                  <li className="border-none">
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                    >
                      <FaArrowLeft />
                    </a>
                  </li>
                  <li className="border-none">
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                    >
                      1
                    </a>
                  </li>
                  <li className="border-none">
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                    >
                      ...
                    </a>
                  </li>
                  <li className="border-none">
                    <a
                      href="#"
                      aria-current="page"
                      class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                    >
                      10
                    </a>
                  </li>

                  <li className="border-none">
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                    >
                      <FaArrowRight />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Modal.Toggle toggleName="Update">
              <button
                type="button"
                class="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center  me-2 mb-2"
              >
                <MdKeyboardDoubleArrowDown size={30} />
                View More
              </button>
            </Modal.Toggle>
          </nav>
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default ForwardCalls;
