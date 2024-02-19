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
import up from "../../assets/images/Home/up.svg";
import right from "../../assets/images/Home/right.svg";
import down from "../../assets/images/Home/down.svg";
import left from "../../assets/images/Home/left.svg";
import { InterestedPlaceThumbnail } from "../mapages/MyPage.js";
import homeplacesData from "../../tempdata/Homedata.js";
import homeplaces from "../../tempdata/Homedata.js";

const Homeplace = {
  HomebigBox: {
    width: "200px",
    height: "320px",
    background: "#F3F5FF",
    borderRadius: 16,
    marginBottom: "20px",
  },
  HomeimageBox: {
    width: "100%",
    height: "240px",
    background: "#BFC4D8",
    borderRadius: 15,
    position: 'relative',
    boxShadow: "rgba(0, 0, 0, 0.1) 4px 4px 8px 0px"
  },
  HometextBox: {
    width: "100%",
    height: "92px",
    background: "#F3F5FF",
    borderRadius: 15,
  },
  categoryText: {
    marginTop: 10,
    color: "#7F85A3",
    marginLeft: 10,
    fontSize: 15,
    fontFamily: "SUIT Variable",
    fontWeight: "400",
    // lineHeight: 25.5,
    wordWrap: "break-word",
  },
  placenameText: {
    marginTop: 5,
    marginLeft: 10,
    color: "#191B24",
    fontSize: 19,
    fontFamily: "SUIT Variable",
    fontWeight: "700",
    wordWrap: "break-word",
  },
};

function Home() {

  const [selectedLocation, setSelectedLocation] = useState('서울'); // 초기값을 '서울'로 설정

  // 버튼 클릭 이벤트를 처리하는 함수
  const handleLocationChange = (location) => {
    setSelectedLocation(location); // 선택된 지역으로 상태 업데이트
  };


  const [others, setOthers] = useState(otherplans);
  const [placesData,  setPlacesData] = useState(homeplacesData);


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

    const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  };

  const textStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "calc(100% - 50px)",
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <SearchComponent onSearch={handleSearch} />
      <div style={{ marginRight: "auto", paddingRight: "30vw" }}>
        <GoogleMapComponent containerStyle={{
          width: "80vw",
          height: "75vh",
        }} />
      </div>
      <SidebarR width={850} height={"75vh"}>
        <div className="sidebar-content">
          <p className="Koreatitle">대한민국</p>
          <p className="popluartext">지금 대한민국의 가장 인기 많은 지역</p>
          {/* 지역 버튼. 클릭 시 handleLocationChange 함수 호출 */}
          <button className="topbox" onClick={() => handleLocationChange('서울')}>
            <img src={up} className="arrow-image" />
            <div className="top-number">TOP.1</div>
            <div className="top-location-name">서울</div>
          </button>
          <button className="topbox" onClick={() => handleLocationChange('제주도')}>
            <img src={right} className="arrow-image" />
            <div className="top-number">TOP.2</div>
            <div className="top-location-name">제주도</div>
          </button>
          <button className="topbox" onClick={() => handleLocationChange('부산')}>
            <img src={down} className="arrow-image" />
            <div className="top-number">TOP.3</div>
            <div className="top-location-name">부산</div>
          </button>
          <button className="topbox" onClick={() => handleLocationChange('경주')}>
            <img src={left} className="arrow-image" />
            <div className="top-number">TOP.4</div>
            <div className="top-location-name">경주</div>
          </button>
          <div>
            {/* 선택된 지역을 표시 */}
            <p className="popluarplacetext">{selectedLocation}</p>
            <p className="selectpopulartext">선택하신 도시의 가장 인기 많은 장소</p>
          </div>
          <div className="popularplacebox">
            <div style={Homeplace.HomebigBox}>
              <div style={Homeplace.HomeimageBox}>
                <img className="Homeplaceimg"
                  style={{}}
                  alt="인기장소"
                />
              </div>
              <div style={containerStyle}>
                <div style={textStyle}>
                  <a style={Homeplace.categoryText}>명소</a>
                  <p style={Homeplace.placenameText}>창덕궁</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarR>


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
