//placeinfo2.js
//제주도의 추천 장소 (빛의 벙커, 비양도 봉수대, 아르떼뮤지엄 제주)

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";
import SearchRecommendations from '../../components/Recommendation';
import PlaceDetail from '../../components/PlaceDetail';

const PlaceInfo1 = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar open by default

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    } else {
      setMapLocation({ lat: 33.3868, lng: 126.582 });
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: '빛의 벙커', placeId: "ChIJnTFvBUcTDTURh7KTiaHnYYE", lat: 33.440005, lng: 126.899003 },
        { name: '비양도 봉수대', placeId: "ChIJRxWgQQBBDTURAT3xqkmF210", lat: 33.515547, lng: 126.969224 },
        { name: '아르떼뮤지엄 제주', placeId: "ChIJUwtlFmhfDDURUr3BMm9Sb6k", lat: 33.396560, lng: 126.344625 },
      ];
      setRecommendations(data);
    };

    fetchRecommendations();
  }, []);

  const handlePinClick = (place) => {
    setSelectedPlace(place);
    setSidebarOpen(true);
  };

  return (
    <div>
      <SidebarL width={320} >
        <div className="popularplace">
          <p>제주도의 가장 인기 많은 장소</p>
          <p>추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} /> 
    </div>
  );
};

export default PlaceInfo1;
