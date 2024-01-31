// Myplanpage.js
import React, { Component } from "react";
import styles from "../../styles/Mypages.css";
import myplans from "../../tempdata/myplandata";
import { MyTravelPlanSection } from "./MyPage";
import { useState } from "react";
import { MyplanThumbnail } from "./MyPage";
import { Container } from "react-bootstrap";


function Myplanpage() {
  const [plans] = useState(myplans);
  const [currentPage, setCurrentPage] = useState(1);
  const plansPerPage = 9;

  // 현재 페이지의 첫 번째와 마지막 묶음의 인덱스를 계산
  const indexOfLastPlan = currentPage * plansPerPage;
  const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
  const currentPlans = plans.slice(indexOfFirstPlan, indexOfLastPlan);

  // 페이지 변경을 처리할 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 이전 페이지와 다음 페이지로 이동하는 함수
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(plans.length / plansPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="planpage-container">
      <h3>나의 여행계획</h3>
      {/* 3개씩 묶어서 표시 */}
      {currentPlans.length > 0 && (
        <div>
          <div className="row">
            {currentPlans.map((plan, i) => {
              return (
                <div key={i} className="col-md-4">
                  <MyplanThumbnail plans={plan} i={i + 1}></MyplanThumbnail>
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
            {Array.from({ length: Math.ceil(plans.length / plansPerPage) }).map(
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
                currentPage === Math.ceil(plans.length / plansPerPage)
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

export default Myplanpage;