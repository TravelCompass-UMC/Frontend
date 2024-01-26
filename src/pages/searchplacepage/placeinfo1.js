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
        <SearchRecommendations onRecommendationClick={handleRecommendationClick} />
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
      <Map location={mapLocation} onPinClick={handlePinClick} />
    </div>
  );
};

export default PlaceInfo1;
