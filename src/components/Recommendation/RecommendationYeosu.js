import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "오동도", placeId: "ChIJ04TP1GHYbTURa17mljtqOMQ", lat: 34.74555, lng: 127.76693 },
    { name: "정우굴구이", placeId: "ChIJQ2-C5aHZbTURE4VitZ36Pcc", lat: 34.69602, lng: 127.77171 },
    { name: "갓버터도나스", placeId: "ChIJm2Yg3k_ZbTURBRR0rN2fsFM", lat: 34.74108, lng: 127.73593 },
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
