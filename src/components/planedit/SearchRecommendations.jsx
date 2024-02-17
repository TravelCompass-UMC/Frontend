import React from 'react';
import styles from '../../styles/planedit/Recommendation.module.css';


const SearchRecommendations = ({ places, onRecommendationClick }) => {

  // Function to generate photo URL for a given photo reference
  const getPhotoUrl = (photoReference) => {
    const apiKey = 'AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU'; // Replace with your actual API key
    if (photoReference) {
      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${photoReference}&key=${apiKey}`;
    }
    return 'path_to_default_image'; // Return a default image path if no photoReference
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
            {/* Use the first photo if available */}
            <img src={place.photos ? getPhotoUrl(place.photos[0].photo_reference) : 'path_to_default_image'} alt={place.name} />
          </div>
          <div className={styles.recommendationInfo}>
            <h3 className={styles.recommendationTitle}>{place.name}</h3>
            <p className={styles.recommendationDescription}>
              {place.vicinity || "위치를 알 수 없습니다."} {/* Use vicinity or formatted_address */}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchRecommendations;
