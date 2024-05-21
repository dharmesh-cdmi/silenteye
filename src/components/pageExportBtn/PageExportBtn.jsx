import {Link} from "react-router-dom"
import  { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./PageExportBtn.css"
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";

const PageExportBtn=()=>{
  return(

    
            <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
   
           <div className="notesViewMoreCon flex justify-center shadow-[0px_0px_56px_0px_#00000014] ">
    <button className="flex justify-center">View More <MdOutlineKeyboardDoubleArrowDown /></button>
    </div>
            
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
    )
}

export default PageExportBtn
