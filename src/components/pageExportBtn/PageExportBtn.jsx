import {Link} from "react-router-dom"
import  { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./PageExportBtn.css"
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";

const PageExportBtn=()=>{
  return(

    
            <Modal>
          <Modal.Toggle toggleName="Upgrade">
   
           <div className="notesViewMoreCon flex justify-center">
    <button className="flex justify-center shadow-lg">View More <MdOutlineKeyboardDoubleArrowDown /></button>
    </div>
            
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
    )
}

export default PageExportBtn
