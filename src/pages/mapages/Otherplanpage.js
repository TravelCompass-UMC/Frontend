//Otherplanpage.js
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
import { OtherTravelPlanSection } from "./MyPage";
import { OtherplanThumbnail } from "./MyPage";
import { Container } from "react-bootstrap";
import { useState } from "react";
import otherplans from "../../tempdata/otherplandata";

function Otherplanpage() {
  const [others, setOthers] = useState(otherplans);
  const [currentPage, setCurrentPage] = useState(1);
  const plansPerPage = 9;

  const indexOfLastPlan = currentPage * plansPerPage;
  const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
  const currentOthers = others.slice(indexOfFirstPlan, indexOfLastPlan);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const toggleLike = (otherId) => {
    setOthers(prevOthers => prevOthers.filter(other => other.id !== otherId));
  };

  return (
    <div className="container">
      <p className="page-title">관심있는 여행계획</p>
      {currentOthers.length > 0 && (
        <div>
          <div className="row">
            {currentOthers.map((plan, i) => (
              <div key={i} className="col-md-4 thumbnail-container">
                <OtherplanThumbnail 
                  others={plan} 
                  i={i + 1} 
                  onToggleLike={toggleLike} 
                  isDeletable={true}
                />
              </div>
            ))}
          </div>
          <div className="pagination">
            <button onClick={goToPrevPage} className={`page-button ${currentPage === 1 ? "disabled" : ""}`}>
              이전페이지
            </button>
            {Array.from({ length: Math.ceil(others.length / plansPerPage) }, (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)} className={`page-button ${currentPage === index + 1 ? "active" : ""}`}>
                {index + 1}
              </button>
            ))}
            <button onClick={goToNextPage} className={`page-button ${currentPage === Math.ceil(others.length / plansPerPage) ? "disabled" : ""}`}>
              다음페이지
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Otherplanpage;