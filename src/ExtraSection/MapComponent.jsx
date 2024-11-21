// this can cause problem 
import 'leaflet/dist/leaflet.css';
// ------------------------------------

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix the default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Array of tourism places including eco-friendly locations
const tourismPlaces = [
  { id: 1, name: "Eiffel Tower, Paris", position: [48.8584, 2.2945] },
  { id: 2, name: "Colosseum, Rome", position: [41.8902, 12.4922] },
  { id: 3, name: "Great Wall of China", position: [40.4319, 116.5704] },
  { id: 4, name: "Statue of Liberty, NYC", position: [40.6892, -74.0445] },
  { id: 5, name: "Sydney Opera House", position: [-33.8568, 151.2153] },

  // Eco-friendly/Nature places
  { id: 6, name: "Amazon Rainforest, Brazil", position: [-3.4653, -62.2159] },
  { id: 7, name: "Sundarbans, India/Bangladesh", position: [21.9497, 89.1833] },
  { id: 8, name: "Galápagos Islands, Ecuador", position: [-0.7773, -90.6793] },
  { id: 9, name: "Banff National Park, Canada", position: [51.4968, -115.9281] },
  { id: 10, name: "Kruger National Park, South Africa", position: [-24.0169, 31.6044] },
  { id: 11, name: "Great Barrier Reef, Australia", position: [-18.2871, 147.6992] },
];

const MapComponent = () => {
  return (
    <div className='mb-4 md:mb-10 lg:mb-16'>
      <h2 className="text-3xl lg:text-4xl text-center mb-4 lg:mb-8 font-semibold">Location of Eco-Friendly Places</h2>
      <p className='text-center text-gray-600'>Please Zoom in and out to see the location</p>
      <div className="map-container" style={{ height: "400px", width: "100%", marginTop: "20px" }}>
        <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          {/* Tile Layer for Map */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Add Markers for Tourism Places */}
          {tourismPlaces.map((place) => (
            <Marker key={place.id} position={place.position}>
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
    </div>
  );
};

export default MapComponent;

