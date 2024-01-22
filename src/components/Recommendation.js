// components/SearchRecommendations.js
import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import PlaceDetails from './PlaceDetail';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const recommendations = [
    { name: '빛의 벙커', coordinates: { lat: 33.4398529, lng: 126.8964279 } },
    { name: '비양도 봉수대', coordinates: { lat: 33.5153276, lng: 126.9666388 } },
    { name: '아르떼뮤지엄 제주', coordinates: { lat: 33.3964753, lng: 126.3420398 } },
  ];

  const handleRecommendationClick = (place) => {
    setSelectedPlace(place);
    onRecommendationClick(place);
  };

  return (
    <div>
      <List>
        {recommendations.map((place, index) => (
          <ListItem button key={index} onClick={() => handleRecommendationClick(place)}>
            <ListItemText primary={place.name} />
          </ListItem>
        ))}
      </List>
      {selectedPlace && <PlaceDetails placeName={selectedPlace.name} coordinates={selectedPlace.coordinates} />}
    </div>
  );
};

export default SearchRecommendations;
