import "./AppsRoutesHeader.css"
import {Link} from "react-router-dom"

const appsRoutesHeader=()=>{
  return(
  <div className="appsRoutesHeader flex justify-center">
  
 <Link to={"/apps"}>
  <div className="appsRoutesCons fi-appBox">
    <>
      <div className="appsRoutesCon flex flex-col justify-center">
        <h3>All Apps</h3>
        <p>134 Apps</p>
      </div>
    </>
  </div>
</Link>

  
  <Link to={"/apps/installedapp"}>
  <div className="appsRoutesCons">
  <>
  <div className="appsRoutesCon flex flex-col justify-center">
   <h3>Installed Apps</h3>
   <p>120 Apps</p>
  </div>
  </>
  </div>
  </Link>
  <Link to={"/apps/uninstalledapp"}>
  <div className="appsRoutesCons">
  <div className="appsRoutesCon flex flex-col justify-center">
   <h3>Uninstalled</h3>
   <p>14 Apps</p>
  </div>
  </div>
  </Link>
  <Link to={"/apps/blockedapp"}>
  <div className="appsRoutesCons lastAppsbox">
  <div className="appsRoutesCon flex flex-col justify-center">
   <h3>Blocked Apps</h3>
   <p>2 Apps</p>
  </div>
  </div>
  </Link>
  
  </div>
    )
}

export default appsRoutesHeader