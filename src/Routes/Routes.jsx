import { createBrowserRouter, Navigate } from "react-router-dom";

import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Layout/Home"
import Expo from "../Components/Expo";
import AdventureDetails from "../Layout/AdventureDetails";
import Private from "../Routes/Private"
import AdventureProvider from "../Provider/AdventureProvider";

const Routes = createBrowserRouter([

    {
      path:'',
      element:<Home></Home>,
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
        path:'adventureDetails/:id',
        element: <Private><AdventureProvider><AdventureDetails/></AdventureProvider></Private>,      
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default Routes;