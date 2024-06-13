import {
  MdKeyboardDoubleArrowDown,
  MdOutlineMailOutline,
  MdPhoneCallback,
} from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import CallsHead from "../../components/Calls/CallsHead";
import callicon from "../../assests/images/calls/call-fill.png";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoIosCall, IoIosMailOpen } from "react-icons/io";
import { BsCurrencyDollar, BsPersonAdd } from "react-icons/bs";
import { RiDeleteBin6Line, RiUserForbidLine } from "react-icons/ri";
import { IoMicOutline, IoVideocamOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { CgRemove } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import Modal from "../../components/Shared/Modal";
import Upgrade from "../../components/Shared/Upgrade";
import Delete from "../../assests/images/delete.png";
import msg from "../../assests/images/calls/Contacts/Frame.png";
import video from "../../assests/images/calls/Contacts/Frame-1.png";
import mail from "../../assests/images/calls/Contacts/Frame-2.png";
import doller from "../../assests/images/calls/Contacts/Frame-3.png";
import callpng from "../../assests/images/calls/Contacts/Vector.png";
import unblock from "../../assests/images/calls/Menu.png";
import { Link } from "react-router-dom";
import Oval7 from "../../assests/images/profile/Oval-6.png";
import dp1 from "../../assests/images/profile/dp (1).png";
import dp2 from "../../assests/images/profile/dp (2).png";
import dp3 from "../../assests/images/profile/dp (3).png";
import dp4 from "../../assests/images/profile/dp (4).png";
import dp5 from "../../assests/images/profile/dp (5).png";
import dp6 from "../../assests/images/profile/dp (6).png";
import dp7 from "../../assests/images/profile/dp (7).png";
import Oval1 from "../../assests/images/profile/Oval-1.png";
import Oval2 from "../../assests/images/profile/Oval-2.png";
import Oval3 from "../../assests/images/profile/Oval-3.png";
import Oval4 from "../../assests/images/profile/Oval-4.png";
import Oval5 from "../../assests/images/profile/Oval-5.png";
import mailicon from "../../assests/images/calls/Contacts/mail.png";
import notes from "../../assests/images/calls/Contacts/notes.png";

const BlockedContact = () => {
  const callBlockeddata = [
    {
      img: Oval7,
      name: "Arlene Dean",
      callIcon: callicon,
      callNo: "(201) 555-0124",
    },
  ];
  const callBlockeddatab = [
    {
      img: dp7,
      name: "Barrett Aschenbrenner",
      callIcon: callicon,
      callNo: "(225) 555-0118",
    },

    {
      img: dp3,
      name: "Bennet Wuebker ",
      callIcon: callicon,
      callNo: "(319) 555-0115",
    },

    {
      img: Oval1,
      name: "Bentley Simank",
      callIcon: callicon,
      callNo: "(302) 555-0180",
    },

    {
      img: Oval5,
      name: "Beth Bowers",
      callIcon: callicon,
      callNo: "(219) 555-0114",
    },
  ];
  return (
    <div>
      <CallsHead
        heading="Blocked Contacts"
        placeholder="Search by Name or Phone Number"
      />
      <Modal>
        <div className="md:border md:rounded-xl border-t  md:my-8 shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0">
            {/* first column */}
            <div className=" md:border-r ">
              {/* head */}
              <div className="text-lg font-bold md:p-4 p-2">
                <p>All Blocked Contacts</p>
              </div>
              <hr />
              {/* body */}
              <div className="overflow-y-scroll md:h-96 h-4/5 no-scrollbar">
                <p className="border-b text-gray-400  p-1">A</p>
                <div className="hidden md:block">
                  <ul className="flex p-2 liborder cursor-pointer md:bg-gray-100">
                    <li className="flex-none w-14 pt-2">
                      <img
                        className="w-10 h-10 rounded-full m-auto"
                        src={dp5}
                        alt
                      />
                    </li>
                    <li className="p-1 flex-1 w-64 font-semibold">
                      <div>
                        Allan Tran
                        <div className="text-gray-400 flex">
                          <p className="my-auto ">
                            <img src={callicon} alt="" />
                          </p>
                          <p className="ps-1">(270) 555-0117</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link to="/contacts/blockedcontactprofile">
                  <ul className="flex p-2 liborder md:hidden cursor-pointer md:bg-gray-100">
                    <li className="flex-none w-14 pt-2">
                      <img
                        className="w-10 h-10 rounded-full m-auto"
                        src={dp5}
                        alt
                      />
                    </li>
                    <li className="p-1 flex-1 w-64 font-semibold">
                      <div>
                        Allan Taran
                        <div className="text-gray-400 flex">
                          <p className="my-auto ">
                            <VscCallOutgoing />
                          </p>
                          <p className="ps-1">(308) 555-0121</p>
                        </div>
                      </div>
                    </li>
                    <li className="p-1 hidden md:block text-gray-400 font-semibold pt-4">
                      Tue, May 21, 2024 <br />
                      3:58 AM
                    </li>
                  </ul>
                </Link>
                {callBlockeddata.map((info, i) => (
                  <Modal.Toggle toggleName="Update">
                    <ul key={i} className="flex p-2 liborder cursor-pointer">
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
                              className="object-contain fill-gray-500  "
                            />

                            <p className="ps-1 font-semibold">{info.callNo}</p>
                          </div>
                        </div>
                      </li>
                      <li className="p-1 hidden md:block text-gray-400 font-semibold pt-1 text-end">
                        {info.date} <br />
                        {info.time}
                      </li>
                    </ul>
                  </Modal.Toggle>
                ))}
                <p className="border-b text-gray-400  p-1">B</p>

                {callBlockeddatab.map((info, i) => (
                  <Modal.Toggle toggleName="Update">
                    <ul key={i} className="flex p-2 liborder cursor-pointer">
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
                              className="object-contain fill-gray-500  "
                            />

                            <p className="ps-1 font-semibold">{info.callNo}</p>
                          </div>
                        </div>
                      </li>
                      <li className="p-1 hidden md:block text-gray-400 font-semibold pt-1 text-end">
                        {info.date} <br />
                        {info.time}
                      </li>
                    </ul>
                  </Modal.Toggle>
                ))}
                <div className="flex justify-center my-2">
                  <button
                    type="button"
                    class="text-gray-900 gap-2 bg-white  hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center  me-2 mb-2"
                  >
                    <MdKeyboardDoubleArrowDown size={30} />
                    View More
                  </button>
                </div>
              </div>
            </div>

            {/* second column */}
            <div className="border-t md:border-r hidden md:block">
              {/* head */}
              <div className="text-lg font-bold p-2 ">
                <ul className="flex p-2  ">
                  <li className="flex-none w-20 pt-2 border-none">
                    <img
                      className="w-20 h-20 rounded-full m-auto"
                      src={dp5}
                      alt="img"
                    />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold border-none">
                    <div>
                      <p className="text-lg">Allan Taran</p>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <VscCallOutgoing />
                        </p>
                        <p className="ps-1">(270) 555-0117</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">allantran@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-4 border-none hidden xl:block">
                    <div className="flex gap-1 mt-6">
                      <Modal.Toggle toggleName="Update">
                        <BsPersonAdd
                          className="text-slate-900 cursor-pointer "
                          size={25}
                        />
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <img
                          className=" h-6 rounded-full m-auto cursor-pointer "
                          src={Delete}
                          alt
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
              </div>
              <hr />
              {/* body */}
              <div className="overflow-y-scroll md:h-96 h-[calc(100%-8rem)] no-scrollbar">
                {/* header icons */}
                <div class="grid grid-cols-5 mx-auto p-2 gap-1 divide-x border-b overflow-x-auto">
                  <div class="flex items-center   justify-center">
                    <div class="flex gap-1 px-1 flex-col md:flex-row">
                      <Modal.Toggle toggleName="Update">
                        <img
                          className=" h-5  m-auto cursor-pointer"
                          src={msg}
                          alt
                        />
                      </Modal.Toggle>
                      <p class="font-medium hidden xl:block">Message</p>
                    </div>
                  </div>
                  <div class="flex items-center   justify-center">
                    <div class="flex gap-1 px-1 flex-col md:flex-row">
                      <Modal.Toggle toggleName="Update">
                        <img
                          className=" h-5  m-auto cursor-pointer"
                          src={callpng}
                          alt
                        />
                      </Modal.Toggle>
                      <p class="font-medium hidden xl:block">Call</p>
                    </div>
                  </div>
                  <div class="flex items-center   justify-center">
                    <div class="flex gap-1 px-1 flex-col md:flex-row">
                      <Modal.Toggle toggleName="Update">
                        <img
                          className=" h-5  m-auto cursor-pointer"
                          src={video}
                          alt
                        />
                      </Modal.Toggle>
                      <p class="font-medium hidden xl:block">Facetime</p>
                    </div>
                  </div>
                  <div class="flex items-center   justify-center">
                    <div class="flex gap-1 px-1 flex-col md:flex-row">
                      <Modal.Toggle toggleName="Update">
                        <img
                          className=" h-5  m-auto cursor-pointer"
                          src={mail}
                          alt
                        />
                      </Modal.Toggle>
                      <p class="font-medium hidden xl:block">Mail</p>
                    </div>
                  </div>
                  <div class="flex items-center   justify-center">
                    <div class="flex gap-1 px-1 flex-col md:flex-row">
                      <Modal.Toggle toggleName="Update">
                        <img
                          className=" h-5  m-auto cursor-pointer"
                          src={doller}
                          alt
                        />
                      </Modal.Toggle>
                      <p class="font-medium hidden xl:block">Pay</p>
                    </div>
                  </div>
                </div>
                {/* history */}
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Mobile</p>
                      </div>
                      <div className={` flex `}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">(270) 555-0117</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">business</p>
                      </div>
                      <div className={` flex `}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">(270) 555-0118</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2  liborder">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">home</p>
                      </div>
                      <div className={` flex `}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">(270) 478-0112</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Email</p>
                      </div>
                      <div className={` flex `}>
                        <p className="my-auto ">
                          <img className="w-4 h-4  m-auto" src={mailicon} alt />
                        </p>
                        <p className="ps-1">allantran@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Business Email</p>
                      </div>
                      <div className={` flex `}>
                        <p className="my-auto ">
                          <img className="w-4 h-4  m-auto" src={mailicon} alt />
                        </p>
                        <p className="ps-1">allantran@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                {/* <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">home</p>
                      </div>
                      <div className={` flex  mb-2`}>
                        <p className="mt-1 ">
                          <img
                            className=" h-4  m-auto "
                            src={locationicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">
                          2118 Thornridge <br /> Cir,Syracuse, <br />
                          Connecticut 35624
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={liveloca2}
                        alt=""
                        className="h-52 object-cover rounded-xl w-full mx-4"
                      />
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul> */}
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Notes</p>
                      </div>
                      <div className={` flex `}>
                        <img className="w-4 h-4 mt-1" src={notes} alt />

                        <p className="ps-1">
                          We are going to hold a rally on Saturday. <br />
                          <p className="my-1">Items to prepare:</p>
                          <br />
                          lemonade dispenserPicnic table clothExtra outdoor
                          lights,elastic balls and heavy toys, large
                          refrigerators for drinks, loudspeakers for music
                          <br />
                          <p className="my-[2px]">Invitation list:</p>
                          <br />
                          1.The Ulrick family
                          <br />
                          2. The Tilmon family
                          <br />
                          3.o'Malley
                          <br />
                          4. Swanson Family
                          <br />
                          5. Lee's Family
                          <br />
                          6. Shaw FamilyThe
                          <br />
                          7 Dean family
                          <br />
                          8. The Roberts
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
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
                      <button
                        type="button"
                        class="text-gray-900 gap-1  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center  me-2 mb-2"
                      >
                        <MdKeyboardDoubleArrowDown size={30} />
                        View More
                      </button>
                    </Modal.Toggle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default BlockedContact;
