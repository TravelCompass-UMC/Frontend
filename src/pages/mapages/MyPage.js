// Mypages.js

import React, { Component } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import styles from "../../styles/Mypages.css";
import myplans from "../../tempdata/myplandata";
import { useState } from "react";
import otherplans from "../../tempdata/otherplandata";
import myplaces from "../../tempdata/myplacedata";
import heart from "../../assets/images/Pages/Group 2236.png";
import heartFilled from "../../assets/images/Pages/Group 2236_filled.png";
import ProfileImage from "../../assets/images/Mypage/ProfileExample.svg";
import EndImage from "../../assets/images/Mypage/Endimg.svg";
import star from "../../assets/images/Mypage/Star.svg";
import starFilled from "../../assets/images/Mypage/StarFilled.svg";
import bookmark from "../../assets/images/Mypage/Bookmark.svg";
import bookmarkFilled from "../../assets/images/Mypage/BookmarkFilled.svg";
import { Container } from "react-bootstrap";


const Thumbnail = {
  bigBox: {
    boxShadow: "rgba(0, 0, 0, 0.1) 4px 4px 8px 0px",
    width: "375px",
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
    position: 'relative',
  },
  dateBox: {
    textAlign: 'center',
    width: "70px",
    position: 'absolute',
    top: '10px', // 상단에서부터 10px 떨어진 위치
    right: '10px', // 우측에서부터 10px 떨어진 위치
    background: 'white', // 흰색 배경
    borderRadius: '5px', // 모서리 둥글게
    padding: '5px 10px', // 내부 여백
    fontSize: '14px', // 폰트 크기
    fontWeight: 'bold', // 폰트 굵기
    zIndex: 10, // 다른 요소들 위에 표시
  },
  textBox: {
    width: "100%",
    height: "92px",
    // background: "#FFFFFF",
    borderRadius: 15,
  },
  placeText: {
    marginTop: 5,
    marginLeft: 10,
    color: "#191B24",
    fontSize: 17,
    fontFamily: "SUIT Variable",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  hashtagText: {
    marginTop: 2,
    color: "#7F85A3",
    marginLeft: 10,
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
    width: "375px",
    height: "160px",
    padding: "6px", // 내부 여백을 추가합니다.
  },
  detailText: {
    width: "calc(100% - 122px)", // 이미지 너비와 여백을 고려하여 계산합니다.
  },
  placeinfo: {
    margin: "4px 0",
  },
  placeName: { // 장소 이름 스타일
    marginLeft: 5,
    fontSize: "18px", // 예시 글자 크기
    fontWeight: "bold", // 굵은 글씨체
  },
  placeType: { // 분류(명소, 식당 등) 스타일
    marginLeft: 5,
    fontSize: "14px", // 예시 글자 크기
    marginLeft: "8px", // 장소 이름과의 간격
    fontWeight: "bold",
  },
  placeWhere: {
    marginLeft: 5,
    fontSize: "14px",
    marginTop: "-7px",
  },
  detailimage: {
    width: "125px",
    height: "125px",
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
    userName = "트컴",
    userNickname = "트컴",
    userEmail = "travelcompass@naver.com",
    userProfileImage = ProfileImage,
  }) {
    // 네이버 API에서 받아온 정보를 사용하여 프로필 섹션을 채웁니다.
    // userName: 네이버에서 받아온 사용자 이름
    // userNickname: 네이버에서 받아온 사용자 닉네임
    // userEmail: 네이버에서 받아온 사용자 이메일
    // userProfileImage: 네이버에서 받아온 사용자 프로필 사진 URL
    return (
      <div className="profile-box">
        <p className="user-name">{userName}님 반갑습니다!</p>
        <div className="profile-and-info">
          <img src={userProfileImage} alt="프로필 아이콘" className="profile-image" />
          <div className="info-box">
            <div className="info-item">
              <span className="commonspan">닉네임</span>
              <div className="value-box"><p className="valuetext">{userNickname}</p></div>
            </div>
            <div className="info-item">
              <span className="commonspan">로그인 계정</span>
              <div className="value-box"><p className="valuetext">{userEmail}</p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export function MyplanThumbnail(props, onToggleLike) {

  const [planHeart, setPlanHeart] = useState(props.plans.liked);

  const handleHeartClick = () => {
    const newLikedState = planHeart === 1 ? 0 : 1;
    setPlanHeart(newLikedState);

    if (newLikedState === 0) {
      props.onToggleLike(props.plans.id);
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between", // 컨테이너 내 요소들 사이의 공간 최대화
    alignItems: "flex-start", // 요소들을 컨테이너의 상단에 정렬
    width: "100%", // 컨테이너 너비를 100%로 설정하여 넓게 사용
  };

  // 텍스트 영역 스타일
  const textStyle = {
    display: "flex",
    flexDirection: "column", // 요소들을 세로로 나열
    justifyContent: "center", // 세로 중앙 정렬
    width: "calc(100% - 50px)", // 하트 이미지와의 공간을 고려하여 너비 조정
  };

  return (
    <div style={{ ...Thumbnail.bigBox, margin: "0 10px" }}>
      <div style={Thumbnail.imageBox}>
        <img
          className="myplanimg"
          style={{ width: "100%", height: "100%", borderRadius: "15px" }}
          src={props.plans.img}
          alt="장소 이미지"
        />
        {/* 흰색 날짜 박스 추가 */}
        <div style={Thumbnail.dateBox}>D-{props.plans.left}</div>
      </div>
      <div style={containerStyle}>
        <NavLink to="/travelplanedit" style={{ textDecoration: "none", width: "100%" }}>
        <div style={textStyle}>
          <a style={Thumbnail.placeText}>{props.plans.place}</a>
          <p style={Thumbnail.hashtagText}>
            {props.plans.hashtag && props.plans.hashtag.map((tag, index) => (
              <span key={index}>#{tag} </span>
            ))}
          </p>
        </div>
        </NavLink>
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
  const onToggleLike = (planId) => {
    // 여기에 좋아요 토글 로직을 구현합니다.
    console.log("Toggling like for planId:", planId);
  };
  const navigate = useNavigate();
  const firstThreePlans = plans.slice(0, 3);
  const isEmpty = plans.length === 0;
  const isMoreThanThree = plans.length > 3;
  userName = "박상현";

  const handleMoreClick = () => {
    if(isMoreThanThree) {
      navigate("/myplan"); // 조건을 만족할 때만 myplan 페이지로 이동
    }
    // 조건을 만족하지 않으면 아무 동작도 하지 않음
  };


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
        <button
          className={`morebutton ${!isMoreThanThree ? 'disabled' : ''}`}
          onClick={handleMoreClick}
          disabled={!isMoreThanThree} // 썸네일이 3개 이하일 때 비활성화
        >더보기</button>
        {/* </Link> */}
      </div>
      {isEmpty ? (
        <div className="row-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="emptymy-box">
          <p>아직 {userName}님이 작성하신 계획이 존재하지 않습니다.</p>
          <p>Travel Compass와 함께 여행 계획을 세워보세요!</p>
        </div>
      </div>    
      ) : (
        <div className="row-container">
        
        {firstThreePlans.map((plan, i) => (
          <MyplanThumbnail key={i} plans={plan} i={i + 1} onToggleLike={onToggleLike}></MyplanThumbnail>
        ))}
      </div>
      )}
    </div>
  );
}

export function OtherplanThumbnail(props) {

  const [heartState, setHeartState] = useState(props.others.liked);

  const handleHeartClick = () => {
    if (props.isDeletable) {
      // 삭제 로직 실행
      props.onToggleLike(props.others.id);
    } else {
      // 하트 상태만 토글
      const newHeartState = heartState === 1 ? 0 : 1;
      setHeartState(newHeartState);
      if (props.onToggleLike) { // 이 조건을 추가하여 Home.js에서 제공하는 onToggleLike 함수도 호출
        props.onToggleLike(props.others.id, newHeartState);
      }
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  };

  const textStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "calc(100% - 50px)",
  };

  return (
    <div className="thumbnail-container" style={{ ...Thumbnail.bigBox, margin: "0 10px" }}>
      <img
        className="otherplanimg"
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

export function OtherTravelPlanSection({ title, others, userName }) {
  const onToggleLike = (otherId) => {
    console.log("Toggling like for otherId:",otherId);
  }
  // 처음 3개의 요소만 사용
  const firstThreeOthers = others.slice(0, 3);
  const otherEmpty = others.length === 0;
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
        <Link to="/otherplan">
          <button className="morebutton">더보기</button>
        </Link>
      </div>
       {otherEmpty ? (
        <div className="row-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="emptyother-box">
          <p>{userName}님이 관심을 표시한 여행계획서가 존재하지 않습니다.</p>
          <p>다양한 여행가들의 여행계획서를 참고하세요!</p>
        </div>
      </div>  
       ) : (
        <div className="row-container">

          {firstThreeOthers.map((other, i) => (
            <OtherplanThumbnail key ={i} others ={other} i= {i+1} onToggleLike={onToggleLike} isDeletable={true}></OtherplanThumbnail>
          ))}
        </div>
   )}
    </div>
  );
}

function getCategoryClassName(category) {
  switch (category) {
    case 1: return 'category-sukso'; // 숙소
    case 2: return 'category-myungso'; // 명소
    case 3: return 'category-cafe-sikdang'; // 카페/식당
    default: return '';
  }
}

export function InterestedPlaceThumbnail(props) {

  const categoryClass = getCategoryClassName(props.places.category);
  const [bookmarkState, setBookmarkState] = useState(props.places.liked);

  const handleBookmarkClick = () => {
    const newbookmarkState = bookmarkState === 1 ? 1 : 0;
    setBookmarkState(newbookmarkState);
    props.onToggleLike(props.places.id);

    if(newbookmarkState === 0){
      props.onToggleLike(props.places.id);
    }

  }
  return (
    <div className="place-thumbnail-container" style={Placethumbnail.detailBox}>
      <div style={Placethumbnail.detailText}>
        <p style={Placethumbnail.place}> {/*제주도 여행 장소*/}
          <span style={Placethumbnail.placeName}>{props.places.place}</span> {/* 식당,숙소,카페 장소 이름 */}
          <span className={categoryClass} style={Placethumbnail.placeType}>{props.places.info}</span> {/* 분류 */}
        </p>
        <p className="wheretext" style={Placethumbnail.placeWhere}>{props.places.where}</p> {/* 위치 설명 */}
        <div>
          <img className="starbookmark" alt="평점"
          style={Thumbnail.heartImage}
          src={star}
          /> <span>{props.places.star}</span>
          <img alt="북마크"
          style={Thumbnail.heartImage}
          src={bookmarkState === 1 ? bookmarkFilled : bookmark}
          onClick = {handleBookmarkClick} 
          /> <span>{props.places.bookmark}</span>
        </div>
      </div>
      <img className="placeimg"
        style={Placethumbnail.detailimage}
        src={props.places.img}
        alt="장소 이미지"
      />
    </div>
  );
}

export function InterestedPlacesSection({ title, places, userName}) {

  const onToggleLike = (placeId) => {
    console.log("Toggling like for placeId", placeId);
  }

 // 처음 6개의 요소만 사용
 const firstThreePlaces = places.slice(0, 6);
 const placeEmpty = places.length === 0;
 userName ="박상현"
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
      {placeEmpty ? (
        <div className="row-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="emptyplace-box">
            <p>{userName}님이 관심을 표시한 장소가 존재하지 않습니다.</p>
            <p>Travel Compass가 추천하는 장소를 살펴보세요!</p>
          </div>
        </div>
      ) : (
        <div className="row">
          {firstThreePlaces.map((place, i) => (
            <InterestedPlaceThumbnail
              key={i}
              places={place}
              i={i + 1}
              onToggleLike ={onToggleLike}
            ></InterestedPlaceThumbnail>
          ))}
        </div>
      )}
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
