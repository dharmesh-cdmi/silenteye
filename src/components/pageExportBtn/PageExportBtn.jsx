import {Link} from "react-router-dom"
import  { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./PageExportBtn.css"
import Modal from "../Shared/Modal.jsx";
import Upgrade from "../Shared/Upgrade.jsx";

const PageExportBtn=()=>{
  return(
            <Modal>
          <Modal.Toggle toggleName="export">
   
           <div className="notesViewMoreCon flex justify-center">
    <button className="flex justify-center shadow-lg">View More <MdOutlineKeyboardDoubleArrowDown /></button>
    </div>
            
         </Modal.Toggle>
          <Modal.Window windowName="Upgrade">
            <Upgrade />
          </Modal.Window>
          </Modal>
    )
}

export default PageExportBtn
