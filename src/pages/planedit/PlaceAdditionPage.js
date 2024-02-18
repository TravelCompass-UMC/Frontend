import React, { useState } from 'react';
import Map from '../../components/Map'; // Assume this is a component that renders a map
import SidebarL from '../../components/SidebarL'; // A component for the sidebar
import searchBtn from "../../assets/images/Place/searchBtn.svg";
import searchBox from "../../assets/images/Place/검색창.svg";
import PlaceDetail from '../../components/searchPlace/PlaceDetail'; // A component for place details
import SearchRecommendations from '../../components/planedit/SearchRecommendations';
import styles from '../../styles/planedit/additionPage.module.css';

const PlaceAddition = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [places, setPlaces] = useState([]); // State to store search results and recommendations
  const [selectedPlace, setSelectedPlace] = useState(null); // State to store selected place
  const [mapLocation, setMapLocation] = useState({ lat: 36.332586, lng: 128.105835 }); // Map center state
  const [zoomLevel, setZoomLevel] = useState(7.4); // Map zoom level state

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the Google Places API
      const apiKey = 'AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU';
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(searchQuery)}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${apiKey}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const results = await response.json();
      // Assume we're just interested in the first result
      const place = results.candidates[0];
      const newPlace = {
        name: place.name,
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
        // Add any other details you want from the response
      };
      
      // Update your state with the new place
      setPlaces([...places, newPlace]);
      setSelectedPlace(newPlace);
      setMapLocation({ lat: newPlace.lat, lng: newPlace.lng });
      setZoomLevel(16); // Zoom in to the selected place
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.placeAdditionPage}>
      <div style={{marginLeft: "auto", paddingLeft: "25vw"}}>
      <Map 
        location={mapLocation}
        zoomLevel={zoomLevel}
        places={places} // Pass the places to the Map component
        containerStyle={{ width: "75vw", height: "91vh" }}
      />
      </div>
      <SidebarL width={500}>
        <div className={styles.searchBar} style={{ backgroundImage: `url(${searchBox})` }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="검색할 장소를 입력하세요"
            className={styles.searchInput}
            style={{width: "30%", height:"100%", border: "none", }}
          />
          <button onClick={handleSearchSubmit} className={styles.searchButton}>
            <img src={searchBtn} alt="search-button" />
          </button>
        </div>
        <SearchRecommendations 
          places={places} 
          onRecommendationClick={(place) => {
            setSelectedPlace(place);
            setMapLocation({ lat: place.lat, lng: place.lng });
            setZoomLevel(15); // Zoom in to the selected place
          }}
        />
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </SidebarL>
    </div>
  );
};

export default PlaceAddition;