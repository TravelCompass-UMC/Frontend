import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};

const defaultCenter = {
  lat: 35.8714,
  lng: 128.6014,
};

const Map = ({ location, onPinClick }) => {
  const [map, setMap] = useState(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [zoomLevel, setZoomLevel] = useState(7);
  const [markers, setMarkers] = useState([]);

  const onLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    if (location && location.lat !== null && location.lng !== null) {
      setMapCenter(location);
      setZoomLevel(12);
    }
  }, [location]);

  useEffect(() => {
    if (location && location.lat !== null && location.lng !== null) {
      setMarkers([{ position: location, label: "1" }]);
    }
  }, [location]);

  return (
    <div style={{ position: "relative" }}>
      <LoadScript googleMapsApiKey="AIzaSyAxcBF_X0UjuYxGNAxZ2pNrQSDyL4AyS4U">
        <GoogleMap
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          center={location && location.lat !== null ? location : mapCenter}
          zoom={location ? 12 : zoomLevel}
        >
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
