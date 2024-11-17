import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleNews from "../SingleNews";

const CategoryNews = () => {

  

    const {data:news} = useLoaderData();
    

    // useEffect(() => {
    //      setNews(temp);
    // }, [])


    // const fetchData = async () => {
    //     const response = await axios.get(`https://openapi.programming-hero.com/api/news/category/${id}`);

    //     setNews(response.data.data);

    //     return response.data;
    // }

    return (
        <div>
            <h2 className="font-bold mb-3"> Dragon News Home </h2>
            <p className="text-gray-400">Total of {news.length} news </p>
            
            <div>
                {
                  news.map((single,index)=>{
                    return <SingleNews key={index} singleNews={single}></SingleNews>
                  })
                }
            </div>
        </div>
    );
};

export default CategoryNews;
