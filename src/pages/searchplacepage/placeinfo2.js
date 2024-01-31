// placeinfo2.js

import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Map from "../../components/Map";
import SidebarL from "../../components/SidebarL";

const PlaceInfo2 = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { placeName } = useParams(); // Get place name from URL params
  const [mapLocation, setMapLocation] = useState(null);

  useEffect(() => {
    // Set map location based on place name
    if (placeName === '빛의 벙커') {
      setMapLocation({ lat: 33.440005, lng: 126.899003 });
    } else if (placeName === '물영아리오름') {
      setMapLocation({ lat: 33.369239, lng: 126.693553 });
    } else if (placeName === '아르떼뮤지엄 제주') {
      setMapLocation({ lat: 33.396560, lng: 126.344625 });
    }
  }, [placeName]);

  return (
    <div>
      <SidebarL width={320} />
      <Map location={mapLocation} /> 
    </div>
  );
};

export default PlaceInfo2;
