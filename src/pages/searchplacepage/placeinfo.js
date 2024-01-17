// placeinfo.js 코드

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarL from "../../components/SidebarL";
import { getPlaceDetails } from "../../api/MapDetail"; // assuming you have a function to fetch place details

const PlaceInfo = () => {
  const { query } = useParams();
  const [placeDetails, setPlaceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch place details from Travel Advisor API
    getPlaceDetails(query)
      .then((data) => {
        setPlaceDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching place details:", error);
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : placeDetails ? (
        <SidebarL width={320} isOpen={true}>
          <img src={placeDetails.photo.images.large.url} alt={placeDetails.name} />
          <h3>{placeDetails.name}</h3>
          <p>별점: {placeDetails.rating}</p>
          <p>북마크: {placeDetails.bookmarked ? "북마크됨" : "북마크 안됨"}</p>
          <p>위치: {placeDetails.location_string}</p>
          <p>운영 시간: {placeDetails.operating_hours}</p>
          <p>전화번호: {placeDetails.phone}</p>
          <p>리뷰: {placeDetails.review_count}개</p>
          {/* Add more details as needed */}
        </SidebarL>
      ) : (
        <p>No details available for this place.</p>
      )}
    </div>
  );
};

export default PlaceInfo;
