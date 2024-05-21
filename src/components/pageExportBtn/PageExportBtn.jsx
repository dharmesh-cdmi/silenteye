import  { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./PageExportBtn.css"
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";

const PageExportBtn=()=>{
  return(
    <Modal>
    <Modal.Toggle  toggleName="Update">
        <div className="notesViewMoreCon flex justify-center">
    <button className="flex justify-center">view more <MdOutlineKeyboardDoubleArrowDown /></button>
    </div>
    </Modal.Toggle>
    <Modal.Window windowName="Update">
                      <Upgrade/>
                    </Modal.Window>
    </Modal>
    )
}

export default PageExportBtn