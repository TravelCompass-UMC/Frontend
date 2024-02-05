import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "경복궁 광화문", placeId: "ChIJsYP2VHSjfDURwAtqfCHFGfo", lat: 37.57598, lng: 126.97680 },
    { name: "63빌딩", placeId: "ChIJn_UiGDyffDURWfZBRKwb5YE", lat: 37.51993, lng: 126.94010 },
    { name: "DDP 동대문디자인플라자", placeId: "ChIJ8xRYr29FezUR3AtFqx2pIlw", lat: 37.56784, lng: 127.00906 },
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
