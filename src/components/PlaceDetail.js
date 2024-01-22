// src > components > PlaceDetail.js
import React, { useEffect, useState } from 'react';
import RecommendationCard from './RecommendationCard';
import { getPlaceDetails } from '../api/MapDetail';

const PlaceDetail = ({ placeName, coordinates }) => {
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await getPlaceDetails({ placeId: ['PLACE_ID_1', 'PLACE_ID_2', 'PLACE_ID_3']}); 
        if (response) {
          setPlaceDetails(response);
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
