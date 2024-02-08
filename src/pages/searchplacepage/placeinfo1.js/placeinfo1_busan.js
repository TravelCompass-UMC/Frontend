// placeinfo1_busan.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../../components/Map";
import SidebarL from "../../../components/SidebarL";
import searchImg from "../../../assets/images/Place/검색창_부산.svg";
import SearchRecommendations from "../../../components/Recommendation/RecommendationBusan";
import PlaceDetail from "../../../components/PlaceDetail";
import "../../../styles/placeinfo.css";  

const PlaceInfoBusan = () => {
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
      setMapLocation({ lat: 35.22649, lng: 129.07273 });
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: "해운대해수욕장", placeId: "ChIJXwf-DlyNaDURmKxjwdWxY5k", lat: 35.15955, lng: 129.16003 },
        { name: "국립해양박물관", placeId: "ChIJG53_8sjuaDURR7ggeXzOSis", lat: 35.07847, lng: 129.07987 },
        { name: "태종대유원지", placeId: "ChIJOfX1e0zpaDURWq5Hp5x4-SM", lat: 35.05417, lng: 129.08750 },
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
          <p className="placeList">부산의 추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} zoom={zoomLevel}/>
    </div>
  );
};

export default PlaceInfoBusan;
