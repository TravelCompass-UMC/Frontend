// src > pages > searchplacepage > placeinfo1.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarL from '../../components/SidebarL';
import SearchRecommendations from '../../components/Recommendation';
import Map from '../../components/Map';
import PlaceDetail from '../../components/PlaceDetail';

const PlaceInfo1 = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    }
  }, [searchQuery]);

  useEffect(() => {
    const initializeMap = () => {
      if (mapLocation && mapLocation.lat !== null && mapLocation.lng !== null) {
        new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: mapLocation.lat, lng: mapLocation.lng },
          zoom: 15,
        });
      }
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U&libraries=places&callback=initializeMap`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        initializeMap();
      };

      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, [mapLocation]);

  const handleRecommendationClick = (place) => {
    setSelectedPlace(place);
  };

  const handlePinClick = (placeName) => {
    navigate(`/placeinfo1/${placeName}`);
  };

  return (
    <div>
      <h2>Search Results</h2>
      <SidebarL width={320}>
        <SearchRecommendations
          recommendations={[
            { name: '비양도 봉수대', placeId: 'PLACE_ID_1' },
            { name: '아르떼뮤지엄 제주', placeId: 'PLACE_ID_2' },
            { name: '빛의 벙커', placeId: 'PLACE_ID_3' },
          ]}
          onRecommendationClick={handleRecommendationClick}
        />
        {selectedPlace && <PlaceDetail placeId={selectedPlace.place_id} />}
      </SidebarL>
      <Map location={mapLocation} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfo1;
