// Map.js

import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};

const Center = {
  lat: 35.8714,
  lng: 128.6014,
};

const GoogleMapComponent = ({ location }) => {
  const [mapCenter, setMapCenter] = useState(Center);
  const [zoomLevel, setZoomLevel] = useState(7);

  // 지도 중심 및 확대 레벨 업데이트 함수
  const updateMap = (center, zoom) => {
    setMapCenter(center);
    setZoomLevel(zoom);
  };

  return (
    <div style={{ position: "relative" }}>
      <LoadScript googleMapsApiKey="AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location || mapCenter}
          zoom={location ? 12 : zoomLevel}
        />
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
