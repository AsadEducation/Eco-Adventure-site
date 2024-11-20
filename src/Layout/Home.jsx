import React, { createContext } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Expo from '../Components/Expo';
import AdventureProvider from '../Provider/AdventureProvider';


const Home = () => {

    return (
        <div>
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