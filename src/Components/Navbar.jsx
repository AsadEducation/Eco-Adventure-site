import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const links = <div className='lg:flex space-x-5'>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={''}>Profile</Link></li>
        <li><Link to={''}>Update</Link></li>
    </div>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Eco-Adventure</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="flex items-center navbar-end space-x-2">
                    {
                        user?.photoURL ? <div><img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" /></div> : <div><img src={''} alt="" /></div>
                    }
                    <div>
                        {
                            user ? <button onClick={logoutUser} className="btn btn-neutral"> Logout</button> : <Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;