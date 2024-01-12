import React from "react";
import { useParams } from "react-router-dom";
import SidebarL from "../../components/SidebarL";


const SearchResults = () => {
  const { query } = useParams();

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      <SidebarL width={320}>
          <p>대한민국</p>
          <p>지금 대한민국의 가장 인기 많은 지역</p>
          <ul>
            <li>TOP1 서울</li>
            <li>TOP2 제주도</li>
            <li>TOP3 부산</li>
            <li>TOP4 여수</li>
          </ul>
          <div className="popularplace">
            <p>선택하신 도시의 가장 인기 많은 장소</p>
          </div>
          </SidebarL>     
    </div>
  );
};

export default SearchResults;
