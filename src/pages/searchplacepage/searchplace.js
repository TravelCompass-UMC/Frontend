import React, { Component } from "react";
import "../../styles//Place.css";

class srchplace extends Component {
  render() {
    return (
      <div>
        <h3> 장소찾기 페이지 </h3>
        <form>
          <input
            type="text"
            maxLength="20"
            className="search_input"
            name="search"
            placeholder="궁금한 지역을 검색해보세요. "
          />
          <input type="submit" value="검색" className="serach_submit" />
        </form>
      </div>
    );
  }
}

export default srchplace;
