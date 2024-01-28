import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "../styles/MainHeader.module.css";
import Modal from "./lginModal";
import Mainlogo from "../assets/images/logo_no_letter.svg";

const MainHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [username, setUsername] = useState(""); // 사용자 이름

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 로그인 및 로그아웃 핸들러 (임시)
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername("네이버아이디"); // 임시 사용자 이름 설정
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

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
                  <span>{username}님 환영합니다! </span>
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
