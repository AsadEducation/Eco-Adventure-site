import { useLoaderData } from "react-router-dom";
import Header from "../Header";
import RightAside from "../Layout-Component/RightAside";
import NewsCard from "../NewsCard";



const NewsDetails = () => {
    const data = useLoaderData();
   
    const news = data.data[0];
   
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto lg:grid grid-cols-12 gap-6">
                <section className="col-span-9">
                <h2 className="font-bold">Dragon News Home</h2>
                <NewsCard news={news}></NewsCard>
                </section>
                <aside className="col-span-3 ">
                  <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;