import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../styles/Place.css";

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

const GoogleMapComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState(Center);
  const [zoomLevel, setZoomLevel] = useState(7);

  const handleSearch = (event) => {
    event.preventDefault();
    // TODO: Implement geocoding or use an external API to get location coordinates based on the search query.
    // For simplicity, here we are just updating the map center with a predefined location.
    setMapCenter(Center);
    setZoomLevel(7); // You can adjust the zoom level as needed.
  };

  return (
    <div style={{ position: "relative" }}>
      <LoadScript googleMapsApiKey="AIzaSyDrDh7WbZV2PvkmqmJJDc1Gr6QGygvS0Mg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={zoomLevel}
        />
      </LoadScript>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            maxLength="20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="궁금한 지역을 검색해보세요."
          />
          <button type="submit">검색</button>
        </form>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
