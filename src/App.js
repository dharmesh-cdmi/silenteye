import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Tes from "./Pages/tes";
import "./assests/css/App.css";
import KeyLogger from "./Pages/KeyLogger";
import { SavedPassword } from "./Pages/SavedPassword";
import SocialApps from "./Pages/SocialApps";
import AllAllert from "./Pages/AllAllert";
import NotificationSettings from "./Pages/NotificationSettings";
import InstantAlerts from "./Pages/InstantAlerts";

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
          element: <AllAllert/>,
        },
      ],
    },

    {
      path: "/NotificationSettings",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <NotificationSettings/>,
        },
      ],
    },
    
    {
      path: "/InstantAlerts",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <InstantAlerts/>,
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
