import { Link } from "react-router-dom";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import "./PageExportBtn.css";
import Modal from "../Shared/Modal.jsx";
import Upgrade from "../Shared/Upgrade.jsx";
import Button from "../Shared/Button.jsx";

const PageExportBtn = () => {
  return (
    <Modal>
      <Modal.Toggle toggleName="export">
        <div className="my-2 flex justify-center">
          <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-semibold px-[32px]  py-[10px] text-[#101828] text-center">
            View More
            <MdKeyboardDoubleArrowDown size={18} />
          </Button>
        </div>
      </Modal.Toggle>
      <Modal.Window windowName="export">
        <Upgrade />
      </Modal.Window>
    </Modal>
  );
};

export default PageExportBtn;
