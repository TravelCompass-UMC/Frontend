// CityDetail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaceDetails } from "../api/MapDetail"; // assuming you have a function to fetch place details

const CityDetail = () => {
  const { city } = useParams();
  const [cityDetails, setCityDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch place details from Travel Advisor API using the city name
    getPlaceDetails(city)
      .then((data) => {
        setCityDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching city details:", error);
        setLoading(false);
      });
  }, [city]);

  return (
    <div>
      <h2>Details for {city}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : cityDetails ? (
        <div>
          <img src={cityDetails.photo.images.large.url} alt={cityDetails.name} />
          <h3>{cityDetails.name}</h3>
          <p>별점: {cityDetails.rating}</p>
          <p>북마크: {cityDetails.bookmarked ? "북마크됨" : "북마크 안됨"}</p>
          <p>위치: {cityDetails.location_string}</p>
          <p>운영 시간: {cityDetails.operating_hours}</p>
          <p>전화번호: {cityDetails.phone}</p>
          <p>리뷰: {cityDetails.review_count}개</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>No details available for {city}</p>
      )}
    </div>
  );
};

export default CityDetail;
