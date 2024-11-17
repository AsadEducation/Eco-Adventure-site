import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftAside from "../Components/Layout-Component/LeftAside";
import RightAside from "../Components/Layout-Component/RightAside";
import Navbar from "../Components/Navbar";
import CategoryNews from "../Components/Pages/CategoryNews";


const Home = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
            </header>
            <nav className=" w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto mt-8 grid grid-cols-12">

                {/* left aside  */}
                <aside className="col-span-3 mx-auto">
                    <LeftAside></LeftAside>
                </aside>

                {/* middle aside  */}
                <aside className="col-span-6 mx-auto">
                    <Outlet></Outlet>
                </aside>

                {/* Right aside  */}
                <aside className="col-span-3 mx-auto">
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default Home;