// placeinfo1.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";
import SearchRecommendations from "../../components/Recommendation";
import PlaceDetail from "../../components/PlaceDetail";
import "../../styles/placeinfo.css"; 


const PlaceInfo1 = () => {
  const { state } = useLocation(); // state에서 검색어 받아오기
  const searchedLocation = state?.searchedLocation; // 검색어 받아오기
  const searchParams = new URLSearchParams(window.location.search); // 검색어 직접 가져오기
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng, name] = searchQuery.split(",");
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    } else {
      setMapLocation({ lat: 37.56313, lng: 126.98854 });
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: "경복궁 광화문", placeId: "ChIJsYP2VHSjfDURwAtqfCHFGfo", lat: 37.57598, lng: 126.97680 },
        { name: "63빌딩", placeId: "ChIJn_UiGDyffDURWfZBRKwb5YE", lat: 37.51993, lng: 126.94010 },
        { name: "DDP 동대문디자인플라자", placeId: "ChIJ8xRYr29FezUR3AtFqx2pIlw", lat: 37.56784, lng: 127.00906 },
      ];
      setRecommendations(data);
    };

    fetchRecommendations();
  }, []);

  const handlePinClick = (place) => {
    setSelectedPlace(place);
    setMapLocation({ lat: place.lat, lng: place.lng });
  };

  return (
    <div>
      <SidebarL width={320}>
      <div className="popularplace">
          <p>{searchedLocation}의 추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfo1;
