//Myplacepage.js
import React, { useState } from "react";
import styles from "../../styles/Mypages.css";
import myplaces from "../../tempdata/myplacedata";
import { InterestedPlaceThumbnail } from "./MyPage";

function Myplacepage() {

  const [currentCategory, setCurrentCategory] = useState('전체');
  const [places] = useState(myplaces);
  const [currentPage, setCurrentPage] = useState(1);
  const placesPerPage = 12;

  // 카테고리에 따른 필터링 로직
  const filteredPlaces = places.filter(place => {
    if (currentCategory === '전체') return true;
    if (currentCategory === '숙소' && place.category === 1) return true;
    if (currentCategory === '명소' && place.category === 2) return true;
    if (currentCategory === '카페/식당' && place.category === 3) return true;
    return false;
  });

  // 현재 페이지에 표시할 필터링된 장소 계산
  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = filteredPlaces.slice(indexOfFirstPlace, indexOfLastPlace);

  // 페이지 변경을 처리할 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 이전 페이지와 다음 페이지로 이동하는 함수
  const goToPrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNextPage = () => currentPage < Math.ceil(filteredPlaces.length / placesPerPage) && setCurrentPage(currentPage + 1);

  return (
    <div className="container">
      <p className="page-title">관심있는 장소</p>
      <div className="category-buttons">
        {['전체', '숙소', '명소', '카페/식당'].map((category) => (
          <button
            key={category}
            onClick={() => { setCurrentCategory(category); setCurrentPage(1); }}
            className={`category-button ${currentCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* 필터링된 장소를 3x4 형식으로 표시 */}
      <div className="row">
        {currentPlaces.map((place, i) => (
          <div key={i} className="col-md-4 place-thumbnail-container">
            <InterestedPlaceThumbnail places={place}></InterestedPlaceThumbnail>
          </div>
        ))}
      </div>
      {/* 페이지네이션 버튼들 */}
      <div className="pagination">
        <button onClick={goToPrevPage} className={`page-button ${currentPage === 1 ? "disabled" : ""}`}>이전페이지</button>
        {Array.from({ length: Math.ceil(filteredPlaces.length / placesPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={`page-button ${currentPage === index + 1 ? "active" : ""}`}>{index + 1}</button>
        ))}
        <button onClick={goToNextPage} className={`page-button ${currentPage === Math.ceil(filteredPlaces.length / placesPerPage) ? "disabled" : ""}`}>다음페이지</button>
      </div>
    </div>
  );
}

export default Myplacepage;