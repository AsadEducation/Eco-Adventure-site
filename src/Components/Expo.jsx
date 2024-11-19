import { useLoaderData } from "react-router-dom";
import SingleExpo from "./SingleExpo";


const Expo = () => {
    const expo = useLoaderData();

    // console.log(expo);

    return (
      <div className="mt-4 md:mt-8 lg:mt-16">
         <h2 className="font-bold text-5xl text-center my-2 md:my-8 lg:my-16">Adventure Experiences </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                expo.map((singleExpo)=>{
                    return <SingleExpo key={singleExpo.id} card={singleExpo}></SingleExpo>
                })
            }
        </div>
      </div>
    );
};

export default Expo;