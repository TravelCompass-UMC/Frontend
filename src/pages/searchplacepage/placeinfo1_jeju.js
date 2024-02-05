// placeinfo1_jeju.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";
import searchImg from "../../assets/images/Place/검색창.svg";
import SearchRecommendations from "../../components/Recommendation/RecommendationJeju";
import PlaceDetail from "../../components/PlaceDetail";
import "../../styles/placeinfo.css"; 


const PlaceInfoJeju = () => {
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
      setMapLocation({ lat: 33.380462, lng: 126.539098 });
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: "빛의 벙커", placeId: "ChIJnTFvBUcTDTURh7KTiaHnYYE", lat: 33.440005, lng: 126.899003 },
        { name: "물영아리오름", placeId: "ChIJkzAEg1QBDTURvjZlYk6E4Ok", lat: 33.369239, lng: 126.693553 },
        { name: "아르떼뮤지엄 제주", placeId: "ChIJUwtlFmhfDDURUr3BMm9Sb6k", lat: 33.396560, lng: 126.344625 },
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
      <img src={searchImg} alt="search-image" width={280}/>
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

export default PlaceInfoJeju;
