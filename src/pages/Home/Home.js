import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Home/Home.css";
import "../../styles/Mypages.css";
import SearchComponent from "../../components/Search.js";
import GoogleMapComponent from "../../components/Map";
import SidebarR from "../../components/SidebarR.js";
import { EndSection } from "../mapages/MyPage.js";
import { OtherplanThumbnail } from "../mapages/MyPage.js";
import otherplans from "../../tempdata/otherplandata.js";

const Home = () => {  
  const navigate = useNavigate();
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

   // 여행 계획 데이터에서 처음 6개의 항목만 선택
   const firstSixPlans = otherplans.slice(0, 6).map(others => ({ ...others, liked: 0 }));

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
      <GoogleMapComponent containerStyle={{ width: "100vw", height: "70vh" }} />

      {/* <SidebarR width={450}>
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
      </SidebarR> */}

      {/* OtherTravelPlanSection 스타일 적용 */}
      <div className="container">
        <div className="row">
          {firstSixPlans.map((other, i) => {
            return (
              <div key={i} className="col-md-4 thumbnail-container">
                {/* `liked`를 `false`로 설정하여 하트가 눌러져 있지 않도록 함 */}
                <OtherplanThumbnail others={other} i={i + 1}></OtherplanThumbnail>
              </div>
            );
          })}
        </div>
      </div>
      <EndSection />
    </div>
  );
};

export default Home;
