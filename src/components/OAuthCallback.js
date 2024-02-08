// OAuthCallback.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access-token");
    const refreshToken = urlParams.get("refresh-token");

    const fetchUserProfile = async () => {
      if (accessToken) {
        try {
          // 예시로 사용자 정보를 요청하는 URL입니다. 실제 URL은 서버 구현에 따라 달라집니다.
          const response = await fetch("YOUR_USER_PROFILE_ENDPOINT", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const data = await response.json();

          // 사용자 정보 응답에서 닉네임 추출
          const nickname = data.nickname; // 응답 구조에 따라 경로가 달라질 수 있습니다.

          // 닉네임을 sessionStorage에 저장
          sessionStorage.setItem("nickname", nickname);

          navigate("/");
        } catch (error) {
          console.error("Failed to fetch user profile", error);
          navigate("/"); // 오류 발생 시 로그인 페이지로 리디렉션
        }
      } else {
        navigate("/"); // 토큰이 없는 경우 로그인 페이지로 리디렉션
      }
    };

    if (accessToken && refreshToken) {
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);
      fetchUserProfile(); // 사용자 정보 요청
    } else {
      navigate("/"); // 토큰을 얻지 못했다면 로그인 페이지로 리디렉션
    }
  }, [navigate]);

  return <div>OAuth 처리 중...</div>;
};

export default OAuthCallback;
