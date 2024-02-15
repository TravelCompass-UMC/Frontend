//Otherplanpage.js
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
import { OtherTravelPlanSection } from "./MyPage";
import { OtherplanThumbnail } from "./MyPage";
import { Container } from "react-bootstrap";
import { useState } from "react";
import otherplans from "../../tempdata/otherplandata";

export function Otherplanpage() {
  const [others] = useState(otherplans);
  const [currentPage, setCurrentPage] = useState(1);
  const plansPerPage = 9;

  // 현재 페이지의 첫 번째와 마지막 묶음의 인덱스를 계산
  const indexOfLastPlan = currentPage * plansPerPage;
  const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
  const currentOthers = others.slice(indexOfFirstPlan, indexOfLastPlan);

  // 페이지 변경을 처리할 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 이전 페이지와 다음 페이지로 이동하는 함수
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(others.length / plansPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <p className="page-title">관심있는 여행계획</p>
      {/* 3*3 형식으로 표시 */}
      {currentOthers.length > 0 && (
        <div>
          <div className="row">
            {currentOthers.map((other, i) => {
              return (
                <div key={i} className="col-md-4 thumbnail-container">
                  <OtherplanThumbnail others={other} i={i + 1}></OtherplanThumbnail>
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
            {Array.from({ length: Math.ceil(others.length / plansPerPage) }).map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`${currentPage === index + 1 ? "active" : ""
                    } page-button`}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={goToNextPage}
              className={`page-button ${currentPage === Math.ceil(others.length / plansPerPage)
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

export default Otherplanpage;
  