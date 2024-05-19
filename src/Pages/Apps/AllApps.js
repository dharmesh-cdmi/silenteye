import {useState} from "react"
import { Link } from 'react-router-dom';
import "./AllApps.css"
import { useMoveBack } from "../../hooks/useMoveBack.js";


// FILES
import TotalApps from "./TotalApps.js"
// import ExportBtn from "../../components/pageExportBtn/PageExportBtn.jsx"

const AllApps=()=>{
  return(
  <TotalApps />
    )
}

export default AllApps
