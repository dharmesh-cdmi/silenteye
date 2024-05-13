import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Tes from "./Pages/tes";
import Notes from "./Pages/Notes/Notes.js"
import AllApps from "./Pages/Apps/AllApps.js"
import TotalApp from "./Pages/Apps/TotalApps.js"
import InstalledApp from "./Pages/Apps/InstalledApp.js"
import UnInstalledApp from "./Pages/Apps/UnstalledApp.js"
import BlockedApp from "./Pages/Apps/BlockedApp.js"
import "./assests/css/App.css"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Tes />,
          },    
     
      ],
    },
        {
          path: 'notes',
          element: <Notes />,
        },
         {
          path: 'apps',
          element: <AllApps />,
        },
         {
          path: 'apps/installedapp',
          element: <InstalledApp />,
        },
         {
          path: 'apps/uninstalledapp',
          element: <UnInstalledApp />,
        },
         {
          path: 'apps/blockedapp',
          element: <BlockedApp />,
        },

  ]);
  return (
    <>
    <RouterProvider router={router} />      
  </>
  );
}

export default App;
