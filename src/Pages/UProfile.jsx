import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import PageTitle from "../Components/PageTitle";


const UProfile = () => {

    const { profileUpdate, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const path= location.pathname.split('/');


    if (!user) {
        return <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="font-semibold text-3xl mb-4">You are not logged in </h2>
            <NavLink to={'/auth/login'}><button className="btn bg-blue-400"> Login </button></NavLink>
        </div>
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        console.log(name, photo);


        profileUpdate({
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                // console.log('user profile updated successfully')
                navigate("/profile");
            })
            .catch((err) => {
                console.log(err);

            });

    };


    return (
        <div>
            <PageTitle title={path[1]}/>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <div className="mt-12 bg-white w-full md:w-[50%] mx-auto py-4 lg:p-12">
                    <h2 className="text-2xl font-bold text-center">Update Your Profile</h2>
                    <div className="card bg-base-100 shrink-0">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold"></span>
                                </label>
                                <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Update Info</button>
                            </div>

                        </form>

                    </div>

                </div>
            </main>

        </div>
    );
};

export default UProfile;