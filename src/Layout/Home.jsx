import React, { createContext } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Expo from '../Components/Expo';
import AdventureProvider from '../Provider/AdventureProvider';
import { useLocation } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';
import Faq from '../ExtraSection/Faq';
import MapComponent from '../ExtraSection/MapComponent';


const Home = () => {

    const location = useLocation();
    // console.log(location);

    let path='';

    if(location.pathname=='/'){
      path='Home';
    }

    return (
        <div>
           <PageTitle title={`Eco-Adventure||${path}`}/>
            <header>
                {/* navbar */}
               <div className='w-11/12 mx-auto'> <Navbar ></Navbar></div>

                {/* banner  */}
                <Banner></Banner>
            </header>
            <main className='w-11/12 mx-auto'>
                {/* show different pages based on route  */}

                <AdventureProvider>
                    <Expo/>
                </AdventureProvider>

                <div className='my-8 md:my-16 lg:my-24'><Faq/></div>

                {/* map component  */}
                
                <div><MapComponent/></div>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;

