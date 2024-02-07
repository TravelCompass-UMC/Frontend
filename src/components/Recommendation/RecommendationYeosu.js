import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "돌산공원", placeId: "ChIJQyXmJyHZbTURGEe3-6sbVFo", lat: 34.73058, lng: 127.73968 },
        { name: "유월드 루지 테마파크", placeId: "ChIJ65i7yabfbTURq8ZB3CZ70gY", lat: 34.74800, lng: 127.64123 },
        { name: "오동도", placeId: "ChIJ04TP1GHYbTURa17mljtqOMQ", lat: 34.74555, lng: 127.76693 },
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
