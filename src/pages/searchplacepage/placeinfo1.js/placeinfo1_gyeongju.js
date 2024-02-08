// placeinfo1_gyeongju.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../../components/Map";
import SidebarL from "../../../components/SidebarL";
import searchImg from "../../../assets/images/Place/검색창_경주.svg";
import SearchRecommendations from "../../../components/Recommendation/RecommendationGyeongju";
import PlaceDetail from "../../../components/PlaceDetail";
import "../../../styles/searchplace/placeinfo.css";  

const PlaceInfoGyeongju = () => {
  const { state } = useLocation(); // state에서 검색어 받아오기
  const searchedLocation = state?.searchedLocation; // 검색어 받아오기
  const searchParams = new URLSearchParams(window.location.search); // 검색어 직접 가져오기
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(12);


  useEffect(() => {
    if (searchQuery) {
      const [lat, lng, name] = searchQuery.split(",");
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    } else {
      setMapLocation({ lat: 35.84956, lng: 129.24678 });
    }
  }, [searchQuery]);

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

  return (
    <div>
      <SidebarL width={320}>
      {/* <div style={{ display: 'inline-block' }}>
          <img src={searchImg} alt="search-image" width={280} />
          <div className="placeName">{searchedLocation}</div>
        </div> */}
      <img src={searchImg} alt="search-image" width={280} />
      <div className="popularplace">
          {/* <p>{searchedLocation}의 추천 장소 목록</p> */}
          <p className="placeList">경주의 추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} zoom={zoomLevel}/>
    </div>
  );
};

export default PlaceInfoGyeongju;
