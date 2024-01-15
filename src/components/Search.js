import React, { useState } from "react";
import "../styles/Place.css";

const SearchComponent = () => {
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
    return allDestinations.filter(destination =>
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

  const handleSearch = (event) => {
    event.preventDefault();
    // 실제 검색 로직을 여기에 추가
    console.log("검색어:", searchQuery);
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