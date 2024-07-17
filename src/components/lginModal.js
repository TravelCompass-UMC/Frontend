import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/LginModal.module.css";
import MainLogo from "../assets/images/Mypage/Mainlogo.svg";
import NaverLogo from "../assets/images/Mypage/NaverLogo.svg";

const Modal = ({ open, close }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tokenExtracted, setTokenExtracted] = useState(false);

  const handleNaverLogin = () => {
    // 네이버 로그인 페이지로 리다이렉션하는 URL
    window.location.href =
      "http://travel-compass.persi0815.site:8080/oauth2/authorization/naver";
  };

  if (!open) return null;

  return (
    <div
      className={open ? "openModal modal" : "modal"}
      style={{ justifyContent: "center" }}
    >
      <div className={styles.modalContent}>
        <main className={styles.modalMain}>
          <button className={styles.closeButton} onClick={close}>
            &times;
          </button>
          <p style={{ fontSize: "30px" }}>로그인하기</p>
          <p style={{ fontSize: "13px" }}>
            지금 로그인하고 최적의 여행계획서를 작성해보세요!
            <br />
            다양한 여행의 방향성을 제공하는 TRAVEL COMPASS 입니다!
          </p>
          <div className={styles.socialLogin}>
            <button className={styles.naverButton} onClick={handleNaverLogin}>
              <img src={NaverLogo} alt="네이버 로그인" />
              네이버로 로그인하기
            </button>
          </div>
          <p style={{ fontSize: "11px" }}>
            로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을
            의미하며,
            <br />
            서비스 이용을 위해 이메일과 닉네임, 프로필 이미지를 수집합니다.
          </p>
          <img
            src={MainLogo}
            alt="TRAVEL COMPASS 로고"
            className={styles.logo}
          />
        </main>
      </div>
    </div>
  );
};

export default Modal;
