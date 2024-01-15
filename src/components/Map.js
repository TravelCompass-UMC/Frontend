import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";
import "../styles/Place.css";

const containerStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};

const GoogleMapComponent = ({ location }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 35.8714, lng: 128.6014 });
  const [zoomLevel, setZoomLevel] = useState(7);

  useEffect(() => {
    if (location) {
      // TODO: Replace YOUR_GOOGLE_MAP_API_KEY with your actual API key
      Geocode.setApiKey("AIzaSyDrDh7WbZV2PvkmqmJJDc1Gr6QGygvS0Mg");
      // Get latidude & longitude from address.
      Geocode.fromAddress(location).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setMapCenter({ lat, lng });
          setZoomLevel(11);
        },
        (error) => {
          console.error("Error fetching coordinates:", error);
        }
      );
    }
  }, [location]);

  return (
    <div style={{ position: "relative" }}>
      <LoadScript googleMapsApiKey="AIzaSyDrDh7WbZV2PvkmqmJJDc1Gr6QGygvS0Mg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={zoomLevel}
        />
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
