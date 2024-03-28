// SearchModal.jsx
import React, { useState } from "react";
import styles from "../../styles/planedit/searchModal.module.css";
import searchBtnImage from "../../assets/images/Place/searchBtn.svg";

const SearchModal = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const placesApiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&key=AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU`;

      const response = await fetch(placesApiUrl);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const place = data.results[0];

        // You now pass the formatted_address in the onSearch callback
        onSearch({
          name: place.name,
          photoReference: place.photos ? place.photos[0].photo_reference : null,
          address: place.formatted_address, // This is the formatted address
        });
      } else {
        console.error("No places found");
      }
    } catch (error) {
      console.error("Error fetching places data:", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.searchModalContainer}>
        <form onSubmit={handleSearchSubmit}>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              maxLength="20"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="추가할 장소를 검색하세요."
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <img src={searchBtnImage} alt="Search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
