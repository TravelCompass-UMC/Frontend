// src/api/MapDetail.js
export const getPlaceDetails = async ({ placeId }) => {
  const apiKey = "AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U"; // Replace with your actual API key

  try {
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
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw error;
  }
};
