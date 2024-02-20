import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const RecommendationCard = ({ placeDetails }) => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [showOpeningHours, setShowOpeningHours] = useState(false);

  useEffect(() => {
    if (placeDetails && placeDetails.photos && placeDetails.photos.length > 0) {
      // 장소의 첫 번째 사진에 대한 레퍼런스 URL을 가져옴
      const photoReference = placeDetails.photos[0].photo_reference;
      // Google Places Photo API를 사용하여 사진의 URL 생성
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU`;
      setPhotoUrl(photoUrl);
    }
  }, [placeDetails]);

  const toggleOpeningHours = () => {
    setShowOpeningHours(!showOpeningHours);
  };

  return (
    <Card>
      {photoUrl && (
        <img src={photoUrl} alt={placeDetails.name} style={{ maxWidth: '100%', height: 'auto' }}/>
      )}
      <CardContent>
        <Typography variant="h5" component="h2">{placeDetails.name}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">별점: {placeDetails.rating || '제공되지 않는 정보입니다.'}점</Typography>
        <Typography variant="body2" color="textSecondary" component="p">위치: {placeDetails.vicinity || '제공되지 않는 정보입니다.'}</Typography>
        <div>
          <Typography variant="body2" color="textSecondary" component="p" onClick={toggleOpeningHours} style={{ cursor: 'pointer' }}>
            운영 시간 {showOpeningHours ? '▲' : '▼'}
          </Typography>
          {showOpeningHours && (
            <Typography variant="body2" color="textSecondary" component="p">
              {placeDetails.opening_hours && placeDetails.opening_hours.weekday_text ? placeDetails.opening_hours.weekday_text.join(', ') : '제공되지 않는 정보입니다.'}
            </Typography>
          )}
        </div>
        <Typography variant="body2" color="textSecondary" component="p">전화번호: {placeDetails.formatted_phone_number || '제공되지 않는 정보입니다.'}</Typography>
        <div>
          <Typography variant="body2" color="textSecondary" component="p" style={{ cursor: 'pointer' }}>
            <a href={`https://www.google.com/maps/place/?q=place_id:${placeDetails.place_id}&hl=ko&review=true`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#1976D2' }}>
              리뷰 보기
            </a>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
