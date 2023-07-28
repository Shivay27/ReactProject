
import React, { Suspense, lazy } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";

import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";


//lazy loading
const FoodStuffs = lazy(()=> import("./components/FoodStuffs"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (<div name="app">
        <Header/>
        <Outlet />
    </div>
    );         
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout />,
        children : [
            {
                path:"/",
            element: <Body />,
            },
            {
            path:"/about",
            element: <Suspense fallback={<h2>LOADING ABOUT US .......</h2>}><About /></Suspense>,
        },
        {
            path:"/contact",
            element : <Contact />,
        },
        {
            path:"/Grocery",
            element : <Suspense fallback={<h1>LOADING...</h1>} ><FoodStuffs /></Suspense>,
        },
        {
            path: "/restaurants/:resId",
            element : <RestaurantMenu />
        },
],
        errorElement : <Error />,
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
