//Myplan.js
import React from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";


const Myplan = ({ thumbnails, showNavbar = true }) => {
  const displayedThumbnails = thumbnails.slice(0, 3);

  if (thumbnails.length === 0) {
    return (
      <div className="myplan-container">
        {showNavbar && (
          <div className="myplan-navbar">
            <div className="mypage_navbar">
              <div>나의 여행계획</div>
              <div style={{ flexGrow: "1" }}></div>
              <div>
                <Link to="/myplan">
                  더보기
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="myplan_images">
          <p>아직 저장하신 여행계획이 없습니다</p>
        </div>
      </div>
    );
  }

  return (
    <div className="myplan-container">
      {showNavbar && (
        <div className="myplan-navbar">
          <div className="mypage_navbar">
            <div>나의 여행계획</div>
            <div style={{ flexGrow: "1" }}></div>
            <div>
              <Link to="/myplan">
                더보기
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="myplan_images">
        <div className="thumbnail-group">
          {displayedThumbnails.map((thumbnail) => (
            <div key={thumbnail.id} className="myplan_img">
              <p>{thumbnail.src}</p>
              {/* 이미지 컴포넌트로 교체하세요. */}
              <img src={`url_to_your_image/${thumbnail.src}.jpg`} alt={`Thumbnail ${thumbnail.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myplan;