import React, { useState } from "react";

import { MdKeyboardDoubleArrowDown, MdPhoneCallback } from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import CallsHead from "../../components/Calls/CallsHead";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoIosMailOpen } from "react-icons/io";
import { BsPersonAdd } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMicOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import Delete from "../../assests/images/delete.png";
import Instagram from "../../assests/images/SocialApps/Instagram.png";

import facebook from "../../assests/images/SocialApps/facebook.png";

import imo from "../../assests/images/SocialApps/imo.png";
import kik from "../../assests/images/SocialApps/kik.png";

import signal from "../../assests/images/SocialApps/signal.png";
import skype from "../../assests/images/SocialApps/skype.png";

import snapchat from "../../assests/images/SocialApps/snapchat.png";
import tango from "../../assests/images/SocialApps/tango.png";
import telegram from "../../assests/images/SocialApps/telegram.png";
import tinder from "../../assests/images/SocialApps/tinder.png";
import viber from "../../assests/images/SocialApps/viber.png";
import whatsapp from "../../assests/images/SocialApps/whatsapp.png";
import yt from "../../assests/images/SocialApps/yt.png";

import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const LoginAndPassword = () => {
  const LoginAndPasswordData = [
    {
      img: Instagram,
      name: "Instagram",
    },
    ,
    {
      img: snapchat,
      name: "Snapchat",
    },
    {
      img: facebook,
      name: "facebook",
    },
    {
      img: tinder,
      name: "Tinder",
    },
    ,
    {
      img: yt,
      name: "Youtube",
    },
    {
      img: telegram,
      name: "Telegram",
    },
    {
      img: skype,
      name: "Skype",
      callIcon: <HiPhoneMissedCall />,
    },
    {
      img: imo,
      name: "Imo",
      callIcon: <HiPhoneMissedCall />,
    },
    {
      img: kik,
      name: "kik",
    },
    {
      img: signal,
      name: "Signal",
    },
    {
      img: tango,
      name: "tango",
    },
    {
      img: viber,
      name: "Viber",
    },
  ];

  return (
    <div>
      <CallsHead
        heading="Login & Password"
        placeholder="Search by Name or Phone Number"
      />
      <div className="md:border border-t md:rounded-xl md:my-8  shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* first column */}
          <div className="border-r ">
            {/* head */}
            <div className="text-lg font-bold p-4">
              <p>All Recent Apps</p>
            </div>
            <hr />

            {/* body */}
            <div className="overflow-y-scroll h-96 no-scrollbar">
              <ul className="flex p-2 liborder cursor-pointer bg-gray-100">
                <li className="flex-none w-14 pt-2">
                  <img
                    className="w-10 h-10 rounded-full m-auto"
                    src={whatsapp}
                    alt
                  />
                </li>
                <li className="p-1 flex-1 w-64 font-semibold">
                  <div>
                    Whatsapp
                    <div className="font-normal">
                      <p className="ps-1">Last Login 2:12 PM </p>
                    </div>
                  </div>
                </li>
              </ul>
              {LoginAndPasswordData.map((info, i) => (
                <Modal>
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
                          <div className="font-normal">
                            <p className="ps-1">Last Login 2:12 PM </p>
                          </div>
                        </div>
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
          {/* first column for mobile */}

          {/* second column */}
          <div className="border-r hidden md:block">
            <Modal>
              {/* head */}
              <div className="text-lg font-bold p-0 md:p-2 ">
                <ul className="flex p-2 ">
                  <li className="flex-none w-20 pt-2 border-none ">
                    <img
                      className="w-20 h-20 rounded-full m-auto"
                      src={whatsapp}
                      alt="img"
                    />
                  </li>
                  <li className="p-1 flex-1 w-30 font-semibold border-none">
                    <div>
                      <p className="text-lg">WhatsApp</p>
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
                        <p className="ps-1">martin$4488</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 w-20 text-gray-400 font-semibold pt-4 border-none">
                    <div className="flex justify-end gap-4 mt-6 ">
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
                <p className="border-b text-gray-400  p-2">Login Activity</p>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <FaLocationDot />
                        </p>
                        <p className="ps-1">Los Angeles, USA</p>
                      </div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className=" gap-4 mt-2">
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
                          <FaLocationDot />
                        </p>
                        <p className="ps-1">Los Angeles, USA</p>
                      </div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className=" gap-4 mt-2">
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
                          <FaLocationDot />
                        </p>
                        <p className="ps-1">Los Angeles, USA</p>
                      </div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className=" gap-4 mt-2">
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
                          <FaLocationDot />
                        </p>
                        <p className="ps-1">Los Angeles, USA</p>
                      </div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className=" gap-4 mt-2">
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
                          <FaLocationDot />
                        </p>
                        <p className="ps-1">Los Angeles, USA</p>
                      </div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className=" gap-4 mt-2">
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
                          <FaLocationDot />
                        </p>
                        <p className="ps-1">Los Angeles, USA</p>
                      </div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className=" gap-4 mt-2">
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
                          <FaLocationDot />
                        </p>
                        <p className="ps-1">Los Angeles, USA</p>
                      </div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className=" gap-4 mt-2">
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
                      <ul class="inline-flex -space-x-px text-base h-10">
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
                        class="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                      >
                        <MdKeyboardDoubleArrowDown size={30} />
                        View More
                      </button>
                    </Modal.Toggle>
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
    </div>
  );
};

export default LoginAndPassword;
