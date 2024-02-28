import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu"
import Error from "./src/components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
// import Grocery from "./src/components/Grocery";


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

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));





const AppLayout = () => {

  const [userName , setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: "Akshay saini"
    };
    setUserName(data.name);
  },[]);

  return (

    <Provider store={appStore}>

      <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
        <div className="app">
          <Header/>
          <Outlet/>
        </div>
      </UserContext.Provider>

    </Provider>


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
        element: <Suspense fallback={<h1>loading...</h1>}><About/></Suspense>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<h1>loading...</h1>} ><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/Cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  }
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)
