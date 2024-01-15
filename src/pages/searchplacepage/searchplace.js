import React, { Component } from "react";
import "../../styles/Place.css"; 
import GoogleMapComponent from '../../components/Map.js';
import SearchComponent from '../../components/Search.js';

class srchplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLocation: null,
    };
  }

  handleSearch = (location) => {
    // 검색어를 받아와서 지도의 위치를 변경하는 로직을 구현
    this.setState({ mapLocation: location });
  };

  render() {
    return (
      <div>
        <SearchComponent onSearch={this.handleSearch} />
        <GoogleMapComponent location={this.state.mapLocation} />
      </div>
    );
  }
}

export default srchplace;
