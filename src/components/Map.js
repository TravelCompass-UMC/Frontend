import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyleDefault = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "91vh",
  zIndex: 0,
};

const defaultCenter = {
  lat: 36.328,
  lng: 128.02379,
};

const Map = ({
  location,
  recommendations,
  onPinClick,
  zoomLevel = 7.2,
  containerStyle = containerStyleDefault,
}) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    let newMarkers = [];
    if (recommendations && recommendations.length > 0) {
      newMarkers = recommendations.map((place, index) => ({
        position: { lat: place.lat, lng: place.lng },
        label: `${index + 1}`,
        name: place.name,
      }));
    } else if (location && location.lat !== null && location.lng !== null) {
      newMarkers = [{ position: location, label: "1" }];
    }
    setMarkers(newMarkers);
  }, [location, recommendations]);

  return (
    <div style={{ position: "relative" }}>
      <LoadScript
        googleMapsApiKey="AIzaSyBtvVmyyvzbg4OILHqlzB8eGJcP03-lSVk"
        onLoad={() => console.log("Google Maps API loaded successfully")}
        loadingElement={<div style={{ height: "100%" }} />}
        libraries={["places"]}
        region="KR"
        language="ko"
        id="script-loader"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location || defaultCenter}
          zoom={zoomLevel}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              label={marker.label}
              onClick={() => onPinClick(marker.name)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
