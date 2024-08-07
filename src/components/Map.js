import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "91vh",
  zIndex: 0,
};

const defaultCenter = {
  lat: 36.32800,
  lng: 128.02379,
};

const Map = ({ location, recommendations, onPinClick, zoomLevel = 7.2, containerStyle }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const onLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    let newMarkers = [];
    if (recommendations && recommendations.length > 0) {
      newMarkers = recommendations.map((place, index) => ({
        position: { lat: place.lat, lng: place.lng },
        label: `${index + 1}`,
        name: place.name 
      }));
    } else if (location && location.lat !== null && location.lng !== null) {
      newMarkers = [{ position: location, label: "1" }];
    }
    setMarkers(newMarkers);
  }, [location, recommendations]);

  const handleMarkerClick = (marker) => {
    onPinClick(marker.name); 
  };

  return (
    <div style={{ position: "relative" }}>
      <LoadScript googleMapsApiKey="AIzaSyBtvVmyyvzbg4OILHqlzB8eGJcP03-lSVk">
        <GoogleMap
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          center={location || defaultCenter}
          zoom={zoomLevel}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              label={marker.label}
              onClick={() => handleMarkerClick(marker)} // Pass marker to handleMarkerClick
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
