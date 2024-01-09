import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";

class mypage extends Component {
  render() {
    return (
      <div>
          <p style={{textAlign:"center"}}>user님 반갑습니다 !</p>
          <div className="user">
          <p>나의 일정</p>
          <hr style={{color:"black"}}></hr>
          <p>관심 있는 여행계획서</p>
          <hr style={{color:"black"}}></hr>
          <p>나의 장소</p>
          </div>
      </div>
    );
  }
}

export default mypage;
