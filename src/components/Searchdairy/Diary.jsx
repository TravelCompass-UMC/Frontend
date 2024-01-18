import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/searchdiary.css";

function Diary(props) {
  //React 함수 컴포넌트
  return (
    //jsx 이용
    <div>
      {/* <span style={styles.nameText}>{props.name}</span> */}
      <span>{props.place}</span>
      <span>{props.hashtag}</span>
    </div>
  );
}

export default Diary;
