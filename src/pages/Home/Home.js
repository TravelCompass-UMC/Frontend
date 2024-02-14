import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Home/Home.css";
import SearchComponent from "../../components/Search.js";
import GoogleMapComponent from "../../components/Map";
import SidebarR from "../../components/SidebarR.js";

const Home = () => {
  const navigate = useNavigate();
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  const handleSearch = (location, query) => {
    setSearchedLocation(location);
    setSearchQuery(query); // 검색어 저장

    navigate(
      `/placeinfo?q=${location.lat},${location.lng},${encodeURIComponent(
        query
      )}`,
      {
        state: { searchedLocation: query }, // 검색된 지역명을 state에 저장하여 전달
      }
    );
  };

  return (
    <div>      
      <SearchComponent onSearch={handleSearch} />
      <GoogleMapComponent containerStyle={{ width: "80vw", height: "55vh" }} />

      <SidebarR width={450}>
        <div className="sidebar-content">
          <h1>대한민국</h1>
          <p>지금 대한민국의 가장 인기 많은 지역</p>
          <ul>
            <li>
              TOP1 <br />
              <Link to={`/placeinfo1_seoul`}>서울</Link>
            </li>
            <li>
              TOP2 <br />
              <Link to={`/placeinfo1_jeju`}>제주도</Link>
            </li>
            <li>
              TOP3 <br />
              <Link to={`/placeinfo1_busan`}>부산</Link>
            </li>
            <li>
              TOP4 <br />
              <Link to={`/placeinfo1_gyeongju`}>경주</Link>
            </li>
          </ul>
          <div className="popularplace">
            <p>선택하신 도시의 가장 인기 많은 장소</p>
          </div>
        </div>
      </SidebarR>
    </div>
  );
};

export default Home;
