import { Link } from "react-router-dom";

const SingleNews = ({ singleNews }) => {
    const {
        title,
        author: { name, published_date, img },
        thumbnail_url,
        rating: { number },
        total_view,
        details,
        _id,
    } = singleNews;


    // console.log(singleNews);

    return (
        <div className="card bg-white shadow-lg rounded-lg p-4 mb-6">
            {/* Author Info */}
            <div className="flex items-center gap-3">
                <img
                    src={img}
                    alt={name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <h3 className="font-semibold text-sm">{name}</h3>
                    <p className="text-gray-500 text-xs">{new Date(published_date).toDateString()}</p>
                </div>
            </div>

            {/* News Title */}
            <h2 className="font-bold text-lg mt-4">{title}</h2>

            {/* Thumbnail */}
            <img
                src={thumbnail_url}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mt-4"
            />

            {/* News Details */}
            <p className="text-gray-600 text-sm mt-4">
                {details.substring(0, 150)}...{" "}
                <Link to={`/newsDetails/${_id}`} className="text-blue-500 font-semibold cursor-pointer">
                    Read More
                </Link>
            </p>

            {/* Footer Section */}
            <div className="flex justify-between items-center mt-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="rating rating-sm">
                        {[...Array(5)].map((_, i) => (
                            <input
                                type="radio"
                                name="rating"
                                className="mask mask-star-2 bg-orange-400"
                                key={i}
                                checked={i + 1 <= Math.round(number)}
                                readOnly
                            />
                        ))}
                    </div>
                    <p className="text-sm font-bold">{number}</p>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <i className="fa fa-eye"></i>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;
