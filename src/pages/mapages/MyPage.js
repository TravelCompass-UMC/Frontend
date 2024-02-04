// Mypages.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Mypages.css";
import myplans from "../../tempdata/myplandata";
import { useState } from "react";
import otherplans from "../../tempdata/otherplandata";
import myplaces from "../../tempdata/myplacedata";

const Thumbnail = {
  bigBox: {
    width: "300px",
    height: "210px",
    background: "white",
    borderRadius: 16,
    border: "1px #EBEDF8 solid",
    marginBottom: "20px",
  },
  imageBox: {
    width: "300px",
    height: "120px",
    background: "#EBEDF8",
    borderRadius: 15,
  },
  textBox: {
    width: "300px",
    height: "80px",
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
    </div>
  );
}

export default Mypage;

export function ProfileSection({
  userName,
  userNickname,
  userEmail,
  userProfileImage,
}) {
  // 네이버 API에서 받아온 정보를 사용하여 프로필 섹션을 채웁니다.
  // userName: 네이버에서 받아온 사용자 이름
  // userNickname: 네이버에서 받아온 사용자 닉네임
  // userEmail: 네이버에서 받아온 사용자 이메일
  // userProfileImage: 네이버에서 받아온 사용자 프로필 사진 URL

  return (
    <div className="profile-box">
      <div>
        <h2 className="user-name">{userName} 반갑습니다 !</h2>
        <img src={userProfileImage} alt="프로필 아이콘" />
        <p className="user-nickname">{userNickname}</p>
        <p className="user-email">{userEmail}</p>
      </div>
    </div>
  );
}

export function MyplanThumbnail(props) {
  return (
    <div
      className="thumbnail-container"
      style={{ ...Thumbnail.bigBox, margin: "0 10px" }}
    >
      <img
        style={{ ...Thumbnail.imageBox, width: "100%" }}
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <a style={Thumbnail.placeText}>{props.plans.place}</a>
      <p style={Thumbnail.hashtagText}>
        {props.plans.hashtag.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </p>
    </div>
  );
}

export function MyTravelPlanSection({ title, plans }) {
  // 처음 3개의 요소만 사용
  const firstThreePlans = plans.slice(0, 3);

  return (
    <div className="w-full mb-8">
      <div
        className="nav-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{title}</h3>
        <Link to="/myplan" className="morebutton">
          <button>더보기</button>
        </Link>
      </div>
      <div className="row">
        {firstThreePlans.map((plan, i) => (
          <MyplanThumbnail key={i} plans={plan} i={i + 1}></MyplanThumbnail>
        ))}
      </div>
    </div>
  );
}

export function OtherplanThumbnail(props) {
  return (
    <div className="col-md-4" style={{ ...Thumbnail.bigBox, margin: "0 10px" }}>
      <img
        style={{ ...Thumbnail.imageBox, width: "100%" }}
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <a style={Thumbnail.placeText}>{props.others.place}</a>
      <p style={Thumbnail.hashtagText}>
        {props.others.hashtag.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </p>
    </div>
  );
}

export function OtherTravelPlanSection({ title, others }) {
  // 처음 3개의 요소만 사용
  const firstThreeOthers = others.slice(0, 3);

  return (
    <div className="w-full mb-8">
      <div
        className="nav-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{title}</h3>
        <Link to="/otherplan" className="morebutton">
          <button>더보기</button>
        </Link>
      </div>
      <div className="row">
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

export function InteresetedPlaceThumbnail(props) {
  return (
    <div className="col-md-4">
      <img 
      style={{ ...Thumbnail.imageBox, width: "100%" }}
      src={""} alt="장소이미지" 
      width="80%"
      />
      <h4>{props.places.place}</h4>
      <p>{props.places.info}</p>
    </div>
  );
}

export function InterestedPlacesSection({ title, places }) {
 // 처음 6개의 요소만 사용
 const firstThreeOthers = places.slice(0, 6);
  
  return (
    <div className="w-full">
      <div
        className="nav-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{title}</h3>
        <Link to="/myplace" className="morebutton">
          <button>더보기</button>
        </Link>
      </div>
      <div className="row">
      {firstThreeOthers.map((place, i) => (
          <InteresetedPlaceThumbnail
            key={i}
            places={place}
            i={i + 1}
          ></InteresetedPlaceThumbnail>
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
    <div className="logout-section">
      <button onClick={handleLogout}>로그아웃</button>
      <button onClick={handleWithdrawal}>회원탈퇴</button>
    </div>
  );
}
