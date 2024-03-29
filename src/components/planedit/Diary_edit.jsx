import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import heart from "../../assets/images/Pages/Group 2236.png"; // 이미지를 import
import heartFilled from "../../assets/images/Pages/Group 2236_filled.png"; // 채워진 하트 이미지를 import

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
  heartImage: {
    marginLeft: "190px",
    cursor: "pointer", // 커서를 포인터로 변경하여 클릭 가능하다는 표시
  },
};

function Diary(props) {
  const [heartState, setHeartState] = useState(0); // 0: 빈 하트, 1: 채워진 하트

  const handleHeartClick = () => {
    setHeartState(heartState === 0 ? 1 : 0); // 클릭할 때마다 상태 변경
  };

  //React 함수 컴포넌트
  return (
    //jsx 이용

    <div style={styles.bigBox}>
      <NavLink to="/diarycontent" style={{ textDecoration: "none" }}>
        <div style={styles.imageBox}></div>

        {/* <span style={styles.nameText}>{props.name}</span> */}
        {/* <div style={styles.textBox}> */}
        <a style={styles.placeText}>{props.place}</a>
      </NavLink >
      {/* Heart 이미지 클릭 이벤트 처리 */}
      <img
        style={styles.heartImage}
        src={heartState === 1 ? heartFilled : heart}
        alt="Heart"
        onClick={handleHeartClick}
      />

      <br></br>
      <div style={styles.textBox}>
        {props.hashtag.map((tag, index) => (
          <React.Fragment key={index}>
            {index > 0 && " "} {/* index가 0보다 큰 경우에만 공백 추가 */}
            <a style={styles.hashtagText}>#{tag}</a>
          </React.Fragment>
        ))}
      </div>

    </div>

  );
}

export default Diary;
