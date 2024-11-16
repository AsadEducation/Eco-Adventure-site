import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-3 justify-center items-center p-2 bg-base-200 ">
            <p className=" bg-[#D72050] text-white px-4 py-2">Latest</p>
           <Marquee pauseOnHover speed={100}>
               <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis exercitationem incidunt magni voluptates,</Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;