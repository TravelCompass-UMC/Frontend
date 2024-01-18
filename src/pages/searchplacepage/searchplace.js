// srchplace.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Place.css";
import GoogleMapComponent from "../../components/Map.js";
import SearchComponent from "../../components/Search.js";

const SrchPlace = () => {
  const [mapLocation, setMapLocation] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (location, searchQuery) => {
    setMapLocation(location);
    navigate(`/placeinfo/${searchQuery}`); // 검색어를 URL에 포함하여 네비게이션
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <GoogleMapComponent location={mapLocation} />
    </div>
  );
};

export default SrchPlace;
