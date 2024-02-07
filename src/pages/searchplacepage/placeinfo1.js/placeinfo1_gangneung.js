// placeinfo1_gangneung.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../../components/Map";
import SidebarL from "../../../components/SidebarL";
import searchImg from "../../../assets/images/Place/검색창_강릉.svg";
import SearchRecommendations from "../../../components/Recommendation/RecommendationGangneung";
import PlaceDetail from "../../../components/PlaceDetail";
import "../../../styles/placeinfo.css"; 


const PlaceInfoGangneung = () => {
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
      setMapLocation({ lat: 37.73594, lng: 128.82734 });
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: "하슬라아트월드", placeId: "ChIJm6SmvyvDYTURnQOt0HNja1Y", lat: 37.70751, lng: 129.01121 },
        { name: "강릉솔향수목원", placeId: "ChIJSZ3DQH7uYTURebRcOf7A-X0", lat: 37.69632, lng: 128.86213 },
        { name: "오죽헌", placeId: "ChIJKQ8jYrnlYTURKf8PKysmjgA", lat: 37.78138, lng: 128.87979 },
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
          <p className="placeList">강릉의 추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfoGangneung;
