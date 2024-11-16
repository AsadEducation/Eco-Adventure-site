import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";

const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/news',
        element: <h1>News Layout</h1>
    },
    {
        path:'/login',
        element: <h1>Login </h1>
    },
    {
        path:"*",
        element: <h1>Error</h1>
    }
])

export default Routes;