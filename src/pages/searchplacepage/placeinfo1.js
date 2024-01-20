// PlaceInfo1.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";
import PlaceDetail from "../../components/PlaceDetail"; // Import the PlaceDetail component

const PlaceInfo1 = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    }
  }, [searchQuery]);

  // Handle pin click to set the selected place
  const handlePinClick = (placeName) => {
    setSelectedPlace(placeName);
  };

  return (
    <div>
      <h2>Search Results</h2>
      <SidebarL width={320}>
        {/* Display detailed information using PlaceDetail component */}
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      {/* Pass the mapLocation to Map component */}
      <Map location={mapLocation} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfo1;
