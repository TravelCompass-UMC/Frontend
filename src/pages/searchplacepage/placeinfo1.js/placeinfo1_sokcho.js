// placeinfo1_sokcho.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../../components/Map";
import SidebarL from "../../../components/SidebarL";
import searchImg from "../../../assets/images/Place/검색창_속초.svg";
import SearchRecommendations from "../../../components/Recommendation/RecommendationSokcho";
import PlaceDetail from "../../../components/PlaceDetail";
import "../../../styles/placeinfo.css"; 


const PlaceInfoSokcho = () => {
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
      setMapLocation({ lat: 38.18131, lng: 128.52054 });
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = [
        { name: "속초해변", placeId: "ChIJ_ZIhB3S82F8RL-P-9mkcqq0", lat: 38.19126, lng: 128.60346 },
        { name: "설악산자생식물원", placeId: "ChIJewqqbNy82F8RSoMNMELvzRk", lat: 38.19704, lng: 128.52529 },
        { name: "영금정", placeId: "ChIJuVQp1w682F8RULr4nyAoHWU", lat: 38.21192, lng: 128.60145 },
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
          <p className="placeList">속초의 추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handlePinClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfoSokcho;
