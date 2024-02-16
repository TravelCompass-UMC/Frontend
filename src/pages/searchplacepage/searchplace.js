// searchplace.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/searchplace/search.module.css";
import SearchComponent from '../../components/Search.js';
import Map from '../../components/Map';

const SrchPlace = () => {
  const navigate = useNavigate();
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  const handleSearch = (location, query) => {
    // Save the searched location
    setSearchedLocation(location);
    setSearchQuery(query); // 검색어 저장

    // Navigate to placeinfo with the search query
    navigate(`/placeinfo?q=${location.lat},${location.lng},${encodeURIComponent(query)}`, {
      state: { searchedLocation: query } // 검색된 지역명을 state에 저장하여 전달
    });
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <Map containerStyle={{ width: "100vw", height: "91vh" }} zoomLevel={7.4} />
    </div>
  );
};

export default SrchPlace;
