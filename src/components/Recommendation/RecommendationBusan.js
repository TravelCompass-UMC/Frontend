import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "해운대해수욕장", placeId: "ChIJXwf-DlyNaDURmKxjwdWxY5k", lat: 35.15955, lng: 129.16003 },
    { name: "국립해양박물관", placeId: "ChIJG53_8sjuaDURR7ggeXzOSis", lat: 35.07847, lng: 129.07987 },
    { name: "태종대유원지", placeId: "ChIJOfX1e0zpaDURWq5Hp5x4-SM", lat: 35.05417, lng: 129.08750 },
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
