// API 키
const API_KEY = 'AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU';

// 장소명
const placeName = '물영아리오름';

// Google Places API 호출 URL
const apiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(placeName)}&inputtype=textquery&fields=place_id&key=${API_KEY}`;

// Google Places API 호출
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (data.candidates && data.candidates.length > 0) {
      const placeId = data.candidates[0].place_id;
      console.log('장소 placeId:', placeId);
    } else {
      console.log('장소를 찾을 수 없습니다.');
    }
  })
  .catch(error => console.error('API 호출 중 오류 발생:', error));
