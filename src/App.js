import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Notes from "./Pages/Notes/Notes.js";
import "./assests/css/App.css";
import Dashboard from "./Pages/Dashboard";
import KeyLogger from "./Pages/KeyLogger";
import { SavedPassword } from "./Pages/SavedPassword";
import SocialApps from "./Pages/SocialApps";
import AllAllert from "./Pages/AllAllert";
import NotificationSetting from "./Pages/NotificationSetting";
import InstantAlert from "./Pages/InstantAlert.jsx";
import AppPermission from "./Pages/AppPermission";
import PermisionManager from "./Pages/PermisionManager";
import Export from "./Pages/Export.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/SavedPassword",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <SavedPassword />,
        },
      ],
    },

    {
      path: "/KeyLogger",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <KeyLogger />,
        },
      ],
    },

    {
      path: "/SocialApps",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <SocialApps />,
        },
      ],
    },
    {
      path: "/AllAllerts",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <AllAllert />,
        },
      ],
    },

    {
      path: "/NotificationSettings",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <NotificationSetting />,
        },
      ],
    },
    {
      path: "/InstantAlerts",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <InstantAlert />,
        },
      ],
    },
    {
      path: "/AppPermisions",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <AppPermission />,
        },
      ],
    },

    {
      path: "/PermisionManager",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <PermisionManager />,
        },
      ],
    },
    {
      path: "/PermisionManager",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <PermisionManager />,
        },
      ],
    },
    {
      path: "/Export",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Export/>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
