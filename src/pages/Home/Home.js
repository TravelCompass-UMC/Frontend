//Home.js
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
import VectorImage from "../../assets/images/Pages/Vector (1).png";

function Home() {
  const [others, setOthers] = useState(otherplans);
  const navigate = useNavigate();
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  const toggleLike = (otherId) => {
    const updatedOthers = others.map(other => {
      if (other.id === otherId) {
        return { ...other, liked: other.liked === 1 ? 0 : 1 };
      }
      return other;
    })
  };

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
        <div
          style={{
            display: "flex",
            justifyContent: "20%",
            marginBottom: "-1.5%",
            marginLeft: "2.5%",
          }}
        >
          <div style={{ marginTop: "40px" }}>
            <img
              src={VectorImage}
              style={{
                position: "relative",
              }}
            />
          </div>
        </div>
        <div
          className="nav-bar"
          style={{
            display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>국내 인기 여행 계획</p>
              <Link to="/searchdiary">
                <button className="morebutton">더보기</button>
              </Link>
            </div>
            <div className="row">
              {firstSixPlans.map((other, i) => {
                return (
                  <div key={i} className="col-md-4 thumbnail-container">
                    {/* `liked`를 `false`로 설정하여 하트가 눌러져 있지 않도록 함 */}
                    <OtherplanThumbnail others={other} i={i + 1} onToggleLike={toggleLike} isDelete={false}></OtherplanThumbnail>
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
