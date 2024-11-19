import { GoVerified } from "react-icons/go";
import { NavLink } from "react-router-dom";


const SingleExpo = ({ card }) => {
    // console.log(card);

    const {
        id,
        adventureTitle: title,
        image: img,
        categoryName: category,
        shortDescription: desc,
        adventureCost: cost,
        bookingAvailability: isAvailable,
        location: loc,
        duration: time,
        adventureLevel: level,
        includedItems: items,
        ecoFriendlyFeatures: ecoFeatures,
        maxGroupSize: groupSize,
        specialInstructions: instructions
    } = card;


    return (
        <div className="rounded-lg shadow-lg overflow-hidden border ">
            {/* Image */}
            <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
            />
            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>

                {/* Eco-Friendly Features */}
                <p className="text-sm text-gray-600 mt-2">
                    <h2 className="font-semibold">Eco-Friendly Features:</h2>
                    <div>
                        {
                            ecoFeatures.map((feature,index) => {
                                return <li key={index} className='mt-2 flex items-center list-none'><GoVerified className="mr-2 text-green-500" />{feature}</li>
                            })
                        }
                    </div>

                </p>

                {/* Button */}
                <NavLink to={'/adventureDetails'}> <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:px-6">
                    Explore Now
                </button></NavLink>
            </div>
        </div>
    );
};

export default SingleExpo;