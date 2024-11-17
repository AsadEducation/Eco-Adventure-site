import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="w-full">
            <h2 className="font-bold">Log in With</h2>
            {/* social button  */}
            <div className="flex flex-col gap-2">
                <button className="flex btn items-center  bg-white border-2 border-gray-600 gap-2"><span><FaGoogle className="text-blue-400"/></span><span>Login With Google</span></button>
                <button className="flex btn items-center  bg-white border-2 border-gray-600 gap-2"><span><FaGithub className="text-blue-400"/></span><span>Login With GitHub</span></button>
                
            </div>
        </div>
    );
};

export default SocialLogin;