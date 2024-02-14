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
          const response = await fetch("http://dev.enble.site/me/info", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const data = await response.json();

          if (data.isSuccess) {
            // 사용자 정보 응답에서 닉네임 추출
            const nickname = data.result.nickname;
            // 닉네임을 sessionStorage에 저장
            sessionStorage.setItem("nickname", nickname);
            navigate("/");
          } else {
            // isSuccess가 false인 경우, 오류 메시지를 출력하고 메인 페이지로 리디렉션합니다.
            console.error(data.message);
            navigate("/");
          }
        } catch (error) {
          console.error("Failed to fetch user profile", error);
          navigate("/"); // 오류 발생 시 메인 페이지로 리디렉션
        }
      } else {
        navigate("/"); // 토큰이 없는 경우 메인 페이지로 리디렉션
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
