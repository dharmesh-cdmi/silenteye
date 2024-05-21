import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import Notes from "./Pages/Notes/Notes.js";
import "./assests/css/App.css";
import Dashboard from "./Pages/Dashboard";
import KeyLogger from "./Pages/KeyLogger";
import { SavedPassword } from "./Pages/SavedPassword";
import DeviceControl from "./Pages/DeviceControl.jsx";

import AllApps from "./Pages/Apps/AllApps.js";
import TotalApp from "./Pages/Apps/TotalApps.js";
import InstalledApp from "./Pages/Apps/InstalledApp.js";
import UnInstalledApp from "./Pages/Apps/UnstalledApp.js";
import BlockedApp from "./Pages/Apps/BlockedApp.js";
import "./assests/css/App.css";

import Location from "./Pages/Location/Location.js";
import LocationHistory from "./Pages/Location/LocationHistory.js";
import GeoFence from "./Pages/Location/geoFence.js";

import Export from "./Pages/Export/Export.js";

import BrowseHistory from "./Pages/Browser/BrowserHistory.js";
import BrowseDataUsage from "./Pages/Browser/BrowseDataUsage.js";
import WebFilter from "./Pages/Browser/WebFilter.js";
import ScreenTime from "./Pages/Browser/ScreenTime.js";

import MessagesMain from "./components/messages/MessagesMain";
import MobileMain from "./components/network/mobile/MobileMain";
import WifiMain from "./components/network/wifi/WifiMain";
import DataMain from "./components/network/data-usage/DataMain";
import MediaMain from "./components/media/photos/photosMain";
import CameraMain from "./components/camera/CameraMain";
import VideosMain from "./components/media/videos/VideosMain";
import AlbumMain from "./components/media/albums/AlbumMain";
import CalenderMain from "./components/calender/CalenderMain";
import ScreenShotsMain from "./components/media/screenshots/ScreenShotsMain";

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
        { path: "messages", element: <MessagesMain /> },
        { path: "network/mobile-network", element: <MobileMain /> },
        { path: "network/wifi-network", element: <WifiMain /> },
        { path: "network/data-usage", element: <DataMain /> },
        { path: "camera", element: <CameraMain /> },
        { path: "media/photos", element: <MediaMain /> },
        { path: "media/videos", element: <VideosMain /> },
        { path: "media/screenshots", element: <ScreenShotsMain /> },
        { path: "media/albums", element: <AlbumMain /> },
        { path: "calender", element: <CalenderMain /> },
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
      path: "/notes",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Notes />,
        },
      ],
    },
    {
      path: "/apps/allapps",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <AllApps />,
        },
      ],
    },
    {
      path: "/apps/installedapp",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <InstalledApp />,
        },
      ],
    },
    {
      path: "/apps/uninstalledapp",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <UnInstalledApp />,
        },
      ],
    },
    {
      path: "/apps/blockedapp",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <BlockedApp />,
        },
      ],
    },
    {
      path: "/location",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Location />,
        },
      ],
    },
    {
      path: "/location/livelocation",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Location />,
        },
      ],
    },
    {
      path: "/location/locationhistory",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LocationHistory />,
        },
      ],
    },
    {
      path: "/location/geofrence",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <GeoFence />,
        },
      ],
    },
    {
      path: "/export",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Export />,
        },
      ],
    },
    {
      path: "/browser/browseHistory",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <BrowseHistory />,
        },
      ],
    },
    {
      path: "/browser/datausage",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <BrowseDataUsage />,
        },
      ],
    },
    {
      path: "/browser/webfilter",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <WebFilter />,
        },
      ],
    },
    {
      path: "/browser/screentime",
      element: <RootLayout />,
      children: [
        {
          index: true,
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
