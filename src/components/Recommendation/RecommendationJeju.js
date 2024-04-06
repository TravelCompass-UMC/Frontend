import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: '동백포레스트', placeId: "ChIJ7Xc7U45RezURGd_To-JsF5o", lat: 33.30049, lng: 126.63630 },
    { name: '동문재래시장', placeId: "ChIJBdEw_1PjDDUR9XxfgFpYmjw", lat: 33.51324, lng: 126.52802 },
    { name: '골목카페옥수', placeId: "ChIJ51k8cVAbDTURJkJ4eCpMv1E", lat: 33.44007, lng: 126.38002 },
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
