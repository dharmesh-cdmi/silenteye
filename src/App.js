import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Tes from "./Pages/tes";
import "./assests/css/App.css"
import KeyLogger from "./Pages/KeyLogger";
import { SavedPassword } from "./Pages/SavedPassword";
import Notes from "./Pages/Notes/Notes.js"
import AllApps from "./Pages/Apps/AllApps.js"
import TotalApp from "./Pages/Apps/TotalApps.js"
import InstalledApp from "./Pages/Apps/InstalledApp.js"
import UnInstalledApp from "./Pages/Apps/UnstalledApp.js"
import BlockedApp from "./Pages/Apps/BlockedApp.js"

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
      path: "/SavedPassword",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <SavedPassword/>,
        },
      ],
    },
    {
      path: "/KeyLogger",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <KeyLogger/>,
        },
      ],
    },
    {
      path: "/notes",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Notes/>,
        },
      ],
    },
    {
      path: "/apps",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <AllApps/>,
        },
      ],
    },
    {
      path: "/apps/installedapp",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <InstalledApp/>,
        },
      ],
    },
    {
      path: "/apps/uninstalledapp",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <UnInstalledApp/>,
        },
      ],
    },
    {
      path: "/apps/blockedapp",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <BlockedApp/>,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} /> 
  );
}

export default App;
