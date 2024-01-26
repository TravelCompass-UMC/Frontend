//RecommendationCard.js

import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const RecommendationCard = ({ placeDetails }) => {
  if (!placeDetails) {
    return <Card><CardContent><Typography>No details available</Typography></CardContent></Card>;
  }

  return (
    <Card>
      {placeDetails.photos && placeDetails.photos.length > 0 && (
        <img src={placeDetails.photos[0]} alt={placeDetails.name} />
      )}
      <CardContent>
        <Typography variant="h5" component="h2">{placeDetails.name}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">별점: {placeDetails.rating || '제공되지 않는 정보입니다.'}점</Typography>
        <Typography variant="body2" color="textSecondary" component="p">위치: {placeDetails.vicinity || '제공되지 않는 정보입니다.'}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">운영 시간: {placeDetails.opening_hours && placeDetails.opening_hours.weekday_text ? placeDetails.opening_hours.weekday_text.join(', ') : '제공되지 않는 정보입니다.'}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">전화번호: {placeDetails.formatted_phone_number || '제공되지 않는 정보입니다.'}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">리뷰 갯수: {placeDetails.reviews ? placeDetails.reviews.length : '제공되지 않는 정보입니다.'}개</Typography>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
