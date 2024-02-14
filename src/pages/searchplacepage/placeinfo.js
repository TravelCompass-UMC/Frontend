import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";
import searchImg from "../../assets/images/Place/검색창.svg";
import searchBtn from "../../assets/images/Place/searchBtn.svg";
import "../../styles/searchplace/placeinfo.css";  

const PlaceInfo = () => {
  const { search, state } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const navigate = useNavigate();  
  const [searchedLocation, setSearchedLocation] = useState(state?.searchedLocation || '');

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng, name] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
      setSearchedLocation(name);
    }
  }, [searchQuery, state]);

  const handlePinClick = () => {
    let placeName;
    switch (searchedLocation) {
      case '서울':
        placeName = 'seoul';
        break;
      case '제주도':
        placeName = 'jeju';
        break;
      case '부산':
        placeName = 'busan';
        break;
      case '여수':
        placeName = 'yeosu';
        break;
      case '경주':
        placeName = 'gyeongju';
        break;
      case '속초':
        placeName = 'sokcho';
        break;
      case '강릉':
        placeName = 'gangneung';
        break;
      case '양양':
        placeName = 'yangyang';
        break;
      default:
        // Default case for other locations
        placeName = '';
    }
    navigate(`/placeinfo1_${placeName}`, { state: { searchedLocation: searchedLocation } });
  };
  
  const handleSearch = (query) => {
    let coordinates = { lat: 0, lng: 0 }; // 기본 좌표

    // 검색어에 따라 해당 지역의 위도와 경도 설정
    switch (query) {
      case '서울':
        coordinates = { lat: 37.56313, lng: 126.98854 }; // 서울의 위도와 경도
        break;
      case '제주도':
        coordinates = { lat: 33.380462, lng: 126.539098 }; // 제주도의 위도와 경도
        break;
      case '부산':
        coordinates = { lat: 35.22649, lng: 129.07273 }; // 부산의 위도와 경도
        break;
      case '여수':
        coordinates = { lat: 34.76769, lng: 127.66162 }; // 여수의 위도와 경도
        break;
      case '경주':
        coordinates = { lat: 35.84956, lng: 129.24678 }; // 경주의 위도와 경도
        break;
      case '속초':
        coordinates = { lat: 38.18131, lng: 128.52054 }; // 속초의 위도와 경도
        break;
      case '강릉':
        coordinates = { lat: 37.73594, lng: 128.82734 }; // 강릉의 위도와 경도
        break;
      case '양양':
        coordinates = { lat: 38.01295, lng: 128.59926 }; // 양양의 위도와 경도
        break;
      default:
        // 기본값은 초기 좌표인 { lat: 0, lng: 0 } 유지
        break;
    }

    // Update map location
    setMapLocation(coordinates);

    // Encode query parameter
    const encodedQuery = encodeURIComponent(query);

    // Update search query in URL
    navigate(`/placeinfo?q=${coordinates.lat},${coordinates.lng},${encodedQuery}`, { state: { searchedLocation: query } });
  };

  // 검색 버튼 클릭 시 handleSearch 함수 호출
  const handleSearchButtonClick = () => {
    handleSearch(searchedLocation);
  };

  return (
    <div className="page-container">
      <div className="map-container">
        <Map location={mapLocation} onPinClick={handlePinClick} containerStyle={{ width: "100vw", height: "91vh" }}/>
      </div>
      <div className="sidebar-container">
        <SidebarL width={320}>
          <div style={{ display: 'inline-block' }}>
            <img src={searchImg} alt="search-image" width={280} />
            <div className="placeName">
              <input
                type="text"
                value={searchedLocation}
                onChange={(e) => {
                  setSearchedLocation(e.target.value);
                }}
                placeholder="검색된 지역명"
                style={{
                  border: "none", 
                  outline: "none", 
                }}
              />
            </div>
          </div>
          <br/> <p className="searched-location">Click a pin</p>
          <br/> <div className="popularplace">
          </div>
          <button
            type="submit"
            onClick={handleSearchButtonClick}
            style={{
              position: 'absolute',
              top: '5.8vh',
              right: '10%',
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
        </SidebarL>
      </div>
    </div>
  );
};

export default PlaceInfo;
