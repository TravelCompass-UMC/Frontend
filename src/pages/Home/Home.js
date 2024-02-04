import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import GoogleMapComponent from "../../components/Map";
import SidebarR from "../../components/SidebarR";
import SidebarL from "../../components/SidebarL";

class Home extends Component {
  state = {
    nickname: "",
  };

  componentDidMount() {
    const storedNickname = sessionStorage.getItem("nickname");
    if (storedNickname) {
      this.setState({ nickname: storedNickname });
    }
  }

  render() {
    const { nickname } = this.state;

    return (
      <div>
        <div className="map">
          {/* <GoogleMapComponent /> */}
        </div>

        <input
          type="text"
          className="searchbox"
          placeholder="궁금한 지역을 검색해보세요"
        ></input>

        <div className="loginMessage">
          {nickname ? (
            <div>환영합니다, {nickname}님!</div>
          ) : (
            <div>로그인이 필요합니다.</div>
          )}
        </div>

        <SidebarR>
          <h1>대한민국</h1>
          <p>지금 대한민국의 가장 인기 많은 지역</p>
          <ul>
            <li>
              TOP1 <br />
              <Link to={`/city/seoul`}>서울</Link>
            </li>
            <li>
              TOP2 <br />
              <Link to={`/city/jeju`}>제주도</Link>
            </li>
            <li>
              TOP3 <br />
              <Link to={`/city/busan`}>부산</Link>
            </li>
            <li>
              TOP4 <br />
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

export default Home;
