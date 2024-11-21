import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../Components/Spinner";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { NavLink, useLocation } from "react-router-dom";
import PageTitle from "../Components/PageTitle";


const Profile = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const path= location.pathname.split('/');


    if (!user) {
        return <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="font-semibold text-3xl mb-4">You are not logged in </h2>
                <NavLink to={'/auth/login'}><button className="btn bg-blue-400"> Login </button></NavLink>
           </div>
    }

    // console.log(user);

    const { displayName, email, photoURL } = user;




    return (
        <div>
            <PageTitle title={path[1]}/>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="max-w-md  mt-8 mx-auto p-6">
                    <h1 className="text-2xl font-bold text-center mb-6">Welcome, {displayName}!</h1>
                    <div className="border border-gray-300 p-6 rounded-lg">
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src={photoURL}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mb-4"
                            />
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr>
                                        <td className="font-medium py-2">Name:</td>
                                        <td className="py-2">{displayName}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium py-2">Email:</td>
                                        <td className="py-2">{email}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        {/* redirecting to update profile page  */}
                        <NavLink to={'/updateProfile'}> <button
                            className="w-full py-2 text-white btn btn-neutral"
                        >
                            Update Profile
                        </button></NavLink>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Profile;