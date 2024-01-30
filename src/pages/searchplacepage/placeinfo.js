// src > pages > searchplacepage > placeinfo.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";
import "../../styles/placeinfo.css"; // 추가

const PlaceInfo = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const navigate = useNavigate();  

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    }
  }, [searchQuery]);

  // Handle pin click function
  const handlePinClick = (placeName) => {
    // Navigate to /placeinfo1 when a pin is clicked
    navigate(`/placeinfo1/${placeName}`);
  };

  return (
    <div className="page-container">
      <div className="map-container">
        <Map location={mapLocation} onPinClick={handlePinClick}/>
      </div>
      <div className="sidebar-container">
        <SidebarL width={320}>
          <p>추천 즐겨찾기</p>
          <div className="popularplace">
            <p>해당 장소의 가장 인기 많은 장소</p>
            <p>추천 장소 목록</p>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </div>
        </SidebarL>
      </div>
    </div>
  );
};

export default PlaceInfo;
