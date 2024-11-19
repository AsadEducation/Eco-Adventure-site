import { createBrowserRouter, Navigate } from "react-router-dom";

import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Layout/Home"
import Expo from "../Components/Expo";
import AdventureDetails from "../Layout/AdventureDetails";
import Private from "../Routes/Private"

const Routes = createBrowserRouter([

    {
      path:'',
      element:<Home></Home>,
      children:[
        {
          path:'',
          element:<Expo></Expo>,
          loader:()=>fetch('/public/fakeData.json')
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
        path:'adventureDetails',
        element:<Private><AdventureDetails/></Private>
        
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default Routes;