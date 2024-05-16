import React from "react";
import Switch from "../../../../UI/Switch";

function Tabs() {
  return (
    <div className="lg:mx-10 mx-5 mt-10">
      <section className="grid lg:grid-cols-4 grid-cols-1 border-2 border-gray-50 rounded-xl ">
        <div className="py-3 px-2 border">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <img className="h-8 w-8"></img>
                <h3 className="font-semibold text-lg">Verizon</h3>
              </div>
              <div className="flex">
                <img className="w-3 h-3"></img>
                <p className="text-gray-400 text-sm">+91 98989898</p>
              </div>
            </div>
            <div className="mt-1">
              <Switch />
              <p className=" text-slate-500 text-xs">Blocked</p>
            </div>
          </div>
        </div>
        <div className="py-3 px-2 border">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <img className="h-8 w-8"></img>
                <h3 className="font-semibold text-lg">T-Mobile</h3>
              </div>
              <div className="flex">
                <img className="w-3 h-3"></img>
                <p className="text-gray-400 text-sm">+91 98989898</p>
              </div>
            </div>
            <div className="mt-1">
              <Switch />
              <p className=" text-slate-500 text-xs">Blocked</p>
            </div>
          </div>
        </div>
        <div className="py-2 border px-2">
          <div className="flex justify-start flex-col">
            <p className="text-gray-500 text-sm">Default for Calls</p>
            <div className="grid grid-cols-3 bg-gray-300 h-10 rounded-lg cursor-pointer">
              <div className="bg-green-600 rounded-lg m-1">
                <img></img>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 border ">
          <div className="flex justify-start flex-col">
            <p className="text-gray-500 text-sm">Default for Internet Data</p>
            <div className="grid grid-cols-2 bg-gray-300 h-10 rounded-lg cursor-pointer">
              <div className="bg-green-600 rounded-lg m-1">
                <img></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tabs;
