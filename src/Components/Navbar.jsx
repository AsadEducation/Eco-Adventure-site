import { Link } from "react-router-dom";
import profileImg from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="flex items-center justify-between">
            {/* user mail div  */}
            <div>
                {user?.email}
            </div>
            <div className="space-x-5 text-gray-400">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Career">Career</Link>
            </div>
            <div className="flex items-center space-x-2">
                {
                    user?.photoURL ? <div><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></div>: <div><img src={profileImg} alt="" /></div>
                }
                <div>
                    {
                       user?<button onClick={logoutUser} className="btn btn-neutral"> Logout</button>:<Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;