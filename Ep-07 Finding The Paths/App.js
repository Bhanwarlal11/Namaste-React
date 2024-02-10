import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

/*
*Header - logo
        - Nav Items
*Body - Search
      - Restaurant container
      -    Restaurant card
          -img
          -Name of RES, Star Rating , Cuisines , delivery Time
*Footer - CopyRight
        - Links
        - Address
        - Contact
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      }, 
      {
        path:"/About",
        element: <About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      }
    ],
    errorElement: <Error/>
  }
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)
