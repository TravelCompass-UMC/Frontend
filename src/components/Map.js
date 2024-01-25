// Map.js
import React, { useState, useEffect } from "react";
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

  // Update map center and zoom when location changes
  useEffect(() => {
    if (location) {
      setMapCenter(location);
      setZoomLevel(12); // Set a specific zoom level when location is available
    }
  }, [location]);

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
