import React, { useState } from "react";
import styles from "../styles/searchplace/search.module.css";
import { Search } from "../styles/styles.jsx";

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
        // 검색된 위치와 검색어를 부모 컴포넌트로 전달하여 지도를 업데이트
        onSearch(location, searchQuery);
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
      <div className={styles.searchContainer}>
        <form onSubmit={handleSearch}>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              maxLength="20"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="궁금한 지역을 검색해보세요."
              style={{
                width: "436px",
                height: "54px",
                padding: "5px",
                fontSize: "15px",
                border: "none",
                borderRadius: "5px",
                outline: "none",
                paddingLeft: "17px", // 텍스트 왼쪽 여백 조절
                marginRight: "-45px", // 버튼과 간격 조절
              }}
            />
            <button type="submit" onClick={handleSearch}>
              <Search />
            </button>
          </div>
        </form>

        {/* 추천 단어 목록 렌더링 */}
        {showSuggestions && (
          <ul className={styles.suggestionList}>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => selectSuggestion(suggestion)}>
                <span style={{ borderBottom: "1px solid gray", paddingBottom: "1px" }}>{suggestion}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
