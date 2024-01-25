// MapDetail.js code

import axios from 'axios';

const travelAdvisorOptions = {
  headers: {
    'X-RapidAPI-Key': '73680bc445msh9350f7fb2ff91b4p1abe03jsnffe328ba9362',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

// Function to fetch place details by place_id
export const getPlaceDetails = async (placeId) => {
  const options = {
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/places/v1/${placeId}`,
    ...travelAdvisorOptions
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching place details:", error);
    throw error;
  }
};

// Function to perform auto-complete for place search
export const getAutoComplete = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: {
      query,
      lang: 'en_US',
      units: 'km'
    },
    ...travelAdvisorOptions
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error performing auto-complete:", error);
    throw error;
  }
};
