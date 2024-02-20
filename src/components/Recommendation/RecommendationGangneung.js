import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "하슬라아트월드", placeId: "ChIJm6SmvyvDYTURnQOt0HNja1Y", lat: 37.70751, lng: 129.01121 },
        { name: "강릉솔향수목원", placeId: "ChIJSZ3DQH7uYTURebRcOf7A-X0", lat: 37.69632, lng: 128.86213 },
        { name: "오죽헌", placeId: "ChIJKQ8jYrnlYTURKf8PKysmjgA", lat: 37.78138, lng: 128.87979 },
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
