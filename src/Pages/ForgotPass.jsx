import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';

const ForgotPass = () => {

    const location = useLocation();
    const path = location.pathname.split('/');
    const navigate = useNavigate();


    const handleFormSubmit = (e) => {
        e.preventDefault();

        window.open("https://mail.google.com", "_blank");

    };

    return (
        <div className="mt-12 bg-white w-full md:w-[50%] mx-auto py-4 lg:p-12">
            <PageTitle title={path[3]}></PageTitle>
            <h2 className="text-2xl font-bold text-center">Forgot Your Password</h2>
            <div className="card bg-base-100 shrink-0">
                {/* form starts from here  */}

                <form onSubmit={handleFormSubmit} className="card-body">
                    {/* input fields of email  */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* input fields of password  */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Reset Password</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default ForgotPass;