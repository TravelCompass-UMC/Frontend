import React, { useEffect } from "react";
import styles from "../styles/LginModal.module.css";
import MainLogo from "../assets/images/Mypage/Mainlogo.svg";
import NaverLogo from "../assets/images/Mypage/NaverLogo.svg";

const Modal = ({ open, close }) => {
  // 네이버 로그인 버튼 클릭 핸들러
  const handleNaverLogin = () => {
    window.location.href =
      "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=3tVKSO15tNGbkeZJf8eE&scope=nickname%20email%20profile_image&state=2sByuLo9Si0KbSG2_8jeHXLXSspYMV7N4MmdmWEvG2w%3D&redirect_uri=http://dev.enble.site/login/oauth2/code/naver";
  };

  // 콜백 URL에서 code와 state 추출
  const getCodeAndStateFromCallback = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (code && state) {
      requestAccessToken(code, state);
    }
  };

  // 액세스 토큰 요청
  const requestAccessToken = (code, state) => {
    const tokenUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=3tVKSO15tNGbkeZJf8eE&client_secret=zHvANLwWHH&code=${code}&state=${state}`;

    // 실제 요청 로직은 서버 사이드에서 수행되어야 함
    // 여기서는 예시로만 작성
    fetch(tokenUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Access Token:", data);
        // 토큰 처리 로직 추가
      })
      .catch((error) => console.error("Error fetching access token:", error));
  };

  // 컴포넌트가 마운트될 때 콜백 URL 체크
  useEffect(() => {
    getCodeAndStateFromCallback();
  }, []);

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
