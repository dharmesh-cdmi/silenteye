import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
function RootLayout() {
  return (
    <div className="flex gap-0">
      <Sidebar />   
      
      
      <main className="fullfill">
      <Navbar/>  
      <div className="max-w-5xl flex-1 mx-auto py-4">
      <Outlet />
      </div>
        
        </main>
    </div>
  );
}

export default RootLayout;
