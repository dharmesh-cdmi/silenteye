import React from "react";
import { useForm } from "react-hook-form";
import Select from "../../../src/components/Shared/Select";
import Check from "../Shared/Check";
import Button from "../Shared/Button";
import exporticon from "../../../src/assests/images/Export/export.png";
import Modal from "../../../src/components/Shared/Modal";
import Upgrade from "../../../src/components/Shared/Upgrade";

const ModuleOptions = [{ label: "Call Logs", value: "CallLogs" }];

const ItemsOptions = [{ label: "1-1000", value: "1-1000" }];

const CSVOptions = [{ label: "CSV", value: "CSV" }];

const ExportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //Form data here for integration
  };

  const module = () => {};
  const item = () => {};
  const format = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Select
          label="Module"
          options={ModuleOptions}
          register={register("module")}
          onclick={module}
        />
      </div>
      <div className="mb-4">
        <Select
          label="Items"
          options={ItemsOptions}
          register={register("Items")}
          onclick={item}
        />
      </div>
      <div className="mb-4">
        <Select
          label="Format"
          options={CSVOptions}
          register={register("Format")}
          onclick={format}
        />
      </div>
      <Check label="Delete Exported Data from Dashboard" />
      <div className="lower flex flex-col">
        <span className="text-[16px] text-[#000000] font-medium opacity-[50%]">
          Notes:
        </span>
        <span className="text-[16px] text-[#000000] font-medium opacity-[50%]">
          1.Media files can be directly download in each feature.
        </span>
        <span className="text-[16px] text-[#000000] font-medium opacity-[50%]">
          2.Only 1000 records can be exported at a time.
        </span>
      </div>
      <Modal>
        <Modal.Toggle toggleName="exportData">
          <Button
            type="submit"
            className="bg-[#172A6E] w-full mt-5 p-[16px] text-[#ffffff] text-[20px] rounded-[8px] "
          >
            <img src={exporticon} alt="exporticon" className="pe-3" />
            Export Data
          </Button>
        </Modal.Toggle>
        <Modal.Window windowName="exportData">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </form>
  );
};

export default ExportForm;
