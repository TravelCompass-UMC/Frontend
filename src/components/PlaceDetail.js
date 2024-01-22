// components/PlaceDetail.js
import React, { useEffect, useState } from 'react';
import RecommendationCard from './RecommendationCard';
<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U&libraries=places&callback=initMap"
></script>
const PlaceDetail = ({ placeName, coordinates }) => {
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(`/api/places/details?lat=${coordinates.lat}&lng=${coordinates.lng}`);
        if (response.ok) {
          const data = await response.json();
          setPlaceDetails(data);
        } else {
          console.error('Failed to fetch place details');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchPlaceDetails();
  }, [placeName, coordinates]);

  return <RecommendationCard placeDetails={placeDetails} />;
};

export default PlaceDetail;
