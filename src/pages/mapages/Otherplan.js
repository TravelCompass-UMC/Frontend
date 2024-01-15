// Otherplan.js
import React from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";

const Otherplan = () => {
  return (
    <div className="otherplan-container">
      {/* 관심 있는 여행 계획서 컴포넌트의 내용을 작성 */}
      <p>관심있는 여행계획서</p>
      <div className="ohterplan_img">썸네일1</div>
      <div className="ohterplan_img">썸네일2</div>
      <div className="ohterplan_img">썸네일3</div>
    </div>
  );
};

export default Otherplan;
