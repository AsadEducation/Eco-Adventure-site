import { Link, useLoaderData } from "react-router-dom";


const NewsCard = ({news}) => {

    const {
        _id,
        others_info: { is_todays_pick, is_trending },
        category_id,
        rating: { number: ratingNumber, badge: ratingBadge },
        total_view,
        title,
        author: { name: authorName, published_date, img: authorImg },
        thumbnail_url,
        image_url,
        details
    } = news;
   
    return (
        
            <div className="card bg-base-100  shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={image_url}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <h2 className="card-title justify-start ">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <Link to={`/category/${category_id}`} className="btn btn-primary">Back to Category </Link>
                    </div>
                </div>
            </div>
    );
};

export default NewsCard;