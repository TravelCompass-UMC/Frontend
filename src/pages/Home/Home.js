import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../styles/Home.css';
import GoogleMapComponent from "../../components/Map";
import SidebarR from "../../components/SidebarR";


class home extends Component {
  render() {
    return (
      <div className="container">
        <div className="map">배경 이미지 지도</div>
        {/* <GoogleMapComponent/> */}
        <input type="text" className="searchbox" placeholder="궁금한 지역을 검색해보세요"></input>
        <SidebarR width={320}>
        <h1>대한민국</h1>
        <p>지금 대한민국의 가장 인기 많은 지역</p>
        <ul>
          <li>TOP1 <br/>
            <Link to={`/city/seoul`}>서울</Link>
          </li>
          <li>TOP2 <br/>
            <Link to={`/city/jeju`}>제주도</Link>
          </li>
          <li>TOP3 <br/>
            <Link to={`/city/busan`}>부산</Link>
          </li>
          <li>TOP4 <br/>
            <Link to={`/city/gyeongju`}>경주</Link>
          </li>
        </ul>
        <div className="popularplace">
          <p>선택하신 도시의 가장 인기 많은 장소</p>
        </div>
          </SidebarR>  
      </div>

    );
  }
}

export default home;

