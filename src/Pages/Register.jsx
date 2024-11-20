import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {

    const { createNewUser, user, setUser, profileUpdate, loginWithGoogle } = useContext(AuthContext);

    const [error, setError] = useState({});

    const navigate = useNavigate();

    //showing error with toast message 

    useEffect(() => {
        if (error.register) {
            toast.error(error.register);
            // Clear the error after showing the toast
            setError(prevError => ({ ...prevError, login: null }));
        }
    }, [error.register]);

    useEffect(() => {
        if (error.profile) {
            toast.error(error.profile);
            // Clear the error after showing the toast
            setError(prevError => ({ ...prevError, login: null }));
        }
    }, [error.register]);



    // -------------------------------

    const handleFormSubmit = (e) => {

        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 5) {
            setError({
                ...error,
                name: "name must be 5 character long"
            })
            return;
        }
        const email = form.get("email");
        const photo = form.get("photo")
        const password = form.get("password");

// -------------------- validating password with regEx ---------------------------
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        const correctPass =  passwordRegex.test(password);

        if(!correctPass){
            setError({...error,passwordValidity:"Invalid Password"});
            return;
        }
// ------------------------------------------------------------------------------

        createNewUser(email, password)
            .then((userCredential) => {
                // Signed up 
                setUser(userCredential.user);
                profileUpdate({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        // console.log('user profile updated')
                        navigate("/");
                    })
                    .catch((err) => {
                        // console.log(err);
                        setError({ ...error, profile: err.message })
                    });

                // ...
            })
            .catch((err) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);
                setError({ ...error, register: err.message })
            });

    }

    const handleGoogle = () => {
        loginWithGoogle()
            .then(() => {
                navigate(location.state ? location.state : '/');
            })
            .catch((err) => {
                setError({ ...error, login: err.message });
            })
    }

    return (
        <div className="mt-12 bg-white  md:w-[50%] mx-auto py-4 lg:p-12">
            <h2 className="text-2xl font-bold text-center">Register Your Account</h2>
            <div className="card bg-base-100  shrink-0">

                <form onSubmit={handleFormSubmit} className="card-body">
                    {/* name input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && <label className="label text-xs text-red-400">
                            {error.name}
                        </label>
                    }
                    {/* photo url  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                    </div>
                    {/* email input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    {/* invalid password error show  */}
                    {
                        error.passwordValidity && <label className="label text-xs text-red-400">
                            {error.passwordValidity}
                        </label>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                    <button onClick={handleGoogle} aria-label="Login with Google" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md ">
                        <FcGoogle className="text-xl" />
                        <p className="">Login with Google</p>
                    </button>
                </form>
                <p className="text-center">Already Have An Account ? <Link to={'/auth/login'} className="text-red-400 underline">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;