// Map.js
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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

const Map = ({ location, onPinClick }) => {
  const [mapCenter, setMapCenter] = useState(Center);
  const [zoomLevel, setZoomLevel] = useState(7);
  const [markers, setMarkers] = useState([]);

  // Update map center and zoom when location changes
  useEffect(() => {
    if (location) {
      setMapCenter(location);
      setZoomLevel(12); // Set a specific zoom level when location is available
    }
  }, [location]);

  // Update markers when location changes
  useEffect(() => {
    if (location) {
      setMarkers([{ position: location, label: "1" }]);
    }
  }, [location]);

  return (
    <div style={{ position: "relative" }}>
      <LoadScript googleMapsApiKey="AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location || mapCenter}
          zoom={location ? 12 : zoomLevel}
        >
          {/* Render markers on the map */}
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              label={marker.label}
              onClick={() => onPinClick(`Place ${marker.label}`)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
