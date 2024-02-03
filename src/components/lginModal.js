import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LginModal.module.css";
import MainLogo from "../assets/images/Mypage/Mainlogo.svg";
import NaverLogo from "../assets/images/Mypage/NaverLogo.svg";

const Modal = ({ open, close }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 로드 시 URL에서 인증 코드(code)와 상태(state) 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    // 인증 코드와 상태가 있을 경우, 자체 서버를 통해 토큰 요청
    if (code && state) {
      fetch("/api/auth/naver/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, state }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(({ accessToken, refreshToken }) => {
          // 여기서 accessToken과 refreshToken을 클라이언트에서 사용할 수 있도록 저장
          console.log("Access Token:", accessToken);
          console.log("Refresh Token:", refreshToken);
          // 예: sessionStorage 또는 localStorage에 저장
          sessionStorage.setItem("accessToken", accessToken);
          sessionStorage.setItem("refreshToken", refreshToken);

          navigate("/"); // 로그인 성공 후 리디렉션
        })
        .catch((error) => console.error("Error fetching tokens:", error));
    }
  }, [navigate]);

  const handleNaverLogin = () => {
    // 사용자를 자체 서버의 로그인 경로로 리디렉션
    window.location.href = "http://localhost:8080/oauth2/authorization/naver";
  };

  return (
    <div
      className={open ? "openModal modal" : "modal"}
      style={{ justifyContent: "center" }}
    >
      {open ? (
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
      ) : null}
    </div>
  );
};

export default Modal;
