import React from "react";
import DiaryContent from "../../components/planedit/DiaryContent_edit.jsx";
import '../../styles/planedit.css';
import { EndSection } from "../mapages/MyPage.js";


export default function diarycontent() {
  return (
    <>
    <div style={{ width: "100%", height: "100%", background: "#F3F5FF" }}>
      <DiaryContent/>
      {/* <EndSection/> */}
    </div>
    {/* <EndSection> */}
    </>
  );
}
