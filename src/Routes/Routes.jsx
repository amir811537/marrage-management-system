import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/services/Services";
import About from "../pages/about/About";
import Contactus from "../pages/Contact/Contactus";
import CardDetails from "../pages/CardDetails/CardDetails";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:'/services',
                element:<Services></Services>
            },{
                path:'/about',
                element:<About></About>
            },{
                path:'/contactus',
                element:<Contactus></Contactus>
            },
            {
                path:'/carddetails/:id',
                element:<CardDetails></CardDetails>,
                loader:()=>fetch('/carddata.json')
            }
        ]
    }
]);
export default routes;