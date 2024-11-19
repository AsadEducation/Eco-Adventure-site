import { createBrowserRouter, Navigate } from "react-router-dom";

import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Layout/Home"

const Routes = createBrowserRouter([

    {
      path:'',
      element:<Home></Home>,
      children:[
        {
          
        },
      ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'/adventureDetails',
        
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default Routes;