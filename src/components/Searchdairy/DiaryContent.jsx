import React, { useState } from "react";
import styles from "../../styles/diaryContent.module.css";
import Left from "./LeftBar";

function diarycontent() {
  return (
    //diarycontent.jsx 내용
    <div
      style={{
        marginLeft: "50px",
      }}
    >
      <Left />
    </div>
  );
}

export default diarycontent;
