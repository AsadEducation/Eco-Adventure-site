import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import axios from "axios";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Navigate to={'/category/01'} />
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element: <CategoryNews />,
            },
        ]
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>
    },
    {
        path: '/login',
        element: <h1>Login </h1>
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default Routes;