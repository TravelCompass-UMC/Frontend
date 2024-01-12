import React, { useState } from "react";
import "../styles/Place.css";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            maxLength="20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="궁금한 지역을 검색해보세요."
          />
          <button type="submit">검색</button>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
