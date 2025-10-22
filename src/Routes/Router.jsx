import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOuts/HomeLayOut";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Login from "../Components/LogIn/Login";
import Register from "../Components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
        {
            index:true,
            element: <Home></Home>,
            loader:()=>fetch('/serviceData.json')
        },
        {
            path:'footer',
            element:<Footer></Footer>

        },
        {
            path:'service',
            element:<Services></Services>

        },{
            path:'/service-details/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader:()=>fetch('/serviceData.json')
        },
        {
            path:'profile',
            element:<Profile></Profile>

        },
        {
            path:'login',
            element:<Login></Login>

        },
        {
            path:'register',
            element:<Register></Register>

        },
    ]
  },
]);