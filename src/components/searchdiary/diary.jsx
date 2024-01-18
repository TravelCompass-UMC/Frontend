import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/searchdiary.css";

function Diary(props) {
  //React 함수 컴포넌트
  return (
    //jsx 이용
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: 380,
          height: 310,
          left: 0,
          top: 0,
          position: "absolute",
          background: "white",
          borderRadius: 16,
          border: "1px #EBEDF8 solid",
        }}
      />
      <div
        style={{
          left: 18,
          top: 207,
          position: "absolute",
          color: "#191B24",
          fontSize: 20,
          fontFamily: "SUIT Variable",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        제주도
      </div>
      <div
        style={{
          left: 18,
          top: 252.5,
          position: "absolute",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 8,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "#7F85A3",
            fontSize: 15,
            fontFamily: "SUIT Variable",
            fontWeight: "400",
            lineHeight: 25.5,
            wordWrap: "break-word",
          }}
        >
          #힐링
        </div>
        <div
          style={{
            color: "#7F85A3",
            fontSize: 15,
            fontFamily: "SUIT Variable",
            fontWeight: "400",
            lineHeight: 25.5,
            wordWrap: "break-word",
          }}
        >
          #가족여행
        </div>
        <div
          style={{
            color: "#7F85A3",
            fontSize: 15,
            fontFamily: "SUIT Variable",
            fontWeight: "400",
            lineHeight: 25.5,
            wordWrap: "break-word",
          }}
        >
          #맛집탐방
        </div>
      </div>
      <div
        style={{
          width: 378,
          height: 186,
          left: 1,
          top: 1,
          position: "absolute",
          background: "#EBEDF8",
          borderRadius: 15,
        }}
      />
      <div
        style={{
          width: 40,
          height: 40,
          left: 323,
          top: 199,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            width: 28,
            height: 28,
            left: 6,
            top: 6,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#D9D9D9",
            }}
          />
          <div
            style={{
              width: 23.33,
              height: 21.41,
              left: 2.33,
              top: 3.09,
              position: "absolute",
              background: "#EBEDF8",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Book;
