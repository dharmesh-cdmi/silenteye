import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import "./assests/css/App.css"
import Dashboard from "./Pages/Dashboard";


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
