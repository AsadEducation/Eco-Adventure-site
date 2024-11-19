import { createBrowserRouter, Navigate } from "react-router-dom";

import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Routes = createBrowserRouter([
  

    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
               {
                path:'login',
                element:<Login></Login>
               },
               {
                path:'register',
                element:<Register></Register>
               }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default Routes;