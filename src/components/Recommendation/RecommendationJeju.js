import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: '빛의 벙커', placeId: "ChIJnTFvBUcTDTURh7KTiaHnYYE", lat: 33.440005, lng: 126.899003 },
    { name: '물영아리오름', placeId: "ChIJkzAEg1QBDTURvjZlYk6E4Ok", lat: 33.369239, lng: 126.693553 },
    { name: '아르떼뮤지엄 제주', placeId: "ChIJUwtlFmhfDDURUr3BMm9Sb6k", lat: 33.396560, lng: 126.344625 },
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
