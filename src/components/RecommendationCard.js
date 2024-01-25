// RecommendationCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const RecommendationCard = ({ placeDetails }) => {
  if (!placeDetails) {
    return <Card><CardContent><Typography>No details available</Typography></CardContent></Card>;
  }

  return (
    <Card>
      {placeDetails.photos && placeDetails.photos.length > 0 && (
        <img src={placeDetails.photos[0].getUrl()} alt={placeDetails.name} />
      )}
      <h3>{placeDetails.name}</h3>
      <p>Rating: {placeDetails.rating}</p>
      <p>Location: {placeDetails.vicinity}</p>
      <p>Operating Hours: {placeDetails.opening_hours && placeDetails.opening_hours.weekday_text.join(', ')}</p>
      <p>Phone: {placeDetails.formatted_phone_number}</p>
      <p>Reviews: {placeDetails.reviews && placeDetails.reviews.length}</p>
    </Card>
  );
};

export default RecommendationCard;
