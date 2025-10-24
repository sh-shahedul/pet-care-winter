import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOuts/HomeLayOut";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Login from "../Components/LogIn/Login";
import Register from "../Components/Register/Register";
import PrivateRouter from "../Provider/PrivateRouter";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
import ForgotPassword from "../Components/ResetPassword/ForgotPassword";
import NotFound from "../Components/Error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    errorElement:<Error></Error>,
    hydrateFallbackElement:<Loading></Loading>,
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
            element:<PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
            errorElement:<NotFound></NotFound>,
            loader:()=>fetch('/serviceData.json')
        },
        {
            path:'profile',
            element:<PrivateRouter><Profile></Profile></PrivateRouter>

        },
        {
            path:'login',
            element:<Login></Login>

        },
        {
            path:'register',
            element:<Register></Register>

        },
        {
           path:'forgotpass',
           element:<ForgotPassword></ForgotPassword>
        }
    ]
  },
]);