// placeinfo1_yeosu.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../../components/Map";
import SidebarL from "../../../components/SidebarL";
import searchImg from "../../../assets/images/Place/검색창_여수.svg";
import SearchRecommendations from "../../../components/Recommendation/RecommendationYeosu";
import PlaceDetail from "../../../components/PlaceDetail";
import "../../../styles/searchplace/placeinfo.css";  


const PlaceInfoYeosu = () => {
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
      setMapLocation({ lat: 34.76769, lng: 127.66162 });
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: "돌산공원", placeId: "ChIJQyXmJyHZbTURGEe3-6sbVFo", lat: 34.73058, lng: 127.73968 },
        { name: "유월드 루지 테마파크", placeId: "ChIJ65i7yabfbTURq8ZB3CZ70gY", lat: 34.74800, lng: 127.64123 },
        { name: "오동도", placeId: "ChIJ04TP1GHYbTURa17mljtqOMQ", lat: 34.74555, lng: 127.76693 },
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
      {/* <div style={{ display: 'inline-block' }}>
          <img src={searchImg} alt="search-image" width={280} />
          <div className="placeName">{searchedLocation}</div>
        </div> */}
      <img src={searchImg} alt="search-image" width={280} />
      <div className="popularplace">
          {/* <p className="placeList">{searchedLocation}의 추천 장소 목록</p> */}
          <p className="placeList">여수의 추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfoYeosu;
