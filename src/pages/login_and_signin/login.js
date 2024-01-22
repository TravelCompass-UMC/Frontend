import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
// 마이페이지에서 로그인이 안되어 있을시 로그인 페이지로 이동 ! 
class lgin extends Component {
  render() {
    return (
      <div>
        <div class="login-box">
        <p> 로그인 </p>
      <div class="input-container">
        <input type="id" placeholder="이메일 입력"></input>
      </div>
      <div class="input-container">
        <input type="password" placeholder="비밀번호 입력"></input>
      </div>
      <button class="login-button">로그인</button>
      <div class="footer">
        <div>
            <p style={{ display: 'inline' }}>아직 계정이 없나요? </p>
            <Link to="/signup" className="join-button">
              회원가입
            </Link>
          </div>
        </div>
      </div>
        <h3> 로그인 페이지 </h3>
        <h3> 네이버 로그인 회원가입 필요. </h3>
      </div>
    );
  }
}

export default lgin;
