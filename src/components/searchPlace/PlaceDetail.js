// PlaceDetail.js
import React, { useEffect, useState, useRef } from 'react';
import RecommendationCard from './RecommendationCard';
import { getPlaceDetails } from '../../api/MapDetail';

const PlaceDetail = ({ place }) => {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const prevPlace = useRef(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      if (!place || prevPlace.current === place) return;
      prevPlace.current = place;
      try {
        setLoading(true);
        const response = await getPlaceDetails({ placeId: place.placeId });
        if (response) {
          setPlaceDetails(response);
        } else {
          console.error('Failed to fetch place details');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error during fetch:', error);
        setLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [place]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && placeDetails && (
        <RecommendationCard placeDetails={placeDetails} />
      )}
    </div>
  );
};

export default PlaceDetail;
