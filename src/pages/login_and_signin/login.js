import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Mypages.css";
// 마이페이지에서 로그인이 안되어 있을시 로그인 페이지로 이동 !
class Login extends Component {
  handleNaverLogin = () => {
    // 네이버 로그인 로직을 구현해야 합니다.
    // 네이버 API를 사용하여 로그인을 처리하세요.
    // 인증 토큰을 얻고, 사용자 정보를 가져오는 과정이 필요합니다.
    // 네이버 로그인 API와 관련된 자세한 내용은 네이버 개발자 문서를 참조하세요.
    // https://developers.naver.com/docs/login/web/
  };

  render() {
    return (
      <div>
        <div className="login-box">
          <p>로그인</p>
          <div className="input-container">
            <input type="id" placeholder="이메일 입력" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="비밀번호 입력" />
          </div>
          <button className="login-button">로그인</button>
          {/* 네이버 소셜 로그인 버튼입니다dsfkj */}
          <button
            className="naver-login-button"
            onClick={this.handleNaverLogin}
          >
            네이버 소셜 로그인
          </button>
          <div className="footer">
            <div>
              <p style={{ display: "inline" }}>아직 계정이 없나요? </p>
              <Link to="/signup" className="join-button">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
