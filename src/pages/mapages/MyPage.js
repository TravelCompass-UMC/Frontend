// Mypages.js

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../../styles/Mypages.css";
import myplans from "../../tempdata/myplandata";
import { useState } from "react";
import otherplans from "../../tempdata/otherplandata";
import myplaces from "../../tempdata/myplacedata";
import heart from "../../assets/images/Pages/Group 2236.png";
import heartFilled from "../../assets/images/Pages/Group 2236_filled.png";
import ProfileImage from "../../assets/images/Mypage/ProfileExample.svg";
import EndImage from "../../assets/images/Mypage/Endimg.svg";
import { Container } from "react-bootstrap";

const Thumbnail = {
  bigBox: {
    boxShadow: "rgba(0, 0, 0, 0.1) 4px 4px 8px 0px",
    width: "380px",
    height: "230px",
    background: "white",
    borderRadius: 16,
    border: "1px #EBEDF8 solid",
    marginBottom: "20px",
  },
  imageBox: {
    width: "100%",
    height: "138px",
    background: "#EBEDF8",
    borderRadius: 15,
  },
  textBox: {
    width: "100%",
    height: "92px",
    // background: "#FFFFFF",
    borderRadius: 15,
  },
  placeText: {
    color: "#191B24",
    fontSize: 17,
    fontFamily: "SUIT Variable",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  hashtagText: {
    color: "#7F85A3",
    fontSize: 13,
    fontFamily: "SUIT Variable",
    fontWeight: "400",
    // lineHeight: 25.5,
    wordWrap: "break-word",
  },
  heartImage: {
    cursor: "pointer", // 커서를 포인터로 변경하여 클릭 가능하다는 표시
  },
};

const Placethumbnail = {
  detailBox: {
    display: "flex", // Flexbox 레이아웃을 사용합니다.
    justifyContent: "space-between", // 내용물 사이에 공간을 만듭니다.
    alignItems: "flex-start", // 세로 상단 정렬합니다.
    border: "1px #EBEDF8 solid",
    borderRadius: "8px",
    marginBottom: "20px",
    background: "var(--grayscale-White, #FFF)",
    boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.10)",
    width: "333px",
    height: "132px",
    padding: "6px", // 내부 여백을 추가합니다.
  },
  detailText: {
    width: "calc(100% - 122px)", // 이미지 너비와 여백을 고려하여 계산합니다.
  },
  placeinfo: {
    margin: "4px 0",
  },
  placeName: { // 장소 이름 스타일
    fontSize: "16px", // 예시 글자 크기
    fontWeight: "bold", // 굵은 글씨체
  },
  placeType: { // 분류(명소, 식당 등) 스타일
    fontSize: "14px", // 예시 글자 크기
    marginLeft: "8px", // 장소 이름과의 간격
  },
  placeWhere: {
    fontSize: "13px",
  },
  detailimage: {
    width: "112px",
    height: "112px",
    borderRadius: "10px",
    background: "var(--grayscale-Gray2, #EBEDF8)",
  },
};

function Mypage() {
  const [plans] = useState(myplans);
  const [others] = useState(otherplans);
  const [places] = useState(myplaces);

  return (
    <div className="mypage-container">
      <ProfileSection />
      <MyTravelPlanSection title="나의 여행계획" plans={plans} />
      <OtherTravelPlanSection title="관심있는 여행계획" others={others} />
      <InterestedPlacesSection title="관심있는 장소" places={places}/>
      {/* <p>{plans[0].place}</p> */}
      <LogoutSection />
      <EndSection/>
    </div>
  );
}

export default Mypage;

  export function ProfileSection({
    userName = "박상현",
    userNickname = "쉽지않은만남",
    userEmail = "shawn2018@naver.com",
    userProfileImage = ProfileImage,
  }) {
    // 네이버 API에서 받아온 정보를 사용하여 프로필 섹션을 채웁니다.
    // userName: 네이버에서 받아온 사용자 이름
    // userNickname: 네이버에서 받아온 사용자 닉네임
    // userEmail: 네이버에서 받아온 사용자 이메일
    // userProfileImage: 네이버에서 받아온 사용자 프로필 사진 URL
    return (
      <div className="profile-box">
        <h2 className="user-name">{userName}님 반갑습니다!</h2>
        <div className="profile-and-info">
          <img src={userProfileImage} alt="프로필 아이콘" className="profile-image" />
          <div className="info-box">
            <div className="info-item">
              <span>닉네임:</span>
              <div className="value-box">{userNickname}</div>
            </div>
            <div className="info-item">
              <span>로그인 계정:</span>
              <div className="value-box">{userEmail}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export function MyplanThumbnail(props) {

  const [planHeart, setplanHeart] = useState(0);
  const handleHeartClick = () => {
    setplanHeart(planHeart === 0 ? 1 : 0); // 클릭할 때마다 상태 변경
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between", // 컨테이너 내 요소들 사이의 공간 최대화
    alignItems: "flex-start", // 요소들을 컨테이너의 상단에 정렬
    width: "100%", // 컨테이너 너비를 100%로 설정하여 넓게 사용
    marginBottom: "10px", // 하단 마진으로 간격 조정
  };

  // 텍스트 영역 스타일
  const textStyle = {
    display: "flex",
    flexDirection: "column", // 요소들을 세로로 나열
    justifyContent: "center", // 세로 중앙 정렬
    width: "calc(100% - 40px)", // 하트 이미지와의 공간을 고려하여 너비 조정
  };

 return (
    <div
      className="thumbnail-container"
      style={{ ...Thumbnail.bigBox, margin: "0 10px" }}
    >
      <img
        style={{ ...Thumbnail.imageBox, width: "100%" }}
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        alt="장소 이미지"
      />
      <div style={containerStyle}>
        <div style={textStyle}>
          <a style={Thumbnail.placeText}>{props.plans.place}</a>
          <p style={Thumbnail.hashtagText}>
            {props.plans.hashtag.map((tag, index) => (
              <span key={index}>#{tag} </span>
            ))}
          </p>
        </div>
        <img
          style={Thumbnail.heartImage}
          src={planHeart === 1 ? heartFilled : heart}
          alt="Heart"
          onClick={handleHeartClick}
        />
      </div>
    </div>
  );
}

export function MyTravelPlanSection({ title, plans, userName}) {
  // 처음 3개의 요소만 사용
  const firstThreePlans = plans.slice(0, 3);
  const isEmpty = plans.length === 0;
  userName = "박상현";

  return (
    <div className="container">
      <div
        className="nav-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{title}</p>
        <Link to="/myplan">
          <button className="morebutton">더보기</button>
        </Link>
      </div>
      {isEmpty ? (
        <div className="row-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="empty-box">
          <p>아직 {userName}님이 작성하신 계획이 존재하지 않습니다.</p>
          <p>Travel Compass와 함께 여행 계획을 세워보세요!</p>
        </div>
      </div>    
      ) : (
        <div className="row-container">
        
        {firstThreePlans.map((plan, i) => (
          <MyplanThumbnail key={i} plans={plan} i={i + 1}></MyplanThumbnail>
        ))}
      </div>
      )}
    </div>
  );
}

export function OtherplanThumbnail(props) {

  const [heartState, setHeartState] = useState(0);
  const handleHeartClick = () => {
    setHeartState(heartState === 0 ? 1 : 0); // 클릭할 때마다 상태 변경
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between", // 컨테이너 내 요소들 사이의 공간 최대화
    alignItems: "flex-start", // 요소들을 컨테이너의 상단에 정렬
    width: "100%", // 컨테이너 너비를 100%로 설정하여 넓게 사용
  };

  // 텍스트 영역 스타일, 여기에는 장소 이름과 해시태그가 포함됩니다.
  const textStyle = {
    display: "flex",
    flexDirection: "column", // 요소들을 세로로 나열
    justifyContent: "center", // 세로 중앙 정렬
    width: "calc(100% - 50px)", // 하트 이미지와의 간격을 고려하여 너비 조정
  };

  return (
    <div
      className="thumbnail-container"
      style={{ ...Thumbnail.bigBox, margin: "0 10px" }}
    >
      <img
        style={{ ...Thumbnail.imageBox, width: "100%" }}
        src={props.others.img}
        alt="장소 이미지"
      />
      <div style={containerStyle}>
      <NavLink to="/diarycontent" style={{ textDecoration: "none", width: "100%" }}>
        <div style={textStyle}>
          <a style={Thumbnail.placeText}>{props.others.place}</a>
          <p style={Thumbnail.hashtagText}>
            {props.others.hashtag.map((tag, index) => (
              <span key={index}>#{tag} </span>
            ))}
          </p>
        </div>
        </NavLink>
        <img
          style={Thumbnail.heartImage}
          src={heartState === 1 ? heartFilled : heart}
          alt="Heart"
          onClick={handleHeartClick}
        />
      </div>
    </div>
  );
}

export function OtherTravelPlanSection({ title, others }) {
  // 처음 3개의 요소만 사용
  const firstThreeOthers = others.slice(0, 3);

  return (
    <div className="container">
      <div
        className="nav-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{title}</p>
        <Link to="/otherplan">
          <button className="morebutton">더보기</button>
        </Link>
      </div>
      <div className="row-container">
        {firstThreeOthers.map((other, i) => (
          <OtherplanThumbnail
            key={i}
            others={other}
            i={i + 1}
          ></OtherplanThumbnail>
        ))}
      </div>
    </div>
  );
}

export function InterestedPlaceThumbnail(props) {
  return (
    <div className="place-thumbnail-container" style={Placethumbnail.detailBox}>
      <div style={Placethumbnail.detailText}>
        <p style={Placethumbnail.place}>
          <span style={Placethumbnail.placeName}>{props.places.place}</span> {/* 장소 이름 */}
          <span style={Placethumbnail.placeType}>{props.places.info}</span> {/* 분류 */}
        </p>
        <p style={Placethumbnail.placeWhere}>{props.places.where}</p> {/* 위치 설명 */}
        <div>
          <img alt="평점" /> <span>3.57</span>
          <img alt="북마크" /> <span>238</span>
        </div>
      </div>
      <img
        style={Placethumbnail.detailimage}
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        alt="장소 이미지"
      />
    </div>
  );
}

export function InterestedPlacesSection({ title, places }) {
 // 처음 6개의 요소만 사용
 const firstThreeOthers = places.slice(0, 6);
  
  return (
    <div className="container">
      <div
        className="nav-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{title}</p>
        <Link to="/myplace">
          <button className="morebutton">더보기</button>
        </Link>
      </div>
      <div className="row">
      {firstThreeOthers.map((place, i) => (
          <InterestedPlaceThumbnail
            key={i}
            places={place}
            i={i + 1}
          ></InterestedPlaceThumbnail>
        ))}
      </div>
    </div>
  );
}

export function LogoutSection() {
  const handleLogout = () => {
    // 로그아웃 로직을 여기에 구현하세요
    console.log("로그아웃 처리");
  };

  const handleWithdrawal = () => {
    // 회원탈퇴 로직을 여기에 구현하세요
    console.log("회원탈퇴 처리");
  };

  return (
    <div className="container">
      <div className="loginbox">
        <button className="logbutton" onClick={handleLogout}>로그아웃</button>
        <button className="logbutton" onClick={handleWithdrawal}>회원탈퇴</button>
      </div>

    </div>
  );
}

export function EndSection(){
  return (
    <div className="end-box">
      <img src={EndImage} alt="EndImage" className="endimage"/>
    </div>
  )
}
