import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "롯데월드", placeId: "ChIJgf4OJaelfDURmDvA_sHyPUM", lat: 37.51134, lng: 127.09816 },
    { name: "몽탄", placeId: "ChIJO85WpN6jfDURVI5DNM9JkCI", lat: 37.53611, lng: 126.97220 },
    { name: "레인리포트", placeId: "ChIJi8PvMMelfDUR__jCJ8wPPbo", lat: 37.54017, lng: 127.05969 },
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
