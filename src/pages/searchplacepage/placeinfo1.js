//placeinfo1.js
//제주도 검색 시 추천장소
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    } else {
      // '제주도'의 위도와 경도를 지정
      setMapLocation({ lat: 33.3868, lng: 126.582 });
    }
  }, [searchQuery]);

  useEffect(() => {
    // 추천 장소 데이터를 가져오는 비동기 함수
    const fetchRecommendations = async () => {
      // 추천 장소 데이터를 가져오는 API 호출 등을 수행
      // 이 예제에서는 하드코딩된 데이터를 사용
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
  };

  const handleRecommendationClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div>
      <h2>Place Details</h2>
      <SidebarL width={320}>
        <div className="popularplace">
          <p>제주도의 가장 인기 많은 장소</p>
          <p>추천 장소 목록</p>
          <SearchRecommendations onRecommendationClick={handleRecommendationClick} />
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} recommendations={recommendations} onPinClick={handlePinClick} /> 
    </div>
  );
};

export default PlaceInfo1;
