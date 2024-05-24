import { MdKeyboardDoubleArrowDown, MdPhoneCallback } from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import CallsHead from "../../components/Calls/CallsHead";
import callicon from "../../assests/images/calls/Frame.png";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoIosMailOpen } from "react-icons/io";
import { BsPersonAdd } from "react-icons/bs";
import { RiDeleteBin6Line, RiUserForbidLine } from "react-icons/ri";
import { IoMicOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import Delete from "../../assests/images/delete.png";

const BlockedCalls = () => {
  const callBlockeddata = [
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Sara Smith",
      callIcon: callicon,
      callNo: "(415) 555-0192",
      date: "Wed, May 22, 2024",
      time: "10:15 AM",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "John Doe",
      callIcon: callicon,
      callNo: "(702) 555-0763",
      date: "Thu, May 23, 2024",
      time: "1:30 PM",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Emily Johnson",
      callIcon: callicon,
      callNo: "(212) 555-0345",
      date: "Fri, May 24, 2024",
      time: "5:45 PM",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Michael Brown",
      callIcon: callicon,
      callNo: "(615) 555-0887",
      date: "Sat, May 25, 2024",
      time: "8:20 AM",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Sophia Martinez",
      callIcon: callicon,
      callNo: "(832) 555-0629",
      date: "Sun, May 26, 2024",
      time: "11:55 PM",
    },
  ];
  return (
    <div>
      <CallsHead
        heading="Blocked Calls"
        placeholder="Search by Name or Phone Number"
      />
      <div className="md:border md:rounded-xl md:my-8 my-2 border-t shadow ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* first column */}
          <div className="border-r hidden md:block">
            {/* head */}
            <div className="text-lg font-bold p-4">
              <p>Recent Blocked Calls</p>
            </div>
            <hr />
            {/* body */}
            <div className="overflow-y-scroll h-96 no-scrollbar">
              <ul className="flex p-2 liborder cursor-pointer bg-gray-100">
                <li className="flex-none w-14 pt-2">
                  <img
                    className="w-10 h-10 rounded-full m-auto"
                    src={"https://xsgames.co/randomusers/avatar.php?g=male"}
                    alt
                  />
                </li>
                <li className="p-1 flex-1 w-64 font-semibold">
                  <div>
                    "Hewie Gamage"
                    <div className="text-gray-400 flex">
                      <p className="my-auto ">
                        <img className="h-4 " src={callicon} alt />
                      </p>
                      <p className="ps-1">(308) 555-0121</p>
                    </div>
                  </div>
                </li>
                <li className="p-1 text-gray-400 font-semibold pt-4">
                  21/05/2024 <br />
                  3:58 AM
                </li>
              </ul>
              {callBlockeddata.map((info, i) => (
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <ul key={i} className="flex p-2 liborder">
                      <li className="flex-none w-14 pt-2">
                        <img
                          className="w-10 h-10 rounded-full m-auto"
                          src={info.img}
                          alt
                        />
                      </li>
                      <li className="p-1 flex-1 w-64 font-semibold">
                        <div>
                          {info.name}
                          <div className={`text-gray-500 flex font-normal`}>
                            <img
                              src={info.callIcon}
                              alt="img"
                              className="object-contain text-gray-500 "
                            />

                            <p className="ps-1 font-semibold">{info.callNo}</p>
                          </div>
                        </div>
                      </li>
                      <li className="p-1 text-gray-400 font-semibold pt-1 text-end">
                        {info.date} <br />
                        {info.time}
                      </li>
                    </ul>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Upgrade />
                  </Modal.Window>
                </Modal>
              ))}
            </div>
          </div>

          {/* second column */}
          <Modal>
            <div className="border-r ">
              {/* head */}
              <div className="text-lg font-bold p-2 ">
                <ul className="flex p-2  ">
                  <li className="flex-none w-20 pt-2 border-none">
                    <img
                      className="w-20 h-20 rounded-full m-auto"
                      src="https://xsgames.co/randomusers/avatar.php?g=male"
                      alt="img"
                    />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold border-none">
                    <div>
                      <p className="text-lg">Hewie Gamage</p>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <VscCallOutgoing />
                        </p>
                        <p className="ps-1">(308) 555-0121</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1 text-sm md:text-base">
                          hewiegamage@gmail.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-4 border-none md:block hidden">
                    <div className="flex gap-2 mt-6">
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <button
                            type="button"
                            class="text-white gap-2 bg-red-500  border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                          >
                            <RiUserForbidLine />
                            Unblock
                          </button>
                        </div>
                      </Modal.Toggle>

                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
              </div>
              <hr />
              {/* body */}
              <div className="overflow-y-scroll h-96 no-scrollbar">
                <p className="border-b text-gray-400  p-2">
                  All Blocked Calls History
                </p>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2  liborder">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2  liborder">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <div className="flex p-2 justify-between">
                  <div aria-label="Page navigation example">
                    <div className="hidden md:block">
                      <ul class="inline-flex -space-x-px text-base h-10 ">
                        <li>
                          <a
                            href="#"
                            class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                          >
                            <FaArrowLeft />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                          >
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                          >
                            ...
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            aria-current="page"
                            class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                          >
                            10
                          </a>
                        </li>

                        <li>
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

                  <div className="m-auto md:m-0">
                    <Modal.Toggle toggleName="Update">
                      <div className="hidden md:block">
                        <button
                          type="button"
                          class="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                        >
                          <MdKeyboardDoubleArrowDown size={30} />
                          View More
                        </button>
                      </div>
                    </Modal.Toggle>
                  </div>
                </div>
              </div>
            </div>
            <Modal.Window windowName="Update">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BlockedCalls;
