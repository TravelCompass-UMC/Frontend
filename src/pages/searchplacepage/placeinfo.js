// placeinfo.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SidebarL from "../../components/SidebarL";
import GoogleMapComponent from "../../components/Map.js";

const PlaceInfo = () => {
  const { query } = useParams();
  const [mapLocation, setMapLocation] = useState(null);

  useEffect(() => {
    // 검색어를 사용하여 지도 위치 가져오기
    const fetchLocation = async () => {
      try {
        const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=YOUR_API_KEY`;
        const response = await fetch(geocodingApiUrl);
        const data = await response.json();
        const location = data.results[0]?.geometry?.location;
        if (location) {
          setMapLocation(location);
        }
      } catch (error) {
        console.error("Error fetching geocoding data:", error);
      }
    };

    fetchLocation();
  }, [query]);

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      <SidebarL width={320}>
        <p>대한민국</p>
        <p>지금 대한민국의 가장 인기 많은 지역</p>
        <ul>
          <li>
            TOP1 <br />
            <Link to={`/city/seoul`}>서울</Link>
          </li>
          <li>
            TOP2 <br />
            <Link to={`/city/jeju`}>제주도</Link>
          </li>
          <li>
            TOP3 <br />
            <Link to={`/city/busan`}>부산</Link>
          </li>
          <li>
            TOP4 <br />
            <Link to={`/city/gyeongju`}>경주</Link>
          </li>
        </ul>
        <div className="popularplace">
          <p>선택하신 도시의 가장 인기 많은 장소</p>
        </div>
      </SidebarL>
      <GoogleMapComponent location={mapLocation} />
    </div>
  );
};

export default PlaceInfo;
