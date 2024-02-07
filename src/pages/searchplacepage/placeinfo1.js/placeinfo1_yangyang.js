// placeinfo1_yangyang.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../../components/Map";
import SidebarL from "../../../components/SidebarL";
import searchImg from "../../../assets/images/Place/검색창_양양.svg";
import SearchRecommendations from "../../../components/Recommendation/RecommendationYangyang";
import PlaceDetail from "../../../components/PlaceDetail";
import "../../../styles/placeinfo.css"; 


const PlaceInfoYangyang = () => {
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
      setMapLocation({ lat: 38.01295, lng: 128.59926 });
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: "설해원", placeId: "ChIJ96I-LImr2F8RY2slHGjsjjg", lat: 38.05520, lng: 128.66194 },
        { name: "양양전통시장", placeId: "ChIJVVPjcsqu2F8RtKWjj1Roxy4", lat: 38.07581, lng: 128.62346 },
        { name: "서피비치", placeId: "ChIJpYfYTlKr2F8R1OSLkIBTVJA", lat: 38.02832, lng: 128.71751 },
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
          <p className="placeList">양양의 추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfoYangyang;
