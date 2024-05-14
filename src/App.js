import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import Notes from "./Pages/Notes/Notes.js"
import "./assests/css/App.css";
import Dashboard from "./Pages/Dashboard";
import KeyLogger from "./Pages/KeyLogger";
import { SavedPassword } from "./Pages/SavedPassword";


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
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
