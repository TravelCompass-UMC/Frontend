import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";
import searchImg from "../../assets/images/Place/검색창.svg";
import "../../styles/placeinfo.css"; 

const PlaceInfo = () => {
  const { search, state } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const navigate = useNavigate();  
  const [searchedLocation, setSearchedLocation] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng, name] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
      setSearchedLocation(name);
    }
  }, [searchQuery]);

  const handlePinClick = () => {
    let placeName;
    switch (searchedLocation) {
      case '서울':
        placeName = 'seoul';
        break;
      case '제주도':
        placeName = 'jeju';
        break;
      case '부산':
        placeName = 'busan';
        break;
      case '여수':
        placeName = 'yeosu';
        break;
      case '경주':
        placeName = 'gyeongju';
        break;
      case '속초':
        placeName = 'sokcho';
        break;
      case '강릉':
        placeName = 'gangneung';
        break;
      case '양양':
        placeName = 'yangyang';
        break;
      default:
        // Default case for other locations
        placeName = '';
    }
    navigate(`/placeinfo1_${placeName}`, { state: { searchedLocation: searchedLocation } });
  };
  

  return (
    <div className="page-container">
      <div className="map-container">
        <Map location={mapLocation} onPinClick={handlePinClick}/>
      </div>
      <div className="sidebar-container">
        <SidebarL width={320}>
        <div style={{ display: 'inline-block' }}>
          <img src={searchImg} alt="search-image" width={280} />
          <div className="placeName">{searchedLocation}</div>
        </div>
          <br/> <p className="searched-location">Click a pin</p>
          <br/> <div className="popularplace">
        </div>
        </SidebarL>
      </div>
    </div>
  );
};

export default PlaceInfo;
