import React from "react";
import { Table } from "../Shared/Table";
import { Accordion } from "../Shared/Accordian";
import copy from "../../assests/images/copy.png";
const SavedPasswords = ({ SavedPassword }) => {
  const { id, icon, heading, identity, password } = SavedPassword;

  return (
    <Table.Row>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            <div className="flex flex-row">
              <img src={icon} className="h-auto  max-w-[100%]" />
              <span className="ms-2 text-[#000000] font-[600] text-[20px]">
                {heading}
              </span>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <span className="font-[500] text-[18px] text-[#000000] opacity-[50%]">
                  ID
                </span>
                <span className="font-[500] text-[18px] text-[#000000] opacity-[50%]">
                  Password
                </span>
              </div>
              <div className="flex flex-col ms-2">
                <span className="font-[500] text-[18px] text-[#000000]">
                  {identity}
                </span>
                <span className="font-[500] flex flex-row text-[18px] text-[#000000]">
                  {password}{" "}
                  <img
                    src={copy}
                    className="ms-2 h-auto  max-w-[100%]"
                    alt="copy"
                  />
                </span>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Table.Row>
  );
};

export default SavedPasswords;
