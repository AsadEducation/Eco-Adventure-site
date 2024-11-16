import { Link } from "react-router-dom";
import profileImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            {/* faka div  */}
            <div>

            </div>
            <div className="space-x-5 text-gray-400">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Career">Career</Link>
            </div>
            <div className="flex items-center space-x-2">
                <div><img src={profileImg} alt="" /></div>
                <div><button className="btn btn-neutral rounded-none">Login</button></div>
            </div>
        </div>
    );
};

export default Navbar;