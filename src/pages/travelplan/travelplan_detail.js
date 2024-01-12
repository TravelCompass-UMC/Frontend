import React from "react";
import Sidebar from "../../components/SidebarL";
import Map from "../../components/Map";
const ExamplePage = () => {
  return (
    <div>
      {/* 다른 컨텐츠들... */}

      <Sidebar width={300}>
        <p>여기에 사이드바 내용을 작성합니다.</p>
        <p>더 많은 텍스트나 다른 React 컴포넌트도 추가할 수 있습니다.</p>
      </Sidebar>
      <Map></Map>
    </div>
  );
};

export default ExamplePage;
