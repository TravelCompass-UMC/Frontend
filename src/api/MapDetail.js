// MapDetail.js

export const getPlaceDetails = async ({ placeId }) => {
  const apiKey = "AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU"; // 여기에 자신의 Google Maps API 키를 입력하세요.
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const detailsData = await response.json();

    if (response.ok && detailsData.status === 'OK') {
      return detailsData.result;
    } else {
      throw new Error('Failed to fetch place details');
    }
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw error;
  }
};
