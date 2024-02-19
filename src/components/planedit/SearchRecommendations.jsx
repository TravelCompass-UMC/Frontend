import React from 'react';
import styles from '../../styles/planedit/Recommendation.module.css';


const SearchRecommendations = ({ places, onRecommendationClick }) => {

  // Function to generate photo URL for a given photo reference
  const getPhotoUrl = (photoReference) => {
    const apiKey = 'AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU'; // 실제 API 키 사용
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${photoReference}&key=${apiKey}`;
  };

  return (
    
    <div className={styles.recommendationsContainer}>
      {places.map((place, index) => (
        <div 
          key={index} 
          className={styles.recommendationItem}
          onClick={() => onRecommendationClick(place)}
        >
          <div className={styles.recommendationImage}>
            <img src={place.photos ? getPhotoUrl(place.photos[0]) : 'path_to_default_image'} alt={place.name} />
          </div>
          <div className={styles.recommendationInfo}>
            <h3 className={styles.recommendationTitle}>{place.name}</h3>
            <p className={styles.recommendationDescription}>
              {place.vicinity || "위치를 알 수 없습니다."} 
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchRecommendations;