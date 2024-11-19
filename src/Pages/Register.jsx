import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { createNewUser, user, setUser, profileUpdate } = useContext(AuthContext);

    const [error, setError] = useState({});

    const navigate = useNavigate();

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


        createNewUser(email, password)
            .then((userCredential) => {
                // Signed up 
                setUser(userCredential.user);
                profileUpdate({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        console.log('user profile updated')
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    });

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }

    return (
        <div className="m-12 bg-white w-[50%] mx-auto p-12">
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
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                {/* <p className="text-center">Dont’t Have An Account ? <Link to={'/auth/register'} className="text-red-400">Register</Link> </p> */}
            </div>
        </div>
    );
};

export default Register;