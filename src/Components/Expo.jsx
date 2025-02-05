import { useLoaderData } from "react-router-dom";
import SingleExpo from "./SingleExpo";
import { useContext } from "react";
import { AdventureContext } from "../Provider/AdventureProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Expo = () => {
  const cards = useContext(AdventureContext);
  // console.log(cards)

  if (!Array.isArray(cards)) {
    return <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-ring text-blue-400 loading-lg"></span>
    </div>
  }

  // showing animation 

  useEffect(() => {
    AOS.init({
        duration: 2000,
        once: false,
        offset: 100,
    });
    AOS.refresh();
}, []);

  return (
    <div data-aos="fade-up" className="mt-4 md:mt-8 lg:mt-16">
      <h2 className="font-semibold text-3xl lg:text-5xl text-center animate-pulse  my-8 md:my-8 lg:my-16">Adventure Experiences </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
          cards.map((singleExpo) => {
            return <SingleExpo key={singleExpo.id} card={singleExpo}></SingleExpo>
          })
        }
      </div>
    </div>
  );
};

export default Expo;