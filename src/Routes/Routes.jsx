import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/services/Services";
import About from "../pages/about/About";
import Contactus from "../pages/Contact/Contactus";
import CardDetails from "../pages/CardDetails/CardDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Privateroute from "../privateroute/privateroute";
import Errorpage from "../pages/Errorpage/Errorpage";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>
            },{
                path:'/contactus',
                element:<Contactus></Contactus>
            },
            {
                path:'/carddetails/:id',
                element:<Privateroute><CardDetails></CardDetails></Privateroute>,
                loader:()=>fetch('/carddata.json')
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);
export default routes;