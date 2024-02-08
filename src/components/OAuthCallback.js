// OAuthCallback.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access-token");
    const refreshToken = urlParams.get("refresh-token");

    if (accessToken && refreshToken) {
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);
      navigate("/mypage"); // 성공적으로 토큰을 저장한 후, 원하는 페이지로 리디렉션
    } else {
      navigate("/"); // 토큰을 얻지 못했다면, 로그인 페이지로 리디렉션
    }
  }, [navigate]);

  return <div>OAuth 처리 중...</div>;
};

export default OAuthCallback;
