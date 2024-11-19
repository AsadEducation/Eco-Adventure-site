import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {

    const { user, logoutUser, loginUser } = useContext(AuthContext);
    const [error, setError] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        loginUser(email, password)
            .then((result) => {
                // console.log('user logged in ' , result); 
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                // console.log(error.code, error.message)
                setError({ ...error, login: err.message });
            })
    }

    return (
        <div className="m-12 bg-white w-[50%] mx-auto p-12">
            <h2 className="text-2xl font-bold text-center">Login Your Account</h2>
            <div className="card bg-base-100  shrink-0">

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
                    </div>
                    {
                        error.login && <div className="label text-sm text-rose-400">
                         {error.login}
                        </div>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center">Don't Have An Account ? <Link to={'/auth/register'} className="text-red-400">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;