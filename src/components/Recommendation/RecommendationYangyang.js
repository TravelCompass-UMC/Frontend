import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "설해원", placeId: "ChIJ96I-LImr2F8RY2slHGjsjjg", lat: 38.05520, lng: 128.66194 },
        { name: "양양전통시장", placeId: "ChIJVVPjcsqu2F8RtKWjj1Roxy4", lat: 38.07581, lng: 128.62346 },
        { name: "서피비치", placeId: "ChIJpYfYTlKr2F8R1OSLkIBTVJA", lat: 38.02832, lng: 128.71751 },
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
