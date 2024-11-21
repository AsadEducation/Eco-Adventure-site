import React, { createContext } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Expo from '../Components/Expo';
import AdventureProvider from '../Provider/AdventureProvider';
import { useLocation } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';


const Home = () => {

    const location = useLocation();
    console.log(location);

    let path='';

    if(location.pathname=='/'){
      path='Home';
    }

    return (
        <div>
           <PageTitle title={`Eco-Adventure||${path}`}/>
            <header>
                {/* navbar */}
                <Navbar></Navbar>

                {/* banner  */}
                <Banner></Banner>
            </header>
            <main>
                {/* show different pages based on route  */}

                <AdventureProvider>
                    <Expo/>
                </AdventureProvider>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;