// Myplanpage.js
import React, { Component } from "react";
import Myplan from "../../components/Mypage_components/Myplan";
import styles from "../../styles/Mypages.css";

class Myplanpage extends Component {
  thumbnails = [
    { id: 1, src: "서울" },
    { id: 2, src: "부산" },
    { id: 3, src: "제주도" },
    { id: 4, src: "여수" },
    { id: 5, src: "강릉" },
    { id: 6, src: "대전" },
    { id: 7, src: "경기도" },
    // ... 추가 데이터
  ];

  render() {
    const thumbnailsPerPage = 3;

    const thumbnailGroups = [];
    for (let i = 0; i < this.thumbnails.length; i += thumbnailsPerPage) {
      thumbnailGroups.push(this.thumbnails.slice(i, i + thumbnailsPerPage));
    }

    return (
      <div className="planpage-container">
        <div className="myplan_images">
          {thumbnailGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="thumbnail-group">
              {/* Myplan 컴포넌트에 showNavbar prop 전달 */}
              <Myplan thumbnails={group} showNavbar={false} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Myplanpage;
