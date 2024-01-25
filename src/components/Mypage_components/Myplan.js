import React from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";

const Myplan = () => {
  return (
    <div className="myplan-container">
      <div className="mypage_navbar">
        <div>나의 여행계획</div>
        <div style={{ flexGrow: "1" }}></div>
        <div>
          <Link to="/myplan">
            더보기
          </Link>
        </div>
      </div>

      <div className="myplan_images">
        <div className="myplan_img">
          썸네일 1
        </div>
        <div className="myplan_img">
          썸네일 2
        </div>
        <div className="myplan_img">
          썸네일 3
        </div>
      </div>
    </div>
  );
};

export default Myplan;
