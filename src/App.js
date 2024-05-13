import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Tes from "./Pages/tes";
import Notes from "./Pages/Notes/Notes.js"
import "./assests/css/App.css"
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
          element: <SavedPassword/>,
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
