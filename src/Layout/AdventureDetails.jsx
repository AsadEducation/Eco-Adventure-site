import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import { AdventureContext } from '../Provider/AdventureProvider';
import PageTitle from '../Components/PageTitle';
import moment from 'moment';

// importing aos animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AdventureDetails = () => {


    // rendering animation 

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            offset: 100,
        });
        AOS.refresh();
    }, []);
    

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

    // console.log(desiredCard[0]);


    const handleExpert = () => {

        const timeNow = moment().format("HH:mm:ss");
        const timeBlock = timeNow.split(':');
        const intHour = parseInt(timeBlock[0]);

        if (intHour >= 10 && intHour < 22) {
            window.open("https://meet.google.com/", "_blank");
        }
        else {
            document.getElementById('my_modal_3').showModal();

        }
    }


    return (
        <div>
            <PageTitle title={`${cardId[1]}||${cardId[2]}`} />
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <div className="details-page-container bg-gray-50 text-gray-800">
                    {/* Hero Section */}
                    <div className=" w-full h-[400px]">
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover"
                        />

                    </div>

                    <div className="  my-8 md:my-12">

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
                            {`${title} Experience`}
                        </h1>

                        {/* Story Section */}
                        <p className="text-gray-700 mt-8 px-4 md:px-8 leading-7">{story}</p>

                    </div>

                    {/* Content Section */}
                    <div data-aos="fade-up" className=" px-2 md:px-10 ">
                        {/* Top Details */}
                        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mb-10">
                            {/* Left Section */}

                            <div className='bg-gray-100 hover:scale-105  ease-in duration-500 p-2 md:p-6 rounded-lg shadow-md'>
                                <h2 className="text-2xl font-bold mb-4">{category}</h2>
                                <p className="text-lg text-gray-600 leading-7">
                                    {desc}
                                </p>
                                <div className='flex flex-col mt-4 space-y-3'>
                                    <p className=" text-gray-700">
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
                            </div>

                            {/* Right Section */}
                            <div className="bg-gray-100 hover:scale-105 ease-in duration-500 p-6 rounded-lg shadow-md">
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




                        <div className="mt-10  grid grid-cols-1 gap-6 md:grid-cols-2 bg-gray-100 p-2 md:p-6 rounded-lg shadow-md">
                            {/* Special Instructions */}
                            <div>
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
                            {/* talk with expert button with modal  */}
                            <div className='flex md:justify-end items-center'>

                                <button onClick={ handleExpert} className='btn bg-blue-400 w-40 text-white'> Talk With Expert</button>

                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-center text-lg">Congratulation!</h3>
                                        <p className="py-4 text-center">Press ESC key or click on ✕ button to close</p>
                                    </div>
                                </dialog>

                            </div>
                        </div>

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