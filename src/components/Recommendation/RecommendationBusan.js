import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchRecommendations = ({ onRecommendationClick }) => {
  const recommendations = [
    { name: "광안리해수욕장", placeId: "ChIJxw7HJy_taDUR-xaSTeHwbf8", lat: 35.15398, lng: 129.11867 },
    { name: "부평깡통시장", placeId: "ChIJ21pR1aHpaDUR_usy_ELBCvk", lat: 35.10199, lng: 129.02588 },
    { name: "이재모피자", placeId: "ChIJ8VYk1e74IBURIIVPcKTynRI", lat: 35.10768, lng: 129.02900 },
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
