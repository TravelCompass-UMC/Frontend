import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: '빛의 벙커', placeId: "ChIJnTFvBUcTDTURh7KTiaHnYYE" },
    { name: '비양도 봉수대', placeId: "ChIJRxWgQQBBDTURAT3xqkmF210" },
    { name: '아르떼뮤지엄 제주', placeId: "ChIJUwtlFmhfDDURUr3BMm9Sb6k" },
  ];

  const handleRecommendationClick = (place) => {
    onRecommendationClick(place); // 상위 컴포넌트로 선택된 장소 정보를 전달
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
    </div>
  );
};

export default SearchRecommendations;
