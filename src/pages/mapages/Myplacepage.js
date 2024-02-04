//Myplacepage.js
import React, { useState } from "react";
import styles from "../../styles/Mypages.css";
import myplaces from "../../tempdata/myplacedata";
import { InterestedPlaceThumbnail } from "./MyPage";

function Myplacepage() {
  const [places] = useState(myplaces);
  const [currentPage, setCurrentPage] = useState(1);
  const placesPerPage = 12;

  // 현재 페이지의 첫 번째와 마지막 묶음의 인덱스를 계산
  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

  // 페이지 변경을 처리할 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 이전 페이지와 다음 페이지로 이동하는 함수
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(places.length / placesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <h3>관심있는 장소</h3>
      {/* 3x4 형식으로 표시 */}
      {currentPlaces.length > 0 && (
        <div>
          <div className="row">
            {currentPlaces.map((place, i) => {
              return (
                <div key={i} className="col-md-4 thumbnail-container">
                  <InterestedPlaceThumbnail place={place} i={i + 1}></InterestedPlaceThumbnail>
                </div>
              );
            })}
          </div>
          {/* 페이지네이션 버튼들 */}
          <div className="pagination">
            <button
              onClick={goToPrevPage}
              className={`page-button ${currentPage === 1 ? "disabled" : ""}`}
            >
              이전페이지
            </button>
            {Array.from({ length: Math.ceil(places.length / placesPerPage) }).map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`${
                    currentPage === index + 1 ? "active" : ""
                  } page-button`}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={goToNextPage}
              className={`page-button ${
                currentPage === Math.ceil(places.length / placesPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              다음페이지
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Myplacepage;