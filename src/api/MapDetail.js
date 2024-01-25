//src > api > MapDetail.js
import axios from 'axios';

export const getPlaceDetails = async ({ placeId }) => {
  const apiKey = "AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U";

  try {
    const detailsResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
    );

    const detailsData = detailsResponse.data;

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

