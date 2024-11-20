import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import { AdventureContext } from '../Provider/AdventureProvider';

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





    const{ id,
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
    } = desiredCard



    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <h2 className="font-bold text-7xl text-center text-red-500">Adventure Details</h2>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AdventureDetails;