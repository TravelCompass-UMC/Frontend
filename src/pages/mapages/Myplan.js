// Myplan.js
import React from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";

const Myplan = () => {
  return (
    <div className="myplan-container">
      {/* 내 여행 계획 컴포넌트의 내용을 작성 */}
      <div className="mypage_navbar">
        <p>나의 여행계획</p>
        <p>더보기</p>
      </div>
      <div className="myplan_img">썸네일 1</div>
      <div className="myplan_img">썸네일 2</div>
      <div className="myplan_img">썸네일 3</div>
    </div>
  );
};

export default Myplan;
