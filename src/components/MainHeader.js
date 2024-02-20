import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "../styles/MainHeader.module.css";
import Modal from "./lginModal";
import Mainlogo from "../assets/images/Mypage/FinalLogo.svg";

const MainHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [username, setUsername] = useState(""); // 사용자 이름
  const [nickname, setNickname] = useState(""); // 닉네임 상태를 관리하기 위한 상태 추가
  const [accessToken, setAccessToken] = useState(""); // accessToken 상태를 관리하기 위한 상태 추가

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 로그인 및 로그아웃 핸들러 (임시)
  const handleLogin = () => {
    setIsLoggedIn(true);
    setAccessToken("임시_액세스_토큰"); // 임시 accessToken 설정
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccessToken("");
  };
  useEffect(() => {
    // sessionStorage에서 accessToken 가져오기
    const storedAccessToken = sessionStorage.getItem("accessToken");
    if (storedAccessToken) {
      setIsLoggedIn(true);
      setAccessToken(storedAccessToken); // 가져온 accessToken을 상태에 저장
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logobox}>
          <Link to="/" className={classes.logo}>
            <img src={Mainlogo} alt="로고" />
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/searchplace">
                장소 검색
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/searchdiary">
                다른 사람의 여행일지
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/travelplandes">
                여행계획 설계
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/mypage">
                마이페이지
              </NavLink>
            </li>
            <li>
              {isLoggedIn ? (
                <div>
                  <span>환영합니다! </span>
                  <button
                    className={classes.loginout_btn}
                    onClick={handleLogout}
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <button className={classes.loginout_btn} onClick={openModal}>
                  로그인
                </button>
              )}
            </li>
            <div className="loginMessage">
              {isLoggedIn ? (
                <div>환영합니다!</div>
              ) : (
                <div>로그인이 필요합니다.</div>
              )}
            </div>
          </ul>
        </nav>
        <Modal open={isModalOpen} close={closeModal}>
          {/* 모달 내용 */}
        </Modal>
      </header>

      <div className={classes.blankbox}></div>
    </>
  );
};

export default MainHeader;
