import React, { useState } from "react";
import styles from "../../styles/planedit/searchModal.module.css";
// 이미지 경로를 import 하는 방법을 사용합니다.
import searchBtnImage from "../../assets/images/Place/searchBtn.svg";

const SearchModal = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      // Google Places API Text Search 호출을 위한 URL
      const placesApiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&key=AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU`;

      // Google Places API 호출 (CORS 정책 때문에 서버 사이드에서 호출 필요)
      const response = await fetch(placesApiUrl);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        // 검색된 장소의 첫 번째 결과를 사용
        const place = data.results[0];
        const location = place.geometry.location; // 위치 정보
        const name = place.name; // 장소 이름
        const photoReference = place.photos && place.photos.length > 0 ? place.photos[0].photo_reference : null; // 사진 참조

        // 검색된 장소 정보를 부모 컴포넌트로 전달
        onSearch({ location, name, photoReference });
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
        <form onSubmit={handleSearch}>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              maxLength="20"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="궁금한 지역을 검색해보세요."
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
