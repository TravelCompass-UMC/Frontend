import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Place.css";
import SearchComponent from '../../components/Search.js';
import GoogleMapComponent from '../../components/Map.js';


const SrchPlace = () => {
  const navigate = useNavigate();
  const [searchedLocation, setSearchedLocation] = useState(null);

  const handleSearch = (location) => {
    // Save the searched location
    setSearchedLocation(location);
    
    // Navigate to placeinfo1 with the search query
    navigate(`/placeinfo1?q=${location.lat},${location.lng}`);
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <GoogleMapComponent/>
    </div>
  );
};

export default SrchPlace;
