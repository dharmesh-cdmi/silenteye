import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import Notes from "./Pages/Notes/Notes.js"
import "./assests/css/App.css"
import Dashboard from "./Pages/Dashboard";
import KeyLogger from "./Pages/KeyLogger";
import { SavedPassword } from "./Pages/SavedPassword";
import DeviceControl from "./Pages/DeviceControl.jsx";
import Callhistory from "./Pages/Calls/Callhistory.jsx";
import BlockedCalls from "./Pages/Calls/BlockedCalls.jsx";
import FaceTime from "./Pages/Calls/FaceTime.jsx";
import ForwardCalls from "./Pages/Calls/ForwardCalls.jsx";
import ContactList from "./Pages/Contacts/ContactList.jsx";
import BlockedContact from "./Pages/Contacts/BlockedContact.jsx";


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
                    {
                      path: "/contacts/contactslist",
                      element: <ContactList />,
                      }, 
                      {
                        path: "/contacts/blockedcontacts",
                        element: <BlockedContact />,
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
    }
  ]);
  return (
    <>
    <RouterProvider router={router} /> 
  </>
  );
}

export default App;
