import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";


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
             <aside className="col-span-3 mx-auto">All Category</aside>
             <aside className="col-span-6 mx-auto">Dragon News Home</aside>
             <aside className="col-span-3 mx-auto">Log in With</aside>
            </main>
        </div>
    );
};

export default Home;