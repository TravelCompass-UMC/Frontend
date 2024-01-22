// searchplace.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Place.css";
import SearchComponent from '../../components/Search.js';
import Map from '../../components/Map';

const SrchPlace = () => {
  const navigate = useNavigate();
  const [searchedLocation, setSearchedLocation] = useState(null);

  const handleSearch = (location) => {
    // Save the searched location
    setSearchedLocation(location);

    // Navigate to placeinfo with the search query
    navigate(`/placeinfo?q=${location.lat},${location.lng}`);
  };

  return (
    <div>
      <div style={{ width: "80%", margin: "0 auto" }}></div>
      <SearchComponent onSearch={handleSearch} />
      <Map />
    </div>
  );
};

export default SrchPlace;