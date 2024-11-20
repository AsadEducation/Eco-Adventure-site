import React, { Children, createContext, useEffect, useState } from 'react';

export const AdventureContext= createContext();

const AdventureProvider = ({children}) => {


    const [adventureCards, setAdventureCards] = useState(null);


    useEffect(()=>{
        fetch('fakeData.json')
        .then((result)=>result.json())
        .then((data)=>setAdventureCards(data))     
    },[])


    // console.log(adventureCards)

    return (
       <AdventureContext.Provider value={adventureCards}>
         {children}
       </AdventureContext.Provider>
    );
};

export default AdventureProvider;