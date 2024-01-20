// src>api>MapDetail.js
export const getPlaceDetails = async ({ placeName }) => {
  const apiKey = "AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U";
  
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${placeName}&inputtype=textquery&fields=place_id&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch place details');
    }

    const data = await response.json();

    if (data.status === 'OK' && data.candidates && data.candidates.length > 0) {
      const placeId = data.candidates[0].place_id;
      const detailsResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
      );

      if (!detailsResponse.ok) {
        throw new Error('Failed to fetch place details');
      }

      const detailsData = await detailsResponse.json();

      if (detailsData.status === 'OK') {
        return detailsData.result;
      } else {
        throw new Error('Failed to fetch place details');
      }
    } else {
      throw new Error('Failed to find place ID');
    }
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw error;
  }
};
