import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightAside = () => {
    return (
        <div className="space-y-4">
           <SocialLogin></SocialLogin>
           <FindUs/>
        </div>
    );
};

export default RightAside;