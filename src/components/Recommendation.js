import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import PlaceDetail from './PlaceDetail';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const recommendations = [
    { name: '빛의 벙커', placeId: "ChIJnTFvBUcTDTURh7KTiaHnYYE" },
    { name: '비양도 봉수대', placeId: "ChIJRxWgQQBBDTURAT3xqkmF210" },
    { name: '아르떼뮤지엄 제주', placeId: "ChIJUwtlFmhfDDURUr3BMm9Sb6k" },
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
      {selectedPlace && <PlaceDetail place={selectedPlace} />}
    </div>
  );
};

export default SearchRecommendations;
