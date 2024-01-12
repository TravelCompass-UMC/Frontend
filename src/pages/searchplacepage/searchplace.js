import React, { Component } from "react";
import "../../styles/Place.css"; 
import GoogleMapComponent from '../../components/Map.js';

class srchplace extends Component {
  render() {
    return (
      <div>
        <GoogleMapComponent />
        
      </div>
    );
  }
}

export default srchplace;
