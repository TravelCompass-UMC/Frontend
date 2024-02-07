import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
        { name: "불국사", placeId: "ChIJQwyfbNqyZzUR31ffyfmvm6w", lat: 35.79026, lng: 129.33208 },
        { name: "경주월드", placeId: "ChIJ90r5yn5NZjUR0ymH-He3gsY", lat: 35.84634, lng: 129.28302 },
        { name: "월정교", placeId: "ChIJI6-IFWBOZjURG2fe65bJAs0", lat: 35.82944, lng: 129.21809 },
  ];

  const handleRecommendationClick = (place) => {
    onRecommendationClick(place); // 상위 컴포넌트로 선택된 장소 정보를 전달
  };

  return (
    <div>
      <List>
        {recommendations.map((place, index) => (
          <ListItem button key={index} onClick={() => handleRecommendationClick(place)}>
            <ListItemText primary={`${index + 1}. ${place.name}`} /> {/* 숫자를 부여하여 표시 */}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchRecommendations;
