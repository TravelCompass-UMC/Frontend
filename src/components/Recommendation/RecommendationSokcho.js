import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "속초해변", placeId: "ChIJ_ZIhB3S82F8RL-P-9mkcqq0", lat: 38.19126, lng: 128.60346 },
        { name: "설악산자생식물원", placeId: "ChIJewqqbNy82F8RSoMNMELvzRk", lat: 38.19704, lng: 128.52529 },
        { name: "영금정", placeId: "ChIJuVQp1w682F8RULr4nyAoHWU", lat: 38.21192, lng: 128.60145 },
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
