import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import PageTitle from "../Components/PageTitle";
import 'animate.css'

const Login = () => {
    const { user, logoutUser, loginUser,loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState({});

    const location = useLocation();
    const path= location.pathname.split('/')
    const navigate = useNavigate();

    useEffect(() => {
        if (error.login) {
            toast.error(error.login);
            // Clear the error after showing the toast
            setError(prevError => ({ ...prevError, login: null }));
        }
    }, [error.login]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                // console.log('user logged in ' , result);
                navigate(location.state ? location.state : '/');
            })
            .catch((err) => {
                setError({ ...error, login: err.message });
            });
    };

    const handleGoogle = ()=>{
        loginWithGoogle()
        .then(()=>{
            navigate(location.state ? location.state : '/');
        })
        .catch((err) => {
            setError({ ...error, login: err.message });
        })
    }

    return (
        <div className="mt-12 bg-white w-full md:w-[50%] mx-auto  py-4 lg:p-12">
            <PageTitle title={path[2]}></PageTitle>
            <h2 className="text-2xl font-bold animate-pulse text-center">Login Your Account</h2>
            <div className="card bg-base-100 shrink-0">
                <form onSubmit={handleFormSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label>
                            <NavLink to={'/auth/forgot'}><span className="text-sm text-red-500 underline">Forgot Password?</span></NavLink>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                    <button onClick={handleGoogle} aria-label="Login with Google"  className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md ">
                    <FcGoogle className="text-xl" />
                        <p className="">Login with Google</p>
                    </button>
                </form>
                <p className="text-center">Don't Have An Account ? <Link to={'/auth/register'} className="text-red-400 underline">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;


// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from '../Provider/AuthProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {

//     const { user, logoutUser, loginUser } = useContext(AuthContext);
//     const [error, setError] = useState({});

//     const location = useLocation();
//     // console.log(location);


//     const navigate = useNavigate();



//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;



//         loginUser(email, password)
//             .then((result) => {
//                 // console.log('user logged in ' , result);
//                 navigate(location.state ? location.state : '/');
//             })
//             .catch((err) => {
//                 // console.log(error.code, error.message)
//                 setError({ ...error, login: err.message });
//             })
//     }

//     return (
//         <div className="mt-12 bg-white w-full  md:w-[50%] mx-auto py-4 lg:p-12">
//             <h2 className="text-2xl font-bold text-center">Login Your Account</h2>
//             <div className="card bg-base-100  shrink-0">

//                 <form onSubmit={handleFormSubmit} className="card-body">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text font-semibold">Email Address</span>
//                         </label>
//                         <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text font-semibold">Password</span>
//                         </label>
//                         <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//                         <label>
//                             <span className="text-sm text-red-500 underline">Forgot Password?</span>
//                         </label>

//                     </div>
//                     {
//                         error.login && toast.error(error.login)
//                         // <div className="label text-sm text-rose-400">
//                         //     {error.login}
//                         // </div>
//                     }
//                     <div className="form-control mt-6">
//                         <button className="btn btn-neutral">Login</button>
//                     </div>
//                 </form>
//                 <p className="text-center ">Don't Have An Account ? <Link to={'/auth/register'} className="text-red-400 underline">Register</Link> </p>
//             </div>
//         </div>
//     );
// };

// export default Login;

// code with solution 


