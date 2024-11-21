import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import { AdventureContext } from '../Provider/AdventureProvider';
import PageTitle from '../Components/PageTitle';

const AdventureDetails = () => {

    const adventureCards = useContext(AdventureContext);
    // console.log(adventureCards);
    const location = useLocation();

    // getting id from url 
    const cardId = location.pathname.split('/');
    //  console.log(cardId[2]);

    if (!adventureCards) {

        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-ring text-blue-400 loading-lg"></span>
        </div>
    }

    const desiredCard = adventureCards.filter((adventureCard) => adventureCard.id == cardId[2])

    // console.log(desiredCard);





    const { id,
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
        specialInstructions: instructions,
        story
    } = desiredCard[0];

    console.log(desiredCard[0]);


    return (
        <div>
            <PageTitle title={`${cardId[1]}||${cardId[2]}`}/>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <div className="details-page-container bg-gray-50 text-gray-800">
                    {/* Hero Section */}
                    <div className="relative w-full h-[400px]">
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                            <h1 className="text-4xl md:text-5xl italic font-bold text-white text-center">
                                {title}
                            </h1>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-6 md:px-16 py-10">
                        {/* Top Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            {/* Left Section */}
                            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                <h2 className="text-2xl font-bold mb-4">{category}</h2>
                                <p className="text-lg text-gray-600 leading-7">
                                    {desc}
                                </p>
                                <p className="mt-4 text-gray-700">
                                    <strong>Location:</strong> {loc}
                                </p>
                                <p className="text-gray-700">
                                    <strong>Duration:</strong> {time}
                                </p>
                                <p className="text-gray-700">
                                    <strong>Adventure Level:</strong> {level}
                                </p>
                                <p className="text-gray-700">
                                    <strong>Max Group Size:</strong> {groupSize} people
                                </p>
                            </div>

                            {/* Right Section */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-4">
                                    Eco-Friendly Features
                                </h3>
                                <ul className="space-y-2">
                                    {ecoFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="text-green-500 font-bold">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">
                                    Included Items
                                </h3>
                                <ul className="space-y-2">
                                    {items.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Story Section */}
                        <div className=" p-6">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">The Experience</h2>
                            <p className="text-gray-700 leading-7">{story}</p>
                        </div>

                        {/* Special Instructions */}
                        <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Special Instructions
                            </h2>
                            <ul className="space-y-2">
                                {instructions.map((instruction, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="text-yellow-500 font-bold">⚠</span>
                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Booking Section */}

                        {/* <div className="mt-10 flex flex-col md:flex-row items-center justify-between bg-green-600 p-6 rounded-lg shadow-md text-white">
                            <div>
                                <h3 className="text-xl font-bold">
                                    Price: ${cost}
                                </h3>
                                <p>
                                    {isAvailable
                                        ? "Booking is available!"
                                        : "Currently unavailable."}
                                </p>
                            </div>
                            {isAvailable && (
                                <button className="bg-white text-green-600 font-bold px-6 py-2 mt-4 md:mt-0 rounded-md shadow-md">
                                    Book Now
                                </button>
                            )}
                        </div> */}
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AdventureDetails;