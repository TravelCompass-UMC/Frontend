import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarL from '../../components/SidebarL';
import SearchRecommendations from '../../components/Recommendation';
import RecommendationCard from '../../components/RecommendationCard';

const PlaceInfo1 = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q');
  const [mapLocation, setMapLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [placeDetails, setPlaceDetails] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      const [lat, lng] = searchQuery.split(',');
      setMapLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    }
  }, [searchQuery]);

  useEffect(() => {
    const initializeMap = () => {
      if (mapLocation && mapLocation.lat !== null && mapLocation.lng !== null) {
        const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: mapLocation.lat, lng: mapLocation.lng },
          zoom: 15,
        });

        setMap(mapInstance);
      }
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U&libraries=places&callback=initializeMap`;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, [mapLocation]);

  const fetchPlaceDetails = (placeId) => {
    if (map) {
      const placesService = new window.google.maps.places.PlacesService(map);

      placesService.getDetails({ placeId }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaceDetails(place);
        } else {
          console.error('Error fetching place details:', status);
        }
      });
    }
  };

  const handleRecommendationClick = (place) => {
    setSelectedPlace(place);
    fetchPlaceDetails(place.place_id);
  };

  return (
    <div>
      <h2>Search Results</h2>
      <SidebarL width={320}>
        <SearchRecommendations
          recommendations={[
            { name: '비양도 봉수대', place_id: 'PLACE_ID_1' },
            { name: '아르떼뮤지엄 제주', place_id: 'PLACE_ID_2' },
            { name: '빛의 벙커', place_id: 'PLACE_ID_3' },
          ]}
          onRecommendationClick={handleRecommendationClick}
        />
        {selectedPlace && <RecommendationCard placeDetails={placeDetails} />}
      </SidebarL>
      <div id="map" style={{ height: '400px' }}></div>
    </div>
  );
};

export default PlaceInfo1;
