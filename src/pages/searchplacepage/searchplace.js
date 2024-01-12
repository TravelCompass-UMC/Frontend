import React, { Component } from "react";
import "../../styles/Place.css"; 
import GoogleMapComponent from '../../components/Map.js';
import SearchComponent from '../../components/Search.js';

class srchplace extends Component {
  render() {
    return (
      <div>
        <SearchComponent />

        <GoogleMapComponent />
        
      </div>
    );
  }
}

export default srchplace;
