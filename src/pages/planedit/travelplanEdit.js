import React from "react";
import DiaryContent from "../../components/Searchdairy/DiaryContent";
import '../../styles/planedit.css';


export default function diarycontent() {
  return (
    <div style={{ width: "100%", height: "94vh", background: "#F3F5FF" }}>
      <DiaryContent />
      <button className="edit-btn1">편집 완료하기</button>
      <button className="edit-btn2">저장하기</button>
    </div>
  );
}
