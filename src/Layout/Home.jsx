import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

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
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;