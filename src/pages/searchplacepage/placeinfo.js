// PlaceInfo.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";  // Import useNavigate
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";

const PlaceInfo = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const navigate = useNavigate();  // Use useNavigate to navigate to other pages

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
    <div>
      <h2>Search Results</h2>
      <SidebarL width={320}>
        <p>추천 즐겨찾기</p>
        <div className="popularplace">
          <p>선택하신 지역의 가장 인기 많은 장소</p>
          <li></li>
          <li></li>
        </div>
        <p>추천 장소 목록</p>
      </SidebarL>
      {/* Pass the handlePinClick function to Map component */}
      <Map location={mapLocation} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfo;
