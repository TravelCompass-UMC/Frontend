import React, { Component } from "react";
import '../../styles/Home.css';
import GoogleMapComponent from "../../components/Map";
import SidebarR from "../../components/SidebarR";


class home extends Component {
  render() {
    return (
      <div className="container">
        <div className="map">배경 이미지 지도</div>
        <input type="text" className="searchbox" placeholder="궁금한 지역을 검색해보세요"></input>
        <SidebarR width={320}>
          <p>대한민국</p>
          <p>지금 대한민국의 가장 인기 많은 지역</p>
          <ul>
            <li>TOP1 서울</li>
            <li>TOP2 제주도</li>
            <li>TOP3 부산</li>
            <li>TOP4 여수</li>
          </ul>
          <a href="#">서울</a>
          <div className="popularplace">
            <p>선택하신 도시의 가장 인기 많은 장소</p>
          </div>
          {/* <a href="#">제주도</a>
          <a href="#">부산</a>
          <a href="#">여수</a> */}
          </SidebarR>

        <div className="writtenplan">
          <p>국내 인기 여행계획</p>
          <a href ="#">창덕궁 기타 등등</a>
        </div>      
      </div>

    );
  }
}

export default home;

