import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftAside = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch(`https://openapi.programming-hero.com/api/news/categories`)
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))

    }, [])

    return (
        <div>
            <h2 className="text-bold">All Categories</h2>

            <div className="flex flex-col gap-2  mt-4">
                {
                    categories.map((category) => {
                        return <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn pl-0">{category.category_name}</NavLink>
                    })
                }
            </div>
        </div>
    );
};

export default LeftAside;