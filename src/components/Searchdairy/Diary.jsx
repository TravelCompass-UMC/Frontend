import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from "../../styles/searchdiary.css";

const styles = {
  bigBox: {
    width: "300px",
    height: "210px",
    background: "white",
    borderRadius: 16,
    border: "1px #EBEDF8 solid",
    marginBottom: "20px",
  },
  imageBox: {
    width: "300px",
    height: "120px",
    background: "#EBEDF8",
    borderRadius: 15,
  },
  textBox: {
    width: "300px",
    height: "80px",
    // background: "#FFFFFF",
    borderRadius: 15,
  },
  placeText: {
    color: "#191B24",
    fontSize: 17,
    fontFamily: "SUIT Variable",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  hashtagText: {
    color: "#7F85A3",
    fontSize: 13,
    fontFamily: "SUIT Variable",
    fontWeight: "400",
    // lineHeight: 25.5,
    wordWrap: "break-word",
  },
};

function Diary(props) {
  //React 함수 컴포넌트
  return (
    //jsx 이용
    <NavLink to="/diarycontent" style={{ textDecoration: "none" }}>
      <div style={styles.bigBox}>
        <div style={styles.imageBox}></div>

        {/* <span style={styles.nameText}>{props.name}</span> */}
        {/* <div style={styles.textBox}> */}
        <a style={styles.placeText}>{props.place}</a>
        <br></br>
        <div style={styles.textBox}>
          {props.hashtag.map((tag, index) => (
            <React.Fragment key={index}>
              {index > 0 && " "} {/* index가 0보다 큰 경우에만 공백 추가 */}
              <a style={styles.hashtagText}>#{tag}</a>
            </React.Fragment>
          ))}
        </div>

        {/* </div> */}
      </div>
    </NavLink>
  );
}

export default Diary;
