//Myplacepage.js
import React, { useState, useMemo } from "react";
import styles from "../../styles/Mypages.css";
import myplaces from "../../tempdata/myplacedata";
import { InterestedPlaceThumbnail } from "./MyPage";

function Myplacepage() {

 const [currentCategory, setCurrentCategory] = useState('전체');
  const [places] = useState(myplaces);
  const [currentPage, setCurrentPage] = useState(1);
  const placesPerPage = 12;
  const [sortOrder, setSortOrder] = useState('likes'); // 초기 정렬 상태를 '좋아요순'으로 설정
  const [showDropdown, setShowDropdown] = useState(false);

  // 정렬 방식에 따른 제목 결정
  const dropdownTitle = sortOrder === 'likes' ? '좋아요순' : '별점순';

  const filteredPlaces = places.filter(place => {
    if (currentCategory === '전체') return true;
    if (currentCategory === '숙소' && place.category === 1) return true;
    if (currentCategory === '명소' && place.category === 2) return true;
    return currentCategory === '카페/식당' && place.category === 3;
  });

  const sortedPlaces = useMemo(() => {
    const sortPlaces = [...filteredPlaces];
    if (sortOrder === 'likes') {
      return sortPlaces.sort((a, b) => b.bookmark - a.bookmark);
    } else if (sortOrder === 'rating') {
      return sortPlaces.sort((a, b) => b.star - a.star);
    }
    return sortPlaces;
  }, [filteredPlaces, sortOrder]);

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = sortedPlaces.slice(indexOfFirstPlace, indexOfLastPlace);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNextPage = () => currentPage < Math.ceil(sortedPlaces.length / placesPerPage) && setCurrentPage(currentPage + 1);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="container">
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className="page-title">관심있는 장소</p>
        <div className="sort-dropdown">
          <button onClick={toggleDropdown} className="mypagesort-button">{dropdownTitle}</button>
          {showDropdown && (
            <div className="sort-options">
              <button onClick={() => { setSortOrder('rating'); setShowDropdown(false); }} className="sort-option1">별점순</button>
              <button onClick={() => { setSortOrder('likes'); setShowDropdown(false); }} className="sort-option2">좋아요순</button>
            </div>
          )}
        </div>
      </div>
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
      <div className="row">
        {currentPlaces.map((place, index) => (
          <div key={index} className="col-md-4 place-thumbnail-container">
            <InterestedPlaceThumbnail places={place}></InterestedPlaceThumbnail>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPrevPage} className={`page-button ${currentPage === 1 ? "disabled" : ""}`}>이전페이지</button>
        {Array.from({ length: Math.ceil(sortedPlaces.length / placesPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={`page-button ${currentPage === index + 1 ? "active" : ""}`}>{index + 1}</button>
        ))}
        <button onClick={goToNextPage} className={`page-button ${currentPage === Math.ceil(sortedPlaces.length / placesPerPage) ? "disabled" : ""}`}>다음페이지</button>
      </div>
    </div>
  );
}

export default Myplacepage;