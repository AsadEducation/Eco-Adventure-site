import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className="space-y-3 ">
            <h2 className="font-bold">Find Us On</h2>
            <div className="flex join  join-vertical flex-col ">
                <button className="btn justify-start  join-item bg-base-100"><FaFacebook></FaFacebook> facebook</button>
                <button className="btn justify-start join-item bg-base-100"> <FaTwitter></FaTwitter>twitter</button>
                <button className="btn justify-start join-item bg-base-100"> <FaInstagram></FaInstagram>instagram</button>
            </div>
        </div>
    );
};

export default FindUs;