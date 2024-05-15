import React from "react";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";

const Select = ({ label, register, options, onclick }) => {
  return (
    <div className=" w-full">
      <label className="block text-[16px] text-[#000000] opacity-[50%]">
        {label}
      </label>
      <Modal>
        <Modal.Toggle toggleName="delete-keylogger">
          <select
            onclick={onclick}
            className="w-full p-[16px]  rounded-[12px]  bg-[#8E8E9314] mt-1 cursor-pointer"
            {...register}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className=" font-medium  hidden "
              >
                {option.label}
              </option>
            ))}
          </select>
        </Modal.Toggle>
        <Modal.Window windowName="delete-keylogger">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default Select;
