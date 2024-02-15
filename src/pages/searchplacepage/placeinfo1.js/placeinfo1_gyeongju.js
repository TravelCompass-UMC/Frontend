// placeinfo1_gyeongju.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Map from "../../../components/Map";
import SidebarL from "../../../components/SidebarL";
import searchImg from "../../../assets/images/Place/검색창.svg";
import searchBtn from "../../../assets/images/Place/searchBtn.svg"; 
import SearchRecommendations from "../../../components/Recommendation/RecommendationGyeongju";
import PlaceDetail from "../../../components/searchPlace/PlaceDetail";
import "../../../styles/searchplace/placeinfo.css";  

const PlaceInfoGyeongju = () => {
  const { state } = useLocation(); // state에서 검색어 받아오기
  const searchedLocation = state?.searchedLocation; // 검색어 받아오기
  const searchParams = new URLSearchParams(window.location.search); // 검색어 직접 가져오기
  const [mapLocation, setMapLocation] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(searchedLocation || "경주"); // 검색어 상태 변경 및 초기값 설정
  const [zoomLevel, setZoomLevel] = useState(16);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchedLocation) {
      setMapLocation({ lat: 35.82047, lng: 129.26006 });
    } else {
      setMapLocation({ lat: 35.82047, lng: 129.26006 });
    }
  }, [searchedLocation]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: "불국사", placeId: "ChIJQwyfbNqyZzUR31ffyfmvm6w", lat: 35.79026, lng: 129.33208 },
        { name: "경주월드", placeId: "ChIJ90r5yn5NZjUR0ymH-He3gsY", lat: 35.84634, lng: 129.28302 },
        { name: "월정교", placeId: "ChIJI6-IFWBOZjURG2fe65bJAs0", lat: 35.82944, lng: 129.21809 },
      ];
      setRecommendations(data);
    };

    fetchRecommendations();
  }, []);

  const handlePinClick = (place) => {
    setSelectedPlace(place);
    setMapLocation({ lat: place.lat, lng: place.lng });
    setZoomLevel(16); // 확대 레벨 조정
  };

  const handleSearch = () => {
    if (selectedPlace.toLowerCase() === "경주") {
      navigate(`/placeinfo1_gyeongju`);
    } else if (selectedPlace.toLowerCase() === "제주도") {
      navigate(`/placeinfo1_jeju`);
    } else if (selectedPlace.toLowerCase() === "서울") {
      navigate("/placeinfo1_seoul");
    } else if (selectedPlace.toLowerCase() === "부산") {
      navigate("/placeinfo1_busan");
    } else if (selectedPlace.toLowerCase() === "강릉") {
      navigate("/placeinfo1_gangneung");
    } else if (selectedPlace.toLowerCase() === "양양") {
      navigate("/placeinfo1_yangyang");
    } else if (selectedPlace.toLowerCase() === "여수") {
      navigate("/placeinfo1_yeosu");
    } else if (selectedPlace.toLowerCase() === "속초") {
      navigate("/placeinfo1_sokcho");
    }
  };

  return (
    <div>
      <div className="map-container">
        <Map location={mapLocation} recommendations={recommendations} zoomLevel={13} onPinClick={handlePinClick} containerStyle={{ width: "100vw", height: "91vh" }}/>
      </div>
      <SidebarL width={320}>
      <div style={{ display: 'inline-block', position: 'relative' }}>
          <img src={searchImg} alt="search-image" width={280} />
          <div className="placeName">
            <input
              type="text"
              value={selectedPlace} // 검색어 입력값 설정
              onChange={(e) => setSelectedPlace(e.target.value)} // 검색어 변경 이벤트 처리
              placeholder="검색할 지역명"
              style={{
                border: "none",
                outline: "none",
                width: "100%"
              }}
            />
          </div>
          <button
            type="submit"
            onClick={handleSearch}
            style={{
              position: 'absolute',
              top: '2vh',
              right: '2%',
              transform: 'translateY(-50%)',
              border: 'none',
              backgroundColor: 'white',
              transition: 'background-color 0.3s', // 배경색 전환 효과
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#FFD465'} // 마우스가 올라갔을 때 배경색 변경
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'} // 마우스가 벗어났을 때 배경색 원래대로 복원
          >
            <img src={searchBtn} alt="search-button" style={{ width: '32px', height: '32px' }} />
          </button>
        </div>
      <div className="popularplace">
          <p className="placeList">경주의 추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
    </div>
  );
};

export default PlaceInfoGyeongju;
