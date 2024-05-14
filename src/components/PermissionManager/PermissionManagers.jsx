import React from "react";
import Checkbox from "../Shared/Checkbox";
import { Table } from "../../components/Shared/Table";

const PermissionManagers = ({ PermisionManager }) => {
  const { id, icon, heading, paragragh } = PermisionManager;

  return (
    <Table.Row >
      <div className="flex flex-row justify-between p-[16px]">
        <div className="flex flex-row items-center">
          <img src={icon} alt="camera" className="h-auto max-w-[100%]" />
          <div className="flex flex-col ms-3">
            <h1 className=" text-[20px] text-[#000000]  font-[600]">
              {heading}
            </h1>
            <span className="text-[14px] opacity-[50%] text-[#000000] font-medium">
              {paragragh}
            </span>
          </div>
        </div>
        <Checkbox />
      </div>
    </Table.Row>
  );
};

export default PermissionManagers;
