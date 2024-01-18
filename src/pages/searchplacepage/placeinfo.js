import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import GoogleMapComponent from '../../components/Map.js';
import SidebarL from "../../components/SidebarL";

const PlaceInfo = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');

  const [mapLocation, setMapLocation] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      // Extract lat and lng from the search query
      const [lat, lng] = searchQuery.split(',');
      // Use the searched location to set the map location
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    }
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Results</h2>
      <SidebarL width={320}>
        <p>추천 즐겨찾기</p>
        <div className="popularplace">
          <p>선택하신 지역의 가장 인기 많은 장소</p>
          <li></li>
          <li></li>
        </div>
        <p>추천 장소 목록</p>
        <ul>
          <li>
            <Link to={'/placeinfo/place1'}>추천 장소1</Link>
          </li>
          <li>
            <Link to={'/placeinfo/place2'}>추천 장소2</Link>
          </li>
          <li>
            <Link to={'/placeinfo/place3'}>추천 장소3</Link>
          </li>
          <li>
            <Link to={'/placeinfo/place4'}>추천 장소4</Link>
          </li>
        </ul>
      </SidebarL>
      <GoogleMapComponent location={mapLocation} />
    </div>
  );
};

export default PlaceInfo;
