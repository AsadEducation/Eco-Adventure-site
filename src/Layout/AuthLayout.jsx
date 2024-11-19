

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3] min-h-screen">
            <header>
                <Navbar></Navbar>
            </header>
           <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;