// placeinfo.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";
import "../../styles/placeinfo.css"; 
import searchImg from "../../assets/images/Place/검색창.svg";

const PlaceInfo = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const navigate = useNavigate();  
  const [searchedLocation, setSearchedLocation] = useState(null); // 검색된 지역명 상태 추가

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng, name] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
      setSearchedLocation(name); // 검색된 지역명 설정
    }
  }, [searchQuery]);

  // Handle pin click function
  const handlePinClick = (placeName) => {
    // Navigate to /placeinfo1 when a pin is clicked
    navigate(`/placeinfo1/${placeName}`, { state: { searchedLocation: searchedLocation } }); // 검색어 함께 전달
  };

  return (
    <div className="page-container">
      <div className="map-container">
        <Map location={mapLocation} onPinClick={handlePinClick}/>
      </div>
      <div className="sidebar-container">
        <SidebarL width={320}>
          <img src={searchImg} alt="search-image" width={280}/> <br/>
          <br/> <div>검색된 장소: {searchedLocation}</div>
          <br/> <p className="searched-location">Click a pin</p>
          <br/> <div className="popularplace">
        </div>
        </SidebarL>
      </div>
    </div>
  );
};

export default PlaceInfo;
