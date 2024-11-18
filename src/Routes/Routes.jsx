import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import axios from "axios";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import NewsDetails from "../Components/Pages/NewsDetails";
import Private from "./Private";

const Routes = createBrowserRouter([
    {
        path: '',
        element: <Home />,
        children: [
            {
                path: "",
                element: <Navigate to={'category/01'} />
            },
            {
                path: 'category/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element: <CategoryNews />,
            },
        ]
    },
    {
        path: 'newsDetails/:id',
        element: <Private><NewsDetails></NewsDetails></Private>,
        loader:({params})=>fetch(` https://openapi.programming-hero.com/api/news/${params.id}`)
    },
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