import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Tes from "./Pages/tes";
import Notes from "./Pages/Notes/Notes.js"
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
     {
       path: 'notes',
       element: <Notes />,
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
