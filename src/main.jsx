import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import Authprovider from "./Authprovider/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

   <Authprovider>
   <RouterProvider router={routes}></RouterProvider>
   </Authprovider>
  </React.StrictMode>
);
