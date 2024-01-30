// Search.js

import React, { useState } from "react";
import "../styles/Place.css";
import zIndex from "@material-ui/core/styles/zIndex";

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // 가상의 추천 단어 목록
  const allDestinations = [
    "서울",
    "부산",
    "제주도",
    "여수",
    "속초/강릉/양양",
    "경주",
  ];

  // 검색어에 따라 추천 단어를 필터링하는 함수
  const filterDestinations = (input) => {
    return allDestinations.filter((destination) =>
      destination.toLowerCase().includes(input.toLowerCase())
    );
  };

  const handleSearchChange = (event) => {
    const input = event.target.value;
    setSearchQuery(input);

    // 검색어에 따라 추천 단어 필터링
    const filteredSuggestions = filterDestinations(input);
    setSuggestions(filteredSuggestions);

    // 추천 단어가 있으면 보여주기
    setShowSuggestions(filteredSuggestions.length > 0);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      // Geocoding API 호출을 위한 URL
      const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU`;

      // Geocoding API 호출
      const response = await fetch(geocodingApiUrl);
      const data = await response.json();

      // 검색어로부터 위치 좌표 가져오기
      const location = data.results[0]?.geometry?.location;

      if (location) {
        // 검색된 위치를 부모 컴포넌트로 전달하여 지도를 업데이트
        onSearch(location);
      } else {
        console.error("Location not found");
      }
    } catch (error) {
      console.error("Error fetching geocoding data:", error);
    }
  };

  const selectSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            maxLength="20"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="궁금한 지역을 검색해보세요."
          />
          <button type="submit">검색</button>
        </form>

        {/* 추천 단어 목록 렌더링 */}
        {showSuggestions && (
          <ul className="suggestion-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => selectSuggestion(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
