import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Notes from "./Pages/Notes/Notes.js";
import "./assests/css/App.css";
import Dashboard from "./Pages/Dashboard";
import DeviceControl from "./Pages/DeviceControl";
import KeyLogger from "./Pages/KeyLogger";
import { SavedPassword } from "./Pages/SavedPassword";
import SocialApps from "./Pages/SocialApps";
import AllAllert from "./Pages/AllAllert";
import NotificationSetting from "./Pages/NotificationSetting";
import InstantAlert from "./Pages/InstantAlert.jsx";
import AppPermission from "./Pages/AppPermission";
import PermisionManager from "./Pages/PermisionManager";
import Export from "./Pages/Export.jsx";
import Payment from "./Pages/Payment.jsx";
import Callhistory from "./Pages/Calls/Callhistory.jsx";
import BlockedCalls from "./Pages/Calls/BlockedCalls.jsx";
import FaceTime from "./Pages/Calls/FaceTime.jsx";
import ForwardCalls from "./Pages/Calls/ForwardCalls.jsx";
import ContactList from "./Pages/Contacts/ContactList.jsx";
import BlockedContact from "./Pages/Contacts/BlockedContact.jsx";
import InstalledApp from "./Pages/Apps/InstalledApp.js";
import UnInstalledApp from "./Pages/Apps/UnstalledApp.js";
import BlockedApp from "./Pages/Apps/BlockedApp.js";
import Location from "./Pages/Location/Location.js";
import GeoFence from "./Pages/Location/geoFence.js";
import LocationHistory from "./Pages/Location/LocationHistory.js";

import AllApps from "./Pages/Apps/AllApps.js";
import TotalApp from "./Pages/Apps/TotalApps.js";
import BrowseHistory from "./Pages/Browser/BrowserHistory.js";
import BrowseDataUsage from "./Pages/Browser/BrowseDataUsage.js";
import WebFilter from "./Pages/Browser/WebFilter.js";
import ScreenTime from "./Pages/Browser/ScreenTime.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/devicecontrol",
          element: <DeviceControl />,
        },
        // call Routes
        {
          path: "/calls/callhistory",
          element: <Callhistory />,
        },
        {
          path: "/calls/blockedcalls",
          element: <BlockedCalls />,
        },
        {
          path: "/calls/facetime",
          element: <FaceTime />,
        },
        {
          path: "/calls/forwardedcalls",
          element: <ForwardCalls />,
        },
        // Contacts Routes

        {
          path: "/contacts/contactslist",
          element: <ContactList />,
        },
        {
          path: "/contacts/blockedcontacts",
          element: <BlockedContact />,
        },

        {
          path: "/Privacy&Security/SavedPassword",
          element: <SavedPassword />,
        },

        {
          path: "/KeyLogger",
          element: <KeyLogger />,
        },
        {
          path: "/SocialApps",
          element: <SocialApps />,
        },
        {
          path: "/Alert&Notification/AllAllerts",
          element: <AllAllert />,
        },
        {
          path: "/Alert&Notification/NotificationSettings",
          element: <NotificationSetting />,
        },
        {
          path: "/Alert&Notification/InstantAlerts",
          element: <InstantAlert />,
        },
        {
          path: "/Privacy&Security/AppPermisions",
          element: <AppPermission />,
        },
        {
          path: "/PermisionManager",
          element: <PermisionManager />,
        },
        {
          path: "/Export",
          element: <Export />,
        },
        {
          path: "/Privacy&Security/Payment",
          element: <Payment />,
        },
        {
          path: "/apps/installedapp",
          element: <InstalledApp />,
        },
        {
          path: "/apps/uninstalledapp",
          element: <UnInstalledApp />,
        },
        {
          path: "/apps/blockedapp",
          element: <BlockedApp />,
        },
        {
          path: "/location",
          element: <Location />,
        },
        {
          path: "/location/livelocation",
          element: <Location />,
        },
        {
          path: "/location/locationhistory",
          element: <LocationHistory />,
        },
        {
          path: "/location/geofrence",
          element: <GeoFence />,
        },
        {
          path: "/notes",
          element: <Notes />,
        },

        {
          path: "/apps/allapps",
          element: <AllApps />,
        },
        {
          path: "/browser/browseHistory",
          element: <BrowseHistory />,
        },
        {
          path: "/browser/datausage",
          element: <BrowseDataUsage />,
        },
        {
          path: "/browser/webfilter",
          element: <WebFilter />,
        },
        {
          path: "/browser/screentime",
          element: <ScreenTime />,
        },
        {
          path: "/SavedPassword",
          element: <ScreenTime />,
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
